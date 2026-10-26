// ============================================================================
// Arthiva Money — Production Supabase Client, Auth, Realtime & Offline Engine
// ============================================================================

const SUPABASE_CONFIG = {
  url: window.__ENV_SUPABASE_URL || localStorage.getItem("ARTHIVA_SUPABASE_URL") || "",
  anonKey: window.__ENV_SUPABASE_ANON_KEY || localStorage.getItem("ARTHIVA_SUPABASE_KEY") || ""
};

let _supabase = null;
let _realtimeChannel = null;
let _isOnline = navigator.onLine;

// Initialize Supabase Client
function getClient() {
  if (!_supabase && window.supabase && typeof window.supabase.createClient === "function") {
    if (SUPABASE_CONFIG.url && SUPABASE_CONFIG.anonKey) {
      _supabase = window.supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true,
          storage: window.localStorage
        }
      });
      setupRealtimeListeners();
    }
  }
  return _supabase;
}

// ----------------------------------------------------------------------------
// Offline Sync Queue & Network Monitoring
// ----------------------------------------------------------------------------
const OFFLINE_QUEUE_KEY = "arthiva_offline_queue_v1";

function getOfflineQueue() {
  try {
    return JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || "[]");
  } catch (e) {
    return [];
  }
}

function addToOfflineQueue(action) {
  const q = getOfflineQueue();
  q.push({ ...action, queuedAt: Date.now() });
  localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(q));
  updateOfflineUIIndicator(true, q.length);
}

async function flushOfflineQueue() {
  if (!navigator.onLine) return;
  const q = getOfflineQueue();
  if (q.length === 0) {
    updateOfflineUIIndicator(false, 0);
    return;
  }

  const client = getClient();
  if (!client) return;

  const remaining = [];
  for (const item of q) {
    try {
      if (item.type === "insert") {
        await client.from(item.table).insert(item.payload);
      } else if (item.type === "update") {
        await client.from(item.table).update(item.payload).eq("id", item.id);
      } else if (item.type === "delete") {
        await client.from(item.table).delete().eq("id", item.id);
      }
    } catch (err) {
      console.warn("[Offline Sync] Failed to replay action, retaining:", item, err);
      remaining.push(item);
    }
  }

  localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(remaining));
  updateOfflineUIIndicator(remaining.length > 0, remaining.length);
  if (remaining.length === 0 && typeof showToast === "function") {
    showToast("Offline changes synced with cloud", "success");
    syncAllDataFromSupabase(true);
  }
}

function updateOfflineUIIndicator(isOfflineOrHasQueue, count = 0) {
  let indicator = document.getElementById("arthiva-network-indicator");
  if (!indicator) {
    indicator = document.createElement("div");
    indicator.id = "arthiva-network-indicator";
    indicator.style.cssText = "position:fixed;bottom:70px;left:50%;transform:translateX(-50%);background:#1E293B;color:#FFF;padding:6px 14px;border-radius:20px;font-size:12px;display:none;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,0.15);display:flex;align-items:center;gap:6px;";
    document.body.appendChild(indicator);
  }

  if (!navigator.onLine) {
    indicator.style.display = "flex";
    indicator.innerHTML = `<span>⚡</span> You are offline. Changes saved locally.`;
  } else {
    // When online, do not block the screen with persistent syncing pills
    indicator.style.display = "none";
  }
}

// Attempt immediate queue flush upon load if online
if (navigator.onLine) {
  setTimeout(() => {
    flushOfflineQueue();
  }, 500);
}

window.addEventListener("online", () => {
  _isOnline = true;
  flushOfflineQueue();
});
window.addEventListener("offline", () => {
  _isOnline = false;
  updateOfflineUIIndicator(true, getOfflineQueue().length);
});

// ----------------------------------------------------------------------------
// Realtime Subscriptions (Syncs Web ↔ Android Instantaneously)
// ----------------------------------------------------------------------------
function setupRealtimeListeners() {
  if (!_supabase || _realtimeChannel) return;

  _realtimeChannel = _supabase
    .channel("arthiva-realtime-sync")
    .on("postgres_changes", { event: "*", schema: "public" }, (payload) => {
      console.log("[Supabase Realtime] Change received:", payload.table, payload.eventType);
      // Trigger a silent re-sync and UI update
      if (typeof syncAllDataFromSupabase === "function") {
        syncAllDataFromSupabase(true);
      }
    })
    .subscribe((status) => {
      if (status === "SUBSCRIBED") {
        console.log("[Supabase Realtime] Connected to real-time stream");
      }
    });
}

