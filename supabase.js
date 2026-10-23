// Supabase client initialization and helper utilities
// Designed for browser environments (loaded via CDN script)
// Configuration is injected dynamically or loaded from localStorage/window configuration

const SUPABASE_URL = window.__ENV_SUPABASE_URL || localStorage.getItem("ARTHIVA_SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = window.__ENV_SUPABASE_ANON_KEY || localStorage.getItem("ARTHIVA_SUPABASE_KEY") || "";

let supabaseClient = null;

function getSupabaseClient() {
  if (!supabaseClient && window.supabase && typeof window.supabase.createClient === 'function') {
    if (SUPABASE_URL && SUPABASE_ANON_KEY) {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    }
  }
  return supabaseClient;
}

// ----- Auth helpers --------------------------------------------------------
async function supabaseSignUp(email, password) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.auth.signUp({ email, password });
}

async function supabaseSignIn(email, password) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.auth.signInWithPassword({ email, password });
}

async function supabaseSignOut() {
  const client = getSupabaseClient();
  if (!client) return { error: new Error("Supabase client not configured") };
  return await client.auth.signOut();
}

async function supabaseGetUser() {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.auth.getUser();
}

// ----- Database helpers ----------------------------------------------------
async function supabaseInsert(table, payload) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.from(table).insert(payload);
}

async function supabaseSelect(table, columns = "*", filter = null) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  let query = client.from(table).select(columns);
  if (filter) query = query.eq(filter.column, filter.value);
  return await query;
}

async function supabaseUpdate(table, payload, filter) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.from(table).update(payload).eq(filter.column, filter.value);
}

async function supabaseDelete(table, filter) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.from(table).delete().eq(filter.column, filter.value);
}

// ----- Storage helpers ------------------------------------------------------
async function supabaseUpload(bucket, path, file, options = {}) {
  const client = getSupabaseClient();
  if (!client) return { data: null, error: new Error("Supabase client not configured") };
  return await client.storage.from(bucket).upload(path, file, options);
}

// Expose on window object
window.ArthivaSupabase = {
  getClient: getSupabaseClient,
  signUp: supabaseSignUp,
  signIn: supabaseSignIn,
  signOut: supabaseSignOut,
  getUser: supabaseGetUser,
  insert: supabaseInsert,
  select: supabaseSelect,
  update: supabaseUpdate,
  delete: supabaseDelete,
  upload: supabaseUpload
};