// ----------------------------------------------------------------------------
// Full Cloud Data Synchronization
// ----------------------------------------------------------------------------
async function syncAllDataFromSupabase(isSilent = false) {
  const client = getClient();
  if (!client || !navigator.onLine) return;

  const { data: { user } } = await client.auth.getUser();
  if (!user) return;

  try {
    const [profileRes, commitmentsRes, expensesRes, goalsRes, budgetsRes] = await Promise.all([
      client.from("profiles").select("*").eq("id", user.id).single(),
      client.from("commitments").select("*").eq("user_id", user.id).order("due_date", { ascending: true }),
      client.from("expenses").select("*").eq("user_id", user.id).order("date", { ascending: false }),
      client.from("goals").select("*, goal_contributions(*)").eq("user_id", user.id),
      client.from("budgets").select("*").eq("user_id", user.id)
    ]);

    if (profileRes && profileRes.data) {
      if (window.ArthivaState && window.ArthivaState.auth) {
        window.ArthivaState.auth.user.name = profileRes.data.full_name || window.ArthivaState.auth.user.name;
        window.ArthivaState.auth.user.email = profileRes.data.email || user.email;
        window.ArthivaState.auth.user.mobile = profileRes.data.mobile || window.ArthivaState.auth.user.mobile;
        window.ArthivaState.auth.user.city = profileRes.data.city || window.ArthivaState.auth.user.city;
        window.ArthivaState.cycleConfig.takeHome = Number(profileRes.data.take_home) || 50000;
        window.ArthivaState.cycleConfig.paydayDay = Number(profileRes.data.payday_day) || 1;
        window.ArthivaState.balance.amount = Number(profileRes.data.current_balance) || 0;
      }
    }

    if (commitmentsRes && commitmentsRes.data && commitmentsRes.data.length > 0) {
      window.ArthivaState.commitments = commitmentsRes.data.map(c => ({
        id: c.id,
        name: c.name,
        category: c.category,
        amount: Number(c.amount),
        dueDate: c.due_date,
        dueDateFormatted: formatDateDisplay(c.due_date),
        method: c.method || "UPI",
        status: computeBillStatus(c.due_date, c.paid_date),
        recurrence: c.recurrence || "Monthly",
        notes: c.notes || "",
        paidDate: c.paid_date,
        isAtRisk: c.is_at_risk
      }));
    }

    if (expensesRes && expensesRes.data && expensesRes.data.length > 0) {
      window.ArthivaState.expenses = expensesRes.data.map(e => ({
        id: e.id,
        category: e.category,
        amount: Number(e.amount),
        merchant: e.merchant || "Merchant",
        date: e.date,
        note: e.note || "",
        source: e.source || "Manual"
      }));
    }

    if (goalsRes && goalsRes.data && goalsRes.data.length > 0) {
      window.ArthivaState.goals = goalsRes.data.map(g => ({
        id: g.id,
        title: g.title,
        targetAmount: Number(g.target_amount),
        currentSaved: Number(g.current_saved),
        targetDate: g.target_date,
        monthlyAllocation: Number(g.monthly_allocation),
        savedThisCycle: Number(g.saved_this_cycle) || 0,
        frequency: g.frequency || "Monthly",
        linkedAccount: g.linked_account || "",
        contributions: (g.goal_contributions || []).map(gc => ({
          id: gc.id,
          amount: Number(gc.amount),
          date: gc.date,
          note: gc.note
        }))
      }));
    }

    if (budgetsRes && budgetsRes.data && budgetsRes.data.length > 0) {
      window.ArthivaState.budgets = budgetsRes.data.map(b => ({
        category: b.category,
        limit: Number(b.spending_limit),
        icon: b.icon || "tag"
      }));
    }

    if (typeof saveStateToStorage === "function") saveStateToStorage();
    if (typeof renderApp === "function") renderApp();

    if (!isSilent && typeof showToast === "function") {
      showToast("Cloud synced with Supabase", "success");
    }
  } catch (err) {
    console.warn("[Supabase Sync] Error during full sync:", err);
  }
}

// ----------------------------------------------------------------------------
// Date-Based Automatic Bill Status Computation
// ----------------------------------------------------------------------------
function computeBillStatus(dueDateStr, paidDate) {
  if (paidDate) return "paid";
  if (!dueDateStr) return "scheduled";

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const due = new Date(dueDateStr);
  due.setHours(0, 0, 0, 0);

  const diffDays = Math.ceil((due - today) / (1000 * 60 * 60 * 24));

  if (diffDays < 0) return "risk";      // Overdue
  if (diffDays <= 3) return "due";      // Due in 3 days or today
  return "scheduled";                   // Future scheduled bill
}

function formatDateDisplay(dateStr) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

// ----------------------------------------------------------------------------
// Public Module API
// ----------------------------------------------------------------------------
window.ArthivaSupabase = {
  getClient,
  syncAll: syncAllDataFromSupabase,
  addToOfflineQueue,
  flushOfflineQueue,
  computeBillStatus,

  async signUp(email, password, metadata = {}) {
    const c = getClient();
    if (!c) throw new Error("Supabase is not configured");
    return await c.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
        emailRedirectTo: window.location.origin
      }
    });
  },

  async signIn(email, password) {
    const c = getClient();
    if (!c) throw new Error("Supabase is not configured");
    return await c.auth.signInWithPassword({ email, password });
  },

  async signInWithPhone(phoneNumber) {
    const c = getClient();
    if (!c) throw new Error("Supabase is not configured");
    // Formats into E.164: removes spaces/dashes, prepends +91 if missing
    let formatted = String(phoneNumber || "").replace(/[\s-]/g, "");
    if (!formatted.startsWith("+")) {
      formatted = formatted.startsWith("91") ? `+${formatted}` : `+91${formatted}`;
    }
    return await c.auth.signInWithOtp({
      phone: formatted,
      options: {
        channel: "sms"
      }
    });
  },

  async verifyPhoneOtp(phoneNumber, token) {
    const c = getClient();
    if (!c) throw new Error("Supabase is not configured");
    let formatted = String(phoneNumber || "").replace(/[\s-]/g, "");
    if (!formatted.startsWith("+")) {
      formatted = formatted.startsWith("91") ? `+${formatted}` : `+91${formatted}`;
    }
    const res = await c.auth.verifyOtp({
      phone: formatted,
      token: String(token).trim(),
      type: "sms"
    });
    if (res.data?.user) {
      localStorage.setItem("arthiva_session_v2", "true");
      await syncAllDataFromSupabase(true);
    }
    return res;
  },

  async signOut() {
    const c = getClient();
    if (c) await c.auth.signOut();
    localStorage.removeItem("arthiva_session_v2");
  },

  async getUser() {
    const c = getClient();
    if (!c) return null;
    const { data } = await c.auth.getUser();
    return data?.user || null;
  },

  async insertRecord(table, payload) {
    const client = getClient();
    const user = await this.getUser();
    const dataWithUser = { ...payload, user_id: user ? user.id : undefined };

    if (!navigator.onLine || !client) {
      addToOfflineQueue({ type: "insert", table, payload: dataWithUser });
      return { data: [dataWithUser], error: null };
    }
    return await client.from(table).insert(dataWithUser).select();
  },

  async updateRecord(table, id, payload) {
    const client = getClient();
    if (!navigator.onLine || !client) {
      addToOfflineQueue({ type: "update", table, id, payload });
      return { data: payload, error: null };
    }
    return await client.from(table).update(payload).eq("id", id).select();
  },

  async deleteRecord(table, id) {
    const client = getClient();
    if (!navigator.onLine || !client) {
      addToOfflineQueue({ type: "delete", table, id });
      return { error: null };
    }
    return await client.from(table).delete().eq("id", id);
  },

  async uploadStatement(file) {
    const client = getClient();
    const user = await this.getUser();
    if (!client || !user) return null;

    const path = `${user.id}/${Date.now()}_${file.name}`;
    const res = await client.storage.from("statements").upload(path, file, { upsert: true });
    if (res.error) throw res.error;

    await client.from("statement_imports").insert({
      user_id: user.id,
      file_name: file.name,
      file_url: path
    });
    return path;
  }
};
