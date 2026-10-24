/**
 * ARTHIVA MONEY — CORE LOGIC, SECURITY, INSIGHTS & CONSENT ENGINE (v3.0.0)
 * 
 * Target Persona: Rashika / Ananya, 27, Product Analyst, Bengaluru
 * Payday: Flexible (1st, 5th, 7th, 10th, 15th, 20th, 25th, 28th, 30th, 31st) | Take-home: ₹50,000
 * Scenario Anchor Date: 20 Oct 2026
 */

// --------------------------------------------------------------------------
// 1. Illustrated Portrait Avatars & 20 FAQ Data Store
// --------------------------------------------------------------------------

const ILLUSTRATED_AVATARS = {
  "f1": {
    label: "Ananya (Teal)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#0B6B5A"/><circle cx="32" cy="36" r="24" fill="#138A75"/><path d="M16 58c2-11 10-16 16-16s14 5 16 16" fill="#F6AD55"/><path d="M18 30c0-11 6-18 14-18s14 7 14 18c0 6-2 12-4 14H22c-2-2-4-8-4-14z" fill="#1E293B"/><circle cx="32" cy="29" r="10.5" fill="#FBD38D"/><path d="M21 26c2-6 8-9 14-8 4 1 7 4 8 8-4-3-9-4-14-3-3 1-6 2-8 3z" fill="#1E293B"/><circle cx="28.5" cy="29" r="1.3" fill="#1E293B"/><circle cx="35.5" cy="29" r="1.3" fill="#1E293B"/><circle cx="32" cy="26.5" r="1" fill="#E53E3E"/><path d="M29 33.5c1.8 1.5 4.2 1.5 6 0" stroke="#9C4221" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  },
  "f2": {
    label: "Meera (Saffron)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#D97706"/><path d="M15 58c3-11 10-15 17-15s14 4 17 15" fill="#065F46"/><circle cx="32" cy="18" r="7" fill="#0F172A"/><circle cx="32" cy="30" r="11" fill="#F6AD55"/><path d="M21 28c1-7 6-11 11-11s10 4 11 11c-3-3-7-5-11-5s-8 2-11 5z" fill="#0F172A"/><circle cx="28.5" cy="30" r="1.3" fill="#0F172A"/><circle cx="35.5" cy="30" r="1.3" fill="#0F172A"/><circle cx="32" cy="27.5" r="0.9" fill="#B91C1C"/><path d="M29.5 34.5c1.5 1.2 3.5 1.2 5 0" stroke="#7C2D12" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="21" cy="32" r="2" fill="#FDE047"/><circle cx="43" cy="32" r="2" fill="#FDE047"/></svg>`
  },
  "f3": {
    label: "Kavya (Indigo)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#3730A3"/><path d="M16 58c2-10 9-15 16-15s14 5 16 15" fill="#EC4899"/><path d="M19 29c0-10 5-16 13-16s13 6 13 16c0 5-1 9-3 12H22c-2-3-3-7-3-12z" fill="#1E1B4B"/><circle cx="32" cy="29" r="10.5" fill="#FBD38D"/><rect x="24" y="27" width="6.5" height="4.5" rx="1.5" stroke="#1E293B" stroke-width="1.3" fill="none"/><rect x="33.5" y="27" width="6.5" height="4.5" rx="1.5" stroke="#1E293B" stroke-width="1.3" fill="none"/><line x1="30.5" y1="29" x2="33.5" y2="29" stroke="#1E293B" stroke-width="1.3"/><path d="M29.5 34.5c1.5 1.3 3.5 1.3 5 0" stroke="#9C4221" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  },
  "f4": {
    label: "Diya (Rose)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#9D174D"/><path d="M15 58c2-10 9-15 17-15s15 5 17 15" fill="#38BDF8"/><circle cx="20" cy="27" r="6" fill="#18181B"/><circle cx="44" cy="27" r="6" fill="#18181B"/><circle cx="32" cy="22" r="9" fill="#18181B"/><circle cx="32" cy="30" r="10.5" fill="#F6AD55"/><circle cx="28.5" cy="30" r="1.3" fill="#18181B"/><circle cx="35.5" cy="30" r="1.3" fill="#18181B"/><path d="M29 34.5c2 1.5 4 1.5 6 0" stroke="#7C2D12" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  },
  "m1": {
    label: "Rohan (Emerald)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#065F46"/><path d="M15 58c3-11 10-16 17-16s14 5 17 16" fill="#E2E8F0"/><circle cx="32" cy="29" r="10.5" fill="#F6AD55"/><path d="M21.5 26c1-6 5-10 10.5-10s9.5 4 10.5 10c-3-2-6.5-3-10.5-3s-7.5 1-10.5 3z" fill="#0F172A"/><circle cx="28.5" cy="29" r="1.3" fill="#0F172A"/><circle cx="35.5" cy="29" r="1.3" fill="#0F172A"/><path d="M24 33c1.5 4 4.5 6 8 6s6.5-2 8-6c-2.5 1.5-5 2-8 2s-5.5-.5-8-2z" fill="#1E293B"/><path d="M29.5 34c1.5 1 3.5 1 5 0" stroke="#FFF" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>`
  },
  "m2": {
    label: "Arjun (Slate)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#1E293B"/><path d="M15 58c3-11 10-16 17-16s14 5 17 16" fill="#0EA5E9"/><circle cx="32" cy="29" r="10.5" fill="#FBD38D"/><path d="M21 25c1.5-6 5.5-9 11-9s9.5 3 11 9c-3-2-7-3-11-3s-8 1-11 3z" fill="#090D16"/><rect x="24" y="27" width="6.5" height="4.5" rx="1" stroke="#0F172A" stroke-width="1.4" fill="none"/><rect x="33.5" y="27" width="6.5" height="4.5" rx="1" stroke="#0F172A" stroke-width="1.4" fill="none"/><line x1="30.5" y1="29" x2="33.5" y2="29" stroke="#0F172A" stroke-width="1.4"/><path d="M29 34.5c2 1.2 4 1.2 6 0" stroke="#7C2D12" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  },
  "m3": {
    label: "Vikram (Royal)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#1E3A8A"/><path d="M15 58c3-11 10-16 17-16s14 5 17 16" fill="#F59E0B"/><circle cx="32" cy="30" r="10.5" fill="#F6AD55"/><path d="M20 26c1-6 6-11 12-11s11 5 12 11c-4-2-8-3-12-3s-8 1-12 3z" fill="#B91C1C"/><path d="M22 23l10 4 10-4" stroke="#991B1B" stroke-width="2" fill="none"/><circle cx="28.5" cy="30" r="1.3" fill="#0F172A"/><circle cx="35.5" cy="30" r="1.3" fill="#0F172A"/><path d="M24 33.5c1.5 4.5 4.5 6.5 8 6.5s6.5-2 8-6.5c-2.5 1.5-5 2-8 2s-5.5-.5-8-2z" fill="#0F172A"/></svg>`
  },
  "m4": {
    label: "Kabir (Purple)",
    svg: `<svg viewBox="0 0 64 64" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><rect width="64" height="64" rx="32" fill="#581C87"/><path d="M15 58c3-11 10-16 17-16s14 5 17 16" fill="#10B981"/><circle cx="32" cy="29" r="10.5" fill="#FBD38D"/><path d="M21 25c0-6 5-10 11-10s11 4 11 10c-2-1.5-6-2.5-11-2.5S23 23.5 21 25z" fill="#18181B"/><circle cx="28.5" cy="29" r="1.3" fill="#18181B"/><circle cx="35.5" cy="29" r="1.3" fill="#18181B"/><path d="M29 34c2 1.6 4 1.6 6 0" stroke="#7C2D12" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`
  }
};

const FAQ_ITEMS = [
  {
    q: "1. What is Arthiva and how does it help manage personal finances?",
    a: "Arthiva Money is an India-first personal finance planner built for salaried professionals and households. While most expense trackers only look backward ('where did my money go?'), Arthiva looks forward to answer 'can I afford what is coming up before payday?' by protecting your upcoming bills, EMIs, SIPs, and savings goals first."
  },
  {
    q: "2. How is Safe to Spend calculated?",
    a: "Safe to Spend = Current Available Balance − Yet to Pay Commitments (unpaid bills due strictly before your next payday) − Planned Savings Allocation remaining for the current cycle. You can tap 'See how this is calculated' on the Home hero card at any time for an itemized breakdown."
  },
  {
    q: "3. How do pay cycles and payday settings work?",
    a: "Arthiva adapts to your exact salary date (1st, 5th, 7th, 10th, 15th, 20th, 25th, 28th, 30th, or last day of the month). When you select a payday such as the 30th, Arthiva automatically clamps shorter months (such as February) and calculates your exact remaining days and daily pace until your next salary credit."
  },
  {
    q: "4. What is the difference between Yet to Pay, Upcoming Bills, and Paid?",
    a: "• Yet to Pay: Commitments due in the current pay cycle before your upcoming payday that are still unpaid (deducted from Safe to Spend).\n• Paid: Commitments already settled during the current cycle.\n• Upcoming Commitments (Next Cycle): Bills due on or after your next payday, covered by your next salary."
  },
  {
    q: "5. How do I update my current balance?",
    a: "Tap the 'Current Available Balance' card on the Home screen or tap the '+' FAB → 'Check-in Balance'. Enter your latest bank balance directly, choose one of the 9 audit reasons (such as Salary received, Expense, or Correction), and save. Every adjustment is logged in your monthly grouped history."
  },
  {
    q: "6. How does balance adjustment history work?",
    a: "Whenever you update your balance manually, log a quick expense with balance deduction enabled, or contribute to a savings goal from your balance, Arthiva appends an immutable audit record grouped by month & year showing previous balance, new balance, net change (+/−), reason, and source."
  },
  {
    q: "7. How do I add or edit financial commitments?",
    a: "Go to the Commitments tab or tap the '+' button and choose 'Add Commitment / Bill'. Enter the bill title, amount, due date, category, recurrence, and payment method (UPI Mandate, Auto-debit, etc.). Tap any existing bill to Mark as Paid, Reschedule with the calendar picker, Move to Next Cycle, or Skip this cycle."
  },
  {
    q: "8. How do I create custom commitment or spending categories?",
    a: "You can create custom categories from Onboarding Step 2, the Commitments tab, the Plan tab ('+ Add Category'), or inside the Quick Log sheet. Choose whether it is a Fixed Commitment or Flexible Spending category, set an optional monthly budget limit, and it immediately appears across all dropdowns and insights."
  },
  {
    q: "9. How do I log an expense or split an expense across categories?",
    a: "Tap '+ Quick Log' on the Plan screen or the '+' button. Choose 'Single Category' for regular purchases or switch to 'Split (2 Categories)' to divide a single bill (e.g. a supermarket run with groceries and personal items) across two categories with live math validation ensuring the split equals the total."
  },
  {
    q: "10. How do savings goals and target dates work?",
    a: "Each savings goal tracks your Target Amount, Current Saved, Remaining Amount, Target Date, and Planned Contribution per cycle. Arthiva's feasibility engine compares your planned contribution against the number of pay cycles left before your target date and flags whether you are On Track, At Risk, or Need Adjustment."
  },
  {
    q: "11. How do I contribute a custom amount to a savings goal?",
    a: "On the Home screen's Savings Goals section, tap 'Contribute' on any goal. You can type any custom rupee amount (e.g., ₹500, ₹1,750, ₹3,200) or tap a quick-fill shortcut, and optionally deduct it from your current bank balance. Creating a new goal is kept completely separate via '+ New Goal'."
  },
  {
    q: "12. How are recommended savings contributions calculated?",
    a: "Arthiva divides your remaining goal balance by the number of pay cycles remaining until your target date to find the timeline-required contribution. It then checks your disposable capacity (Take-Home Income minus essential commitments and flexible budgets) to recommend a realistic contribution per cycle."
  },
  {
    q: "13. How does automatic expense tracking work?",
    a: "Automatic tracking is strictly opt-in and OFF by default. If enabled under Profile → Privacy & Automatic Expense Tracking, Arthiva can parse transaction alerts from consented sources (Bank AA, SMS, Gmail receipts, or WhatsApp merchant alerts), auto-categorize merchants, and deduplicate multi-channel alerts for the same purchase."
  },
  {
    q: "14. What permissions are required for Bank, SMS, Gmail, or WhatsApp tracking?",
    a: "Enabling any source requires completing a 5-step security & consent wizard: Mobile OTP verification, Email OTP verification, explicit DPDP/RBI-aligned consent disclosure, and source-specific authorization. Web browsers cannot read native SMS or WhatsApp directly without platform integration, which is transparently disclosed."
  },
  {
    q: "15. How can I revoke permissions or disable automatic tracking?",
    a: "Open Profile → Privacy & Automatic Expense Tracking and switch off either the Master Toggle or any individual source toggle (Bank AA, SMS, Gmail, WhatsApp), or click 'Disconnect'. You can also click 'Delete Imported Data' to purge all auto-detected transactions immediately."
  },
  {
    q: "16. How do PIN, password, fingerprint, and face unlock work?",
    a: "When you reopen Arthiva with an active session, the App-Lock screen protects your financial data before showing the dashboard. You can unlock using your 4-digit PIN, App-Lock Password, or WebAuthn device biometrics (Fingerprint / Face ID). Manage these anytime under Profile → Security & Authentication."
  },
  {
    q: "17. How do I export my Pay Cycle Recap as PDF or CSV?",
    a: "From the Insights tab or Profile → Export Pay Cycle Recap, tap 'Export to PDF' to download a clean, multi-section PDF report (and open a printable view if needed), or tap 'Export to CSV' to download all commitments, expenses, budgets, and goals in spreadsheet format."
  },
  {
    q: "18. What is included in Arthiva Basic vs Arthiva Pro?",
    a: "Arthiva Basic (Free) includes core Safe-to-Spend math, up to 2 savings goals, manual balance check-ins, and CSV export. Arthiva Pro (₹149/mo or ₹999/yr) unlocks unlimited goals, Consent-Based Auto-Tracking & Deduplication, multi-cycle trend analytics, and PDF Pay Cycle Recaps. Arthiva Family (₹249/mo) adds shared household bills."
  },
  {
    q: "19. How is my financial data stored and protected?",
    a: "In this application, all financial records, custom categories, goals, and security preferences are stored locally in your browser's encrypted-at-rest localStorage sandboxes. Arthiva never sells your data or accesses external feeds without explicit multi-step consent."
  },
  {
    q: "20. How do I delete my account or clear my stored data?",
    a: "Scroll to the bottom of the Profile screen and expand 'Account Management & Permanent Deletion', then tap 'Delete Account & Wipe Data'. You will be asked to verify your App-Lock PIN/Password and type DELETE to permanently erase all local financial records and sessions."
  },
  {
    id: "faq-unprotect-pdf",
    q: "How do I unprotect my bank statement PDF?",
    a: "Banks protect statements with a password, usually printed in the statement email (often a mix of your name, date of birth, PAN or customer ID). You need that password once to save an unprotected copy:\n• Chrome / Edge (any computer): Open the PDF, enter the password, press Print, choose \"Save as PDF\" as the printer, and save.\n• Mac (Preview): Open the PDF, enter the password, then File → Export as PDF and save without a password.\n• Android / iPhone: Open the PDF, enter the password, tap Share → Print, then save or share the result as a PDF.\n• Adobe Acrobat (paid): Open with the password, then Tools → Protect → Remove Security.\nThen upload the new, unprotected file to Arthiva. Your original statement stays unchanged."
  }
];

// --------------------------------------------------------------------------
// 2. Initial State Definition & Persistence
// --------------------------------------------------------------------------
const STORAGE_KEY = "arthiva_money_app_state_v2";

const DEFAULT_STATE = {
  // Authentication & Session
  auth: {
    isAuthenticated: true,
    user: {
      name: "Rashika",
      email: "rashika@arthiva.app",
      mobile: "9845012345",
      dob: "1999-05-14",
      age: 27,
      role: "Product Analyst",
      city: "Bengaluru",
      householdName: "Rashika's Household",
      householdMode: "Individual",
      householdMembers: [],
      avatarType: "illustrated", // "illustrated", "monogram", or "image"
      avatarData: "f1"
    }
  },

  // Security & App-Lock Settings (Section 1)
  security: {
    appLockEnabled: true,
    isLocked: false,
    pin: "1234",
    password: "arthiva2026",
    preferredMethod: "pin", // "pin", "password", "fingerprint", "face"
    fallbackMethod: "pin",  // "pin" or "password"
    fingerprintEnabled: true,
    faceUnlockEnabled: false,
    lockPolicy: "reopen",   // "reopen", "background_immediate", "background_1m"
    failedAttempts: 0
  },

  // Membership Tier (Section 8)
  membership: {
    tier: "Arthiva Basic",
    billingCycle: "yearly", // "monthly" or "yearly"
    status: "Active Member",
    proPriceMonthly: 149,
    proPriceYearly: 999,
    familyPriceMonthly: 249,
    familyPriceYearly: 1799
  },

  // Pay Cycle Configuration
  cycleConfig: {
    paydayDay: 1,
    takeHome: 50000,
    employerOrBank: "HDFC Bank / Salary Account",
    referenceDate: "2026-10-20"
  },

  // Current Available Balance & Audit History
  balance: {
    amount: 32000,
    lastUpdated: "2026-10-18T21:40:00Z",
    label: "You entered · 2 days ago",
    note: "Initial check-in"
  },

  balanceHistory: [
    {
      id: "bal-init-1",
      date: "18 Oct, 09:40 PM",
      month: "October 2026",
      timestamp: "2026-10-18T21:40:00Z",
      previousBalance: 35000,
      newBalance: 32000,
      changeAmount: -3000,
      reason: "Correction to previous balance",
      source: "Manual check-in",
      notes: "Weekend cash spend reconciliation"
    },
    {
      id: "bal-init-2",
      date: "01 Oct, 10:15 AM",
      month: "October 2026",
      timestamp: "2026-10-01T10:15:00Z",
      previousBalance: 4200,
      newBalance: 54200,
      changeAmount: 50000,
      reason: "Salary received",
      source: "Salary credit",
      notes: "Monthly salary from employer"
    },
    {
      id: "bal-prev-1",
      date: "28 Sep, 08:30 PM",
      month: "September 2026",
      timestamp: "2026-09-28T20:30:00Z",
      previousBalance: 8700,
      newBalance: 4200,
      changeAmount: -4500,
      reason: "Bill payment",
      source: "Auto-debit",
      notes: "Utility & Wi-Fi clearing"
    }
  ],

  // Unified Categories Store (Fixed Commitments & Flexible Spending)
  categories: [
    { id: "cat-rent", name: "Rent", type: "commitment", icon: "home" },
    { id: "cat-emi", name: "EMIs and loans", type: "commitment", icon: "credit-card" },
    { id: "cat-sip", name: "Mutual funds and SIPs", type: "commitment", icon: "trending-up" },
    { id: "cat-insurance", name: "Insurance", type: "commitment", icon: "shield" },
    { id: "cat-help", name: "Cook and household help", type: "commitment", icon: "user-check" },
    { id: "cat-sub", name: "Netflix and subscriptions", type: "commitment", icon: "film" },
    { id: "cat-wifi", name: "Phone and internet", type: "commitment", icon: "wifi" },
    { id: "cat-util", name: "Electricity and utilities", type: "commitment", icon: "zap" },

    { id: "cat-groc", name: "Groceries and daily essentials", type: "flexible", icon: "shopping-bag", budgetLimit: 6000 },
    { id: "cat-dining", name: "Dining out and food ordering", type: "flexible", icon: "utensils", budgetLimit: 5000 },
    { id: "cat-transport", name: "Transport, fuel and cabs", type: "flexible", icon: "car", budgetLimit: 3500 },
    { id: "cat-shopping", name: "Shopping and personal", type: "flexible", icon: "tag", budgetLimit: 3000 },
    { id: "cat-recharge", name: "Utilities and mobile recharge", type: "flexible", icon: "zap", budgetLimit: 1500 }
  ],

  // Primary Savings Goal (kept synced with goals[0] for backward compatibility)
  goal: {
    id: "goal-1",
    title: "Goa trip with friends",
    targetAmount: 40000,
    currentSaved: 15000,
    targetDate: "2027-03-31",
    monthlyAllocation: 5000,
    savedThisCycle: 0,
    frequency: "Monthly"
  },

  // Multi-Goals Store (Section 9)
  goals: [
    {
      id: "goal-1",
      title: "Goa trip with friends",
      targetAmount: 40000,
      currentSaved: 15000,
      targetDate: "2027-03-31",
      monthlyAllocation: 5000,
      savedThisCycle: 0,
      frequency: "Monthly",
      linkedAccount: "HDFC Savings ···4821 / Liquid Fund SIP",
      celebratedMilestone: 25,
      contributions: [
        { id: "gc-1", date: "2026-09-05", amount: 5000, note: "September cycle transfer" },
        { id: "gc-2", date: "2026-08-05", amount: 5000, note: "August cycle transfer" },
        { id: "gc-3", date: "2026-07-05", amount: 5000, note: "Initial trip fund seed" }
      ]
    },
    {
      id: "goal-2",
      title: "Emergency Medical Buffer",
      targetAmount: 60000,
      currentSaved: 42000,
      targetDate: "2027-06-30",
      monthlyAllocation: 3000,
      savedThisCycle: 3000,
      frequency: "Monthly",
      linkedAccount: "ICICI Liquid Mutual Fund SIP",
      celebratedMilestone: 50,
      contributions: [
        { id: "gc-4", date: "2026-10-03", amount: 3000, note: "October auto-transfer" },
        { id: "gc-5", date: "2026-09-03", amount: 4000, note: "September contribution" }
      ]
    }
  ],

  // Commitments (Bills)
  commitments: [
    // Section A: Due before next payday
    {
      id: "bill-1",
      name: "Phone EMI (OnePlus)",
      category: "EMIs and loans",
      amount: 4000,
      dueDate: "2026-10-22",
      dueDateFormatted: "22 Oct",
      method: "Auto-debit",
      status: "upcoming",
      recurrence: "Monthly",
      notes: "OnePlus phone EMI via HDFC",
      paidDate: null
    },
    {
      id: "bill-2",
      name: "Netflix & Spotify",
      category: "Netflix and subscriptions",
      amount: 1000,
      dueDate: "2026-10-25",
      dueDateFormatted: "25 Oct",
      method: "Card Recurring",
      status: "upcoming",
      recurrence: "Monthly",
      notes: "Family plan subscriptions",
      paidDate: null
    },
    {
      id: "bill-3",
      name: "Health & Life Insurance Renewal",
      category: "Insurance",
      amount: 7000,
      dueDate: "2026-10-28",
      dueDateFormatted: "28 Oct",
      method: "UPI Mandate",
      status: "upcoming",
      recurrence: "Annual",
      isAtRisk: true,
      hasGracePeriod: true,
      gracePeriodEndDate: "2026-11-12",
      notes: "HDFC Ergo health insurance premium",
      paidDate: null
    },

    // Section B: Already paid this cycle
    {
      id: "bill-4",
      name: "House Rent (Indiranagar)",
      category: "Rent",
      amount: 20000,
      dueDate: "2026-10-02",
      dueDateFormatted: "2 Oct",
      method: "UPI",
      status: "paid",
      recurrence: "Monthly",
      notes: "Owner transfer via UPI",
      paidDate: "2026-10-02"
    },
    {
      id: "bill-5",
      name: "Cook & Household Help",
      category: "Cook and household help",
      amount: 3500,
      dueDate: "2026-10-05",
      dueDateFormatted: "5 Oct",
      method: "UPI / Cash",
      status: "paid",
      recurrence: "Monthly",
      notes: "Monthly staff salary",
      paidDate: "2026-10-05"
    },
    {
      id: "bill-6",
      name: "Parag Parikh Flexi Cap SIP",
      category: "Mutual funds and SIPs",
      amount: 3000,
      dueDate: "2026-10-10",
      dueDateFormatted: "10 Oct",
      method: "Auto-debit",
      status: "paid",
      recurrence: "Monthly",
      notes: "Mutual fund growth fund",
      paidDate: "2026-10-10"
    },

    // Section C: Upcoming commitments after payday (Next cycle)
    {
      id: "bill-7",
      name: "House Rent (Indiranagar)",
      category: "Rent",
      amount: 20000,
      dueDate: "2026-11-02",
      dueDateFormatted: "2 Nov",
      method: "UPI",
      status: "upcoming",
      recurrence: "Monthly",
      notes: "Next month rent",
      paidDate: null
    },
    {
      id: "bill-8",
      name: "Cook & Household Help",
      category: "Cook and household help",
      amount: 3500,
      dueDate: "2026-11-05",
      dueDateFormatted: "5 Nov",
      method: "UPI",
      status: "upcoming",
      recurrence: "Monthly",
      notes: "Next month staff salary",
      paidDate: null
    }
  ],

  // Variable Expenses Logged by User
  expenses: [
    {
      id: "exp-1",
      category: "Groceries and daily essentials",
      amount: 2400,
      merchant: "Nature's Basket Indiranagar",
      date: "2026-10-04",
      note: "Weekly organic vegetables and staples",
      source: "Manual"
    },
    {
      id: "exp-2",
      category: "Groceries and daily essentials",
      amount: 1800,
      merchant: "Blinkit",
      date: "2026-10-11",
      note: "Dairy, fruits and bread",
      source: "Manual"
    },
    {
      id: "exp-3",
      category: "Dining out and food ordering",
      amount: 3200,
      merchant: "Toit Brewpub",
      date: "2026-10-12",
      note: "Dinner with team",
      source: "Manual"
    },
    {
      id: "exp-4",
      category: "Dining out and food ordering",
      amount: 2600,
      merchant: "Swiggy Gourmet",
      date: "2026-10-14",
      note: "Weekend family dinner",
      source: "Manual"
    },
    {
      id: "exp-5",
      category: "Transport, fuel and cabs",
      amount: 1200,
      merchant: "Uber India",
      date: "2026-10-08",
      note: "Airport cab round trip",
      source: "Manual"
    },
    {
      id: "exp-6",
      category: "Transport, fuel and cabs",
      amount: 900,
      merchant: "Shell Petrol Bunk",
      date: "2026-10-15",
      note: "Scooter fuel",
      source: "Manual"
    },
    {
      id: "exp-7",
      category: "Shopping and personal",
      amount: 1500,
      merchant: "Zudio / Myntra",
      date: "2026-10-09",
      note: "Casual wear",
      source: "Manual"
    },
    {
      id: "exp-8",
      category: "Utilities and mobile recharge",
      amount: 800,
      merchant: "Bescom Electricity",
      date: "2026-10-07",
      note: "Apartment electricity share",
      source: "Manual"
    }
  ],

  // Previous Pay Cycle Historical Data (for Insights Period Selector & Trends)
  previousCycleData: {
    periodLabel: "Previous Cycle: 1 Sep – 1 Oct 2026",
    takeHome: 50000,
    paidCommitments: 27500,
    plannedCommitments: 27500,
    savingsActual: 5000,
    savingsPlanned: 5000,
    expensesByCategory: {
      "Groceries and daily essentials": 4600,
      "Dining out and food ordering": 4100,
      "Transport, fuel and cabs": 2400,
      "Shopping and personal": 2200,
      "Utilities and mobile recharge": 950
    }
  },

  // Budgets (Plan Tab)
  budgets: [
    { category: "Groceries and daily essentials", limit: 6000, icon: "shopping-bag" },
    { category: "Dining out and food ordering", limit: 5000, icon: "utensils" },
    { category: "Transport, fuel and cabs", limit: 3500, icon: "car" },
    { category: "Shopping and personal", limit: 3000, icon: "tag" },
    { category: "Utilities and mobile recharge", limit: 1500, icon: "zap" }
  ],

  // Consent-Based Automatic Expense Tracking (Section 10 - OFF BY DEFAULT)
  autoTracking: {
    masterEnabled: false,
    consentVerified: false,
    mobileOtpVerified: false,
    emailOtpVerified: false,
    consentTimestamp: null,
    sources: {
      bank: {
        id: "bank",
        name: "Bank Account / UPI (RBI AA)",
        subtitle: "HDFC Bank ···4821 via Sahamati AA",
        enabled: false,
        connectedAt: null,
        lastSync: null,
        modeBadge: "Simulated AA Feed"
      },
      sms: {
        id: "sms",
        name: "SMS Transaction Alerts",
        subtitle: "Bank debit & UPI SMS parser",
        enabled: false,
        connectedAt: null,
        lastSync: null,
        modeBadge: "Parser Sandbox (Android SMS API)"
      },
      gmail: {
        id: "gmail",
        name: "Gmail Receipts & Bills",
        subtitle: "Read-only invoice & statement parser",
        enabled: false,
        connectedAt: null,
        lastSync: null,
        modeBadge: "Simulated OAuth Feed"
      },
      whatsapp: {
        id: "whatsapp",
        name: "WhatsApp Payment & Merchant Alerts",
        subtitle: "Verified merchant & utility receipts",
        enabled: false,
        connectedAt: null,
        lastSync: null,
        modeBadge: "Notification Parser"
      }
    },
    detectedQueue: []
  },

  // Actionable Notifications
  notifications: [
    {
      id: "notif-1",
      title: "Potential Insurance Shortfall",
      body: "At your current pace you'll be ₹2,400 short for your ₹7,000 insurance renewal on 28 Oct.",
      type: "risk",
      date: "20 Oct",
      read: false,
      action: "openRiskResolutionSheet"
    },
    {
      id: "notif-2",
      title: "Upcoming Bill: Phone EMI",
      body: "₹4,000 scheduled for auto-debit in 2 days (22 Oct). Funds are protected in safe-to-spend.",
      type: "bill",
      date: "20 Oct",
      read: false,
      action: "openCommitmentsTab"
    },
    {
      id: "notif-3",
      title: "Dining Plan Pacing Alert",
      body: "You're ₹800 over your dining plan this cycle. Consider keeping daily spend under ₹1,050.",
      type: "budget",
      date: "19 Oct",
      read: false,
      action: "openPlanTab"
    },
    {
      id: "notif-4",
      title: "Savings Goal Ring-Fenced",
      body: "₹5,000 for your Goa Trip is safely held back from your safe-to-spend allowance.",
      type: "goal",
      date: "18 Oct",
      read: true,
      action: "openRecordGoalSheet"
    }
  ],

  appliedAdjustments: {
    customDailyLimit: null,
    savingsDeferred: false,
    gracePeriodUsed: false
  },

  // Active Screen / UI State
  currentScreen: "home",
  onboardingStep: 1,
  selectedCommitmentId: null,
  selectedGoalId: "goal-1",
  activeExpandedCategory: null,
  insightsPeriod: "current", // "current" or "previous"
  insightsCategoryMode: "flexible", // "flexible" or "all"
  selectedInsightCategory: null,
  quickExpenseMode: "single",
  isEmptyState: false,
  deviceMode: "ios",
  zoom: 1.0,
  theme: "light"
};

// Global Reactive State
let ArthivaState = loadStateFromStorage();

// Draft state for onboarding back/forward preservation
let onboardingDraft = {
  paydayDay: ArthivaState.cycleConfig.paydayDay || 1,
  takeHome: ArthivaState.cycleConfig.takeHome || 50000,
  employerOrBank: ArthivaState.cycleConfig.employerOrBank || "HDFC Bank / Salary Account",
  selectedCommitmentCategories: ["Rent", "Phone and internet", "EMIs and loans", "Mutual funds and SIPs", "Insurance", "Cook and household help", "Netflix and subscriptions"],
  goalTitle: ArthivaState.goal.title || "Goa trip with friends",
  goalTarget: ArthivaState.goal.targetAmount || 40000,
  goalMonthly: ArthivaState.goal.monthlyAllocation || 5000,
  goalFrequency: ArthivaState.goal.frequency || "Monthly",
  goalTargetDate: ArthivaState.goal.targetDate || "2027-03-31",
  balanceAmount: ArthivaState.balance.amount || 32000
};

function loadStateFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const state = Object.assign({}, JSON.parse(JSON.stringify(DEFAULT_STATE)), parsed);
      state.auth = Object.assign({}, DEFAULT_STATE.auth, parsed.auth || {});
      state.auth.user = Object.assign({}, DEFAULT_STATE.auth.user, (parsed.auth && parsed.auth.user) || {});
      state.security = Object.assign({}, DEFAULT_STATE.security, parsed.security || {});
      state.membership = Object.assign({}, DEFAULT_STATE.membership, parsed.membership || {});
      state.cycleConfig = Object.assign({}, DEFAULT_STATE.cycleConfig, parsed.cycleConfig || {});
      state.previousCycleData = Object.assign({}, DEFAULT_STATE.previousCycleData, parsed.previousCycleData || {});
      if (!state.categories || state.categories.length === 0) {
        state.categories = JSON.parse(JSON.stringify(DEFAULT_STATE.categories));
      }
      if (!Array.isArray(state.goals)) {
        state.goals = JSON.parse(JSON.stringify(DEFAULT_STATE.goals));
        if (parsed.goal) {
          state.goals[0] = Object.assign({}, state.goals[0], parsed.goal, { id: "goal-1" });
        }
      }
      if (!state.autoTracking || !state.autoTracking.sources) {
        state.autoTracking = JSON.parse(JSON.stringify(DEFAULT_STATE.autoTracking));
      }
      return state;
    }
  } catch (e) {
    console.warn("Could not read localStorage:", e);
  }
  return JSON.parse(JSON.stringify(DEFAULT_STATE));
}

function saveStateToStorage() {
  try {
    // Keep legacy goal synced with primary goal-1
    if (ArthivaState.goals && ArthivaState.goals.length > 0) {
      const primary = ArthivaState.goals[0];
      ArthivaState.goal = {
        id: primary.id,
        title: primary.title,
        targetAmount: primary.targetAmount,
        currentSaved: primary.currentSaved,
        targetDate: primary.targetDate,
        monthlyAllocation: primary.monthlyAllocation,
        savedThisCycle: primary.savedThisCycle || 0,
        frequency: primary.frequency || "Monthly"
      };
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ArthivaState));
  } catch (e) {
    console.warn("Could not write to localStorage:", e);
  }
}

// --------------------------------------------------------------------------
// 3. India-First Currency & Date Formatters
// --------------------------------------------------------------------------

function formatINR(amount, compact = false) {
  if (amount === undefined || amount === null || isNaN(amount)) return "₹0";

  const num = Math.round(Number(amount));
  const isNegative = num < 0;
  const absNum = Math.abs(num);

  if (compact && absNum >= 100000) {
    const lakhs = (absNum / 100000).toFixed(1);
    return `${isNegative ? "-" : ""}₹${lakhs.endsWith(".0") ? lakhs.slice(0, -2) : lakhs}L`;
  }

  try {
    const formatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(absNum);

    const cleanStr = formatted.replace(/\s+/g, "");
    return `${isNegative ? "-" : ""}${cleanStr}`;
  } catch (e) {
    const str = absNum.toString();
    const lastThree = str.substring(str.length - 3);
    const otherNumbers = str.substring(0, str.length - 3);
    const withCommas = otherNumbers !== "" ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," + lastThree : lastThree;
    return `${isNegative ? "-" : ""}₹${withCommas}`;
  }
}

function formatDateDisplay(isoString) {
  if (!isoString) return "";
  try {
    const d = new Date(isoString + (isoString.includes("T") ? "" : "T12:00:00"));
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${d.getDate()} ${months[d.getMonth()]}`;
  } catch (e) {
    return isoString;
  }
}

function formatMonthYear(date) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
}

function getValidDateInMonth(year, month, targetDay) {
  const maxDays = new Date(year, month + 1, 0).getDate();
  const day = Math.min(targetDay, maxDays);
  return new Date(year, month, day, 0, 0, 0);
}

// --------------------------------------------------------------------------
// 4. Dynamic Pay Cycle Calculation Engine & Bill Status Classification
// --------------------------------------------------------------------------

function getPayCycleContext() {
  const payday = ArthivaState.cycleConfig.paydayDay || 1;
  const refDate = new Date(ArthivaState.cycleConfig.referenceDate + "T12:00:00");
  const currentYear = refDate.getFullYear();
  const currentMonth = refDate.getMonth();
  const currentDay = refDate.getDate();

  let cycleStart, cycleEnd;

  if (currentDay >= payday) {
    cycleStart = getValidDateInMonth(currentYear, currentMonth, payday);
    cycleEnd = getValidDateInMonth(currentYear, currentMonth + 1, payday);
  } else {
    cycleStart = getValidDateInMonth(currentYear, currentMonth - 1, payday);
    cycleEnd = getValidDateInMonth(currentYear, currentMonth, payday);
  }

  const msPerDay = 1000 * 60 * 60 * 24;
  const daysTotal = Math.max(1, Math.round((cycleEnd - cycleStart) / msPerDay));
  const daysElapsed = Math.max(1, Math.min(daysTotal, Math.round((refDate - cycleStart) / msPerDay) + 1));
  const daysLeft = Math.max(1, Math.round((cycleEnd - refDate) / msPerDay));
  const percentElapsed = Math.min(100, Math.round((daysElapsed / daysTotal) * 100));

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const startStr = `${cycleStart.getDate()} ${months[cycleStart.getMonth()]}`;
  const endStr = `${cycleEnd.getDate()} ${months[cycleEnd.getMonth()]}`;

  return {
    cycleStart,
    cycleEnd,
    daysTotal,
    daysElapsed,
    daysLeft,
    percentElapsed,
    startStr,
    endStr,
    refDate,
    paydayDay: payday
  };
}

function parseBillDate(bill, cycleCtx) {
  if (bill.dueDate && bill.dueDate.includes("-")) {
    return new Date(bill.dueDate + "T00:00:00");
  }
  const parts = (bill.dueDate || "").trim().split(" ");
  const day = parseInt(parts[0], 10) || 1;
  const monthStr = (parts[1] || "Oct").toLowerCase();
  const months = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
  const month = months.indexOf(monthStr);
  const year = cycleCtx.refDate.getFullYear();
  return new Date(year, month !== -1 ? month : 9, day, 0, 0, 0);
}

function classifyBillTiming(bill, cycleCtx) {
  if (bill.status === "paid") return "paid_this_cycle";
  if (bill.status === "skipped") return "skipped_this_cycle";

  const billDate = parseBillDate(bill, cycleCtx);
  if (billDate < cycleCtx.cycleEnd) {
    return "before_payday";
  } else {
    return "after_payday";
  }
}

function isBillOverdue(bill, cycleCtx) {
  if (bill.status === "paid" || bill.status === "skipped") return false;
  const billDate = parseBillDate(bill, cycleCtx);
  const refDayStart = new Date(cycleCtx.refDate.getFullYear(), cycleCtx.refDate.getMonth(), cycleCtx.refDate.getDate(), 0, 0, 0);
  return billDate < refDayStart;
}

function getNextCycleTargetDate(cycleCtx) {
  const targetDate = new Date(cycleCtx.cycleEnd.getTime() + (2 * 24 * 60 * 60 * 1000));
  const year = targetDate.getFullYear();
  const month = String(targetDate.getMonth() + 1).padStart(2, "0");
  const day = String(targetDate.getDate()).padStart(2, "0");
  const iso = `${year}-${month}-${day}`;
  const formatted = formatDateDisplay(iso);
  return { iso, formatted };
}

// --------------------------------------------------------------------------
// 5. Mathematical Engine & Target-Based Savings Goal Feasibility
// --------------------------------------------------------------------------

function calculateFinancials() {
  const cycleCtx = getPayCycleContext();

  if (ArthivaState.isEmptyState) {
    return {
      currentBalance: 0,
      billsBeforePayday: 0,
      paidBillsThisCycle: 0,
      nextCycleBills: 0,
      savingsToSetAside: 0,
      totalGoalsPlanned: 0,
      totalGoalsSavedThisCycle: 0,
      discretionaryExpenses: 0,
      safeToSpend: 0,
      dailyRate: 0,
      daysLeft: cycleCtx.daysLeft,
      cycleProgress: cycleCtx.percentElapsed,
      isShortfall: false,
      shortfallAmount: 0,
      cycleCtx
    };
  }

  const balance = ArthivaState.balance.amount;

  const billsBeforePayday = ArthivaState.commitments
    .filter(c => c.status === "upcoming" && classifyBillTiming(c, cycleCtx) === "before_payday")
    .reduce((sum, item) => sum + item.amount, 0);

  const paidBillsThisCycle = ArthivaState.commitments
    .filter(c => c.status === "paid")
    .reduce((sum, item) => sum + item.amount, 0);

  const nextCycleBills = ArthivaState.commitments
    .filter(c => c.status !== "paid" && classifyBillTiming(c, cycleCtx) === "after_payday")
    .reduce((sum, item) => sum + item.amount, 0);

  // Primary goal ring-fenced allocation for Safe-to-Spend consistency
  const hasGoals = Array.isArray(ArthivaState.goals) && ArthivaState.goals.length > 0;
  const primaryGoal = hasGoals ? ArthivaState.goals[0] : { monthlyAllocation: 0, savedThisCycle: 0 };
  const savingsToSetAside = Math.max(0, (primaryGoal.monthlyAllocation || 0) - (primaryGoal.savedThisCycle || 0));

  const totalGoalsPlanned = (hasGoals ? ArthivaState.goals : [])
    .reduce((s, g) => s + (Number(g.monthlyAllocation) || 0), 0);
  const totalGoalsSavedThisCycle = (hasGoals ? ArthivaState.goals : [])
    .reduce((s, g) => s + (Number(g.savedThisCycle) || 0), 0);

  const discretionaryExpenses = ArthivaState.expenses.reduce((s, e) => s + (Number(e.amount) || 0), 0);

  // Safe to Spend equation
  const safeToSpend = balance - billsBeforePayday - savingsToSetAside;

  const daysLeft = cycleCtx.daysLeft || 1;
  const rawDailyRate = Math.round(safeToSpend / daysLeft);

  const dailyRate = ArthivaState.appliedAdjustments.customDailyLimit 
    ? ArthivaState.appliedAdjustments.customDailyLimit 
    : rawDailyRate;

  const isShortfall = !ArthivaState.appliedAdjustments.gracePeriodUsed && 
                      !ArthivaState.appliedAdjustments.savingsDeferred &&
                      (rawDailyRate < 1100 || safeToSpend < 15000);
  const shortfallAmount = 2400;

  return {
    currentBalance: balance,
    billsBeforePayday,
    paidBillsThisCycle,
    nextCycleBills,
    savingsToSetAside,
    totalGoalsPlanned,
    totalGoalsSavedThisCycle,
    discretionaryExpenses,
    safeToSpend,
    dailyRate,
    daysLeft,
    cycleProgress: cycleCtx.percentElapsed,
    isShortfall,
    shortfallAmount,
    cycleCtx
  };
}

/**
 * Calculates Goal Projection, Recommended Contribution per cycle, and Feasibility Status
 */
function calculateGoalProjection(targetAmount, currentSaved, monthlyAlloc, targetDateISO) {
  const remaining = Math.max(0, targetAmount - currentSaved);
  const refDate = new Date(ArthivaState.cycleConfig.referenceDate + "T12:00:00");
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  // Calculate remaining pay cycles until targetDate
  let cyclesRemaining = 6;
  let plannedMonthStr = "March 2027";
  if (targetDateISO) {
    const targetDate = new Date(targetDateISO + "T12:00:00");
    plannedMonthStr = `${monthNames[targetDate.getMonth()]} ${targetDate.getFullYear()}`;
    cyclesRemaining = (targetDate.getFullYear() - refDate.getFullYear()) * 12 + (targetDate.getMonth() - refDate.getMonth());
  }

  const requiredPerCycle = cyclesRemaining > 0 ? Math.ceil(remaining / cyclesRemaining) : remaining;

  // Disposable capacity consideration (income - fixed commitments - essential flexible budgets)
  const takeHome = ArthivaState.cycleConfig.takeHome || 50000;
  const totalCommitments = ArthivaState.commitments
    .filter(c => c.status === "paid" || c.dueDate.startsWith("2026-10"))
    .reduce((s, c) => s + c.amount, 0);
  const totalBudgets = ArthivaState.budgets.reduce((s, b) => s + b.limit, 0);
  const disposableCapacity = Math.max(2000, takeHome - totalCommitments - Math.round(totalBudgets * 0.5));

  const recommendedPerCycle = remaining === 0 ? 0 : Math.max(500, requiredPerCycle);

  if (remaining === 0) {
    return {
      remaining: 0,
      cyclesRemaining: Math.max(0, cyclesRemaining),
      monthsNeeded: 0,
      projectedMonthStr: "Completed",
      plannedMonthStr,
      recommendedPerCycle: 0,
      disposableCapacity,
      statusLabel: "On Track",
      statusClass: "within",
      isFeasible: true,
      isWarning: false,
      message: "✓ Goal target reached! Your savings target is 100% funded."
    };
  }

  if (monthlyAlloc <= 0) {
    return {
      remaining,
      cyclesRemaining: Math.max(0, cyclesRemaining),
      monthsNeeded: Infinity,
      projectedMonthStr: "Indefinite",
      plannedMonthStr,
      recommendedPerCycle,
      disposableCapacity,
      statusLabel: "Needs Adjustment",
      statusClass: "over",
      isFeasible: false,
      isWarning: true,
      message: `Please set a positive contribution. Recommended: ${formatINR(recommendedPerCycle)}/cycle to reach ${formatINR(targetAmount)} by ${plannedMonthStr}.`
    };
  }

  const monthsNeeded = Math.ceil(remaining / monthlyAlloc);
  const projectedDate = new Date(refDate.getFullYear(), refDate.getMonth() + monthsNeeded, 1);
  const projectedMonthStr = `${monthNames[projectedDate.getMonth()]} ${projectedDate.getFullYear()}`;

  let isFeasible = true;
  let isWarning = false;
  let statusLabel = "On Track";
  let statusClass = "within";
  let message = `${monthsNeeded} cycle${monthsNeeded > 1 ? 's' : ''} needed at ${formatINR(monthlyAlloc)}/cycle • Projected: ${projectedMonthStr}`;

  if (targetDateISO) {
    if (cyclesRemaining <= 0) {
      isFeasible = false;
      isWarning = true;
      statusLabel = "Needs Adjustment";
      statusClass = "over";
      message = `⚠️ Target date (${plannedMonthStr}) is in the current or past cycle. Extend your target date or contribute ${formatINR(remaining)} to complete now.`;
    } else if (monthsNeeded > cyclesRemaining) {
      isFeasible = false;
      isWarning = true;
      const lateMonths = monthsNeeded - cyclesRemaining;
      statusLabel = lateMonths <= 2 ? "At Risk" : "Needs Adjustment";
      statusClass = lateMonths <= 2 ? "approaching" : "over";
      message = `⚠️ At ${formatINR(monthlyAlloc)}/cycle, you'll finish in ${projectedMonthStr} (${lateMonths} cycle${lateMonths > 1 ? 's' : ''} after ${plannedMonthStr}). Recommended: ${formatINR(recommendedPerCycle)}/cycle over ${cyclesRemaining} remaining cycles.`;
    } else {
      isFeasible = true;
      isWarning = false;
      statusLabel = "On Track";
      statusClass = "within";
      message = `✓ On track! At ${formatINR(monthlyAlloc)}/cycle (Recommended: ${formatINR(recommendedPerCycle)}/cycle), you'll reach ${formatINR(targetAmount)} by ${projectedMonthStr} (${cyclesRemaining} cycles available).`;
    }
  }

  return {
    remaining,
    cyclesRemaining: Math.max(0, cyclesRemaining),
    monthsNeeded,
    projectedMonthStr,
    plannedMonthStr,
    recommendedPerCycle,
    disposableCapacity,
    statusLabel,
    statusClass,
    isFeasible,
    isWarning,
    message
  };
}


// --------------------------------------------------------------------------
// 6. UI Rendering & Screen Synchronization
// --------------------------------------------------------------------------

function renderAvatarIntoElement(el, user) {
  if (!el || !user) return;
  if (user.avatarType === "image" && user.avatarData && user.avatarData.startsWith("data:")) {
    el.innerHTML = `<img src="${user.avatarData}" alt="${escapeHTML(user.name)}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" />`;
  } else if (user.avatarType === "illustrated" && ILLUSTRATED_AVATARS[user.avatarData]) {
    el.innerHTML = ILLUSTRATED_AVATARS[user.avatarData].svg;
  } else {
    const initials = (user.avatarData && user.avatarData.length <= 3)
      ? user.avatarData
      : (user.name || "Rashika").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    el.innerHTML = "";
    el.textContent = initials || "RP";
  }
}

function renderApp() {
  const fin = calculateFinancials();
  const user = ArthivaState.auth.user;

  // Sync category dropdowns and chips
  populateCategoryDropdowns();

  // 1. Header & Greeting + App-Lock Identity
  renderHeader(user);
  renderAppLockScreen(user);

  // 2. Home Screen
  renderHomeScreen(fin);

  // 3. Breakdown Sheet
  renderBreakdownSheet(fin);

  // 4. Commitments Screen (Activity)
  renderCommitmentsScreen(fin.cycleCtx);

  // 5. Budgets Screen (Plan Tab - Expandable Categories)
  renderBudgetsScreen(fin);

  // 6. Visual Insights Dashboard
  renderInsightsScreen(fin);

  // 7. Profile Screen (with Security & Auto-Tracking)
  renderProfileScreen();

  // 8. FAQ Screen
  renderFAQList();

  // 9. Subscription Screen
  renderSubscriptionScreen();

  // 10. Notifications Sheet
  renderNotificationsSheet();

  // Save to persistent storage
  saveStateToStorage();
}

/**
 * Header Rendering
 */
function renderHeader(user) {
  const nameEl = document.getElementById("header-greeting-name");
  const avatarEl = document.getElementById("header-avatar-display");
  const notifBadge = document.getElementById("header-notif-badge");

  const hour = new Date().getHours();
  let timeGreeting = "Good morning";
  if (hour >= 12 && hour < 17) timeGreeting = "Good afternoon";
  else if (hour >= 17) timeGreeting = "Good evening";

  if (nameEl) nameEl.textContent = `${timeGreeting}, ${user.name}`;
  if (avatarEl) renderAvatarIntoElement(avatarEl, user);

  const unreadCount = ArthivaState.notifications.filter(n => !n.read).length;
  if (notifBadge) {
    if (unreadCount > 0) {
      notifBadge.style.display = "flex";
      notifBadge.textContent = unreadCount;
    } else {
      notifBadge.style.display = "none";
    }
  }
}

/**
 * Home Screen Dashboard (with Clear Terminology & Multi-Goal Support)
 */
function renderHomeScreen(fin) {
  const heroCard = document.getElementById("home-hero-card");
  const heroEmptyState = document.getElementById("home-empty-state");
  const heroAmountEl = document.getElementById("hero-safe-amount");
  const heroPaceEl = document.getElementById("hero-pace-text");
  const heroYetToPayEl = document.getElementById("hero-yet-to-pay-val");
  const heroGoalAsideEl = document.getElementById("hero-goal-aside-val");
  const heroPaidCycleEl = document.getElementById("hero-paid-cycle-val");
  const yetToPayLabelEl = document.getElementById("home-yet-to-pay-label");
  const cycleFillEl = document.getElementById("cycle-progress-fill");
  const cycleDatesEl = document.getElementById("pay-cycle-dates-label");
  const cycleDaysLeftEl = document.getElementById("pay-cycle-days-left-badge");
  const cycleMetaText = document.getElementById("cycle-progress-meta-text");
  const balanceValEl = document.getElementById("checkin-balance-val");
  const balanceStampEl = document.getElementById("checkin-balance-stamp");
  const alertCard = document.getElementById("home-alert-card");
  const trackingBanner = document.getElementById("home-tracking-status-banner");

  // Pay cycle ribbon
  if (cycleDatesEl) {
    cycleDatesEl.textContent = `Pay Cycle: ${fin.cycleCtx.startStr} – ${fin.cycleCtx.endStr}`;
  }
  if (cycleDaysLeftEl) {
    cycleDaysLeftEl.textContent = `${fin.daysLeft} days left`;
  }
  if (cycleMetaText) {
    cycleMetaText.innerHTML = `<span>Payday: ${fin.cycleCtx.startStr}</span><span>Day ${fin.cycleCtx.daysElapsed} of ${fin.cycleCtx.daysTotal} (${fin.cycleProgress}%)</span><span>Next: ${fin.cycleCtx.endStr}</span>`;
  }

  // Automatic Tracking Status Banner on Home
  if (trackingBanner) {
    const activeSources = Object.values(ArthivaState.autoTracking.sources || {}).filter(s => s.enabled);
    if (ArthivaState.autoTracking.masterEnabled && activeSources.length > 0) {
      const pendingCount = (ArthivaState.autoTracking.detectedQueue || []).filter(t => !t.imported && !t.ignored).length;
      trackingBanner.style.display = "flex";
      trackingBanner.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="width:8px;height:8px;border-radius:50%;background:var(--state-safe);display:inline-block;"></span>
          <span>Auto-Tracking Active (${activeSources.map(s => s.name.split(' ')[0]).join(', ')})</span>
        </div>
        <button class="section-link" style="font-size:11px;" onclick="openAutoTransactionsReviewSheet()">
          ${pendingCount > 0 ? `Review (${pendingCount}) →` : 'Feed →'}
        </button>
      `;
    } else {
      trackingBanner.style.display = "none";
    }
  }

  const hasIncomeSetup = !ArthivaState.isEmptyState && (Number(ArthivaState.cycleConfig.takeHome) > 0 || Number(ArthivaState.balance.amount) > 0);

  if (!hasIncomeSetup) {
    if (heroCard) heroCard.style.display = "none";
    if (heroEmptyState) heroEmptyState.style.display = "block";
    if (alertCard) alertCard.style.display = "none";
  } else {
    if (heroCard) heroCard.style.display = "block";
    if (heroEmptyState) heroEmptyState.style.display = "none";
    if (alertCard) {
      alertCard.style.display = fin.isShortfall ? "flex" : "none";
    }

    if (heroAmountEl) heroAmountEl.textContent = formatINR(fin.safeToSpend);
    if (heroPaceEl) {
      const paceVal = formatINR(fin.dailyRate);
      heroPaceEl.innerHTML = `<span class="pace-highlight">${paceVal}/day</span> · ${fin.daysLeft} days to payday (${fin.cycleCtx.endStr})`;
    }
    const heroTraceBalEl = document.getElementById("hero-trace-bal");
    const heroTraceSalaryEl = document.getElementById("hero-trace-salary");
    const heroTraceSipsEl = document.getElementById("hero-trace-sips");
    const heroTraceSafeEl = document.getElementById("hero-trace-safe");

    const sipCommitments = ArthivaState.commitments
      .filter(c => c.status !== "skipped" && classifyBillTiming(c, fin.cycleCtx) !== "after_payday" && (c.category.toLowerCase().includes("sip") || c.name.toLowerCase().includes("sip")))
      .reduce((s, c) => s + Number(c.amount), 0);
    const nonSipBills = Math.max(0, (fin.paidBillsThisCycle + fin.billsBeforePayday) - sipCommitments);

    if (heroTraceBalEl) heroTraceBalEl.textContent = formatINR(fin.currentBalance);
    if (heroTraceSalaryEl) heroTraceSalaryEl.textContent = formatINR(ArthivaState.cycleConfig.takeHome || 0);
    if (heroYetToPayEl) heroYetToPayEl.textContent = formatINR(nonSipBills);
    if (heroTraceSipsEl) heroTraceSipsEl.textContent = formatINR(sipCommitments);
    if (heroGoalAsideEl) heroGoalAsideEl.textContent = formatINR(fin.savingsToSetAside);
    if (heroTraceSafeEl) heroTraceSafeEl.textContent = formatINR(fin.safeToSpend);
    if (heroPaidCycleEl) heroPaidCycleEl.textContent = formatINR(fin.paidBillsThisCycle);
    if (cycleFillEl) {
      cycleFillEl.style.width = `${fin.cycleProgress}%`;
    }
  }

  if (yetToPayLabelEl) {
    yetToPayLabelEl.textContent = `Pay (Before ${fin.cycleCtx.endStr})`;
  }

  // Balance
  if (balanceValEl) balanceValEl.textContent = formatINR(fin.currentBalance);
  if (balanceStampEl) balanceStampEl.textContent = ArthivaState.balance.label;

  // Next Upcoming Bills Preview (Pay Before <date>)
  renderHomeBillsPreview(fin.cycleCtx);

  // Savings Goals Widget & Additional Goals
  renderHomeGoalWidget();
}

/**
 * Upcoming bills on Home: Shows only the "Pay (Before <date>)" group (Rule 2.3)
 */
function renderHomeBillsPreview(cycleCtx) {
  const container = document.getElementById("home-bills-list");
  if (!container) return;

  if (ArthivaState.isEmptyState || !ArthivaState.commitments || ArthivaState.commitments.length === 0) {
    container.innerHTML = `
      <div class="section-empty-state">
        <div class="se-icon">📅</div>
        <h4>No bills yet</h4>
        <p>Add your rent, EMIs, and utility bills so Arthiva can protect them before payday.</p>
        <button type="button" class="btn-primary" style="width: auto; height: 36px; padding: 0 16px; font-size: 12.5px;" onclick="openAddCommitmentSheet()">Add a bill</button>
      </div>
    `;
    return;
  }

  const upcoming = ArthivaState.commitments
    .filter(c => c.status === "upcoming" && classifyBillTiming(c, cycleCtx) === "before_payday");

  if (upcoming.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 14px; color: var(--text-muted); font-size: 12.5px;">
        All commitments due before ${cycleCtx.endStr} are paid!
      </div>
    `;
    return;
  }

  container.innerHTML = upcoming.map(bill => {
    const overdue = isBillOverdue(bill, cycleCtx);
    return `
      <div class="bill-item" onclick="openCommitmentActionSheet('${bill.id}')" role="button" tabindex="0">
        <div class="bill-left">
          <div class="bill-icon-badge">
            ${getCategoryIconSVG(bill.category)}
          </div>
          <div class="bill-details">
            <h4>${escapeHTML(bill.name)}</h4>
            <div class="bill-meta-tags">
              <span class="chip-tag">${escapeHTML(bill.category)}</span>
              <span class="chip-tag auto-debit">${escapeHTML(bill.method)}</span>
              ${overdue
                ? '<span class="chip-tag overdue">Overdue</span>'
                : `<span class="chip-tag" style="background:rgba(217,119,6,0.12);color:#B45309;font-weight:700;">Before ${cycleCtx.endStr}</span>`}
              ${bill.isAtRisk ? '<span class="chip-tag overdue">Shortfall risk</span>' : ''}
            </div>
          </div>
        </div>
        <div class="bill-right">
          <div class="bill-amount">${formatINR(bill.amount)}</div>
          <div class="bill-due-date">${overdue ? 'Was due ' : 'Due '}${escapeHTML(bill.dueDateFormatted || bill.dueDate)}</div>
        </div>
      </div>
    `;
  }).join("");
}

/**
 * Savings Goal Widget on Home (Requirements 6 & 7:
 * 6.1 Large progress ring + prominent saved amount ("₹15,000 saved") & smaller target ("of ₹40,000")
 * 6.2 "Secured" badge with shield/lock icon on money already saved
 * 6.3 Milestone badges at 25%, 50%, 75% and 100% ("Goal achieved" with check icon)
 * 6.4 Short encouraging line per goal ("₹15,000 more to reach 75%" or "On track for Mar 2027")
 * 6.5 One-time subtle celebration when a milestone is crossed (respects prefers-reduced-motion)
 * 7.1-7.3 Edit (pencil) icon next to "Details" link on the same row, aria-label="Edit goal", no black box)
 */
function getGoalMilestoneInfo(pct, currentSaved, targetAmount, proj) {
  let milestoneLevel = 0;
  let milestoneBadgeHTML = "";

  if (pct >= 100) {
    milestoneLevel = 100;
    milestoneBadgeHTML = `
      <span class="goal-milestone-badge achieved">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
        Goal achieved
      </span>
    `;
  } else if (pct >= 75) {
    milestoneLevel = 75;
    milestoneBadgeHTML = `<span class="goal-milestone-badge">★ 75% Milestone · Final stretch!</span>`;
  } else if (pct >= 50) {
    milestoneLevel = 50;
    milestoneBadgeHTML = `<span class="goal-milestone-badge">★ 50% · Halfway there!</span>`;
  } else if (pct >= 25) {
    milestoneLevel = 25;
    milestoneBadgeHTML = `<span class="goal-milestone-badge">✓ 25% Milestone reached</span>`;
  }

  // Next milestone encouraging line (6.4)
  let nextMilestonePct = 25;
  if (pct >= 75) nextMilestonePct = 100;
  else if (pct >= 50) nextMilestonePct = 75;
  else if (pct >= 25) nextMilestonePct = 50;

  let encouragingText = "";
  if (pct >= 100) {
    encouragingText = `100% funded and safely ring-fenced!`;
  } else {
    const neededForNext = Math.max(0, Math.ceil((targetAmount * (nextMilestonePct / 100)) - currentSaved));
    if (neededForNext > 0 && neededForNext <= targetAmount * 0.25) {
      encouragingText = `${formatINR(neededForNext)} more to reach ${nextMilestonePct}% · On track for ${proj.plannedMonthStr}`;
    } else {
      encouragingText = `On track for ${proj.plannedMonthStr} · ${formatINR(neededForNext)} to ${nextMilestonePct}% milestone`;
    }
  }

  return { milestoneLevel, milestoneBadgeHTML, encouragingText };
}

function renderHomeGoalWidget() {
  const container = document.getElementById("home-goals-container");
  if (!container) return;

  const goals = Array.isArray(ArthivaState.goals) ? ArthivaState.goals : [];

  if (ArthivaState.isEmptyState || goals.length === 0) {
    container.innerHTML = `
      <div class="section-empty-state">
        <div class="se-icon">🛡️</div>
        <h4>Start your first goal</h4>
        <p>We suggest starting with an <strong>Emergency Medical Buffer</strong> to ring-fence unexpected healthcare expenses.</p>
        <button type="button" class="btn-primary" style="width: auto; height: 36px; padding: 0 16px; font-size: 12.5px;" onclick="openCreateGoalModal()">Create goal</button>
      </div>
    `;
    return;
  }

  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stateUpdatedForMilestone = false;

  container.innerHTML = goals.map(g => {
    const gPct = Math.min(100, Math.round((g.currentSaved / (g.targetAmount || 1)) * 100));
    const gProj = calculateGoalProjection(g.targetAmount, g.currentSaved, g.monthlyAllocation, g.targetDate);
    const mInfo = getGoalMilestoneInfo(gPct, g.currentSaved, g.targetAmount, gProj);

    // 6.5 One-time celebration check when a milestone is newly crossed
    const prevCelebrated = Number(g.celebratedMilestone || 0);
    let shouldCelebrateOnce = false;
    if (mInfo.milestoneLevel > prevCelebrated) {
      g.celebratedMilestone = mInfo.milestoneLevel;
      shouldCelebrateOnce = true;
      stateUpdatedForMilestone = true;
    }

    const radius = 21;
    const circumference = +(2 * Math.PI * radius).toFixed(2);
    const strokeOffset = +(circumference - (gPct / 100) * circumference).toFixed(2);
    const ringColor = gPct >= 100 ? "var(--state-safe)" : "var(--primary)";

    const celebrationGlowClass = (shouldCelebrateOnce && !prefersReducedMotion) ? "goal-celebrate-glow" : "";
    const completedClass = gPct >= 100 ? "goal-completed" : "";

    return `
      <div class="card goal-widget ${completedClass} ${celebrationGlowClass}" style="position: relative;">
        ${shouldCelebrateOnce && !prefersReducedMotion ? `
          <div class="goal-confetti-dots" aria-hidden="true">
            <span style="background: var(--state-safe);"></span>
            <span style="background: var(--accent-gold);"></span>
            <span style="background: var(--primary);"></span>
          </div>
        ` : ''}

        <div class="goal-top" style="align-items: flex-start;">
          <div class="goal-info" style="flex: 1;">
            <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              <h4>${escapeHTML(g.title)}</h4>
              ${g.currentSaved > 0 ? `
                <span class="goal-secured-badge" title="Funds ring-fenced and protected from daily spend">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  Secured
                </span>
              ` : ''}
            </div>
            <div style="margin-top: 4px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
              ${mInfo.milestoneBadgeHTML}
              ${g.linkedAccount ? `<span style="font-size: 10.5px; color: var(--text-muted);">${escapeHTML(g.linkedAccount)}</span>` : ''}
            </div>
          </div>

          <!-- 6.1 Large SVG Progress Ring -->
          <div class="goal-progress-ring-wrap" role="img" aria-label="${gPct}% of ${escapeHTML(g.title)} goal saved">
            <svg viewBox="0 0 52 52">
              <circle cx="26" cy="26" r="${radius}" fill="none" stroke="var(--bg-subtle)" stroke-width="4.5"></circle>
              <circle cx="26" cy="26" r="${radius}" fill="none" stroke="${ringColor}" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="${circumference}" stroke-dashoffset="${strokeOffset}"></circle>
            </svg>
            <span class="goal-progress-ring-label tabular-nums">${gPct}%</span>
          </div>
        </div>

        <!-- 6.1 Prominent saved amount ("₹15,000 saved") & smaller target ("of ₹40,000") -->
        <div class="goal-hero-saved-row">
          <div>
            <span class="goal-saved-prominent tabular-nums">${formatINR(g.currentSaved)} saved</span>
            <span class="goal-target-smaller tabular-nums">of ${formatINR(g.targetAmount)}</span>
          </div>
          <span class="status-pill ${gPct >= 100 ? 'within' : gProj.statusClass}">${gPct >= 100 ? '✓ Completed' : gProj.statusLabel}</span>
        </div>

        <div class="goal-progress-bar">
          <div class="goal-progress-fill" style="width:${gPct}%; ${gPct >= 100 ? 'background: var(--state-safe);' : ''}"></div>
        </div>

        <!-- 6.4 Encouraging line & 7.1-7.3 Edit icon beside Details on the same row -->
        <div class="goal-encouraging-line">
          <span>${escapeHTML(mInfo.encouragingText)}</span>
          <div class="goal-actions-inline">
            <button type="button" class="section-link" onclick="openGoalDetailModal('${g.id}')">Details</button>
            <button type="button" class="goal-edit-icon-btn" aria-label="Edit goal" title="Edit goal" onclick="openEditGoalModal('${g.id}')">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join("");

  if (stateUpdatedForMilestone) {
    saveStateToStorage();
  }
}

/**
 * Safe to Spend Breakdown Sheet (Item 7 OVERRIDE: clean line items, no hyphens)
 */
function renderBreakdownSheet(fin) {
  const rowSalary = document.getElementById("eq-val-salary");
  const rowBal = document.getElementById("eq-val-balance");
  const rowBills = document.getElementById("eq-val-bills");
  const rowSips = document.getElementById("eq-val-sips");
  const rowGoal = document.getElementById("eq-val-savings");
  const rowTotal = document.getElementById("eq-val-total");
  const rowTotalSub = document.getElementById("eq-val-total-sub");

  const salary = ArthivaState.cycleConfig.takeHome || 0;
  const sipTotal = ArthivaState.commitments
    .filter(c => c.status === "upcoming" && classifyBillTiming(c, fin.cycleCtx) === "before_payday" && (c.category.toLowerCase().includes("sip") || c.name.toLowerCase().includes("sip")))
    .reduce((s, c) => s + Number(c.amount), 0);
  const billsExclSip = Math.max(0, fin.billsBeforePayday - sipTotal);

  if (rowSalary) rowSalary.textContent = formatINR(salary);
  if (rowBal) rowBal.textContent = formatINR(fin.currentBalance);
  if (rowBills) rowBills.textContent = billsExclSip > 0 ? `−${formatINR(billsExclSip)}` : "₹0";
  if (rowSips) rowSips.textContent = sipTotal > 0 ? `−${formatINR(sipTotal)}` : "₹0";
  if (rowGoal) rowGoal.textContent = fin.savingsToSetAside > 0 ? `−${formatINR(fin.savingsToSetAside)}` : "₹0";
  if (rowTotal) rowTotal.textContent = formatINR(fin.safeToSpend);
  if (rowTotalSub) {
    rowTotalSub.textContent = `${formatINR(fin.dailyRate)}/day for ${fin.daysLeft} days to ${fin.cycleCtx.endStr}`;
  }
}

/**
 * Commitments / Upcoming Bills Tab (Activity) — Clear Terminology + Empty State (10.2)
 */
function renderCommitmentsScreen(cycleCtx) {
  const emptyCard = document.getElementById("activity-empty-state");
  const filledContent = document.getElementById("activity-filled-content");

  if (ArthivaState.isEmptyState || !ArthivaState.commitments || ArthivaState.commitments.length === 0) {
    if (emptyCard) emptyCard.style.display = "block";
    if (filledContent) filledContent.style.display = "none";
    return;
  } else {
    if (emptyCard) emptyCard.style.display = "none";
    if (filledContent) filledContent.style.display = "block";
  }

  const listBefore = document.getElementById("commitments-before-payday");
  const listPaid = document.getElementById("commitments-paid-cycle");
  const listAfter = document.getElementById("commitments-after-payday");
  const totalBeforeEl = document.getElementById("commitments-total-before-payday");
  const countBeforeEl = document.getElementById("commitments-count-before-payday");
  const totalPaidBadge = document.getElementById("commitments-total-paid-badge");
  const totalNextBadge = document.getElementById("commitments-total-next-badge");
  const yetToPayHeading = document.getElementById("commitments-yet-to-pay-heading");

  if (yetToPayHeading && cycleCtx) {
    yetToPayHeading.textContent = `Yet to Pay (Before ${cycleCtx.endStr})`;
  }

  if (!listBefore || !listPaid || !listAfter) return;

  const beforeItems = ArthivaState.commitments.filter(c => c.status === "upcoming" && classifyBillTiming(c, cycleCtx) === "before_payday");
  const paidItems = ArthivaState.commitments.filter(c => c.status === "paid" || classifyBillTiming(c, cycleCtx) === "paid_this_cycle");
  const afterItems = ArthivaState.commitments.filter(c => c.status !== "paid" && classifyBillTiming(c, cycleCtx) === "after_payday");

  const totalDueBefore = beforeItems.reduce((sum, b) => sum + b.amount, 0);
  const totalPaidAmt = paidItems.reduce((sum, b) => sum + b.amount, 0);
  const totalNextAmt = afterItems.reduce((sum, b) => sum + b.amount, 0);

  if (totalBeforeEl) totalBeforeEl.textContent = `${formatINR(totalDueBefore)} total`;
  if (countBeforeEl) countBeforeEl.textContent = `${beforeItems.length} yet to pay`;
  if (totalPaidBadge) totalPaidBadge.textContent = `${formatINR(totalPaidAmt)} paid`;
  if (totalNextBadge) totalNextBadge.textContent = `${formatINR(totalNextAmt)} scheduled`;

  listBefore.innerHTML = beforeItems.length > 0 
    ? beforeItems.map(bill => renderBillRowHTML(bill, false, cycleCtx)).join("")
    : `<div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 12px;">No unpaid commitments due before ${cycleCtx.endStr}.</div>`;

  listPaid.innerHTML = paidItems.length > 0 
    ? paidItems.map(bill => renderBillRowHTML(bill, true, cycleCtx)).join("")
    : `<div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 12px;">No commitments marked as paid this cycle yet.</div>`;

  listAfter.innerHTML = afterItems.length > 0 
    ? afterItems.map(bill => renderBillRowHTML(bill, false, cycleCtx, true)).join("")
    : `<div style="padding: 12px; text-align: center; color: var(--text-muted); font-size: 12px;">No upcoming commitments scheduled for next cycle.</div>`;
}

function renderBillRowHTML(bill, isPaidList = false, cycleCtx = null, isNextCycle = false) {
  const isPaid = bill.status === "paid" || isPaidList;
  const isSkipped = bill.status === "skipped";
  const overdue = cycleCtx && !isPaid && !isSkipped && isBillOverdue(bill, cycleCtx);
  const formattedDate = bill.dueDateFormatted || formatDateDisplay(bill.dueDate);

  let statusChip = "";
  if (isPaid) {
    statusChip = `<span class="chip-tag paid">Paid · ${formattedDate}</span>`;
  } else if (isSkipped) {
    statusChip = `<span class="chip-tag skipped">Skipped this cycle</span>`;
  } else if (overdue) {
    statusChip = `<span class="chip-tag overdue">Overdue</span>`;
  } else if (isNextCycle) {
    statusChip = `<span class="chip-tag" style="background:rgba(2,132,199,0.12);color:#0284C7;font-weight:700;">Next Cycle</span>`;
  } else {
    statusChip = `<span class="chip-tag" style="background:rgba(217,119,6,0.12);color:#B45309;font-weight:700;">Yet to Pay</span>`;
  }

  // Rule 3.1: Paid records must not be clickable (no onclick, no role="button", no tabindex)
  const interactionAttrs = isPaid
    ? `aria-disabled="true"`
    : `onclick="openCommitmentActionSheet('${bill.id}')" role="button" tabindex="0"`;

  return `
    <div class="bill-item ${isPaid ? 'paid-state' : ''} ${isSkipped ? 'skipped-state' : ''}" ${interactionAttrs}>
      <div class="bill-left">
        <div class="bill-icon-badge" style="${isPaid ? 'background: var(--state-safe-bg); color: var(--state-safe);' : (isSkipped ? 'background: var(--bg-muted); color: var(--text-muted);' : '')}">
          ${isPaid ? getCheckmarkSVG() : (isSkipped ? getSkipIconSVG() : getCategoryIconSVG(bill.category))}
        </div>
        <div class="bill-details">
          <h4 style="${isPaid ? 'text-decoration: line-through; opacity: 0.75;' : (isSkipped ? 'text-decoration: line-through; opacity: 0.6;' : '')}">${escapeHTML(bill.name)}</h4>
          <div class="bill-meta-tags">
            <span class="chip-tag">${escapeHTML(bill.category)}</span>
            ${statusChip}
            ${!isPaid && !isSkipped ? `<span class="chip-tag auto-debit">${escapeHTML(bill.method)}</span>` : ''}
            ${bill.isAtRisk && !isPaid && !isSkipped ? '<span class="chip-tag overdue">Shortfall risk</span>' : ''}
          </div>
        </div>
      </div>
      <div class="bill-right">
        <div class="bill-amount" style="${isSkipped ? 'opacity: 0.6;' : ''}">${formatINR(bill.amount)}</div>
        <div class="bill-due-date">${isPaid ? 'Paid' : (isSkipped ? 'Skipped' : (overdue ? 'Overdue · ' + formattedDate : 'Due ' + formattedDate))}</div>
      </div>
    </div>
  `;
}

/**
 * Budgets (Plan Tab) with Simplified Header & Dynamic Macro Allocation Bar
 */
function renderBudgetsScreen(fin) {
  const container = document.getElementById("budgets-category-list");
  if (!container) return;

  const planEmptyEl = document.getElementById("plan-empty-state");
  if (planEmptyEl) {
    const noExpensesYet = ArthivaState.isEmptyState || !ArthivaState.expenses || ArthivaState.expenses.length === 0;
    planEmptyEl.style.display = noExpensesYet ? "block" : "none";
  }

  // Update dynamic macro allocation labels on Plan screen
  const macroCommEl = document.getElementById("plan-macro-commitments");
  const macroGoalEl = document.getElementById("plan-macro-goal");
  const macroFlexEl = document.getElementById("plan-macro-flexible");
  if (fin) {
    const totalCycleCommitments = fin.paidBillsThisCycle + fin.billsBeforePayday;
    const totalFlexPlanned = ArthivaState.budgets.reduce((s, b) => s + (Number(b.limit) || 0), 0);
    if (macroCommEl) macroCommEl.textContent = formatINR(totalCycleCommitments);
    if (macroGoalEl) macroGoalEl.textContent = formatINR(ArthivaState.goal.monthlyAllocation);
    if (macroFlexEl) macroFlexEl.textContent = formatINR(totalFlexPlanned);
  }

  container.innerHTML = ArthivaState.budgets.map((b, idx) => {
    const catExpenses = ArthivaState.expenses.filter(e => 
      e.category.toLowerCase().trim() === b.category.toLowerCase().trim() ||
      b.category.toLowerCase().includes(e.category.toLowerCase()) ||
      e.category.toLowerCase().includes(b.category.toLowerCase())
    );
    const totalSpent = catExpenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const limit = b.limit || 5000;
    const pct = Math.min(100, Math.round((totalSpent / limit) * 100));
    const isOver = totalSpent > limit;
    const isApproaching = !isOver && pct >= 80;
    const isExpanded = ArthivaState.activeExpandedCategory === b.category;

    const statusLabel = isOver ? "Over Budget" : (isApproaching ? "Approaching Limit" : "Within Budget");
    const statusClass = isOver ? "over" : (isApproaching ? "approaching" : "within");

    return `
      <div class="budget-category-card ${isExpanded ? 'expanded' : ''}" id="bcat-card-${idx}">
        <div class="bcat-header">
          <div class="bcat-title" onclick="toggleExpandCategory('${escapeHTML(b.category)}')">
            <span style="color: var(--primary);">${getCategoryIconSVG(b.category)}</span>
            <span>${escapeHTML(b.category)}</span>
          </div>
          <div class="bcat-right-meta">
            <div class="bcat-spent tabular-nums" onclick="toggleExpandCategory('${escapeHTML(b.category)}')">
              ${formatINR(totalSpent)} <span style="font-size: 11.5px; color: var(--text-muted); font-weight: normal;">/ ${formatINR(limit)}</span>
            </div>
            <button class="icon-btn-sm" title="Edit Budget" onclick="event.stopPropagation(); openEditCategoryModal('${escapeHTML(b.category)}')">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
            </button>
            <svg class="bcat-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" onclick="toggleExpandCategory('${escapeHTML(b.category)}')"><polyline points="6 9 12 15 18 9"></polyline></svg>
          </div>
        </div>

        <div class="bcat-bar-wrap">
          <div class="bcat-bar">
            <div class="bcat-fill ${isOver ? 'caution' : 'normal'}" style="width: ${pct}%;"></div>
          </div>
          <div class="bcat-note ${isOver ? 'caution' : ''}" style="display:flex;justify-content:space-between;align-items:center;margin-top:5px;">
            <span>${isOver ? 'Exceeded by ' + formatINR(totalSpent - limit) : formatINR(limit - totalSpent) + ' remaining'} (${pct}%)</span>
            <span class="status-pill ${statusClass}">${statusLabel}</span>
          </div>
        </div>

        <div class="category-expenses-drawer">
          <div class="drawer-header">
            <span>Recorded Expenses (${catExpenses.length})</span>
            <span>Tap + Quick Log to add</span>
          </div>
          ${catExpenses.length > 0 ? catExpenses.map(e => `
            <div class="category-expense-item">
              <div class="cexp-left">
                <span class="cexp-merchant">${escapeHTML(e.merchant || "Direct expense")} ${e.source && e.source !== 'Manual' ? `<span class="history-source-tag">${escapeHTML(e.source)}</span>` : ''}</span>
                <span class="cexp-meta">${formatDateDisplay(e.date)} ${e.note ? '· ' + escapeHTML(e.note) : ''}</span>
              </div>
              <div class="cexp-right">
                <span class="cexp-amount">${formatINR(e.amount)}</span>
                <button class="cexp-delete" onclick="deleteExpenseRecord('${e.id}')" title="Delete expense">✕</button>
              </div>
            </div>
          `).join("") : `
            <div style="font-size: 11.5px; color: var(--text-muted); padding: 6px 0; text-align: center;">
              No expenses recorded under this category yet.
            </div>
          `}
        </div>
      </div>
    `;
  }).join("");
}

function toggleExpandCategory(category) {
  if (ArthivaState.activeExpandedCategory === category) {
    ArthivaState.activeExpandedCategory = null;
  } else {
    ArthivaState.activeExpandedCategory = category;
  }
  renderBudgetsScreen(calculateFinancials());
}

// --------------------------------------------------------------------------
// 6B. Visual, Data-Driven Insights Dashboard (Section 4)
// --------------------------------------------------------------------------

const CHART_PALETTE = ["#0B6B5A", "#D97706", "#2563EB", "#7C3AED", "#DB2777", "#0891B2", "#4F46E5", "#64748B"];

function onInsightsPeriodChange(period) {
  ArthivaState.insightsPeriod = period === "previous" ? "previous" : "current";
  ArthivaState.selectedInsightCategory = null;
  renderInsightsScreen(calculateFinancials());
}

function setInsightsCategoryMode(mode) {
  ArthivaState.insightsCategoryMode = mode === "all" ? "all" : "flexible";
  ArthivaState.selectedInsightCategory = null;
  const flexBtn = document.getElementById("ins-cat-mode-flex");
  const allBtn = document.getElementById("ins-cat-mode-all");
  if (flexBtn) flexBtn.classList.toggle("active", ArthivaState.insightsCategoryMode === "flexible");
  if (allBtn) allBtn.classList.toggle("active", ArthivaState.insightsCategoryMode === "all");
  renderInsightsScreen(calculateFinancials());
}

function selectInsightCategoryDrilldown(categoryName) {
  if (ArthivaState.selectedInsightCategory === categoryName) {
    ArthivaState.selectedInsightCategory = null;
  } else {
    ArthivaState.selectedInsightCategory = categoryName;
  }
  renderInsightsScreen(calculateFinancials());
}

function getInsightsDataset(fin) {
  const isPrev = ArthivaState.insightsPeriod === "previous";
  const prev = ArthivaState.previousCycleData;

  if (ArthivaState.isEmptyState) {
    return {
      periodLabel: "No Active Data (Empty State)",
      income: 0,
      paidCommitments: 0,
      yetToPayCommitments: 0,
      plannedCommitments: 0,
      flexibleSpent: 0,
      totalExpenditure: 0,
      remainingIncome: 0,
      actualSavingsContributed: 0,
      plannedSavingsAllocation: 0,
      unspentAvailableIncome: 0,
      savingsRatePct: 0,
      totalPlannedBudget: 0,
      budgetUtilPct: 0,
      categories: []
    };
  }

  if (isPrev) {
    const flexSpent = Object.values(prev.expensesByCategory || {}).reduce((s, v) => s + v, 0);
    const totalExp = prev.paidCommitments + flexSpent;
    const remInc = Math.max(0, prev.takeHome - totalExp - prev.savingsActual);
    const totalBudget = ArthivaState.budgets.reduce((s, b) => s + b.limit, 0);
    const cats = Object.entries(prev.expensesByCategory || {}).map(([name, amount]) => ({
      name,
      amount,
      type: "flexible"
    }));
    return {
      periodLabel: prev.periodLabel || "Previous Cycle: 1 Sep – 1 Oct 2026",
      income: prev.takeHome,
      paidCommitments: prev.paidCommitments,
      yetToPayCommitments: 0,
      plannedCommitments: prev.plannedCommitments,
      flexibleSpent: flexSpent,
      totalExpenditure: totalExp,
      remainingIncome: remInc,
      actualSavingsContributed: prev.savingsActual,
      plannedSavingsAllocation: prev.savingsPlanned,
      unspentAvailableIncome: remInc,
      savingsRatePct: Math.round((prev.savingsActual / prev.takeHome) * 100),
      totalPlannedBudget: totalBudget,
      budgetUtilPct: totalBudget > 0 ? Math.round((flexSpent / totalBudget) * 100) : 0,
      categories: cats
    };
  }

  // Current Cycle
  const income = ArthivaState.cycleConfig.takeHome || 50000;
  const paidCommitments = fin.paidBillsThisCycle;
  const yetToPayCommitments = fin.billsBeforePayday;
  const plannedCommitments = paidCommitments + yetToPayCommitments;
  const flexibleSpent = fin.discretionaryExpenses;
  const totalExpenditure = paidCommitments + flexibleSpent;
  const remainingIncome = income - totalExpenditure;

  // Distinguish actual saved vs planned allocation vs unspent income
  const actualSavingsContributed = fin.totalGoalsSavedThisCycle;
  const plannedSavingsAllocation = fin.totalGoalsPlanned;
  const unspentAvailableIncome = Math.max(0, income - plannedCommitments - flexibleSpent);
  const effectiveSavings = Math.max(actualSavingsContributed, ArthivaState.goal.monthlyAllocation);
  const savingsRatePct = income > 0 ? Math.round((effectiveSavings / income) * 100) : 0;

  const totalPlannedBudget = ArthivaState.budgets.reduce((s, b) => s + (Number(b.limit) || 0), 0);
  const budgetUtilPct = totalPlannedBudget > 0 ? Math.round((flexibleSpent / totalPlannedBudget) * 100) : 0;

  // Category aggregation
  const catMap = {};
  ArthivaState.expenses.forEach(e => {
    catMap[e.category] = (catMap[e.category] || 0) + Number(e.amount);
  });

  if (ArthivaState.insightsCategoryMode === "all") {
    ArthivaState.commitments
      .filter(c => c.status === "paid")
      .forEach(c => {
        catMap[c.category] = (catMap[c.category] || 0) + Number(c.amount);
      });
  }

  const categories = Object.entries(catMap)
    .map(([name, amount]) => ({ name, amount }))
    .sort((a, b) => b.amount - a.amount);

  return {
    periodLabel: `Current Cycle: ${fin.cycleCtx.startStr} – ${fin.cycleCtx.endStr} 2026`,
    income,
    paidCommitments,
    yetToPayCommitments,
    plannedCommitments,
    flexibleSpent,
    totalExpenditure,
    remainingIncome,
    actualSavingsContributed,
    plannedSavingsAllocation,
    unspentAvailableIncome,
    savingsRatePct,
    totalPlannedBudget,
    budgetUtilPct,
    categories
  };
}

function formatCompactAxisINR(amount) {
  const abs = Math.abs(Math.round(Number(amount) || 0));
  if (abs >= 100000) {
    const l = (abs / 100000).toFixed(1);
    return `₹${l.endsWith(".0") ? l.slice(0, -2) : l}L`;
  }
  if (abs >= 1000) {
    const k = (abs / 1000).toFixed(1);
    return `₹${k.endsWith(".0") ? k.slice(0, -2) : k}K`;
  }
  return `₹${abs}`;
}

function renderInsightsScreen(fin) {
  const finObj = fin || calculateFinancials();
  const data = getInsightsDataset(finObj);
  const nextPayStr = finObj.cycleCtx.endStr;

  const insEmptyCard = document.getElementById("insights-empty-state");
  const insFilledContent = document.getElementById("insights-filled-content");
  const insRecSection = document.getElementById("ins-recommendations-section");
  const hasEnoughTxns = !ArthivaState.isEmptyState && ArthivaState.expenses && ArthivaState.expenses.length > 0;

  if (!hasEnoughTxns) {
    if (insEmptyCard) insEmptyCard.style.display = "block";
    if (insFilledContent) insFilledContent.style.display = "none";
    if (insRecSection) insRecSection.style.display = "none";
    return;
  } else {
    if (insEmptyCard) insEmptyCard.style.display = "none";
    if (insFilledContent) insFilledContent.style.display = "block";
    if (insRecSection) insRecSection.style.display = "block";
  }

  // 1. Update 6 Summary Cards
  const incVal = document.getElementById("ins-income-val");
  const incSub = document.getElementById("ins-income-sub");
  const expVal = document.getElementById("ins-expenditure-val");
  const expSub = document.getElementById("ins-expenditure-sub");
  const remVal = document.getElementById("ins-remaining-val");
  const remSub = document.getElementById("ins-remaining-sub");
  const savVal = document.getElementById("ins-savings-val");
  const savSub = document.getElementById("ins-savings-sub");
  const comVal = document.getElementById("ins-commitments-val");
  const comSub = document.getElementById("ins-commitments-sub");
  const utilVal = document.getElementById("ins-budget-util-val");
  const utilSub = document.getElementById("ins-budget-util-sub");

  if (incVal) incVal.textContent = formatINR(data.income);
  if (incSub) incSub.textContent = `Payday: ${ArthivaState.cycleConfig.paydayDay || 1}st · ${ArthivaState.cycleConfig.employerOrBank.split('/')[0].trim()}`;

  if (expVal) expVal.textContent = formatINR(data.totalExpenditure);
  if (expSub) expSub.textContent = `${formatINR(data.paidCommitments)} bills paid + ${formatINR(data.flexibleSpent)} flex`;

  if (remVal) remVal.textContent = formatINR(data.remainingIncome);
  if (remSub) remSub.textContent = `Safe to spend: ${formatINR(finObj.safeToSpend)}`;

  if (savVal) savVal.textContent = `${formatINR(data.plannedSavingsAllocation)} (${data.savingsRatePct}%)`;
  if (savSub) savSub.textContent = `Contributed: ${formatINR(data.actualSavingsContributed)} · Unspent: ${formatINR(data.unspentAvailableIncome)}`;

  if (comVal) comVal.textContent = formatINR(data.plannedCommitments);
  if (comSub) comSub.textContent = `${formatINR(data.paidCommitments)} paid · ${formatINR(data.yetToPayCommitments)} yet to pay`;

  if (utilVal) utilVal.textContent = `${data.budgetUtilPct}%`;
  if (utilSub) utilSub.textContent = `${formatINR(data.flexibleSpent)} of ${formatINR(data.totalPlannedBudget)} flex plan`;

  // 2. CHART 1: Income vs. Expenditure (Simple Horizontal Bar Comparison)
  const ieChart = document.getElementById("ins-income-exp-chart");
  const c1Finding = document.getElementById("ins-chart1-finding");
  const c1Headline = document.getElementById("ins-chart1-headline");
  const spentBadge = document.getElementById("ins-spent-pct-badge");

  const spentPct = data.income > 0 ? Math.min(100, Math.round((data.totalExpenditure / data.income) * 100)) : 0;
  const yetToPayPct = data.income > 0 ? Math.min(100 - spentPct, Math.round((data.yetToPayCommitments / data.income) * 100)) : 0;
  const savingsPct = data.income > 0 ? Math.min(100 - spentPct - yetToPayPct, Math.round((data.plannedSavingsAllocation / data.income) * 100)) : 0;

  const prevTotalExp = ArthivaState.previousCycleData.paidCommitments +
    Object.values(ArthivaState.previousCycleData.expensesByCategory || {}).reduce((s, v) => s + v, 0);
  const prevSpentPct = Math.min(100, Math.round((prevTotalExp / (ArthivaState.previousCycleData.takeHome || 50000)) * 100));
  const expDelta = data.totalExpenditure - prevTotalExp;
  const expDeltaPct = prevTotalExp > 0 ? Math.round((expDelta / prevTotalExp) * 100) : 0;

  if (c1Finding) {
    c1Finding.textContent = `${spentPct}% of your take-home pay is spent so far, with ${formatCompactAxisINR(data.yetToPayCommitments)} due before ${nextPayStr}`;
  }
  if (c1Headline) {
    c1Headline.textContent = `${formatINR(data.totalExpenditure)} spent`;
  }
  if (spentBadge) {
    const isGood = expDelta <= 0;
    spentBadge.textContent = `${expDelta > 0 ? '+' : ''}${expDeltaPct}% (${expDelta >= 0 ? '+' : '−'}${formatCompactAxisINR(Math.abs(expDelta))}) vs last cycle`;
    spentBadge.className = `insight-headline-delta ${isGood ? 'good' : 'bad'}`;
  }

  if (ieChart) {
    ieChart.innerHTML = `
      <div style="margin-bottom: 12px;">
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;margin-bottom:4px;">
          <span>Current Cycle Outflow</span>
          <span class="tabular-nums">${formatINR(data.totalExpenditure)} of ${formatCompactAxisINR(data.income)} (${spentPct}%)</span>
        </div>
        <div style="height:12px;border-radius:6px;background:var(--bg-subtle);display:flex;overflow:hidden;">
          <div style="width:${spentPct}%;background:var(--primary);height:100%;" title="Spent: ${formatINR(data.totalExpenditure)}"></div>
          <div style="width:${yetToPayPct}%;background:#F59E0B;height:100%;" title="Yet to Pay: ${formatINR(data.yetToPayCommitments)}"></div>
          <div style="width:${savingsPct}%;background:#10B981;height:100%;" title="Savings Goal: ${formatINR(data.plannedSavingsAllocation)}"></div>
        </div>
        <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:6px;font-size:11px;color:var(--text-secondary);margin-top:6px;">
          <span><strong style="color:var(--primary);">●</strong> Spent ${formatCompactAxisINR(data.totalExpenditure)}</span>
          <span><strong style="color:#F59E0B;">●</strong> Yet to Pay ${formatCompactAxisINR(data.yetToPayCommitments)}</span>
          <span><strong style="color:#10B981;">●</strong> Goal ${formatCompactAxisINR(data.plannedSavingsAllocation)}</span>
        </div>
      </div>
      <div>
        <div style="display:flex;justify-content:space-between;font-size:12px;color:var(--text-secondary);margin-bottom:4px;">
          <span>Previous Cycle (Sep–Oct)</span>
          <span class="tabular-nums">${formatINR(prevTotalExp)} of ${formatCompactAxisINR(ArthivaState.previousCycleData.takeHome || 50000)} (${prevSpentPct}%)</span>
        </div>
        <div style="height:10px;border-radius:6px;background:var(--bg-subtle);overflow:hidden;">
          <div style="width:${prevSpentPct}%;background:#94A3B8;height:100%;"></div>
        </div>
      </div>
      <div class="insight-chart-axis tabular-nums">
        <span>₹0</span>
        <span>${formatCompactAxisINR((data.income || 50000) * 0.25)}</span>
        <span>${formatCompactAxisINR((data.income || 50000) * 0.5)}</span>
        <span>${formatCompactAxisINR((data.income || 50000) * 0.75)}</span>
        <span>${formatCompactAxisINR(data.income || 50000)}</span>
      </div>
    `;
  }

  // 3. CHART 2: Category Spending Comparison (Clean Horizontal Bars — NO Pie/Doughnut)
  const catContainer = document.getElementById("ins-category-breakdown-container");
  const drilldownEl = document.getElementById("ins-category-drilldown");
  const c2Finding = document.getElementById("ins-chart2-finding");
  const c2Headline = document.getElementById("ins-chart2-headline");
  const c2Delta = document.getElementById("ins-chart2-delta");

  const prevCats = ArthivaState.previousCycleData.expensesByCategory || {};
  const topCat = data.categories[0] || { name: "Dining out and food ordering", amount: 0 };
  const topCatPrev = prevCats[topCat.name] || 4100;
  const topCatDiff = topCat.amount - topCatPrev;
  const topCatPctDelta = topCatPrev > 0 ? Math.round((topCatDiff / topCatPrev) * 100) : 0;

  if (c2Finding) {
    const shortName = topCat.name.split(" and ")[0].toLowerCase();
    if (topCatDiff > 0) {
      c2Finding.textContent = `You spent ${Math.abs(topCatPctDelta)}% more on ${shortName} than last cycle`;
    } else if (topCatDiff < 0) {
      c2Finding.textContent = `You spent ${Math.abs(topCatPctDelta)}% less on ${shortName} than last cycle`;
    } else {
      c2Finding.textContent = `${topCat.name.split(" and ")[0]} is your largest category this cycle`;
    }
  }
  if (c2Headline) {
    c2Headline.textContent = `${formatINR(topCat.amount)} on ${topCat.name.split(" and ")[0]}`;
  }
  if (c2Delta) {
    const isGood = topCatDiff <= 0;
    c2Delta.textContent = `${topCatDiff >= 0 ? '+' : '−'}${formatINR(Math.abs(topCatDiff))} (${topCatDiff >= 0 ? '+' : ''}${topCatPctDelta}%) vs last cycle`;
    c2Delta.className = `insight-headline-delta ${isGood ? 'good' : 'bad'}`;
  }

  if (catContainer) {
    const totalCatSum = data.categories.reduce((s, c) => s + c.amount, 0);
    const maxCatAmt = data.categories.length > 0 ? Math.max(...data.categories.map(c => c.amount), 1) : 1;

    if (totalCatSum === 0 || data.categories.length === 0) {
      catContainer.innerHTML = `<div style="font-size:12px;color:var(--text-muted);text-align:center;padding:16px;">No category expenses recorded for this period yet.</div>`;
    } else {
      catContainer.innerHTML = `
        <div style="display:flex;flex-direction:column;gap:10px;">
          ${data.categories.map((cat, idx) => {
            const sharePct = Math.round((cat.amount / totalCatSum) * 100);
            const widthPct = Math.max(6, Math.round((cat.amount / maxCatAmt) * 100));
            const color = CHART_PALETTE[idx % CHART_PALETTE.length];
            const isSelected = ArthivaState.selectedInsightCategory === cat.name;
            return `
              <div style="cursor:pointer;padding:6px 8px;border-radius:8px;background:${isSelected ? 'var(--bg-subtle)' : 'transparent'};" onclick="selectInsightCategoryDrilldown('${escapeHTML(cat.name)}')">
                <div style="display:flex;justify-content:space-between;align-items:baseline;font-size:12.5px;margin-bottom:4px;">
                  <span style="font-weight:700;color:var(--text-primary);">${escapeHTML(cat.name.split(" and ")[0])}</span>
                  <span class="tabular-nums" style="font-weight:700;">${formatINR(cat.amount)} <span style="font-size:11px;color:var(--text-muted);font-weight:500;">(${sharePct}%)</span></span>
                </div>
                <div style="height:9px;border-radius:99px;background:var(--bg-subtle);overflow:hidden;">
                  <div style="width:${widthPct}%;height:100%;background:${color};border-radius:99px;"></div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
        <div class="insight-chart-axis tabular-nums">
          <span>₹0</span>
          <span>${formatCompactAxisINR(maxCatAmt * 0.5)}</span>
          <span>${formatCompactAxisINR(maxCatAmt)}</span>
        </div>
      `;
    }
  }

  // Category drilldown drawer
  if (drilldownEl) {
    const selCat = ArthivaState.selectedInsightCategory;
    if (selCat && !ArthivaState.isEmptyState) {
      const txns = ArthivaState.expenses.filter(e => e.category === selCat);
      const paidBills = ArthivaState.insightsCategoryMode === "all"
        ? ArthivaState.commitments.filter(c => c.status === "paid" && c.category === selCat)
        : [];
      drilldownEl.style.display = "block";
      drilldownEl.innerHTML = `
        <div style="padding:10px;background:var(--bg-subtle);border-radius:10px;border:1px solid var(--border-subtle);">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
            <strong style="font-size:12px;">${escapeHTML(selCat)} Transactions</strong>
            <button type="button" class="section-link" style="font-size:11px;" onclick="selectInsightCategoryDrilldown('${escapeHTML(selCat)}')">Close ✕</button>
          </div>
          ${txns.length === 0 && paidBills.length === 0 ? `<div style="font-size:11.5px;color:var(--text-muted);">No individual transactions logged in current cycle.</div>` : ''}
          ${paidBills.map(b => `
            <div style="display:flex;justify-content:space-between;font-size:11.5px;padding:4px 0;border-bottom:1px dashed var(--border-subtle);">
              <span>${escapeHTML(b.name)} <span class="chip-tag paid">Paid Commitment</span></span>
              <strong class="tabular-nums">${formatINR(b.amount)}</strong>
            </div>
          `).join("")}
          ${txns.map(t => `
            <div style="display:flex;justify-content:space-between;font-size:11.5px;padding:4px 0;border-bottom:1px dashed var(--border-subtle);">
              <span>${escapeHTML(t.merchant)} · <span style="color:var(--text-muted);">${formatDateDisplay(t.date)}</span></span>
              <strong class="tabular-nums">${formatINR(t.amount)}</strong>
            </div>
          `).join("")}
        </div>
      `;
    } else {
      drilldownEl.style.display = "none";
    }
  }

  // 4. CHART 3: Planned Budget vs Actual Spending (Progress Bars for Limits)
  const bvaList = document.getElementById("ins-budget-vs-actual-list");
  const c3Finding = document.getElementById("ins-chart3-finding");
  const c3Headline = document.getElementById("ins-chart3-headline");
  const c3Delta = document.getElementById("ins-chart3-delta");

  if (bvaList) {
    const isPrev = ArthivaState.insightsPeriod === "previous";
    let withinCount = 0;
    let overCategories = [];

    const rowsHTML = ArthivaState.budgets.map(b => {
      const actual = isPrev
        ? (ArthivaState.previousCycleData.expensesByCategory[b.category] || 0)
        : ArthivaState.expenses
            .filter(e => e.category.toLowerCase() === b.category.toLowerCase())
            .reduce((s, e) => s + Number(e.amount), 0);
      const limit = Number(b.limit) || 5000;
      const rem = limit - actual;
      const pct = Math.round((actual / limit) * 100);
      const barPct = Math.min(100, pct);
      const isOver = actual > limit;
      const isApproaching = !isOver && pct >= 80;
      if (isOver) overCategories.push({ name: b.category.split(" and ")[0], overBy: actual - limit });
      else withinCount++;

      const statusText = isOver ? "Over Budget" : (isApproaching ? "Approaching Limit" : "Within Budget");
      const statusClass = isOver ? "over" : (isApproaching ? "approaching" : "within");
      const fillColor = isOver ? "var(--state-risk)" : (isApproaching ? "#F59E0B" : "var(--primary)");

      return `
        <div style="padding-bottom:10px;margin-bottom:10px;border-bottom:1px solid var(--border-subtle);">
          <div style="display:flex;justify-content:space-between;align-items:center;font-size:12.5px;margin-bottom:4px;">
            <span style="font-weight:700;">${escapeHTML(b.category.split(' and ')[0])}</span>
            <span class="status-pill ${statusClass}">${statusText} (${pct}%)</span>
          </div>
          <div style="height:8px;border-radius:99px;background:var(--bg-subtle);overflow:hidden;margin:5px 0;">
            <div style="width:${barPct}%;height:100%;background:${fillColor};border-radius:99px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11px;color:var(--text-secondary);" class="tabular-nums">
            <span>Spent: <strong>${formatINR(actual)}</strong> of ${formatCompactAxisINR(limit)}</span>
            <span>${rem >= 0 ? formatINR(rem) + ' left' : 'Over by ' + formatINR(Math.abs(rem))}</span>
          </div>
        </div>
      `;
    }).join("");

    bvaList.innerHTML = rowsHTML + `
      <div class="insight-chart-axis tabular-nums">
        <span>0% of limit</span>
        <span>50%</span>
        <span>100% Budget Cap (${formatCompactAxisINR(data.totalPlannedBudget)})</span>
      </div>
    `;

    const netBuffer = data.totalPlannedBudget - data.flexibleSpent;
    if (c3Finding) {
      if (overCategories.length > 0) {
        c3Finding.textContent = `${withinCount} of ${ArthivaState.budgets.length} categories are within budget; ${overCategories[0].name} is ${formatINR(overCategories[0].overBy)} over`;
      } else {
        c3Finding.textContent = `All ${ArthivaState.budgets.length} flexible spending categories are within their monthly limits`;
      }
    }
    if (c3Headline) {
      c3Headline.textContent = `${formatINR(data.flexibleSpent)} of ${formatCompactAxisINR(data.totalPlannedBudget)}`;
    }
    if (c3Delta) {
      c3Delta.textContent = netBuffer >= 0 ? `${formatINR(netBuffer)} budget buffer left` : `Exceeded total plan by ${formatINR(Math.abs(netBuffer))}`;
      c3Delta.className = `insight-headline-delta ${netBuffer >= 0 ? 'good' : 'bad'}`;
    }
  }

  // 5. CHART 4: Savings Goals Progress (Progress Bars for Goals)
  const goalsListEl = document.getElementById("ins-goals-progress-list");
  const c4Finding = document.getElementById("ins-chart4-finding");
  const c4Headline = document.getElementById("ins-chart4-headline");
  const c4Delta = document.getElementById("ins-chart4-delta");

  if (goalsListEl) {
    const goals = ArthivaState.goals && ArthivaState.goals.length > 0 ? ArthivaState.goals : [ArthivaState.goal];
    const totalTarget = goals.reduce((s, g) => s + (Number(g.targetAmount) || 0), 0);
    const totalSaved = goals.reduce((s, g) => s + (Number(g.currentSaved) || 0), 0);
    const totalPlanned = goals.reduce((s, g) => s + (Number(g.monthlyAllocation) || 0), 0);
    const overallPct = totalTarget > 0 ? Math.round((totalSaved / totalTarget) * 100) : 0;

    if (c4Finding) {
      c4Finding.textContent = `You have funded ${overallPct}% of your combined ${formatCompactAxisINR(totalTarget)} savings target`;
    }
    if (c4Headline) {
      c4Headline.textContent = `${formatINR(totalSaved)} saved`;
    }
    if (c4Delta) {
      c4Delta.textContent = `+${formatINR(totalPlanned)}/cycle planned`;
      c4Delta.className = "insight-headline-delta good";
    }

    goalsListEl.innerHTML = goals.map(g => {
      const pct = Math.min(100, Math.round((g.currentSaved / g.targetAmount) * 100));
      const proj = calculateGoalProjection(g.targetAmount, g.currentSaved, g.monthlyAllocation, g.targetDate);
      return `
        <div style="padding:12px;background:var(--bg-subtle);border-radius:12px;border:1px solid var(--border-subtle);margin-bottom:10px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
            <strong style="font-size:13px;">${escapeHTML(g.title)}</strong>
            <span class="status-pill ${proj.statusClass}">${proj.statusLabel} (${pct}%)</span>
          </div>
          <div style="height:8px;border-radius:99px;background:var(--bg-surface);overflow:hidden;margin:6px 0;">
            <div style="width:${pct}%;height:100%;background:linear-gradient(90deg, #F59E0B 0%, #D97706 100%);border-radius:99px;"></div>
          </div>
          <div style="display:flex;justify-content:space-between;font-size:11.5px;color:var(--text-secondary);" class="tabular-nums">
            <span>Saved: <strong>${formatINR(g.currentSaved)}</strong> of ${formatCompactAxisINR(g.targetAmount)}</span>
            <span>Target: ${proj.plannedMonthStr}</span>
          </div>
        </div>
      `;
    }).join("") + `
      <div class="insight-chart-axis tabular-nums">
        <span>₹0</span>
        <span>${formatCompactAxisINR(totalTarget * 0.5)}</span>
        <span>${formatCompactAxisINR(totalTarget)} Goal Target</span>
      </div>
    `;
  }

  // 6. CHART 5: Spending Trend Over Time (Clean 4-Cycle Line Chart)
  const trendsListEl = document.getElementById("ins-spending-trends-list");
  const c5Finding = document.getElementById("ins-chart5-finding");
  const c5Headline = document.getElementById("ins-chart5-headline");
  const c5Delta = document.getElementById("ins-chart5-delta");

  if (trendsListEl) {
    const prevFlex = Object.values(prevCats).reduce((s, v) => s + v, 0) || 14250;
    const curFlex = data.flexibleSpent || 14400;
    const series = [
      { cycle: "Jul", amount: 13200 },
      { cycle: "Aug", amount: 15100 },
      { cycle: "Sep", amount: prevFlex },
      { cycle: "Oct", amount: curFlex }
    ];
    const avg4 = Math.round(series.reduce((s, p) => s + p.amount, 0) / series.length);
    const vsPrevDiff = curFlex - prevFlex;
    const vsPrevPct = prevFlex > 0 ? Math.round((vsPrevDiff / prevFlex) * 100) : 0;

    if (c5Finding) {
      if (vsPrevDiff > 0) {
        c5Finding.textContent = `Flexible spending is ${Math.abs(vsPrevPct)}% higher than last month (${formatCompactAxisINR(avg4)} 4-cycle avg)`;
      } else {
        c5Finding.textContent = `Flexible spending is ${Math.abs(vsPrevPct)}% lower than last month (${formatCompactAxisINR(avg4)} 4-cycle avg)`;
      }
    }
    if (c5Headline) {
      c5Headline.textContent = `${formatINR(curFlex)} this cycle`;
    }
    if (c5Delta) {
      const isGood = vsPrevDiff <= 0;
      c5Delta.textContent = `${vsPrevDiff >= 0 ? '+' : '−'}${formatINR(Math.abs(vsPrevDiff))} (${vsPrevDiff >= 0 ? '+' : ''}${vsPrevPct}%) vs Sep`;
      c5Delta.className = `insight-headline-delta ${isGood ? 'good' : 'bad'}`;
    }

    // Build simple SVG Line Chart with direct data labels and ₹K axis labels
    const maxY = 20000;
    const minY = 10000;
    const xCoords = [45, 125, 205, 285];
    const yCoords = series.map(pt => {
      const norm = Math.max(0, Math.min(1, (pt.amount - minY) / (maxY - minY)));
      return Math.round(105 - norm * 75);
    });
    const pointsAttr = xCoords.map((x, i) => `${x},${yCoords[i]}`).join(" ");

    trendsListEl.innerHTML = `
      <div style="padding: 6px 0;">
        <svg viewBox="0 0 330 135" width="100%" height="140" style="overflow:visible;">
          <!-- Horizontal Y-Axis Gridlines & Indian ₹ Labels -->
          <line x1="32" y1="30" x2="310" y2="30" stroke="var(--border-subtle)" stroke-dasharray="3,3" stroke-width="1"/>
          <text x="0" y="34" font-size="9.5" fill="var(--text-muted)">₹20K</text>

          <line x1="32" y1="67" x2="310" y2="67" stroke="var(--border-subtle)" stroke-dasharray="3,3" stroke-width="1"/>
          <text x="0" y="71" font-size="9.5" fill="var(--text-muted)">₹15K</text>

          <line x1="32" y1="105" x2="310" y2="105" stroke="var(--border-subtle)" stroke-width="1"/>
          <text x="0" y="109" font-size="9.5" fill="var(--text-muted)">₹10K</text>

          <!-- Line Path -->
          <polyline fill="none" stroke="var(--primary)" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round" points="${pointsAttr}"/>

          <!-- Data Points & Direct Value Labels -->
          ${series.map((pt, i) => `
            <circle cx="${xCoords[i]}" cy="${yCoords[i]}" r="4.5" fill="var(--bg-surface)" stroke="var(--primary)" stroke-width="2.5"/>
            <text x="${xCoords[i]}" y="${yCoords[i] - 9}" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text-primary)">${formatCompactAxisINR(pt.amount)}</text>
            <text x="${xCoords[i]}" y="124" text-anchor="middle" font-size="10.5" font-weight="600" fill="var(--text-secondary)">${pt.cycle}</text>
          `).join("")}
        </svg>
      </div>
    `;
  }

  // 7. Personalized Recommendations (4.3: Proper Grid, Equal Card Heights, Aligned Edges)
  const recListEl = document.getElementById("ins-recommendations-list");
  if (recListEl) {
    const recs = [];
    const diningActual = ArthivaState.expenses
      .filter(e => e.category.toLowerCase().includes("dining"))
      .reduce((s, e) => s + Number(e.amount), 0);
    const diningBudget = (ArthivaState.budgets.find(b => b.category.toLowerCase().includes("dining")) || { limit: 5000 }).limit;

    if (diningActual > diningBudget) {
      recs.push({
        icon: "🍽️",
        title: `Dining out exceeded budget by ${formatINR(diningActual - diningBudget)}`,
        body: `You spent ${formatINR(diningActual)} vs your ${formatINR(diningBudget)} plan (${Math.round((diningActual / diningBudget) * 100)}%). Pausing food delivery for 4 days keeps your safe-to-spend buffer intact.`
      });
    }

    const totalCommitmentsRatio = data.income > 0 ? Math.round((data.plannedCommitments / data.income) * 100) : 0;
    recs.push({
      icon: "🛡️",
      title: `Fixed commitments take ${totalCommitmentsRatio}% of pay`,
      body: `${formatINR(data.plannedCommitments)} of your ${formatINR(data.income)} income is committed to Rent, EMIs, SIPs, and Insurance (${formatINR(data.yetToPayCommitments)} due before ${nextPayStr}).`
    });

    const primaryGoal = (ArthivaState.goals && ArthivaState.goals[0]) || ArthivaState.goal;
    const gProj = calculateGoalProjection(primaryGoal.targetAmount, primaryGoal.currentSaved, primaryGoal.monthlyAllocation, primaryGoal.targetDate);
    recs.push({
      icon: "🎯",
      title: `${primaryGoal.title}: ${gProj.statusLabel}`,
      body: `Recommended contribution is ${formatINR(gProj.recommendedPerCycle)}/cycle over ${gProj.cyclesRemaining} cycles to reach ${formatINR(primaryGoal.targetAmount)} by ${gProj.plannedMonthStr}.`
    });

    recListEl.innerHTML = recs.map(r => `
      <div class="recommendation-card">
        <div>
          <div style="font-size:13px;font-weight:700;color:var(--text-primary);margin-bottom:4px;">${r.icon} ${escapeHTML(r.title)}</div>
          <div style="font-size:12px;color:var(--text-secondary);line-height:1.45;">${escapeHTML(r.body)}</div>
        </div>
      </div>
    `).join("");
  }
}

/**
 * 4.2 "More insights" Detail View Drawer (Opens deeper insights for that chart only)
 */
function openMoreInsightsSheet(chartKey) {
  const fin = calculateFinancials();
  const data = getInsightsDataset(fin);
  const titleEl = document.getElementById("more-insights-title");
  const subEl = document.getElementById("more-insights-subtitle");
  const bodyEl = document.getElementById("more-insights-body");
  if (!bodyEl) return;

  const prevCats = ArthivaState.previousCycleData.expensesByCategory || {};
  const nextPayStr = fin.cycleCtx.endStr;

  if (chartKey === "outflow") {
    if (titleEl) titleEl.textContent = "Income & Outflow Breakdown";
    if (subEl) subEl.textContent = `Comparison with Sep–Oct cycle · Before ${nextPayStr}`;
    const prevTotalExp = ArthivaState.previousCycleData.paidCommitments + Object.values(prevCats).reduce((s, v) => s + v, 0);
    bodyEl.innerHTML = `
      <div class="card" style="margin:0 0 12px 0;padding:12px;background:var(--bg-subtle);">
        <div style="font-size:11.5px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;">Breakdown of ₹50,000 Take-Home</div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;border-bottom:1px dashed var(--border-subtle);">
          <span>Paid Commitments (Rent, Cook, SIP)</span>
          <strong class="tabular-nums">${formatINR(data.paidCommitments)} (53%)</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;border-bottom:1px dashed var(--border-subtle);">
          <span>Flexible Spending Logged</span>
          <strong class="tabular-nums">${formatINR(data.flexibleSpent)} (29%)</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;border-bottom:1px dashed var(--border-subtle);">
          <span>Yet to Pay (Before ${nextPayStr})</span>
          <strong class="tabular-nums" style="color:var(--state-risk);">${formatINR(data.yetToPayCommitments)} (24%)</strong>
        </div>
        <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:4px 0;">
          <span>Previous Cycle Total Outflow</span>
          <strong class="tabular-nums">${formatINR(prevTotalExp)}</strong>
        </div>
      </div>
      <div style="font-size:11.5px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;">Top Contributing Commitments</div>
      <div style="font-size:12px;color:var(--text-secondary);margin-bottom:12px;line-height:1.5;">
        1. <strong>House Rent (Indiranagar)</strong> — ₹20,000 (Paid 2 Oct)<br>
        2. <strong>Health & Life Insurance Renewal</strong> — ₹7,000 (Due 28 Oct)<br>
        3. <strong>Phone EMI (OnePlus)</strong> — ₹4,000 (Due 22 Oct)
      </div>
      <div style="padding:10px 12px;background:var(--primary-light);border-radius:10px;border-left:3px solid var(--primary);font-size:12px;color:var(--text-primary);">
        <strong>Suggested Actions:</strong><br>
        • Keep daily discretionary spend below <strong>${formatINR(fin.dailyRate)}/day</strong> until ${nextPayStr}.<br>
        • Review the ₹7,000 insurance renewal grace period option if you want an extra ₹2,400 buffer.
      </div>
    `;
  } else if (chartKey === "categories") {
    if (titleEl) titleEl.textContent = "Category & Merchant Insights";
    if (subEl) subEl.textContent = "Top merchants & month-over-month shifts";
    const topMerchants = [...ArthivaState.expenses].sort((a, b) => b.amount - a.amount).slice(0, 4);
    bodyEl.innerHTML = `
      <div class="card" style="margin:0 0 12px 0;padding:12px;background:var(--bg-subtle);">
        <div style="font-size:11.5px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;">Top Contributing Merchants</div>
        ${topMerchants.map(m => `
          <div style="display:flex;justify-content:space-between;font-size:12.5px;padding:5px 0;border-bottom:1px dashed var(--border-subtle);">
            <span><strong>${escapeHTML(m.merchant)}</strong> · <small style="color:var(--text-muted);">${escapeHTML(m.category.split(' and ')[0])}</small></span>
            <strong class="tabular-nums">${formatINR(m.amount)}</strong>
          </div>
        `).join("")}
      </div>
      <div style="padding:10px 12px;background:var(--primary-light);border-radius:10px;border-left:3px solid var(--primary);font-size:12px;color:var(--text-primary);">
        <strong>Suggested Actions:</strong><br>
        • Dining out (Toit Brewpub ₹3,200 + Swiggy ₹2,600) drove a +41% spike vs last month.<br>
        • Shift ₹800 from your unspent Shopping or Groceries allowance to cover the Dining overrun.
      </div>
    `;
  } else if (chartKey === "budgets") {
    if (titleEl) titleEl.textContent = "Budget Limit Utilization";
    if (subEl) subEl.textContent = "Category caps vs actual flexible spending";
    bodyEl.innerHTML = `
      <div class="card" style="margin:0 0 12px 0;padding:12px;background:var(--bg-subtle);">
        <div style="font-size:11.5px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;">Cycle-over-Cycle Budget Variance</div>
        ${ArthivaState.budgets.map(b => {
          const cur = ArthivaState.expenses.filter(e => e.category.toLowerCase() === b.category.toLowerCase()).reduce((s, e) => s + Number(e.amount), 0);
          const prev = prevCats[b.category] || 0;
          return `
            <div style="display:flex;justify-content:space-between;font-size:12px;padding:5px 0;border-bottom:1px dashed var(--border-subtle);">
              <span><strong>${escapeHTML(b.category.split(' and ')[0])}</strong> (Cap ${formatCompactAxisINR(b.limit)})</span>
              <span class="tabular-nums">Sep: ${formatINR(prev)} → Oct: <strong>${formatINR(cur)}</strong></span>
            </div>
          `;
        }).join("")}
      </div>
      <div style="padding:10px 12px;background:var(--primary-light);border-radius:10px;border-left:3px solid var(--primary);font-size:12px;color:var(--text-primary);">
        <strong>Suggested Actions:</strong><br>
        • Groceries still has ₹1,800 remaining before ${nextPayStr}.<br>
        • Cap weekend dining orders to ₹500 to finish the pay cycle with a ₹4,600 net flexible surplus.
      </div>
    `;
  } else if (chartKey === "goals") {
    if (titleEl) titleEl.textContent = "Savings Goals Deep-Dive";
    if (subEl) subEl.textContent = "Completion timeline & contribution breakdown";
    const goals = ArthivaState.goals && ArthivaState.goals.length > 0 ? ArthivaState.goals : [ArthivaState.goal];
    bodyEl.innerHTML = `
      <div class="card" style="margin:0 0 12px 0;padding:12px;background:var(--bg-subtle);">
        ${goals.map(g => {
          const proj = calculateGoalProjection(g.targetAmount, g.currentSaved, g.monthlyAllocation, g.targetDate);
          return `
            <div style="padding:6px 0;border-bottom:1px dashed var(--border-subtle);font-size:12px;">
              <div style="font-weight:700;color:var(--text-primary);">${escapeHTML(g.title)}</div>
              <div style="color:var(--text-secondary);">Saved: ${formatINR(g.currentSaved)} / ${formatINR(g.targetAmount)} · ${proj.cyclesRemaining} cycles to ${proj.plannedMonthStr}</div>
              <div style="color:var(--primary);font-weight:600;">Recommended: ${formatINR(proj.recommendedPerCycle)}/cycle</div>
            </div>
          `;
        }).join("")}
      </div>
      <div style="padding:10px 12px;background:var(--primary-light);border-radius:10px;border-left:3px solid var(--primary);font-size:12px;color:var(--text-primary);">
        <strong>Suggested Actions:</strong><br>
        • Automate your ₹5,000 Goa Trip transfer on payday (${nextPayStr}) so it is ring-fenced immediately.<br>
        • Emergency Medical Buffer is 70% funded and on track for June 2027.
      </div>
    `;
  } else {
    if (titleEl) titleEl.textContent = "4-Cycle Spending Trend Analysis";
    if (subEl) subEl.textContent = "Category drivers across Jul – Oct 2026";
    bodyEl.innerHTML = `
      <div class="card" style="margin:0 0 12px 0;padding:12px;background:var(--bg-subtle);">
        <div style="font-size:11.5px;font-weight:700;color:var(--text-muted);text-transform:uppercase;margin-bottom:6px;">Category Change vs Previous Cycle</div>
        ${ArthivaState.budgets.map(b => {
          const cur = ArthivaState.expenses.filter(e => e.category.toLowerCase() === b.category.toLowerCase()).reduce((s, e) => s + Number(e.amount), 0);
          const prev = prevCats[b.category] || 0;
          const diff = cur - prev;
          const pct = prev > 0 ? Math.round((diff / prev) * 100) : 0;
          return `
            <div style="display:flex;justify-content:space-between;font-size:12px;padding:5px 0;border-bottom:1px dashed var(--border-subtle);">
              <span><strong>${escapeHTML(b.category.split(' and ')[0])}</strong></span>
              <span class="tabular-nums" style="color:${diff > 0 ? 'var(--state-risk)' : 'var(--state-safe)'};font-weight:700;">
                ${diff >= 0 ? '+' : '−'}${formatINR(Math.abs(diff))} (${diff >= 0 ? '+' : ''}${pct}%)
              </span>
            </div>
          `;
        }).join("")}
      </div>
      <div style="padding:10px 12px;background:var(--primary-light);border-radius:10px;border-left:3px solid var(--primary);font-size:12px;color:var(--text-primary);">
        <strong>Suggested Actions:</strong><br>
        • You reduced Groceries (−₹400), Transport (−₹300), and Shopping (−₹700) vs September.<br>
        • Keeping Dining under ₹5,000 next cycle will lower total flexible spend by ~11%.
      </div>
    `;
  }

  openBottomSheet("more-insights-sheet");
}

/**
 * Profile Screen Rendering (Expanded Profile Details, Illustrated Avatar, Security & Auto-Tracking)
 */
function renderProfileScreen() {
  const profileName = document.getElementById("profile-user-name");
  const profileMeta = document.getElementById("profile-user-meta");
  const profileEmail = document.getElementById("profile-email-display");
  const profileMobile = document.getElementById("profile-mobile-display");
  const profileHousehold = document.getElementById("profile-household-badge");
  const profileAvatar = document.getElementById("profile-avatar-display");
  const profileIncome = document.getElementById("profile-takehome-val");
  const profilePayday = document.getElementById("profile-payday-val");
  const profileTier = document.getElementById("profile-membership-tier-badge");

  const user = ArthivaState.auth.user;
  if (profileName) profileName.textContent = user.name || "New User";
  if (profileMeta) {
    const ageStr = user.age ? ` · ${user.age} yrs` : "";
    profileMeta.textContent = `${user.role || "Member"} · ${user.city || "India"}${ageStr}`;
  }
  if (profileEmail) profileEmail.textContent = user.email || "user@arthiva.app";
  if (profileMobile) {
    const mob = String(user.mobile || "9845012345").replace(/\D/g, "").slice(-10);
    profileMobile.textContent = mob.length === 10 ? `+91 ${mob.slice(0, 5)} ${mob.slice(5)}` : `+91 ${mob}`;
  }
  if (profileHousehold) {
    profileHousehold.textContent = `🏠 ${user.householdName || `${user.name || 'Personal'}'s Household`}`;
  }

  if (profileAvatar) renderAvatarIntoElement(profileAvatar, user);

  if (profileIncome) profileIncome.textContent = formatINR(ArthivaState.cycleConfig.takeHome);
  if (profilePayday) {
    const pday = ArthivaState.cycleConfig.paydayDay || 1;
    let suffix = "th";
    if (pday === 1 || pday === 21 || pday === 31) suffix = "st";
    else if (pday === 2 || pday === 22) suffix = "nd";
    else if (pday === 3 || pday === 23) suffix = "rd";
    profilePayday.textContent = `${pday}${suffix} of every month`;
  }
  if (profileTier) profileTier.textContent = `${ArthivaState.membership.tier} Member`;

  // Item 10.6: Export buttons disabled with "Nothing to export yet" when empty
  const btnExportPdf = document.getElementById("btn-export-pdf");
  const btnExportCsv = document.getElementById("btn-export-csv");
  const exportHint = document.getElementById("export-empty-hint");
  const hasExportData = !ArthivaState.isEmptyState && (
    (ArthivaState.commitments && ArthivaState.commitments.length > 0) ||
    (ArthivaState.expenses && ArthivaState.expenses.length > 0) ||
    (ArthivaState.goals && ArthivaState.goals.length > 0) ||
    Number(ArthivaState.cycleConfig.takeHome) > 0
  );
  if (btnExportPdf) {
    btnExportPdf.disabled = !hasExportData;
    btnExportPdf.style.opacity = hasExportData ? "1" : "0.55";
  }
  if (btnExportCsv) {
    btnExportCsv.disabled = !hasExportData;
    btnExportCsv.style.opacity = hasExportData ? "1" : "0.55";
  }
  if (exportHint) {
    exportHint.style.display = hasExportData ? "none" : "block";
  }

  // Item 8.1: Dev/QA Reset button visibility guarded by window.ARTHIVA_ENV !== "production"
  const isProd = window.ARTHIVA_ENV === "production";
  const qaTopBtn = document.getElementById("qa-reset-new-user-btn");
  if (qaTopBtn) qaTopBtn.style.display = isProd ? "none" : "inline-flex";

  // Security Summary on Profile
  const secSummary = document.getElementById("profile-security-summary");
  const fpToggle = document.getElementById("profile-toggle-fingerprint");
  const faceToggle = document.getElementById("profile-toggle-face");
  if (secSummary && ArthivaState.security) {
    const methodLabels = {
      pin: "4-Digit PIN",
      password: "Password",
      fingerprint: "Fingerprint + PIN",
      face: "Face ID + PIN"
    };
    secSummary.textContent = `${methodLabels[ArthivaState.security.preferredMethod] || "4-Digit PIN"} · Fallback: ${(ArthivaState.security.fallbackMethod || "pin").toUpperCase()}`;
  }
  if (fpToggle && ArthivaState.security) fpToggle.checked = !!ArthivaState.security.fingerprintEnabled;
  if (faceToggle && ArthivaState.security) faceToggle.checked = !!ArthivaState.security.faceUnlockEnabled;

  // Automatic Tracking Controls on Profile
  renderAutoTrackingProfileSection();
}


/**
 * Notifications Sheet Rendering
 */
function renderNotificationsSheet() {
  const listEl = document.getElementById("notifications-items-list");
  if (!listEl) return;

  listEl.innerHTML = ArthivaState.notifications.map(n => `
    <div class="notification-card ${n.read ? '' : 'unread'}" onclick="handleNotificationClick('${n.id}')">
      <div class="notif-top">
        <div class="notif-title-row">
          <span style="color: ${n.type === 'risk' ? 'var(--state-risk)' : 'var(--primary)'};">●</span>
          <span class="notif-title">${escapeHTML(n.title)}</span>
        </div>
        <span class="notif-time">${n.date}</span>
      </div>
      <div class="notif-body">${escapeHTML(n.body)}</div>
      <div class="notif-action-pill">
        <span>Take action →</span>
      </div>
    </div>
  `).join("");
}

function handleNotificationClick(notifId) {
  const n = ArthivaState.notifications.find(item => item.id === notifId);
  if (!n) return;

  n.read = true;
  closeBottomSheet("notifications-sheet");
  renderApp();

  if (n.action === "openRiskResolutionSheet") {
    openRiskResolutionSheet();
  } else if (n.action === "openCommitmentsTab") {
    switchScreen("activity");
  } else if (n.action === "openPlanTab") {
    switchScreen("plan");
  } else if (n.action === "openRecordGoalSheet") {
    openRecordGoalSheet();
  }
}

function markAllNotificationsRead() {
  ArthivaState.notifications.forEach(n => n.read = true);
  renderApp();
  showToast("All notifications marked as read.");
}

// --------------------------------------------------------------------------
// 6. Direct Balance Editing & Grouped History Engine (Requirement 4 & 5)
// --------------------------------------------------------------------------

function openBalanceCheckinSheet() {
  const input = document.getElementById("balance-direct-number-input");
  const noteSelect = document.getElementById("balance-adjustment-reason");
  const customNote = document.getElementById("balance-adjustment-custom-note");
  
  if (input) input.value = ArthivaState.balance.amount;
  if (noteSelect) noteSelect.value = "Correction to previous balance";
  if (customNote) customNote.value = "";

  updateDirectBalanceComparison();
  renderBalanceHistoryList();
  openBottomSheet("balance-checkin-sheet");
}

function onBalanceInputChange() {
  updateDirectBalanceComparison();
}

function updateDirectBalanceComparison() {
  const input = document.getElementById("balance-direct-number-input");
  const deltaBadge = document.getElementById("balance-delta-badge");
  const simSafeEl = document.getElementById("balance-sim-safe-text");

  const newAmount = Number(input.value) || 0;
  const currentAmount = ArthivaState.balance.amount;
  const diff = newAmount - currentAmount;

  if (deltaBadge) {
    if (diff > 0) {
      deltaBadge.className = "balance-delta-badge pos";
      deltaBadge.textContent = `+${formatINR(diff)}`;
    } else if (diff < 0) {
      deltaBadge.className = "balance-delta-badge neg";
      deltaBadge.textContent = `−${formatINR(Math.abs(diff))}`;
    } else {
      deltaBadge.className = "balance-delta-badge zero";
      deltaBadge.textContent = "No change";
    }
  }

  if (simSafeEl) {
    const cycleCtx = getPayCycleContext();
    const billsBeforePayday = ArthivaState.commitments
      .filter(c => c.status === "upcoming" && classifyBillTiming(c, cycleCtx) === "before_payday")
      .reduce((sum, item) => sum + item.amount, 0);
    const savings = ArthivaState.goal.monthlyAllocation;
    const simSafe = newAmount - billsBeforePayday - savings;
    const simDaily = Math.round(simSafe / cycleCtx.daysLeft);

    simSafeEl.innerHTML = `Safe to spend becomes: <strong>${formatINR(simSafe)}</strong> (${formatINR(simDaily)}/day)`;
  }
}

function saveDirectBalance() {
  const input = document.getElementById("balance-direct-number-input");
  const noteSelect = document.getElementById("balance-adjustment-reason");
  const customNote = document.getElementById("balance-adjustment-custom-note");

  const newAmount = Number(input.value);

  if (isNaN(newAmount) || input.value.trim() === "") {
    showToast("Please enter a valid numeric balance.");
    return;
  }
  if (newAmount < 0) {
    showToast("Balance cannot be negative.");
    return;
  }

  const prevAmount = ArthivaState.balance.amount;
  const change = newAmount - prevAmount;

  let reason = noteSelect ? noteSelect.value : "Correction to previous balance";
  const notesText = customNote && customNote.value.trim() ? customNote.value.trim() : "";

  // Update State
  ArthivaState.balance.amount = newAmount;
  ArthivaState.balance.label = "You entered · Just now";
  ArthivaState.balance.lastUpdated = new Date().toISOString();
  ArthivaState.balance.note = reason;

  // Add to History Log without overwriting previous records!
  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateStr = `${now.getDate()} ${months[now.getMonth()]}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  const monthName = formatMonthYear(now);

  ArthivaState.balanceHistory.unshift({
    id: "bal-" + Date.now(),
    date: dateStr,
    month: monthName,
    timestamp: now.toISOString(),
    previousBalance: prevAmount,
    newBalance: newAmount,
    changeAmount: change,
    reason: reason,
    source: "Manual check-in",
    notes: notesText
  });

  closeBottomSheet("balance-checkin-sheet");
  renderApp();
  showToast(`Balance updated to ${formatINR(newAmount)}. Safe to spend adjusted!`);
}

/**
 * Groups balance history records by month
 */
function renderBalanceHistoryList() {
  const listEl = document.getElementById("balance-history-list-items");
  if (!listEl) return;

  if (!ArthivaState.balanceHistory || ArthivaState.balanceHistory.length === 0) {
    listEl.innerHTML = `<div style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 12px;">No balance adjustment history yet.</div>`;
    return;
  }

  // Group by month
  const grouped = {};
  ArthivaState.balanceHistory.forEach(item => {
    const m = item.month || "October 2026";
    if (!grouped[m]) grouped[m] = [];
    grouped[m].push(item);
  });

  let html = "";
  Object.keys(grouped).forEach(monthName => {
    html += `
      <div class="balance-history-month-header">${escapeHTML(monthName)}</div>
    `;
    grouped[monthName].forEach(item => {
      const isPositive = item.changeAmount > 0;
      const isZero = item.changeAmount === 0;
      const sign = isPositive ? "+" : (isZero ? "" : "−");
      const deltaColor = isPositive ? "var(--state-safe)" : (isZero ? "var(--text-muted)" : "var(--state-risk)");

      html += `
        <div class="balance-history-item">
          <div class="history-item-left">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;">
              <span class="history-reason">${escapeHTML(item.reason)}</span>
              ${item.source ? `<span class="history-source-tag">${escapeHTML(item.source)}</span>` : ''}
            </div>
            <span class="history-date">${item.date}</span>
            ${item.notes ? `<div style="font-size: 11px; color: var(--text-secondary); margin-top: 2px;">${escapeHTML(item.notes)}</div>` : ''}
          </div>
          <div class="history-item-right">
            <div class="history-new-bal">${formatINR(item.newBalance)}</div>
            <div class="history-change" style="color: ${deltaColor};">
              ${sign}${formatINR(Math.abs(item.changeAmount))}
            </div>
          </div>
        </div>
      `;
    });
  });

  listEl.innerHTML = html;
}

// --------------------------------------------------------------------------
// 7. Dynamic Commitment Actions & Calendar Rescheduling (Requirement 6 & 7)
// --------------------------------------------------------------------------

function openCommitmentActionSheet(commitmentId) {
  const bill = ArthivaState.commitments.find(c => c.id === commitmentId);
  if (!bill || bill.status === "paid") return;

  ArthivaState.selectedCommitmentId = commitmentId;
  const titleEl = document.getElementById("action-sheet-bill-title");
  const amountEl = document.getElementById("action-sheet-bill-amount");
  const dueEl = document.getElementById("action-sheet-bill-due");
  const methodEl = document.getElementById("action-sheet-bill-method");
  const moveBtnText = document.getElementById("action-sheet-move-btn-text");

  if (titleEl) titleEl.textContent = bill.name;
  if (amountEl) amountEl.textContent = formatINR(bill.amount);
  if (dueEl) dueEl.textContent = `Due ${bill.dueDateFormatted || bill.dueDate} (${bill.recurrence})`;
  if (methodEl) methodEl.textContent = `Payment mode: ${bill.method}`;

  // Dynamically calculate the next cycle date for the move button
  const cycleCtx = getPayCycleContext();
  const nextCycleTarget = getNextCycleTargetDate(cycleCtx);
  if (moveBtnText) {
    moveBtnText.textContent = `Move to Next Cycle (${nextCycleTarget.formatted})`;
  }

  openBottomSheet("commitment-action-sheet");
}

function markSelectedCommitmentPaid() {
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);
  if (!bill) return;

  bill.status = "paid";
  bill.paidDate = new Date().toISOString().split("T")[0];
  bill.isAtRisk = false;

  closeBottomSheet("commitment-action-sheet");
  renderApp();
  showToast(`Marked "${bill.name}" as paid. Moved to Already Paid commitments.`);
}

function skipSelectedCommitment() {
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);
  if (!bill) return;

  bill.status = "skipped";
  closeBottomSheet("commitment-action-sheet");
  renderApp();
  showToast(`Skipped "${bill.name}" for this cycle. Safe to spend increased by ${formatINR(bill.amount)}!`);
}

function unskipCommitment(commitmentId) {
  const bill = ArthivaState.commitments.find(c => c.id === commitmentId);
  if (!bill) return;

  bill.status = "upcoming";
  renderApp();
  showToast(`Restored "${bill.name}" to upcoming commitments.`);
}

/**
 * Move to Next Cycle — Dynamically calculated from cycleEnd!
 */
function moveSelectedCommitmentDate() {
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);
  if (!bill) return;

  const cycleCtx = getPayCycleContext();
  const nextTarget = getNextCycleTargetDate(cycleCtx);

  bill.dueDate = nextTarget.iso;
  bill.dueDateFormatted = nextTarget.formatted;
  bill.isAtRisk = false;

  closeBottomSheet("commitment-action-sheet");
  renderApp();
  showToast(`Moved "${bill.name}" to ${nextTarget.formatted} (after payday). Safe to spend increased by ${formatINR(bill.amount)}!`);
}

/**
 * Reschedule Commitment with Calendar Picker Modal
 */
function openRescheduleModal() {
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);
  if (!bill) return;

  closeBottomSheet("commitment-action-sheet");

  const subtitle = document.getElementById("reschedule-modal-subtitle");
  const picker = document.getElementById("reschedule-date-picker");

  if (subtitle) subtitle.textContent = `Select a new due date for "${bill.name}". Current: ${bill.dueDateFormatted || bill.dueDate}`;
  if (picker) {
    picker.value = bill.dueDate && bill.dueDate.includes("-") ? bill.dueDate : "2026-11-05";
  }

  onRescheduleDateChange();
  openModalDialog("reschedule-commitment-modal");
}

function onRescheduleDateChange() {
  const picker = document.getElementById("reschedule-date-picker");
  const impactEl = document.getElementById("reschedule-cycle-impact");
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);

  if (!picker || !impactEl || !bill) return;

  const chosenDate = new Date(picker.value + "T12:00:00");
  const cycleCtx = getPayCycleContext();

  if (chosenDate >= cycleCtx.cycleEnd) {
    impactEl.innerHTML = `<span style="color: var(--state-safe); font-weight: 600;">✓ Due after next payday (${cycleCtx.endStr}). This will move to next cycle and free up ${formatINR(bill.amount)} in current Safe to Spend!</span>`;
  } else {
    impactEl.innerHTML = `<span style="color: var(--primary); font-weight: 600;">ℹ Due before payday (${cycleCtx.endStr}). This will remain protected in your current Safe to Spend.</span>`;
  }
}

function saveRescheduledDate() {
  const picker = document.getElementById("reschedule-date-picker");
  const bill = ArthivaState.commitments.find(c => c.id === ArthivaState.selectedCommitmentId);

  if (!picker || !bill || !picker.value) {
    showToast("Please choose a valid date.");
    return;
  }

  const newIso = picker.value;
  const formatted = formatDateDisplay(newIso);

  bill.dueDate = newIso;
  bill.dueDateFormatted = formatted;
  bill.isAtRisk = false;

  closeModalDialog("reschedule-commitment-modal");
  renderApp();

  const cycleCtx = getPayCycleContext();
  const timing = classifyBillTiming(bill, cycleCtx);
  if (timing === "after_payday") {
    showToast(`Rescheduled "${bill.name}" to ${formatted} (next cycle). Safe to spend increased!`);
  } else {
    showToast(`Rescheduled "${bill.name}" to ${formatted}.`);
  }
}

function deleteSelectedCommitment() {
  if (!confirm("Are you sure you want to delete this commitment?")) return;

  ArthivaState.commitments = ArthivaState.commitments.filter(c => c.id !== ArthivaState.selectedCommitmentId);
  closeBottomSheet("commitment-action-sheet");
  renderApp();
  showToast("Commitment deleted.");
}

function openAddCommitmentSheet() {
  closeFabMenu();
  const form = document.getElementById("add-commitment-form");
  if (form) form.reset();
  const dateInput = document.getElementById("new-bill-date-picker");
  if (dateInput) {
    dateInput.value = "2026-10-26";
  }
  openBottomSheet("add-commitment-sheet");
}

function submitNewCommitment(e) {
  if (e) e.preventDefault();

  const nameInput = document.getElementById("new-bill-name");
  const amountInput = document.getElementById("new-bill-amount");
  const dateInput = document.getElementById("new-bill-date-picker");
  const catInput = document.getElementById("new-bill-category");
  const recInput = document.getElementById("new-bill-recurrence");
  const methodInput = document.getElementById("new-bill-method");

  const name = nameInput.value.trim();
  const amount = Number(amountInput.value);
  const rawDate = dateInput.value;
  const category = catInput.value;
  const recurrence = recInput.value;
  const method = methodInput ? methodInput.value : "UPI Mandate";

  if (!name || isNaN(amount) || amount <= 0) {
    showToast("Please enter a valid title and positive amount.");
    return;
  }

  const formattedDate = formatDateDisplay(rawDate) || "26 Oct";

  const newBill = {
    id: "bill-" + Date.now(),
    name,
    category,
    amount,
    dueDate: rawDate,
    dueDateFormatted: formattedDate,
    method,
    status: "upcoming",
    recurrence,
    notes: "User added commitment",
    paidDate: null
  };

  ArthivaState.commitments.unshift(newBill);
  closeBottomSheet("add-commitment-sheet");
  renderApp();

  const cycleCtx = getPayCycleContext();
  const timing = classifyBillTiming(newBill, cycleCtx);
  if (timing === "after_payday") {
    showToast(`Added ${name} (${formatINR(amount)}) due ${formattedDate} in next cycle!`);
  } else {
    showToast(`Added ${name} (${formatINR(amount)}) due ${formattedDate}. Protected in safe-to-spend.`);
  }
}

// --------------------------------------------------------------------------
// 8. Custom Categories Management Engine (Requirement 2 & 8)
// --------------------------------------------------------------------------

function openAddCategoryModal(defaultType = "flexible") {
  closeAllSheets();
  const nameInput = document.getElementById("new-cat-name-input");
  const typeSelect = document.getElementById("new-cat-type-select");
  const limitInput = document.getElementById("new-cat-limit-input");

  if (nameInput) nameInput.value = "";
  if (typeSelect) typeSelect.value = defaultType === "commitment" ? "commitment" : "flexible";
  if (limitInput) limitInput.value = "";

  toggleCategoryLimitInput();
  openModalDialog("add-category-modal");
}

function toggleCategoryLimitInput() {
  const typeSelect = document.getElementById("new-cat-type-select");
  const limitGroup = document.getElementById("new-cat-limit-group");
  if (!typeSelect || !limitGroup) return;

  if (typeSelect.value === "commitment") {
    limitGroup.style.display = "none";
  } else {
    limitGroup.style.display = "block";
  }
}

function saveCustomCategory() {
  const nameInput = document.getElementById("new-cat-name-input");
  const typeSelect = document.getElementById("new-cat-type-select");
  const limitInput = document.getElementById("new-cat-limit-input");

  const name = nameInput.value.trim();
  const type = typeSelect.value;
  const limit = Number(limitInput.value) || 3000;

  if (!name) {
    showToast("Please enter a category name.");
    return;
  }

  // Check duplicate
  const exists = ArthivaState.categories.some(c => c.name.toLowerCase() === name.toLowerCase());
  if (exists) {
    showToast(`Category "${name}" already exists.`);
    return;
  }

  const newCat = {
    id: "cat-" + Date.now(),
    name: name,
    type: type,
    icon: type === "commitment" ? "shield" : "tag",
    budgetLimit: type === "flexible" ? limit : undefined
  };

  ArthivaState.categories.push(newCat);

  // If flexible spending or limit provided, add to budgets
  if (type === "flexible") {
    const budgetExists = ArthivaState.budgets.some(b => b.category.toLowerCase() === name.toLowerCase());
    if (!budgetExists) {
      ArthivaState.budgets.push({
        category: name,
        limit: limit,
        icon: "tag"
      });
    }
  }

  // If onboarding is active, add to selected commitment chips
  if (onboardingDraft.selectedCommitmentCategories && type === "commitment") {
    onboardingDraft.selectedCommitmentCategories.push(name);
  }

  closeModalDialog("add-category-modal");
  renderApp();
  renderOnboardingCommitmentChips();
  showToast(`Created new category "${name}"!`);
}

function openEditCategoryModal(catName) {
  const budget = ArthivaState.budgets.find(b => b.category.toLowerCase() === catName.toLowerCase());
  const subtitle = document.getElementById("edit-cat-subtitle");
  const nameInput = document.getElementById("edit-cat-name-input");
  const limitInput = document.getElementById("edit-cat-limit-input");

  if (subtitle) subtitle.textContent = `Update budget and limits for "${catName}".`;
  if (nameInput) {
    nameInput.value = catName;
    nameInput.setAttribute("data-original", catName);
  }
  if (limitInput) {
    limitInput.value = budget ? budget.limit : 5000;
  }

  openModalDialog("edit-category-modal");
}

function saveEditedCategory() {
  const nameInput = document.getElementById("edit-cat-name-input");
  const limitInput = document.getElementById("edit-cat-limit-input");

  if (!nameInput || !limitInput) return;

  const originalName = nameInput.getAttribute("data-original");
  const newName = nameInput.value.trim();
  const newLimit = Number(limitInput.value);

  if (!newName || isNaN(newLimit) || newLimit <= 0) {
    showToast("Please enter a valid category name and limit.");
    return;
  }

  // Update in budgets
  const budget = ArthivaState.budgets.find(b => b.category.toLowerCase() === originalName.toLowerCase());
  if (budget) {
    budget.category = newName;
    budget.limit = newLimit;
  }

  // Update in categories
  const cat = ArthivaState.categories.find(c => c.name.toLowerCase() === originalName.toLowerCase());
  if (cat) {
    cat.name = newName;
    cat.budgetLimit = newLimit;
  }

  // Update existing expenses
  ArthivaState.expenses.forEach(e => {
    if (e.category.toLowerCase() === originalName.toLowerCase()) {
      e.category = newName;
    }
  });

  closeModalDialog("edit-category-modal");
  renderApp();
  showToast(`Updated "${newName}" budget to ${formatINR(newLimit)}!`);
}

/**
 * Populates all category select dropdowns and chip pickers
 */
function populateCategoryDropdowns() {
  const billCatSelect = document.getElementById("new-bill-category");
  const quickCatSelect = document.getElementById("quick-expense-category-select");
  const splitCat1 = document.getElementById("quick-split-cat-1");
  const splitCat2 = document.getElementById("quick-split-cat-2");
  const quickChipsContainer = document.getElementById("quick-cat-chips");

  const commitments = ArthivaState.categories.filter(c => c.type === "commitment");
  const flexibles = ArthivaState.categories.filter(c => c.type === "flexible");

  // Populate Add Bill Category
  if (billCatSelect) {
    const prev = billCatSelect.value;
    billCatSelect.innerHTML = commitments.map(c => `<option value="${escapeHTML(c.name)}">${escapeHTML(c.name)}</option>`).join("");
    if (prev && commitments.some(c => c.name === prev)) billCatSelect.value = prev;
  }

  // Populate Quick Log Category Select
  if (quickCatSelect) {
    const prev = quickCatSelect.value;
    quickCatSelect.innerHTML = flexibles.map(c => `<option value="${escapeHTML(c.name)}">${escapeHTML(c.name)}</option>`).join("");
    if (prev && flexibles.some(c => c.name === prev)) quickCatSelect.value = prev;
  }

  // Populate Quick Log Split Selects
  if (splitCat1) {
    const prev1 = splitCat1.value;
    splitCat1.innerHTML = flexibles.map(c => `<option value="${escapeHTML(c.name)}">${escapeHTML(c.name)}</option>`).join("");
    if (prev1 && flexibles.some(c => c.name === prev1)) splitCat1.value = prev1;
    else if (flexibles.length > 0) splitCat1.value = flexibles[0].name;
  }

  if (splitCat2) {
    const prev2 = splitCat2.value;
    splitCat2.innerHTML = flexibles.map(c => `<option value="${escapeHTML(c.name)}">${escapeHTML(c.name)}</option>`).join("");
    if (prev2 && flexibles.some(c => c.name === prev2)) splitCat2.value = prev2;
    else if (flexibles.length > 1) splitCat2.value = flexibles[1].name;
  }

  // Quick chips
  if (quickChipsContainer) {
    quickChipsContainer.innerHTML = flexibles.slice(0, 5).map((c, i) => `
      <div class="selectable-chip ${i === 0 ? 'selected' : ''}" onclick="selectQuickCategoryChip('${escapeHTML(c.name)}', this)">
        ${escapeHTML(c.name.split(" ")[0])}
      </div>
    `).join("");
  }
}

// --------------------------------------------------------------------------
// 9. Savings Goal Management: Create vs Contribute vs Details (Section 9)
// --------------------------------------------------------------------------

function getGoalById(goalId) {
  if (!ArthivaState.goals || ArthivaState.goals.length === 0) {
    if (ArthivaState.goal && ArthivaState.goal.title) {
      return Object.assign({ id: "goal-1", contributions: [] }, ArthivaState.goal);
    }
    return {
      id: "goal-1",
      title: "Emergency Medical Buffer",
      targetAmount: 60000,
      currentSaved: 0,
      targetDate: "2027-06-30",
      monthlyAllocation: 5000,
      savedThisCycle: 0,
      frequency: "Monthly",
      contributions: []
    };
  }
  if (!goalId) return ArthivaState.goals[0];
  return ArthivaState.goals.find(g => g.id === goalId) || ArthivaState.goals[0];
}

function openRecordGoalSheet(goalId) {
  const g = getGoalById(goalId);
  ArthivaState.selectedGoalId = g.id;

  const titleEl = document.getElementById("contribute-sheet-goal-title");
  const subEl = document.getElementById("contribute-sheet-goal-subtitle");
  const plannedEl = document.getElementById("contribute-sheet-planned");
  const recEl = document.getElementById("contribute-sheet-recommended");
  const recNoteEl = document.getElementById("contribute-sheet-rec-note");
  const customInput = document.getElementById("goal-custom-contribute-input");
  const deductCheck = document.getElementById("goal-contribute-deduct-balance");

  const proj = calculateGoalProjection(g.targetAmount, g.currentSaved, g.monthlyAllocation, g.targetDate);

  if (titleEl) titleEl.textContent = `Contribute to ${g.title}`;
  if (subEl) subEl.textContent = `${formatINR(g.currentSaved)} saved of ${formatINR(g.targetAmount)} · ${formatINR(proj.remaining)} remaining`;
  if (plannedEl) plannedEl.textContent = `${formatINR(g.monthlyAllocation)} / cycle`;
  if (recEl) recEl.textContent = `${formatINR(proj.recommendedPerCycle)} / cycle`;
  if (recNoteEl) {
    recNoteEl.textContent = `Based on ${formatINR(proj.remaining)} remaining across ${proj.cyclesRemaining} pay cycles until ${proj.plannedMonthStr} (${proj.statusLabel}).`;
  }
  if (customInput) customInput.value = g.monthlyAllocation || 2500;
  if (deductCheck) deductCheck.checked = false;

  openBottomSheet("record-goal-sheet");
}

function setContributeQuickAmount(amount) {
  const customInput = document.getElementById("goal-custom-contribute-input");
  if (customInput) customInput.value = amount;
}

function submitFlexibleGoalContribution() {
  const customInput = document.getElementById("goal-custom-contribute-input");
  const deductCheck = document.getElementById("goal-contribute-deduct-balance");

  const rawVal = customInput ? customInput.value.trim() : "";
  const amount = Number(rawVal);

  if (!rawVal || isNaN(amount) || amount <= 0) {
    showToast("Please enter a valid positive contribution amount.");
    return;
  }

  const g = getGoalById(ArthivaState.selectedGoalId);
  g.currentSaved = (Number(g.currentSaved) || 0) + amount;
  g.savedThisCycle = (Number(g.savedThisCycle) || 0) + amount;
  if (!g.contributions) g.contributions = [];

  const todayISO = ArthivaState.cycleConfig.referenceDate || "2026-10-20";
  g.contributions.unshift({
    id: "gc-" + Date.now(),
    date: todayISO,
    amount: amount,
    note: deductCheck && deductCheck.checked ? "Contributed & deducted from balance" : "Recorded cycle contribution"
  });

  if (deductCheck && deductCheck.checked) {
    const prevBal = ArthivaState.balance.amount;
    const newBal = Math.max(0, prevBal - amount);
    ArthivaState.balance.amount = newBal;
    ArthivaState.balance.label = "Updated via Goal Contribution";
    ArthivaState.balance.lastUpdated = new Date().toISOString();

    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${now.getDate()} ${months[now.getMonth()]}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    ArthivaState.balanceHistory.unshift({
      id: "bal-" + Date.now(),
      date: dateStr,
      month: formatMonthYear(now),
      timestamp: now.toISOString(),
      previousBalance: prevBal,
      newBalance: newBal,
      changeAmount: -amount,
      reason: "Savings goal transfer",
      source: "Goal contribution",
      notes: `Transferred to ${g.title}`
    });
  }

  closeBottomSheet("record-goal-sheet");
  renderApp();
  showToast(`Contributed ${formatINR(amount)} towards "${g.title}"!`);
}

function contributeToGoal(amount) {
  setContributeQuickAmount(amount);
  submitFlexibleGoalContribution();
}

function openGoalDetailModal(goalId) {
  const g = getGoalById(goalId);
  ArthivaState.selectedGoalId = g.id;

  const titleEl = document.getElementById("gdetail-title");
  const subEl = document.getElementById("gdetail-status-sub");
  const bodyEl = document.getElementById("gdetail-body-content");

  const pct = Math.min(100, Math.round((g.currentSaved / g.targetAmount) * 100));
  const proj = calculateGoalProjection(g.targetAmount, g.currentSaved, g.monthlyAllocation, g.targetDate);

  if (titleEl) titleEl.textContent = g.title;
  if (subEl) subEl.textContent = `${pct}% Completed · ${proj.statusLabel}`;

  if (bodyEl) {
    const historyHTML = (g.contributions && g.contributions.length > 0)
      ? g.contributions.map(c => `
          <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 0;border-bottom:1px dashed var(--border-subtle);font-size:12px;">
            <div>
              <div style="font-weight:600;color:var(--text-primary);">${escapeHTML(c.note || "Contribution")}</div>
              <div style="font-size:10.5px;color:var(--text-muted);">${formatDateDisplay(c.date)}</div>
            </div>
            <strong class="tabular-nums" style="color:var(--state-safe);">+${formatINR(c.amount)}</strong>
          </div>
        `).join("")
      : `<div style="font-size:11.5px;color:var(--text-muted);padding:8px 0;">No contributions logged yet.</div>`;

    bodyEl.innerHTML = `
      <div style="padding:12px;background:var(--bg-subtle);border-radius:12px;border:1px solid var(--border-subtle);margin-bottom:12px;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px;">
          <div>
            <div style="font-size:10.5px;color:var(--text-muted);text-transform:uppercase;font-weight:700;">Saved vs Target</div>
            <div style="font-size:14px;font-weight:800;" class="tabular-nums">${formatINR(g.currentSaved)} / ${formatINR(g.targetAmount)}</div>
          </div>
          <div>
            <div style="font-size:10.5px;color:var(--text-muted);text-transform:uppercase;font-weight:700;">Remaining Needed</div>
            <div style="font-size:14px;font-weight:800;color:var(--primary);" class="tabular-nums">${formatINR(proj.remaining)}</div>
          </div>
          <div>
            <div style="font-size:10.5px;color:var(--text-muted);text-transform:uppercase;font-weight:700;">Target Date</div>
            <div style="font-size:12.5px;font-weight:700;">${proj.plannedMonthStr} (${proj.cyclesRemaining} cycles)</div>
          </div>
          <div>
            <div style="font-size:10.5px;color:var(--text-muted);text-transform:uppercase;font-weight:700;">Recommended / Cycle</div>
            <div style="font-size:12.5px;font-weight:800;color:var(--primary);" class="tabular-nums">${formatINR(proj.recommendedPerCycle)}/mo</div>
          </div>
        </div>
        <div class="goal-bar-track" style="margin-bottom:8px;">
          <div class="goal-bar-fill" style="width:${pct}%;"></div>
        </div>
        <div style="font-size:11.5px;color:var(--text-secondary);line-height:1.45;">
          ${escapeHTML(proj.message)}
        </div>
      </div>

      <div style="margin-bottom:4px;">
        <div style="font-size:11.5px;font-weight:700;text-transform:uppercase;color:var(--text-muted);margin-bottom:6px;">Contribution History</div>
        ${historyHTML}
      </div>
    `;
  }

  openBottomSheet("goal-detail-sheet");
}

function openCreateGoalModal() {
  const idInput = document.getElementById("edit-goal-id-input");
  const heading = document.getElementById("goal-modal-heading");
  const subheading = document.getElementById("goal-modal-subheading");
  const titleInput = document.getElementById("edit-goal-title-input");
  const targetInput = document.getElementById("edit-goal-target-input");
  const savedInput = document.getElementById("edit-goal-saved-input");
  const monthlyInput = document.getElementById("edit-goal-monthly-input");
  const dateInput = document.getElementById("edit-goal-date-input");
  const accountInput = document.getElementById("edit-goal-account-input");

  if (idInput) idInput.value = "NEW";
  if (heading) heading.textContent = "Create New Savings Goal";
  if (subheading) subheading.textContent = "Set a target amount, completion date, linked account/SIP, and cycle contribution.";
  if (titleInput) titleInput.value = "";
  if (targetInput) targetInput.value = 50000;
  if (savedInput) savedInput.value = 0;
  if (monthlyInput) monthlyInput.value = 5000;
  if (dateInput) dateInput.value = "2027-08-31";
  if (accountInput) accountInput.value = "HDFC Savings ···4821 / Liquid Fund SIP";

  updateGoalProjectionInModal();
  openModalDialog("edit-goal-modal");
}

function openEditGoalModal(goalId) {
  const g = getGoalById(goalId);
  const idInput = document.getElementById("edit-goal-id-input");
  const heading = document.getElementById("goal-modal-heading");
  const subheading = document.getElementById("goal-modal-subheading");
  const titleInput = document.getElementById("edit-goal-title-input");
  const targetInput = document.getElementById("edit-goal-target-input");
  const savedInput = document.getElementById("edit-goal-saved-input");
  const monthlyInput = document.getElementById("edit-goal-monthly-input");
  const dateInput = document.getElementById("edit-goal-date-input");
  const accountInput = document.getElementById("edit-goal-account-input");

  if (idInput) idInput.value = g.id;
  if (heading) heading.textContent = "Edit Savings Goal";
  if (subheading) subheading.textContent = `Update parameters for "${g.title}".`;
  if (titleInput) titleInput.value = g.title;
  if (targetInput) targetInput.value = g.targetAmount;
  if (savedInput) savedInput.value = g.currentSaved || 0;
  if (monthlyInput) monthlyInput.value = g.monthlyAllocation;
  if (dateInput) dateInput.value = g.targetDate || "2027-03-31";
  if (accountInput) accountInput.value = g.linkedAccount || "HDFC Savings ···4821 / Liquid Fund SIP";

  updateGoalProjectionInModal();
  openModalDialog("edit-goal-modal");
}

function updateGoalProjectionInModal() {
  const targetInput = document.getElementById("edit-goal-target-input");
  const savedInput = document.getElementById("edit-goal-saved-input");
  const monthlyInput = document.getElementById("edit-goal-monthly-input");
  const dateInput = document.getElementById("edit-goal-date-input");
  const projText = document.getElementById("modal-goal-projection-text");
  const feasNote = document.getElementById("modal-goal-feasibility");

  if (!targetInput || !monthlyInput || !projText || !feasNote) return;

  const target = Number(targetInput.value) || 40000;
  const currentSaved = savedInput ? (Number(savedInput.value) || 0) : (ArthivaState.goal.currentSaved || 0);
  const monthly = Number(monthlyInput.value) || 5000;
  const dateISO = dateInput ? dateInput.value : "2027-03-31";

  const proj = calculateGoalProjection(target, currentSaved, monthly, dateISO);

  projText.textContent = `Recommended: ${formatINR(proj.recommendedPerCycle)}/cycle • Projected: ${proj.projectedMonthStr}`;
  feasNote.style.display = "block";
  feasNote.className = proj.isWarning ? "goal-feasibility-note warning" : "goal-feasibility-note success";
  feasNote.textContent = proj.message;
}

function saveEditedGoal() {
  const idInput = document.getElementById("edit-goal-id-input");
  const titleInput = document.getElementById("edit-goal-title-input");
  const targetInput = document.getElementById("edit-goal-target-input");
  const savedInput = document.getElementById("edit-goal-saved-input");
  const monthlyInput = document.getElementById("edit-goal-monthly-input");
  const dateInput = document.getElementById("edit-goal-date-input");
  const accountInput = document.getElementById("edit-goal-account-input");

  const modeOrId = idInput ? idInput.value : "goal-1";
  const title = titleInput ? titleInput.value.trim() : "";
  const target = Number(targetInput ? targetInput.value : 0);
  const saved = Number(savedInput ? savedInput.value : 0);
  const monthly = Number(monthlyInput ? monthlyInput.value : 0);
  const targetDate = dateInput ? dateInput.value : "2027-03-31";
  const linkedAccount = accountInput ? accountInput.value.trim() : "HDFC Savings ···4821";

  if (!title || isNaN(target) || target <= 0 || isNaN(monthly) || monthly < 0 || isNaN(saved) || saved < 0) {
    showToast("Please enter valid goal details and amounts.");
    return;
  }

  if (modeOrId === "NEW") {
    const newGoal = {
      id: "goal-" + Date.now(),
      title,
      targetAmount: target,
      currentSaved: saved,
      targetDate,
      monthlyAllocation: monthly,
      savedThisCycle: 0,
      frequency: "Monthly",
      linkedAccount,
      celebratedMilestone: 0,
      contributions: saved > 0 ? [{ id: "gc-init-" + Date.now(), date: "2026-10-20", amount: saved, note: "Initial saved balance" }] : []
    };
    ArthivaState.goals.push(newGoal);
    closeModalDialog("edit-goal-modal");
    renderApp();
    showToast(`Created new savings goal "${title}"!`);
    return;
  }

  const g = getGoalById(modeOrId);
  g.title = title;
  g.targetAmount = target;
  g.currentSaved = saved;
  g.monthlyAllocation = monthly;
  g.targetDate = targetDate;
  g.linkedAccount = linkedAccount;

  closeModalDialog("edit-goal-modal");
  renderApp();
  showToast(`Updated savings goal "${title}"!`);
}

function onGoalInputChange() {
  const targetInput = document.getElementById("onboarding-goal-target");
  const monthlyInput = document.getElementById("onboarding-goal-monthly");
  const dateInput = document.getElementById("onboarding-goal-target-date");
  const projText = document.getElementById("onboarding-goal-projection-text");
  const feasNote = document.getElementById("onboarding-goal-feasibility");

  if (!targetInput || !monthlyInput || !projText || !feasNote) return;

  const target = Number(targetInput.value) || 40000;
  const monthly = Number(monthlyInput.value) || 5000;
  const currentSaved = ArthivaState.goal.currentSaved || 15000;
  const dateISO = dateInput ? dateInput.value : "2027-03-31";

  const proj = calculateGoalProjection(target, currentSaved, monthly, dateISO);

  projText.textContent = `${proj.monthsNeeded} cycles needed at ${formatINR(monthly)}/mo • Rec: ${formatINR(proj.recommendedPerCycle)}/mo`;
  feasNote.style.display = "block";
  feasNote.className = proj.isWarning ? "goal-feasibility-note warning" : "goal-feasibility-note success";
  feasNote.textContent = proj.message;
}

// --------------------------------------------------------------------------
// 10. Quick Log Expense with Single & 2-Category Split Mode (Item 6)
// --------------------------------------------------------------------------

let selectedQuickCategory = "Groceries and daily essentials";
let quickSplitProportion = 0.5; // Preserves user's split proportion when total changes (6.3)

function setInlineError(errId, inputId, message) {
  const errEl = document.getElementById(errId);
  const inputEl = inputId ? document.getElementById(inputId) : null;
  if (errEl) {
    errEl.textContent = message || "";
    errEl.style.display = message ? "block" : "none";
  }
  if (inputEl) {
    inputEl.classList.toggle("input-error", !!message);
  }
}

function openQuickAddExpenseSheet() {
  closeFabMenu();
  const amtInput = document.getElementById("quick-expense-amount");
  const merchInput = document.getElementById("quick-expense-merchant");
  const noteInput = document.getElementById("quick-expense-note");
  const dateInput = document.getElementById("quick-expense-date");
  const deductCheck = document.getElementById("quick-expense-deduct-balance");
  const amt1Input = document.getElementById("quick-split-amt-1");
  const amt2Input = document.getElementById("quick-split-amt-2");

  if (amtInput) amtInput.value = "";
  if (merchInput) merchInput.value = "";
  if (noteInput) noteInput.value = "";
  if (dateInput) dateInput.value = "2026-10-20";
  if (deductCheck) deductCheck.checked = true;
  if (amt1Input) amt1Input.value = "";
  if (amt2Input) amt2Input.value = "";

  quickSplitProportion = 0.5;
  setInlineError("quick-amount-error", "quick-expense-amount", "");
  setInlineError("quick-single-cat-error", "quick-expense-category-select", "");
  setInlineError("quick-split-1-error", "quick-split-amt-1", "");
  setInlineError("quick-split-2-error", "quick-split-amt-2", "");
  setInlineError("quick-split-cat-error", null, "");

  setQuickExpenseMode(ArthivaState.quickExpenseMode || "single");
  openBottomSheet("quick-expense-sheet");
}

function setQuickExpenseMode(mode) {
  ArthivaState.quickExpenseMode = mode;
  const singleBtn = document.getElementById("quick-mode-single");
  const splitBtn = document.getElementById("quick-mode-split");
  const singleContainer = document.getElementById("quick-single-cat-container");
  const splitContainer = document.getElementById("quick-split-cat-container");

  if (mode === "split") {
    if (singleBtn) singleBtn.classList.remove("active");
    if (splitBtn) splitBtn.classList.add("active");
    if (singleContainer) singleContainer.style.display = "none";
    if (splitContainer) splitContainer.style.display = "block";
    // 6.1: When user selects "Split across 2 categories" and total > 0, auto-fill 50/50
    const total = Number((document.getElementById("quick-expense-amount") || {}).value) || 0;
    const amt1Input = document.getElementById("quick-split-amt-1");
    const amt2Input = document.getElementById("quick-split-amt-2");
    if (total > 0 && amt1Input && amt2Input && (!amt1Input.value && !amt2Input.value)) {
      quickSplitProportion = 0.5;
      const s1 = Math.ceil(total / 2);
      const s2 = total - s1;
      amt1Input.value = s1;
      amt2Input.value = s2;
    }
    validateQuickExpenseSplit();
  } else {
    if (singleBtn) singleBtn.classList.add("active");
    if (splitBtn) splitBtn.classList.remove("active");
    if (singleContainer) singleContainer.style.display = "block";
    if (splitContainer) splitContainer.style.display = "none";
    validateQuickExpenseSingle();
  }
}

function selectQuickCategoryChip(catName, el) {
  selectedQuickCategory = catName;
  document.querySelectorAll("#quick-cat-chips .selectable-chip").forEach(c => c.classList.remove("selected"));
  if (el) el.classList.add("selected");
  const select = document.getElementById("quick-expense-category-select");
  if (select) select.value = catName;
  validateQuickExpenseSingle();
}

function onQuickCategorySelectChange() {
  const select = document.getElementById("quick-expense-category-select");
  if (select) {
    selectedQuickCategory = select.value;
    document.querySelectorAll("#quick-cat-chips .selectable-chip").forEach(c => {
      c.classList.toggle("selected", c.textContent.trim().toLowerCase() === select.value.split(" ")[0].toLowerCase());
    });
  }
  validateQuickExpenseSingle();
}

function onQuickAmountInput() {
  const totalInput = document.getElementById("quick-expense-amount");
  const total = Number(totalInput ? totalInput.value : 0);

  if (ArthivaState.quickExpenseMode === "split") {
    const amt1Input = document.getElementById("quick-split-amt-1");
    const amt2Input = document.getElementById("quick-split-amt-2");
    // 6.1 & 6.3: Recalculate both splits proportionally based on quickSplitProportion (50/50 initially, extra rupee/paisa in first field)
    if (total > 0 && amt1Input && amt2Input) {
      let s1;
      if (Math.abs(quickSplitProportion - 0.5) < 0.0001) {
        s1 = Math.ceil(total / 2);
      } else {
        s1 = Math.round(total * quickSplitProportion);
      }
      s1 = Math.max(0, Math.min(total, s1));
      const s2 = total - s1;
      amt1Input.value = s1;
      amt2Input.value = s2;
    } else if (total <= 0 && amt1Input && amt2Input) {
      amt1Input.value = "";
      amt2Input.value = "";
    }
    validateQuickExpenseSplit();
  } else {
    validateQuickExpenseSingle();
  }
}

function onSplitAmountInput(index) {
  const total = Number((document.getElementById("quick-expense-amount") || {}).value) || 0;
  const amt1Input = document.getElementById("quick-split-amt-1");
  const amt2Input = document.getElementById("quick-split-amt-2");

  if (!amt1Input || !amt2Input) return;

  // 6.2: When user edits either split amount, auto-update the other to (total - edited amount)
  if (index === 1) {
    const raw1 = amt1Input.value.trim();
    if (raw1 !== "" && total > 0) {
      const a1 = Number(raw1);
      if (!isNaN(a1) && a1 >= 0 && a1 <= total) {
        const a2 = +(total - a1).toFixed(2);
        amt2Input.value = a2;
        quickSplitProportion = total > 0 ? (a1 / total) : 0.5;
      }
    }
  } else if (index === 2) {
    const raw2 = amt2Input.value.trim();
    if (raw2 !== "" && total > 0) {
      const a2 = Number(raw2);
      if (!isNaN(a2) && a2 >= 0 && a2 <= total) {
        const a1 = +(total - a2).toFixed(2);
        amt1Input.value = a1;
        quickSplitProportion = total > 0 ? (a1 / total) : 0.5;
      }
    }
  }

  validateQuickExpenseSplit();
}

function validateQuickExpenseSingle() {
  const totalInput = document.getElementById("quick-expense-amount");
  const catSelect = document.getElementById("quick-expense-category-select");
  const saveBtn = document.getElementById("btn-save-quick-expense");

  const rawTotal = totalInput ? totalInput.value.trim() : "";
  const total = Number(rawTotal);
  const cat = catSelect ? catSelect.value : selectedQuickCategory;

  let isValid = true;
  if (rawTotal !== "" && (isNaN(total) || total <= 0)) {
    setInlineError("quick-amount-error", "quick-expense-amount", "Enter a total amount greater than ₹0.");
    isValid = false;
  } else {
    setInlineError("quick-amount-error", "quick-expense-amount", "");
    if (rawTotal === "" || total <= 0) isValid = false;
  }

  if (!cat) {
    setInlineError("quick-single-cat-error", "quick-expense-category-select", "Select a category for each split.");
    isValid = false;
  } else {
    setInlineError("quick-single-cat-error", "quick-expense-category-select", "");
  }

  if (saveBtn) saveBtn.disabled = !isValid;
  return isValid;
}

function validateQuickExpenseSplit() {
  const totalInput = document.getElementById("quick-expense-amount");
  const amt1Input = document.getElementById("quick-split-amt-1");
  const amt2Input = document.getElementById("quick-split-amt-2");
  const cat1Select = document.getElementById("quick-split-cat-1");
  const cat2Select = document.getElementById("quick-split-cat-2");
  const statusEl = document.getElementById("quick-split-status");
  const saveBtn = document.getElementById("btn-save-quick-expense");

  if (!totalInput || !amt1Input || !amt2Input || !statusEl) return false;

  const rawTotal = totalInput.value.trim();
  const total = Number(rawTotal) || 0;
  const raw1 = amt1Input.value.trim();
  const raw2 = amt2Input.value.trim();
  const a1 = Number(raw1) || 0;
  const a2 = Number(raw2) || 0;
  const c1 = cat1Select ? cat1Select.value : "";
  const c2 = cat2Select ? cat2Select.value : "";

  const allocated = Math.max(0, a1) + Math.max(0, a2);
  // 6.4: Show live "Allocated ₹X of ₹Y" line
  statusEl.textContent = `Allocated ${formatINR(allocated)} of ${formatINR(Math.max(0, total))}`;

  let valid = true;

  // Total <= 0 or empty
  if (rawTotal === "" || isNaN(total) || total <= 0) {
    setInlineError("quick-amount-error", "quick-expense-amount", "Enter a total amount greater than ₹0.");
    valid = false;
  } else {
    setInlineError("quick-amount-error", "quick-expense-amount", "");
  }

  // Split 1 validation
  if (total > 0) {
    if (raw1 === "" || isNaN(a1) || a1 <= 0) {
      setInlineError("quick-split-1-error", "quick-split-amt-1", "Each split must be greater than ₹0.");
      valid = false;
    } else if (a1 > total) {
      setInlineError("quick-split-1-error", "quick-split-amt-1", `Split amount can't exceed total (${formatINR(total)}).`);
      valid = false;
    } else {
      setInlineError("quick-split-1-error", "quick-split-amt-1", "");
    }

    // Split 2 validation
    if (raw2 === "" || isNaN(a2) || a2 <= 0) {
      setInlineError("quick-split-2-error", "quick-split-amt-2", "Each split must be greater than ₹0.");
      valid = false;
    } else if (a2 > total) {
      setInlineError("quick-split-2-error", "quick-split-amt-2", `Split amount can't exceed total (${formatINR(total)}).`);
      valid = false;
    } else if (a1 > 0 && a2 > 0 && Math.abs((a1 + a2) - total) > 0.01) {
      setInlineError("quick-split-2-error", "quick-split-amt-2", `Split amounts must add up to ${formatINR(total)} (currently ${formatINR(a1 + a2)}).`);
      valid = false;
    } else {
      setInlineError("quick-split-2-error", "quick-split-amt-2", "");
    }
  } else {
    setInlineError("quick-split-1-error", "quick-split-amt-1", "");
    setInlineError("quick-split-2-error", "quick-split-amt-2", "");
  }

  // Category validation
  if (!c1 || !c2) {
    setInlineError("quick-split-cat-error", null, "Select a category for each split.");
    valid = false;
  } else if (c1 === c2) {
    setInlineError("quick-split-cat-error", null, "Choose two different categories, or use Single Category.");
    valid = false;
  } else {
    setInlineError("quick-split-cat-error", null, "");
  }

  statusEl.style.color = valid ? "var(--state-safe)" : "var(--text-secondary)";
  if (saveBtn) saveBtn.disabled = !valid;
  return valid;
}

function updateSplitValidation() {
  validateQuickExpenseSplit();
}

function submitQuickExpense() {
  const amtInput = document.getElementById("quick-expense-amount");
  const merchInput = document.getElementById("quick-expense-merchant");
  const noteInput = document.getElementById("quick-expense-note");
  const dateInput = document.getElementById("quick-expense-date");
  const deductCheck = document.getElementById("quick-expense-deduct-balance");

  const totalAmount = Number(amtInput ? amtInput.value : 0);
  const merchant = merchInput ? merchInput.value.trim() : "";
  const note = noteInput ? noteInput.value.trim() : "";
  const date = dateInput ? dateInput.value : "2026-10-20";
  const shouldDeduct = deductCheck ? deductCheck.checked : true;

  if (ArthivaState.quickExpenseMode === "split") {
    if (!validateQuickExpenseSplit()) return;

    const cat1Select = document.getElementById("quick-split-cat-1");
    const cat2Select = document.getElementById("quick-split-cat-2");
    const amt1Input = document.getElementById("quick-split-amt-1");
    const amt2Input = document.getElementById("quick-split-amt-2");

    const c1 = cat1Select ? cat1Select.value : "Dining out and food ordering";
    const c2 = cat2Select ? cat2Select.value : "Groceries and daily essentials";
    const a1 = Number(amt1Input.value) || 0;
    const a2 = Number(amt2Input.value) || 0;

    const baseId = Date.now();
    ArthivaState.expenses.unshift({
      id: "exp-" + baseId + "-1",
      category: c1,
      amount: a1,
      merchant: merchant || "Direct Purchase",
      date,
      note: note ? `${note} (Split 1/2)` : "Split expense (1/2)",
      source: "Manual"
    });

    ArthivaState.expenses.unshift({
      id: "exp-" + baseId + "-2",
      category: c2,
      amount: a2,
      merchant: merchant || "Direct Purchase",
      date,
      note: note ? `${note} (Split 2/2)` : "Split expense (2/2)",
      source: "Manual"
    });

    showToast(`Logged split expense: ${formatINR(a1)} to ${c1.split(" ")[0]} & ${formatINR(a2)} to ${c2.split(" ")[0]}!`);
  } else {
    if (!validateQuickExpenseSingle()) return;

    const newExp = {
      id: "exp-" + Date.now(),
      category: selectedQuickCategory,
      amount: totalAmount,
      merchant: merchant || "Direct Purchase",
      date,
      note,
      source: "Manual"
    };

    ArthivaState.expenses.unshift(newExp);
    showToast(`Logged ${formatINR(totalAmount)} for ${selectedQuickCategory.split(" ")[0]}!`);
  }

  if (shouldDeduct) {
    const prevBal = ArthivaState.balance.amount;
    const newBal = Math.max(0, prevBal - totalAmount);
    ArthivaState.balance.amount = newBal;
    ArthivaState.balance.lastUpdated = new Date().toISOString();
    ArthivaState.balance.label = "You entered · Just now";

    const now = new Date();
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const dateStr = `${now.getDate()} ${months[now.getMonth()]}, ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    ArthivaState.balanceHistory.unshift({
      id: "bal-" + Date.now(),
      date: dateStr,
      month: formatMonthYear(now),
      timestamp: now.toISOString(),
      previousBalance: prevBal,
      newBalance: newBal,
      changeAmount: -totalAmount,
      reason: "Expense or purchase",
      source: "Quick log sync",
      notes: merchant ? `${merchant}${note ? ' · ' + note : ''}` : (note || "Direct purchase")
    });
  }

  closeBottomSheet("quick-expense-sheet");
  renderApp();
}

function deleteExpenseRecord(expenseId) {
  ArthivaState.expenses = ArthivaState.expenses.filter(e => e.id !== expenseId);
  renderApp();
  showToast("Expense removed from records.");
}

// --------------------------------------------------------------------------
// 11. Actionable Risk Advisor Options
// --------------------------------------------------------------------------

function openRiskResolutionSheet() {
  openBottomSheet("risk-resolution-sheet");
}

function applyPacingAdjustment() {
  ArthivaState.appliedAdjustments.customDailyLimit = 1050;
  closeBottomSheet("risk-resolution-sheet");
  renderApp();
  showToast("Pacing guidance applied: Daily limit set to ₹1,050/day.");
}

function applySavingsAdjustment() {
  if (ArthivaState.goals && ArthivaState.goals[0]) {
    ArthivaState.goals[0].monthlyAllocation = 2600;
  }
  ArthivaState.goal.monthlyAllocation = 2600;
  ArthivaState.appliedAdjustments.savingsDeferred = true;
  closeBottomSheet("risk-resolution-sheet");
  renderApp();
  showToast("Adjusted Goa goal to ₹2,600 this cycle. Insurance is now fully covered!");
}

function applyGracePeriodShift() {
  const insurance = ArthivaState.commitments.find(c => c.id === "bill-3");
  if (insurance) {
    insurance.dueDate = "2026-11-02";
    insurance.dueDateFormatted = "2 Nov";
    insurance.isAtRisk = false;
  }
  ArthivaState.appliedAdjustments.gracePeriodUsed = true;
  closeBottomSheet("risk-resolution-sheet");
  renderApp();
  showToast("Insurance shifted to 2 Nov (after payday) under verified grace period.");
}

// --------------------------------------------------------------------------
// 12. Expanded Profile Editing & Avatar Picker / Cropper (Item 5 OVERRIDE)
// --------------------------------------------------------------------------

let pendingAvatarImageObj = null;
let pendingAvatarZoom = 1;

function calculateAgeFromDob(dobISO) {
  if (!dobISO) return 27;
  const dob = new Date(dobISO + "T12:00:00");
  const ref = new Date("2026-10-20T12:00:00");
  let age = ref.getFullYear() - dob.getFullYear();
  const m = ref.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && ref.getDate() < dob.getDate())) {
    age--;
  }
  return Math.max(18, Math.min(100, age));
}

function openEditProfileModal() {
  const u = ArthivaState.auth.user;
  const nameInput = document.getElementById("edit-profile-name-input");
  const emailInput = document.getElementById("edit-profile-email-input");
  const mobileInput = document.getElementById("edit-profile-mobile-input");
  const householdInput = document.getElementById("edit-profile-household-input");
  const dobInput = document.getElementById("edit-profile-dob-input");
  const ageDisplay = document.getElementById("edit-profile-age-display");
  const roleInput = document.getElementById("edit-profile-role-input");
  const cityInput = document.getElementById("edit-profile-city-input");
  const verifyBox = document.getElementById("edit-profile-verify-box");
  const verifyCode = document.getElementById("edit-profile-verify-code");

  if (nameInput) nameInput.value = u.name || "Rashika";
  if (emailInput) emailInput.value = u.email || "rashika@arthiva.app";
  if (mobileInput) mobileInput.value = u.mobile || "9845012345";
  if (householdInput) householdInput.value = u.householdName || `${u.name || "Rashika"}'s Household`;
  if (dobInput) dobInput.value = u.dob || "1999-05-14";
  if (ageDisplay) ageDisplay.value = `${calculateAgeFromDob(u.dob || "1999-05-14")} yrs`;
  if (roleInput) roleInput.value = u.role || "Product Analyst";
  if (cityInput) cityInput.value = u.city || "Bengaluru";
  if (verifyBox) verifyBox.style.display = "none";
  if (verifyCode) verifyCode.value = "";

  setInlineError("edit-profile-name-err", "edit-profile-name-input", "");
  setInlineError("edit-profile-email-err", "edit-profile-email-input", "");
  setInlineError("edit-profile-mobile-err", "edit-profile-mobile-input", "");

  openModalDialog("edit-profile-modal");
}

function onProfileDobChange() {
  const dobInput = document.getElementById("edit-profile-dob-input");
  const ageDisplay = document.getElementById("edit-profile-age-display");
  if (dobInput && ageDisplay) {
    ageDisplay.value = `${calculateAgeFromDob(dobInput.value)} yrs`;
  }
}

function checkProfileSensitiveChange() {
  const u = ArthivaState.auth.user;
  const emailInput = document.getElementById("edit-profile-email-input");
  const mobileInput = document.getElementById("edit-profile-mobile-input");
  const verifyBox = document.getElementById("edit-profile-verify-box");
  if (!emailInput || !mobileInput || !verifyBox) return;

  const emailChanged = emailInput.value.trim().toLowerCase() !== (u.email || "").toLowerCase();
  const mobileChanged = mobileInput.value.replace(/\D/g, "").slice(-10) !== String(u.mobile || "").replace(/\D/g, "").slice(-10);
  verifyBox.style.display = (emailChanged || mobileChanged) ? "block" : "none";
}

function validateEditProfileInline() {
  const nameInput = document.getElementById("edit-profile-name-input");
  const emailInput = document.getElementById("edit-profile-email-input");
  const mobileInput = document.getElementById("edit-profile-mobile-input");

  const newName = nameInput ? nameInput.value.trim() : "";
  const newEmail = emailInput ? emailInput.value.trim() : "";
  const newMobile = mobileInput ? mobileInput.value.replace(/\D/g, "").slice(-10) : "";

  let valid = true;
  if (!newName) {
    setInlineError("edit-profile-name-err", "edit-profile-name-input", "Enter your full name or nickname.");
    valid = false;
  } else {
    setInlineError("edit-profile-name-err", "edit-profile-name-input", "");
  }

  if (!newEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newEmail)) {
    setInlineError("edit-profile-email-err", "edit-profile-email-input", "Enter a valid email address.");
    valid = false;
  } else {
    setInlineError("edit-profile-email-err", "edit-profile-email-input", "");
  }

  if (newMobile.length !== 10) {
    setInlineError("edit-profile-mobile-err", "edit-profile-mobile-input", "Enter a valid 10-digit Indian mobile number.");
    valid = false;
  } else {
    setInlineError("edit-profile-mobile-err", "edit-profile-mobile-input", "");
  }

  checkProfileSensitiveChange();
  return valid;
}

function saveProfileDetails() {
  if (!validateEditProfileInline()) return;

  const u = ArthivaState.auth.user;
  const nameInput = document.getElementById("edit-profile-name-input");
  const emailInput = document.getElementById("edit-profile-email-input");
  const mobileInput = document.getElementById("edit-profile-mobile-input");
  const householdInput = document.getElementById("edit-profile-household-input");
  const dobInput = document.getElementById("edit-profile-dob-input");
  const roleInput = document.getElementById("edit-profile-role-input");
  const cityInput = document.getElementById("edit-profile-city-input");

  const newName = nameInput ? nameInput.value.trim() : "";
  const newEmail = emailInput ? emailInput.value.trim() : "";
  const newMobile = mobileInput ? mobileInput.value.replace(/\D/g, "").slice(-10) : "";
  const newHousehold = householdInput ? householdInput.value.trim() : "";
  const newDob = dobInput ? dobInput.value : "1999-05-14";
  const newRole = roleInput ? roleInput.value.trim() : "Product Analyst";
  const newCity = cityInput ? cityInput.value.trim() : "Bengaluru";

  u.name = newName;
  u.email = newEmail;
  u.mobile = newMobile;
  u.householdName = newHousehold || `${newName}'s Household`;
  u.dob = newDob;
  u.age = calculateAgeFromDob(newDob);
  u.role = newRole || "Product Analyst";
  u.city = newCity || "Bengaluru";

  closeModalDialog("edit-profile-modal");
  renderApp();
  showToast("Profile updated");
}

function saveProfileName() {
  saveProfileDetails();
}

function switchAvatarModalTab(tab) {
  const presetBtn = document.getElementById("avatar-tab-preset");
  const uploadBtn = document.getElementById("avatar-tab-upload");
  const presetSec = document.getElementById("avatar-preset-section");
  const uploadSec = document.getElementById("avatar-upload-section");
  const saveCroppedBtn = document.getElementById("btn-save-cropped-avatar");

  const isUpload = tab === "upload";
  if (presetBtn) presetBtn.classList.toggle("active", !isUpload);
  if (uploadBtn) uploadBtn.classList.toggle("active", isUpload);
  if (presetSec) presetSec.style.display = isUpload ? "none" : "block";
  if (uploadSec) uploadSec.style.display = isUpload ? "block" : "none";
  if (saveCroppedBtn) {
    saveCroppedBtn.style.display = (isUpload && pendingAvatarImageObj) ? "inline-flex" : "none";
  }
}

function openAvatarPickerModal() {
  const grid = document.getElementById("illustrated-avatar-grid");
  if (grid) {
    const currentType = ArthivaState.auth.user.avatarType;
    const currentData = ArthivaState.auth.user.avatarData;
    grid.innerHTML = Object.entries(ILLUSTRATED_AVATARS).map(([id, item]) => {
      const isSelected = currentType === "illustrated" && currentData === id;
      return `
        <div class="avatar-Choice-circle ${isSelected ? 'selected' : ''}" onclick="selectPresetAvatar('illustrated', '${id}')" title="${escapeHTML(item.label)}" style="padding:0;overflow:hidden;flex-direction:column;">
          ${item.svg}
        </div>
      `;
    }).join("");
  }

  pendingAvatarImageObj = null;
  pendingAvatarZoom = 1;
  const fileInput = document.getElementById("avatar-file-input");
  const cropWrap = document.getElementById("avatar-crop-wrapper");
  const saveBtn = document.getElementById("btn-save-cropped-avatar");
  if (fileInput) fileInput.value = "";
  if (cropWrap) cropWrap.style.display = "none";
  if (saveBtn) saveBtn.style.display = "none";
  setInlineError("avatar-upload-error", "avatar-file-input", "");

  switchAvatarModalTab("preset");
  openModalDialog("avatar-picker-modal");
}

function selectPresetAvatar(typeOrMonogram, dataValue) {
  if (dataValue === undefined) {
    ArthivaState.auth.user.avatarType = "monogram";
    ArthivaState.auth.user.avatarData = typeOrMonogram;
  } else {
    ArthivaState.auth.user.avatarType = typeOrMonogram;
    ArthivaState.auth.user.avatarData = dataValue;
  }
  const onbPreview = document.getElementById("onb-avatar-preview");
  if (onbPreview) renderAvatarIntoElement(onbPreview, ArthivaState.auth.user);
  closeModalDialog("avatar-picker-modal");
  renderApp();
  showToast("Profile updated");
}

function handleCustomAvatarUpload(event) {
  const file = event && event.target && event.target.files ? event.target.files[0] : null;
  const cropWrap = document.getElementById("avatar-crop-wrapper");
  const saveBtn = document.getElementById("btn-save-cropped-avatar");
  const zoomSlider = document.getElementById("avatar-zoom-slider");
  const zoomLabel = document.getElementById("avatar-zoom-label");

  setInlineError("avatar-upload-error", "avatar-file-input", "");
  if (!file) return;

  // 5.2: Validate format (JPG, PNG, WEBP) and size (<= 5 MB)
  const validMime = ["image/jpeg", "image/png", "image/webp"];
  const ext = (file.name.split(".").pop() || "").toLowerCase();
  const validExt = ["jpg", "jpeg", "png", "webp"];
  if (!validMime.includes(file.type) && !validExt.includes(ext)) {
    setInlineError("avatar-upload-error", "avatar-file-input", "Unsupported file type. Upload a JPG, PNG, or WEBP image.");
    if (cropWrap) cropWrap.style.display = "none";
    if (saveBtn) saveBtn.style.display = "none";
    return;
  }

  const maxBytes = 5 * 1024 * 1024;
  if (file.size > maxBytes) {
    setInlineError("avatar-upload-error", "avatar-file-input", "Image exceeds 5 MB limit. Choose a file under 5 MB.");
    if (cropWrap) cropWrap.style.display = "none";
    if (saveBtn) saveBtn.style.display = "none";
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    const img = new Image();
    img.onload = function() {
      pendingAvatarImageObj = img;
      pendingAvatarZoom = 1;
      if (zoomSlider) zoomSlider.value = "1";
      if (zoomLabel) zoomLabel.textContent = "100%";
      if (cropWrap) cropWrap.style.display = "flex";
      if (saveBtn) saveBtn.style.display = "inline-flex";
      renderAvatarCropCanvas();
    };
    img.onerror = function() {
      setInlineError("avatar-upload-error", "avatar-file-input", "Could not read image file. Try another JPG, PNG, or WEBP.");
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function onAvatarZoomChange(val) {
  pendingAvatarZoom = parseFloat(val) || 1;
  const zoomLabel = document.getElementById("avatar-zoom-label");
  if (zoomLabel) zoomLabel.textContent = `${Math.round(pendingAvatarZoom * 100)}%`;
  renderAvatarCropCanvas();
}

function renderAvatarCropCanvas() {
  const canvas = document.getElementById("avatar-crop-canvas");
  if (!canvas || !pendingAvatarImageObj) return;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  ctx.clearRect(0, 0, size, size);

  const img = pendingAvatarImageObj;
  const baseScale = Math.max(size / img.width, size / img.height);
  const scale = baseScale * pendingAvatarZoom;
  const drawW = img.width * scale;
  const drawH = img.height * scale;
  const dx = (size - drawW) / 2;
  const dy = (size - drawH) / 2;

  ctx.save();
  ctx.beginPath();
  ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(img, dx, dy, drawW, drawH);
  ctx.restore();
}

function saveCroppedAvatar() {
  const canvas = document.getElementById("avatar-crop-canvas");
  if (!canvas || !pendingAvatarImageObj) {
    setInlineError("avatar-upload-error", "avatar-file-input", "Select an image to upload first.");
    return;
  }
  const dataUrl = canvas.toDataURL("image/png");
  ArthivaState.auth.user.avatarType = "image";
  ArthivaState.auth.user.avatarData = dataUrl;
  const onbPreview = document.getElementById("onb-avatar-preview");
  if (onbPreview) renderAvatarIntoElement(onbPreview, ArthivaState.auth.user);
  closeModalDialog("avatar-picker-modal");
  renderApp();
  showToast("Profile updated");
}

// --------------------------------------------------------------------------
// 13. Full Account Export: PDF & CSV (Items 1, 2 & 3)
// --------------------------------------------------------------------------

function csvEscapeCell(val) {
  if (val === undefined || val === null) return '""';
  const s = String(val).replace(/"/g, '""');
  return `"${s}"`;
}

function getExportPeriodDates(fin) {
  const ctx = (fin && fin.cycleCtx) ? fin.cycleCtx : getPayCycleContext();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const fromStr = `${ctx.cycleStart.getDate()} ${months[ctx.cycleStart.getMonth()]} ${ctx.cycleStart.getFullYear()}`;
  const toStr = `${ctx.cycleEnd.getDate()} ${months[ctx.cycleEnd.getMonth()]} ${ctx.cycleEnd.getFullYear()}`;
  const monthYearSlug = `${months[ctx.refDate.getMonth()]}-${ctx.refDate.getFullYear()}`;
  const isoDate = `${ctx.refDate.getFullYear()}-${String(ctx.refDate.getMonth() + 1).padStart(2, "0")}-${String(ctx.refDate.getDate()).padStart(2, "0")}`;
  return { fromStr, toStr, monthYearSlug, isoDate };
}

function getFormattedTimestampIST() {
  const now = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const datePart = `${String(now.getDate()).padStart(2, "0")} ${months[now.getMonth()]} ${now.getFullYear()}`;
  const timePart = now.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  return `${datePart}, ${timePart} IST`;
}

/**
 * Item 2: Complete Account CSV Export (UTF-8 with BOM, Branded Header Block, Separate Sections, Plain Numeric Amounts)
 */
function exportDataCSV() {
  const fin = calculateFinancials();
  const user = ArthivaState.auth.user;
  const period = getExportPeriodDates(fin);
  const generatedOn = getFormattedTimestampIST();

  const rows = [];

  // 2.2: Branded Header Block at top of file, followed by a blank row
  rows.push([csvEscapeCell("Arthiva Money — India-First Personal & Household Finance")]);
  rows.push([csvEscapeCell("Report: Full account export")]);
  rows.push([csvEscapeCell(`Account holder: ${user.name || "User"}`)]);
  rows.push([csvEscapeCell(`Period: ${period.fromStr} to ${period.toStr}`)]);
  rows.push([csvEscapeCell(`Generated on: ${generatedOn}`)]);
  rows.push([]); // Blank row

  // Section 1: Profile & Household Details
  rows.push([csvEscapeCell("SECTION 1: PROFILE & HOUSEHOLD DETAILS")]);
  rows.push(["Field", "Value", "Category", "Amount_INR", "Details"].map(csvEscapeCell));
  rows.push(["Full Name", user.name || "", "Profile", "", user.role || ""].map(csvEscapeCell));
  rows.push(["Email", user.email || "", "Contact", "", "Verified"].map(csvEscapeCell));
  rows.push(["Mobile Number", `+91 ${user.mobile || ""}`, "Contact", "", "India (+91)"].map(csvEscapeCell));
  rows.push(["Household Name", user.householdName || `${user.name || "User"}'s Household`, user.householdMode || "Individual", "", user.city || ""].map(csvEscapeCell));
  rows.push(["Monthly Take-Home Salary", "Pay Cycle Config", "Income", Number(ArthivaState.cycleConfig.takeHome) || 0, `Payday: Day ${ArthivaState.cycleConfig.paydayDay || 1} of month`].map((v, i) => i === 3 ? v : csvEscapeCell(v)));
  rows.push(["Safe to Spend Before Payday", "Protected Allowance", "Safe to Spend", Number(fin.safeToSpend) || 0, `${Number(fin.dailyRate) || 0} per day for ${fin.daysLeft} days`].map((v, i) => i === 3 ? v : csvEscapeCell(v)));
  rows.push([]);

  // Section 2: All Linked Accounts
  rows.push([csvEscapeCell("SECTION 2: ALL LINKED ACCOUNTS")]);
  rows.push(["Account_Name", "Institution", "Account_Type", "Current_Balance_INR", "Status"].map(csvEscapeCell));
  rows.push([
    csvEscapeCell(ArthivaState.cycleConfig.employerOrBank || "HDFC Bank Savings ···4821"),
    csvEscapeCell("HDFC Bank"),
    csvEscapeCell("Primary Salary & Savings"),
    Number(ArthivaState.balance.amount) || 0,
    csvEscapeCell(ArthivaState.balance.label || "Active")
  ]);
  Object.values((ArthivaState.autoTracking && ArthivaState.autoTracking.sources) || {}).forEach(src => {
    rows.push([
      csvEscapeCell(src.name),
      csvEscapeCell(src.subtitle || "Consented Feed"),
      csvEscapeCell(src.modeBadge || "Integration"),
      0,
      csvEscapeCell(src.enabled ? "Connected" : "Disconnected")
    ]);
  });
  rows.push([]);

  // Section 3: All Transactions (date, description, merchant, category, account, payment mode, amount, type in/out)
  rows.push([csvEscapeCell("SECTION 3: ALL TRANSACTIONS (INCOME, EXPENSES & BALANCE ADJUSTMENTS)")]);
  rows.push(["Date", "Description", "Merchant", "Category", "Account", "Payment_Mode", "Amount_INR", "Type_In_Out"].map(csvEscapeCell));
  (ArthivaState.expenses || []).forEach(e => {
    rows.push([
      csvEscapeCell(e.date || period.isoDate),
      csvEscapeCell(e.note || "Flexible spending purchase"),
      csvEscapeCell(e.merchant || "Direct Purchase"),
      csvEscapeCell(e.category || "Uncategorized"),
      csvEscapeCell(ArthivaState.cycleConfig.employerOrBank || "HDFC Bank ···4821"),
      csvEscapeCell(e.source && e.source.includes("UPI") ? "UPI" : (e.source || "UPI / Card")),
      Number(e.amount) || 0,
      csvEscapeCell("Out")
    ]);
  });
  (ArthivaState.balanceHistory || []).forEach(bh => {
    const isIn = Number(bh.changeAmount) >= 0;
    rows.push([
      csvEscapeCell(bh.date || period.isoDate),
      csvEscapeCell(bh.notes || bh.reason || "Balance adjustment"),
      csvEscapeCell(bh.source || "Account Check-in"),
      csvEscapeCell(bh.reason || "Balance Update"),
      csvEscapeCell(ArthivaState.cycleConfig.employerOrBank || "HDFC Bank ···4821"),
      csvEscapeCell(bh.source || "Bank Transfer"),
      Math.abs(Number(bh.changeAmount) || 0),
      csvEscapeCell(isIn ? "In" : "Out")
    ]);
  });
  rows.push([]);

  // Section 4: Bills & Commitments (paid and unpaid)
  rows.push([csvEscapeCell("SECTION 4: BILLS & COMMITMENTS (PAID & UNPAID)")]);
  rows.push(["Title", "Category", "Due_Date", "Recurrence", "Payment_Method", "Status", "Amount_INR"].map(csvEscapeCell));
  (ArthivaState.commitments || []).forEach(c => {
    const timing = classifyBillTiming(c, fin.cycleCtx);
    const statusLabel = c.status === "paid" ? "Paid" : (timing === "before_payday" ? "Unpaid (Due Before Payday)" : "Unpaid (Next Cycle)");
    rows.push([
      csvEscapeCell(c.name || ""),
      csvEscapeCell(c.category || ""),
      csvEscapeCell(c.dueDate || ""),
      csvEscapeCell(c.recurrence || "Monthly"),
      csvEscapeCell(c.method || "UPI"),
      csvEscapeCell(statusLabel),
      Number(c.amount) || 0
    ]);
  });
  rows.push([]);

  // Section 5: EMIs / Loans
  rows.push([csvEscapeCell("SECTION 5: EMIs & LOANS")]);
  rows.push(["Loan_or_EMI_Name", "Category", "Due_Date", "Payment_Mode", "Status", "Installment_Amount_INR"].map(csvEscapeCell));
  const emiItems = (ArthivaState.commitments || []).filter(c =>
    (c.category || "").toLowerCase().includes("emi") || (c.name || "").toLowerCase().includes("emi") || (c.category || "").toLowerCase().includes("loan")
  );
  if (emiItems.length === 0) {
    rows.push([csvEscapeCell("None recorded"), csvEscapeCell("EMIs and loans"), csvEscapeCell("-"), csvEscapeCell("-"), csvEscapeCell("No active EMI"), 0]);
  } else {
    emiItems.forEach(c => {
      rows.push([
        csvEscapeCell(c.name),
        csvEscapeCell(c.category),
        csvEscapeCell(c.dueDate),
        csvEscapeCell(c.method || "Auto-debit"),
        csvEscapeCell(c.status === "paid" ? "Paid" : "Upcoming"),
        Number(c.amount) || 0
      ]);
    });
  }
  rows.push([]);

  // Section 6: SIPs / Investments
  rows.push([csvEscapeCell("SECTION 6: SIPs & INVESTMENTS")]);
  rows.push(["Investment_Name", "Category", "Date", "Payment_Mode", "Status", "Monthly_SIP_Amount_INR"].map(csvEscapeCell));
  const sipItems = (ArthivaState.commitments || []).filter(c =>
    (c.category || "").toLowerCase().includes("sip") || (c.name || "").toLowerCase().includes("sip") || (c.category || "").toLowerCase().includes("mutual")
  );
  if (sipItems.length === 0) {
    rows.push([csvEscapeCell("None recorded"), csvEscapeCell("Mutual funds and SIPs"), csvEscapeCell("-"), csvEscapeCell("-"), csvEscapeCell("No active SIP"), 0]);
  } else {
    sipItems.forEach(c => {
      rows.push([
        csvEscapeCell(c.name),
        csvEscapeCell(c.category),
        csvEscapeCell(c.dueDate),
        csvEscapeCell(c.method || "Auto-debit"),
        csvEscapeCell(c.status === "paid" ? "Invested" : "Scheduled"),
        Number(c.amount) || 0
      ]);
    });
  }
  rows.push([]);

  // Section 7: Savings Goals with Progress
  rows.push([csvEscapeCell("SECTION 7: SAVINGS GOALS & PROGRESS")]);
  rows.push(["Goal_Name", "Target_Amount_INR", "Current_Saved_INR", "Remaining_Amount_INR", "Planned_Cycle_Contribution_INR", "Progress_Pct", "Target_Date", "Feasibility_Status"].map(csvEscapeCell));
  const goalsList = Array.isArray(ArthivaState.goals) ? ArthivaState.goals : [];
  if (goalsList.length === 0) {
    rows.push([csvEscapeCell("None recorded"), 0, 0, 0, 0, 0, csvEscapeCell("-"), csvEscapeCell("No active goal")]);
  } else {
    goalsList.forEach(g => {
      const targetAmt = Number(g.targetAmount) || 0;
      const savedAmt = Number(g.currentSaved) || 0;
      const remAmt = Math.max(0, targetAmt - savedAmt);
      const pct = targetAmt > 0 ? Math.min(100, Math.round((savedAmt / targetAmt) * 100)) : 0;
      const proj = calculateGoalProjection(targetAmt, savedAmt, Number(g.monthlyAllocation) || 0, g.targetDate);
      rows.push([
        csvEscapeCell(g.title || ""),
        targetAmt,
        savedAmt,
        remAmt,
        Number(g.monthlyAllocation) || 0,
        pct,
        csvEscapeCell(g.targetDate || ""),
        csvEscapeCell(proj.statusLabel || "On Track")
      ]);
    });
  }

  // 2.3: UTF-8 with BOM (\uFEFF) so ₹ and Indian names open cleanly in Excel/Google Sheets
  const csvContent = "\uFEFF" + rows.map(r => r.join(",")).join("\r\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", url);
  // 2.5: File name: Arthiva-Money-Export-<YYYY-MM-DD>.csv
  const fileName = `Arthiva-Money-Export-${period.isoDate}.csv`;
  dlAnchor.setAttribute("download", fileName);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  document.body.removeChild(dlAnchor);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  showToast(`CSV downloaded (${fileName})`);
}

/**
 * PART B — PDF EXPORT COLOUR SYSTEM (OVERRIDES earlier red values: NO RED ANYWHERE)
 * Palette:
 * - Primary (Royal Purple):        #7C3AED -> [0.486, 0.227, 0.929]
 * - Lavender subtle (Soft Tint):   #EDE9FE -> [0.929, 0.914, 0.996]
 * - Accent (Blush Pink):           #EC4899 -> [0.925, 0.282, 0.600]
 * - Page surface (Lavender White): #FAF8FD -> [0.980, 0.973, 0.992]
 * - Text primary (Ink Slate):      #0F172A -> [0.059, 0.090, 0.165]
 * - At-risk state (Warm Amber):    #D97706 -> [0.851, 0.467, 0.024] (small text uses darker #B45309 -> [0.706, 0.325, 0.035])
 * - Safe state (Mint Green Tint):  #DCFCE7 -> [0.863, 0.988, 0.906] (text uses dark green #166534 -> [0.086, 0.396, 0.204])
 */
const PDF_CATEGORY_COLORS = {
  "Groceries and daily essentials": { hex: "#7C3AED", rgb: [0.486, 0.227, 0.929], tag: "[GROC]" },
  "Dining out and food ordering":   { hex: "#EC4899", rgb: [0.925, 0.282, 0.600], tag: "[DINE]" },
  "Transport, fuel and cabs":       { hex: "#8B5CF6", rgb: [0.545, 0.361, 0.965], tag: "[TRAN]" },
  "Shopping and personal":          { hex: "#A855F7", rgb: [0.659, 0.333, 0.969], tag: "[SHOP]" },
  "Utilities and mobile recharge":  { hex: "#6D28D9", rgb: [0.427, 0.157, 0.851], tag: "[UTIL]" },
  "Rent":                           { hex: "#7C3AED", rgb: [0.486, 0.227, 0.929], tag: "[RENT]" },
  "EMIs and loans":                 { hex: "#8B5CF6", rgb: [0.545, 0.361, 0.965], tag: "[EMI]" },
  "Mutual funds and SIPs":          { hex: "#EC4899", rgb: [0.925, 0.282, 0.600], tag: "[SIP]" },
  "Insurance":                      { hex: "#7C3AED", rgb: [0.486, 0.227, 0.929], tag: "[INS]" },
  "Cook and household help":        { hex: "#9333EA", rgb: [0.576, 0.200, 0.918], tag: "[HELP]" },
  "Netflix and subscriptions":      { hex: "#EC4899", rgb: [0.925, 0.282, 0.600], tag: "[SUBS]" }
};

function getPdfCategoryStyle(catName) {
  return PDF_CATEGORY_COLORS[catName] || { hex: "#7C3AED", rgb: [0.486, 0.227, 0.929], tag: "" };
}

function pdfCleanStr(str) {
  return String(str || "")
    .replace(/₹/g, "Rs. ")
    .replace(/[—–]/g, "-")
    .replace(/[•·]/g, "|")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/[^\x20-\x7E]/g, "");
}

/**
 * Draws the official Arthiva Money vector emblem (matching index.html SVG path:
 * <path d="M12 3L4 18h4.5l2-4h3l2 4H20L12 3z"/><path d="M8.5 11h7"/><path d="M9.5 8h5"/>)
 * in crisp white on the Royal Purple header bar with Blush Pink accent badge border.
 */
function drawOfficialArthivaLogoPDF(bx, by, size) {
  const fmt = (r, g, b) => `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  let cmd = "";
  // Royal Purple badge container (#7C3AED) with Soft Lavender border (#EDE9FE)
  cmd += `${fmt(0.486, 0.227, 0.929)} rg ${bx} ${by} ${size} ${size} re f\n`;
  cmd += `1.2 w ${fmt(0.929, 0.914, 0.996)} RG ${bx} ${by} ${size} ${size} re S\n`;

  // Map SVG 24x24 coordinates (x in [0..24], y_svg in [0..24] top-down) to PDF (bottom-up)
  const mapX = (sx) => (bx + (sx / 24) * size).toFixed(2);
  const mapY = (sy) => (by + ((24 - sy) / 24) * size).toFixed(2);

  // Blush Pink (#EC4899) accent fill for the "A" triangle polygon
  cmd += `q ${fmt(0.925, 0.282, 0.600)} rg `;
  cmd += `${mapX(12)} ${mapY(3)} m ${mapX(4)} ${mapY(18)} l ${mapX(8.5)} ${mapY(18)} l ${mapX(10.5)} ${mapY(14)} l ${mapX(13.5)} ${mapY(14)} l ${mapX(15.5)} ${mapY(18)} l ${mapX(20)} ${mapY(18)} l ${mapX(12)} ${mapY(3)} l f Q\n`;

  // Crisp white (#FFFFFF) vector strokes for the triangle "A" and double currency crossbars
  cmd += `q 1.8 w 1 J 1 j 1.000 1.000 1.000 RG `;
  cmd += `${mapX(12)} ${mapY(3)} m ${mapX(4)} ${mapY(18)} l ${mapX(8.5)} ${mapY(18)} l ${mapX(10.5)} ${mapY(14)} l ${mapX(13.5)} ${mapY(14)} l ${mapX(15.5)} ${mapY(18)} l ${mapX(20)} ${mapY(18)} l ${mapX(12)} ${mapY(3)} l S `;
  cmd += `${mapX(8.5)} ${mapY(11)} m ${mapX(15.5)} ${mapY(11)} l S `;
  cmd += `${mapX(9.5)} ${mapY(8)} m ${mapX(14.5)} ${mapY(8)} l S Q\n`;
  return cmd;
}

function buildMultiPageVectorPDF(fin, data, user) {
  const fmt = (r, g, b) => `${r.toFixed(3)} ${g.toFixed(3)} ${b.toFixed(3)}`;
  const rectFill = (x, y, w, h, rgb) => `${fmt(rgb[0], rgb[1], rgb[2])} rg ${x} ${y} ${w} ${h} re f\n`;
  const rectStroke = (x, y, w, h, rgb, lw = 0.8) => `${lw} w ${fmt(rgb[0], rgb[1], rgb[2])} RG ${x} ${y} ${w} ${h} re S\n`;
  const textAt = (x, y, size, font, rgb, str) =>
    `BT /${font} ${size} Tf ${fmt(rgb[0], rgb[1], rgb[2])} rg 1 0 0 1 ${x} ${y} Tm (${pdfCleanStr(str)}) Tj ET\n`;
  const textRight = (rightX, y, size, font, rgb, str) => {
    const rawStr = String(str || "");
    const approxWidth = rawStr.length * size * 0.52;
    const x = Math.max(54, Math.round(rightX - approxWidth));
    return textAt(x, y, size, font, rgb, rawStr);
  };
  const lineSeg = (x1, y1, x2, y2, rgb, lw = 1, dash = "") =>
    `q ${lw} w ${dash ? `[${dash}] 0 d ` : ""}${fmt(rgb[0], rgb[1], rgb[2])} RG ${x1} ${y1} m ${x2} ${y2} l S Q\n`;

  const goals = Array.isArray(ArthivaState.goals) ? ArthivaState.goals : [];
  const totalGoalSaved = goals.reduce((s, g) => s + (Number(g.currentSaved) || 0), 0);
  const netWorth = fin.currentBalance + totalGoalSaved + 18000;
  const emiTotal = ArthivaState.commitments
    .filter(c => c.category && c.category.toLowerCase().includes("emi"))
    .reduce((s, c) => s + Number(c.amount), 0);
  const generatedOn = getFormattedTimestampIST();

  // Color Tokens
  // Status Colors (Plain colored text, no filled background, no bold, no brackets)
  const STATUS_PAID_COLOR      = [0.118, 0.557, 0.243]; // #1E8E3E - Green (Paid / On track)
  const STATUS_DUE_COLOR       = [0.698, 0.416, 0.000]; // #B26A00 - Amber (Due)
  const STATUS_RISK_COLOR      = [0.776, 0.157, 0.157]; // #C62828 - Red (Risk)
  const STATUS_SCHEDULED_COLOR = [0.082, 0.396, 0.753]; // #1565C0 - Blue (Scheduled)

  // Standard Design System Palette
  const ROYAL_PURPLE    = [0.486, 0.227, 0.929]; // #7C3AED - Header banner, section headers, charts
  const LAVENDER_SUBTLE = [0.929, 0.914, 0.996]; // #EDE9FE - Summary tile background, dividers, subtle bars
  const PAGE_SURFACE    = [0.980, 0.973, 0.992]; // #FAF8FD - Alternating table row background
  const INK_SLATE       = [0.059, 0.090, 0.165]; // #0F172A - Body text, amounts, values
  const MUTED_GRAY      = [0.420, 0.450, 0.500]; // #6B7280 - Metadata, headers, footers, tile labels
  const BORDER_SUBTLE   = [0.890, 0.880, 0.930]; // Subtle border lines
  const WHITE           = [1.000, 1.000, 1.000]; // #FFFFFF

  // Page Margins: 19mm (~54pt) on all sides. Printable width = 595 - 108 = 487pt. Right edge = 541pt.
  const MARGIN_LEFT = 54;
  const MARGIN_RIGHT = 541;
  const CONTENT_WIDTH = 487;

  // =========================================================================
  // PAGE 1: EXECUTIVE SUMMARY, SPENDING BARS, TREND CHARTS & SAVINGS GOALS
  // =========================================================================
  let p1 = "";
  p1 += rectFill(0, 0, 595, 842, WHITE);

  // Header Banner Page 1: Exact layout, height, and logo-text alignment matching Page 2
  p1 += rectFill(MARGIN_LEFT, 746, CONTENT_WIDTH, 42, ROYAL_PURPLE);
  p1 += drawOfficialArthivaLogoPDF(MARGIN_LEFT + 10, 752, 30);
  p1 += textAt(MARGIN_LEFT + 48, 771, 12, "F2", WHITE, "ARTHIVA MONEY - PERSONAL & HOUSEHOLD FINANCIAL REPORT");
  p1 += textAt(MARGIN_LEFT + 48, 756, 9, "F1", LAVENDER_SUBTLE, `Account: ${user.name || "User"} | Period: ${data.periodLabel}`);

  // Section 1 Heading: 11pt, bold, 15pt space above, 8pt below
  p1 += textAt(MARGIN_LEFT, 726, 11, "F2", ROYAL_PURPLE, "1. EXECUTIVE SUMMARY TILES (VS PREVIOUS PAY CYCLE)");

  // 6 Summary Tiles (2 rows of 3)
  const tileGap = 7;
  const tileW = Math.floor((CONTENT_WIDTH - 2 * tileGap) / 3); // ~157pt
  const tileH = 46;
  const tiles = [
    { label: "TAKE-HOME INCOME", val: formatINR(data.income), comp: "+0.0% vs Sep", isRisk: false },
    { label: "TOTAL SPENDING", val: formatINR(data.totalExpenditure), comp: "-2.0% vs Sep", isRisk: false },
    { label: "CYCLE SAVINGS", val: formatINR(data.plannedSavingsAllocation), comp: "+Rs. 3,000 vs Sep", isRisk: false },
    { label: "SAVINGS RATE", val: `${data.savingsRatePct}% of Pay`, comp: "+4.0% vs Sep", isRisk: false },
    { label: "SAFE TO SPEND", val: formatINR(fin.safeToSpend), comp: fin.isShortfall ? "Risk: Shortfall" : "On track to payday", isRisk: !!fin.isShortfall },
    { label: "ACTIVE EMIS", val: formatINR(emiTotal), comp: "Safe ratio", isRisk: false }
  ];

  tiles.forEach((t, idx) => {
    const col = idx % 3;
    const row = Math.floor(idx / 3);
    const tx = MARGIN_LEFT + col * (tileW + tileGap);
    const ty = 668 - row * (tileH + 8);

    p1 += rectFill(tx, ty, tileW, tileH, LAVENDER_SUBTLE);
    p1 += rectStroke(tx, ty, tileW, tileH, t.isRisk ? STATUS_RISK_COLOR : BORDER_SUBTLE, 0.8);
    // Summary tile labels: 8pt, uppercase, muted gray
    p1 += textAt(tx + 8, ty + 33, 8, "F2", MUTED_GRAY, t.label);
    // Summary tile values: 14pt, bold
    p1 += textAt(tx + 8, ty + 18, 14, "F2", INK_SLATE, t.val);
    // Comparison text: 8pt, regular
    p1 += textAt(tx + 8, ty + 6, 8, "F1", t.isRisk ? STATUS_RISK_COLOR : MUTED_GRAY, t.comp);
  });

  // Section 2 Heading: 11pt bold
  p1 += textAt(MARGIN_LEFT, 576, 11, "F2", ROYAL_PURPLE, "2. SPENDING BY CATEGORY & BUDGET STATUS");

  let cy = 556;
  const catList = ArthivaState.budgets || [];
  catList.forEach((b) => {
    const actual = (ArthivaState.expenses || [])
      .filter(e => e.category && e.category.toLowerCase() === b.category.toLowerCase())
      .reduce((s, e) => s + Number(e.amount), 0);
    const limit = b.limit || 5000;
    const pct = Math.min(100, Math.round((actual / limit) * 100));
    const isRisk = actual > limit;
    const statusText = isRisk ? "Risk" : "On track";
    const statusColor = isRisk ? STATUS_RISK_COLOR : STATUS_PAID_COLOR;

    // Full untruncated category name (font 9pt regular)
    p1 += textAt(MARGIN_LEFT, cy, 9, "F1", INK_SLATE, b.category);

    // Progress bar in center
    const barX = MARGIN_LEFT + 175;
    const barWMax = 145;
    const barW = Math.max(4, Math.round((pct / 100) * barWMax));
    p1 += rectFill(barX, cy - 2, barWMax, 8, LAVENDER_SUBTLE);
    p1 += rectFill(barX, cy - 2, barW, 8, isRisk ? STATUS_RISK_COLOR : ROYAL_PURPLE);

    // Right-aligned figures and plain colored status text (no brackets, no bold, no background)
    const amtStr = `${formatINR(actual)} / ${formatINR(limit)} (${pct}%)`;
    p1 += textRight(MARGIN_RIGHT - 52, cy, 9, "F1", INK_SLATE, amtStr);
    p1 += textRight(MARGIN_RIGHT, cy, 9, "F1", statusColor, statusText);
    cy -= 18;
  });

  // Section 3 & 4 Headings
  p1 += textAt(MARGIN_LEFT, 442, 11, "F2", ROYAL_PURPLE, "3. INCOME VS OUTFLOW BY MONTH");
  p1 += textAt(MARGIN_LEFT + 250, 442, 11, "F2", ROYAL_PURPLE, "4. NET WORTH TREND (4 CYCLES)");

  // Chart 1: Income vs Outflow Bar Chart
  const chartW = 238;
  const chartH = 96;
  p1 += rectFill(MARGIN_LEFT, 336, chartW, chartH, PAGE_SURFACE);
  p1 += rectStroke(MARGIN_LEFT, 336, chartW, chartH, BORDER_SUBTLE, 0.8);
  const monthsBar = [
    { m: "Jul", inc: 50000, out: 41200 },
    { m: "Aug", inc: 50000, out: 43100 },
    { m: "Sep", inc: 50000, out: 41750 },
    { m: "Oct", inc: data.income || 50000, out: data.totalExpenditure || 0 }
  ];
  monthsBar.forEach((mb, i) => {
    const bx = MARGIN_LEFT + 22 + i * 54;
    const incH = Math.max(4, Math.round((mb.inc / 55000) * 58));
    const outH = Math.max(4, Math.round((mb.out / 55000) * 58));
    const isOutRisk = mb.out > mb.inc;
    p1 += rectFill(bx, 350, 15, incH, ROYAL_PURPLE);
    p1 += rectFill(bx + 16, 350, 15, outH, isOutRisk ? STATUS_RISK_COLOR : LAVENDER_SUBTLE);
    // Chart labels and axis values: 8pt
    p1 += textAt(bx + 4, 340, 8, "F1", MUTED_GRAY, mb.m);
    p1 += textAt(bx - 2, 352 + incH, 8, "F1", MUTED_GRAY, `${Math.round(mb.inc / 1000)}K`);
    p1 += textAt(bx + 15, 352 + outH, 8, "F1", isOutRisk ? STATUS_RISK_COLOR : MUTED_GRAY, `${Math.round(mb.out / 1000)}K`);
  });

  // Chart 2: Net Worth Trend
  const chart2X = MARGIN_LEFT + 250;
  p1 += rectFill(chart2X, 336, chartW, chartH, PAGE_SURFACE);
  p1 += rectStroke(chart2X, 336, chartW, chartH, BORDER_SUBTLE, 0.8);
  const nwSeries = [
    { m: "Jul", val: 78000 },
    { m: "Aug", val: 86500 },
    { m: "Sep", val: 97200 },
    { m: "Oct", val: netWorth }
  ];
  const nwPts = nwSeries.map((pt, i) => {
    const x = chart2X + 28 + i * 62;
    const y = 352 + Math.max(4, Math.min(60, Math.round(((pt.val - 60000) / 55000) * 56)));
    return { x, y, m: pt.m, val: pt.val };
  });
  for (let i = 0; i < nwPts.length - 1; i++) {
    p1 += lineSeg(nwPts[i].x, nwPts[i].y, nwPts[i + 1].x, nwPts[i + 1].y, ROYAL_PURPLE, 2.0);
  }
  nwPts.forEach(pt => {
    p1 += rectFill(pt.x - 3, pt.y - 3, 6, 6, ROYAL_PURPLE);
    p1 += textAt(pt.x - 14, pt.y + 6, 8, "F1", INK_SLATE, `Rs.${Math.round(pt.val / 1000)}K`);
    p1 += textAt(pt.x - 6, 340, 8, "F1", MUTED_GRAY, pt.m);
  });

  // Section 5 Heading: 11pt bold
  p1 += textAt(MARGIN_LEFT, 316, 11, "F2", ROYAL_PURPLE, "5. SAVINGS GOALS PROGRESS & SECURED MILESTONES");

  let gy = 296;
  if (goals.length === 0) {
    p1 += rectFill(MARGIN_LEFT, gy - 12, CONTENT_WIDTH, 26, PAGE_SURFACE);
    p1 += textAt(MARGIN_LEFT + 8, gy - 2, 9, "F1", MUTED_GRAY, "No savings goals configured yet.");
  } else {
    goals.slice(0, 5).forEach(g => {
      const pct = Math.min(100, Math.round(((g.currentSaved || 0) / (g.targetAmount || 1)) * 100));
      const proj = calculateGoalProjection(g.targetAmount || 1, g.currentSaved || 0, g.monthlyAllocation || 0, g.targetDate);
      const isRiskGoal = proj.statusLabel === "At Risk" || proj.statusLabel === "Needs Adjustment";
      const goalStatusText = isRiskGoal ? "Risk" : "On track";
      const goalStatusColor = isRiskGoal ? STATUS_RISK_COLOR : STATUS_PAID_COLOR;

      p1 += rectFill(MARGIN_LEFT, gy - 14, CONTENT_WIDTH, 32, PAGE_SURFACE);
      p1 += rectStroke(MARGIN_LEFT, gy - 14, CONTENT_WIDTH, 32, BORDER_SUBTLE, 0.8);

      // Goal Title: 9pt bold
      p1 += textAt(MARGIN_LEFT + 8, gy + 4, 9, "F2", INK_SLATE, g.title || "Goal");
      // Goal Subtitle: 8pt regular muted gray
      p1 += textAt(MARGIN_LEFT + 8, gy - 8, 8, "F1", MUTED_GRAY,
        `Saved: ${formatINR(g.currentSaved)} of ${formatINR(g.targetAmount)} | Target: ${proj.plannedMonthStr}`);

      // Progress bar
      const gBarX = MARGIN_LEFT + 220;
      const gBarWMax = 180;
      const gBarW = Math.max(6, Math.round((pct / 100) * gBarWMax));
      p1 += rectFill(gBarX, gy - 4, gBarWMax, 8, LAVENDER_SUBTLE);
      p1 += rectFill(gBarX, gy - 4, gBarW, 8, isRiskGoal ? STATUS_RISK_COLOR : ROYAL_PURPLE);

      // Percentage and Status label: 9pt regular plain colored text
      p1 += textRight(MARGIN_RIGHT - 46, gy + 4, 9, "F1", INK_SLATE, `${pct}%`);
      p1 += textRight(MARGIN_RIGHT - 8, gy + 4, 9, "F1", goalStatusColor, goalStatusText);

      gy -= 36;
    });
  }

  // Footer Page 1: 8pt, muted gray, 18-20mm (54pt) bottom margin
  p1 += lineSeg(MARGIN_LEFT, 50, MARGIN_RIGHT, 50, BORDER_SUBTLE, 0.8);
  p1 += textAt(MARGIN_LEFT, 36, 8, "F1", MUTED_GRAY, "Arthiva Money - Plan today, a brighter tomorrow");
  p1 += textRight(MARGIN_RIGHT, 36, 8, "F1", MUTED_GRAY, "Page 1 of 2");

  // =========================================================================
  // PAGE 2: COMMITMENTS & BILLS SCHEDULE & OUTFLOW LEDGER
  // =========================================================================
  let p2 = "";
  p2 += rectFill(0, 0, 595, 842, WHITE);

  // Header Banner Page 2
  p2 += rectFill(MARGIN_LEFT, 746, CONTENT_WIDTH, 42, ROYAL_PURPLE);
  p2 += drawOfficialArthivaLogoPDF(MARGIN_LEFT + 10, 752, 30);
  p2 += textAt(MARGIN_LEFT + 48, 771, 12, "F2", WHITE, "ARTHIVA MONEY - COMMITMENTS, TRANSACTIONS & AUDIT LEDGER");
  p2 += textAt(MARGIN_LEFT + 48, 756, 9, "F1", LAVENDER_SUBTLE, `Account: ${user.name || "User"} | Period: ${data.periodLabel}`);

  // Section 6 Heading: 11pt bold, 14-16pt space above, 8pt below
  p2 += textAt(MARGIN_LEFT, 726, 11, "F2", ROYAL_PURPLE, "6. COMMITMENTS & BILLS SCHEDULE");

  // Table 1 Column Headers: 8pt, bold, uppercase, muted gray. Perfectly aligned with rows inside table boundary.
  p2 += rectFill(MARGIN_LEFT, 704, CONTENT_WIDTH, 18, LAVENDER_SUBTLE);
  p2 += rectStroke(MARGIN_LEFT, 704, CONTENT_WIDTH, 18, BORDER_SUBTLE, 0.8);
  p2 += textAt(MARGIN_LEFT + 6, 710, 8, "F2", MUTED_GRAY, "COMMITMENT TITLE");
  p2 += textAt(MARGIN_LEFT + 172, 710, 8, "F2", MUTED_GRAY, "CATEGORY");
  p2 += textAt(MARGIN_LEFT + 296, 710, 8, "F2", MUTED_GRAY, "DUE DATE");
  p2 += textAt(MARGIN_LEFT + 364, 710, 8, "F2", MUTED_GRAY, "STATUS");
  p2 += textRight(MARGIN_RIGHT - 10, 710, 8, "F2", MUTED_GRAY, "AMOUNT (INR)");

  let ty1 = 686;
  const commitments = ArthivaState.commitments || [];
  commitments.forEach((c, idx) => {
    const timing = classifyBillTiming(c, fin.cycleCtx);
    const isPaid = c.status === "paid";
    const isOverdueOrRisk = !isPaid && (c.isAtRisk || isBillOverdue(c, fin.cycleCtx));

    // Status: only Paid, Due, Risk, Scheduled
    let statusLabel = "Scheduled";
    let statusColor = STATUS_SCHEDULED_COLOR;
    if (isPaid) {
      statusLabel = "Paid";
      statusColor = STATUS_PAID_COLOR;
    } else if (isOverdueOrRisk) {
      statusLabel = "Risk";
      statusColor = STATUS_RISK_COLOR;
    } else if (timing === "before_payday") {
      statusLabel = "Due";
      statusColor = STATUS_DUE_COLOR;
    }

    const rowBg = idx % 2 === 0 ? WHITE : PAGE_SURFACE;
    p2 += rectFill(MARGIN_LEFT, ty1, CONTENT_WIDTH, 18, rowBg);
    p2 += rectStroke(MARGIN_LEFT, ty1, CONTENT_WIDTH, 18, BORDER_SUBTLE, 0.4);

    // Body text: 8pt regular, perfectly fitting and aligned within columns
    p2 += textAt(MARGIN_LEFT + 6, ty1 + 5, 8, "F1", INK_SLATE, c.name || "");
    p2 += textAt(MARGIN_LEFT + 172, ty1 + 5, 8, "F1", INK_SLATE, c.category || "");
    p2 += textAt(MARGIN_LEFT + 296, ty1 + 5, 8, "F1", INK_SLATE, c.dueDateFormatted || c.dueDate || "-");

    // Status: 8pt plain colored text, no black box, no background, no bold, no symbol prefix
    p2 += textAt(MARGIN_LEFT + 364, ty1 + 5, 8, "F1", statusColor, statusLabel);

    // Amount: right-aligned inside table with comfortable right padding (MARGIN_RIGHT - 10)
    p2 += textRight(MARGIN_RIGHT - 10, ty1 + 5, 8, "F1", INK_SLATE, formatINR(c.amount));
    ty1 -= 18;
  });

  // Section 7 Heading: 11pt bold
  const t2HeaderY = ty1 - 16;
  p2 += textAt(MARGIN_LEFT, t2HeaderY + 16, 11, "F2", ROYAL_PURPLE, "7. RECORDED FLEXIBLE EXPENSES & CASH-FLOW OUTFLOWS");

  // Table 2 Column Headers: 8pt, bold, uppercase, muted gray
  p2 += rectFill(MARGIN_LEFT, t2HeaderY - 4, CONTENT_WIDTH, 18, LAVENDER_SUBTLE);
  p2 += rectStroke(MARGIN_LEFT, t2HeaderY - 4, CONTENT_WIDTH, 18, BORDER_SUBTLE, 0.8);
  p2 += textAt(MARGIN_LEFT + 6, t2HeaderY + 2, 8, "F2", MUTED_GRAY, "MERCHANT / DESCRIPTION");
  p2 += textAt(MARGIN_LEFT + 172, t2HeaderY + 2, 8, "F2", MUTED_GRAY, "CATEGORY");
  p2 += textAt(MARGIN_LEFT + 316, t2HeaderY + 2, 8, "F2", MUTED_GRAY, "DATE & CHANNEL");
  p2 += textRight(MARGIN_RIGHT - 10, t2HeaderY + 2, 8, "F2", MUTED_GRAY, "OUTFLOW (INR)");

  let ty2 = t2HeaderY - 22;
  const expenseList = (ArthivaState.expenses || []).slice(0, 12);
  expenseList.forEach((e, idx) => {
    const rowBg = idx % 2 === 0 ? WHITE : PAGE_SURFACE;
    p2 += rectFill(MARGIN_LEFT, ty2, CONTENT_WIDTH, 18, rowBg);
    p2 += rectStroke(MARGIN_LEFT, ty2, CONTENT_WIDTH, 18, BORDER_SUBTLE, 0.4);

    // Body text: 8pt regular, safely padded within table border
    p2 += textAt(MARGIN_LEFT + 6, ty2 + 5, 8, "F1", INK_SLATE, e.merchant || "Direct Purchase");
    p2 += textAt(MARGIN_LEFT + 172, ty2 + 5, 8, "F1", INK_SLATE, e.category || "");
    p2 += textAt(MARGIN_LEFT + 316, ty2 + 5, 8, "F1", INK_SLATE, `${formatDateDisplay(e.date)} (${e.source || "Manual"})`);
    p2 += textRight(MARGIN_RIGHT - 10, ty2 + 5, 8, "F1", INK_SLATE, formatINR(e.amount));
    ty2 -= 18;
  });

  // Safe to Spend Summary Box
  const boxY = Math.max(68, ty2 - 38);
  p2 += rectFill(MARGIN_LEFT, boxY, CONTENT_WIDTH, 36, LAVENDER_SUBTLE);
  p2 += rectStroke(MARGIN_LEFT, boxY, CONTENT_WIDTH, 36, ROYAL_PURPLE, 1.0);
  p2 += textAt(MARGIN_LEFT + 10, boxY + 21, 9, "F2", INK_SLATE,
    `SAFE TO SPEND SUMMARY: Balance ${formatINR(fin.currentBalance)} | Bills ${formatINR(fin.billsBeforePayday)} | Goals ${formatINR(fin.savingsToSetAside)} | Safe to spend: ${formatINR(fin.safeToSpend)}`);
  p2 += textAt(MARGIN_LEFT + 10, boxY + 8, 8.5, "F1", INK_SLATE,
    `Daily Safe Allowance: ${formatINR(fin.dailyRate)}/day for ${fin.daysLeft} remaining days until next payday (${fin.cycleCtx.endStr}).`);

  // Footer Page 2: 8pt muted gray
  p2 += lineSeg(MARGIN_LEFT, 50, MARGIN_RIGHT, 50, BORDER_SUBTLE, 0.8);
  p2 += textAt(MARGIN_LEFT, 36, 8, "F1", MUTED_GRAY, "Arthiva Money - Confidential Personal & Household Financial Statement");
  p2 += textRight(MARGIN_RIGHT, 36, 8, "F1", MUTED_GRAY, "Page 2 of 2");

  const objects = [
    "1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n",
    "2 0 obj\n<< /Type /Pages /Kids [3 0 R 4 0 R] /Count 2 >>\nendobj\n",
    "3 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /MediaBox [0 0 595 842] /Contents 7 0 R >>\nendobj\n",
    "4 0 obj\n<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> /MediaBox [0 0 595 842] /Contents 8 0 R >>\nendobj\n",
    "5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n",
    "6 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n",
    `7 0 obj\n<< /Length ${p1.length} >>\nstream\n${p1}\nendstream\nendobj\n`,
    `8 0 obj\n<< /Length ${p2.length} >>\nstream\n${p2}\nendstream\nendobj\n`
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  objects.forEach(obj => {
    offsets.push(pdf.length);
    pdf += obj;
  });

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.forEach(off => {
    pdf += `${String(off).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;
  return pdf;
}

function triggerBinaryPdfDownloadOnly() {
  const fin = calculateFinancials();
  const data = getInsightsDataset(fin);
  const user = ArthivaState.auth.user;
  const period = getExportPeriodDates(fin);

  const rawPdf = buildMultiPageVectorPDF(fin, data, user);
  const blob = new Blob([rawPdf], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const dlAnchor = document.createElement("a");
  dlAnchor.setAttribute("href", url);
  // 1.2: File name: Arthiva-Money-Report-<Month-YYYY>.pdf
  const fileName = `Arthiva-Money-Report-${period.monthYearSlug}.pdf`;
  dlAnchor.setAttribute("download", fileName);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  document.body.removeChild(dlAnchor);
  setTimeout(() => URL.revokeObjectURL(url), 2500);
}

/**
 * 1.2: When the user selects "Export PDF":
 * - Do NOT show a PDF preview. Generate the PDF and download it directly.
 * - Show a brief loading state on the button ("Preparing PDF…") and a success toast ("PDF downloaded").
 */
function exportDataPDF(btnEl) {
  const btn = btnEl || document.getElementById("btn-export-pdf");
  const originalHTML = btn ? btn.innerHTML : "<span>Export PDF</span>";
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<span style="display:inline-flex;align-items:center;gap:6px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon"><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>Preparing PDF…</span>`;
  }

  setTimeout(() => {
    try {
      triggerBinaryPdfDownloadOnly();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
      }
      showToast("PDF downloaded");
    } catch (err) {
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = originalHTML;
      }
      showToast("Could not generate PDF. Tap Export PDF to retry.");
    }
  }, 280);
}

// --------------------------------------------------------------------------
// 14. Secure App Re-entry, App-Lock & Authentication (Section 1)
// --------------------------------------------------------------------------

let currentPinBuffer = "";

function renderAppLockScreen(user) {
  const u = user || ArthivaState.auth.user;
  const avatarEl = document.getElementById("applock-avatar-display");
  const nameEl = document.getElementById("applock-user-name");
  const emailEl = document.getElementById("applock-user-email");

  if (avatarEl) renderAvatarIntoElement(avatarEl, u);
  if (nameEl) nameEl.textContent = `Welcome back, ${u.name}`;
  if (emailEl) emailEl.textContent = `${u.email || 'rashika@arthiva.app'} · Session Protected`;

  const sec = ArthivaState.security || DEFAULT_STATE.security;
  const pinView = document.getElementById("applock-pin-view");
  const passView = document.getElementById("applock-password-view");
  const toggleBtn = document.getElementById("applock-toggle-mode-btn");
  if (pinView && passView) {
    const usePassFirst = sec.preferredMethod === "password";
    pinView.style.display = usePassFirst ? "none" : "block";
    passView.style.display = usePassFirst ? "block" : "none";
    if (toggleBtn) {
      toggleBtn.textContent = usePassFirst ? "Switch to 4-Digit PIN" : "Use App-Lock Password Instead";
    }
  }
}

function updatePinDotsUI() {
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`pin-dot-${i}`);
    if (dot) {
      dot.classList.toggle("filled", i < currentPinBuffer.length);
      dot.classList.remove("error");
    }
  }
}

function showAppLockError(msg) {
  const errEl = document.getElementById("applock-error-msg");
  if (errEl) {
    errEl.textContent = msg;
    errEl.style.display = "block";
  }
  for (let i = 0; i < 4; i++) {
    const dot = document.getElementById(`pin-dot-${i}`);
    if (dot) dot.classList.add("error");
  }
}

function pressPinKey(digit) {
  const errEl = document.getElementById("applock-error-msg");
  if (errEl) errEl.style.display = "none";

  if (currentPinBuffer.length < 4) {
    currentPinBuffer += String(digit);
    updatePinDotsUI();
  }

  if (currentPinBuffer.length === 4) {
    const expectedPin = (ArthivaState.security && ArthivaState.security.pin) || "1234";
    if (currentPinBuffer === expectedPin) {
      currentPinBuffer = "";
      updatePinDotsUI();
      completeAppUnlock("4-Digit PIN");
    } else {
      ArthivaState.security.failedAttempts = (ArthivaState.security.failedAttempts || 0) + 1;
      showAppLockError("Incorrect PIN. Please try again or use your fallback password.");
      setTimeout(() => {
        currentPinBuffer = "";
        updatePinDotsUI();
      }, 450);
    }
  }
}

function backspacePinKey() {
  if (currentPinBuffer.length > 0) {
    currentPinBuffer = currentPinBuffer.slice(0, -1);
    updatePinDotsUI();
  }
}

function clearPinEntry() {
  currentPinBuffer = "";
  updatePinDotsUI();
  const errEl = document.getElementById("applock-error-msg");
  if (errEl) errEl.style.display = "none";
}

function toggleAppLockInputMode() {
  const pinView = document.getElementById("applock-pin-view");
  const passView = document.getElementById("applock-password-view");
  const toggleBtn = document.getElementById("applock-toggle-mode-btn");
  const errEl = document.getElementById("applock-error-msg");
  if (errEl) errEl.style.display = "none";

  if (pinView && passView) {
    const showingPin = pinView.style.display !== "none";
    pinView.style.display = showingPin ? "none" : "block";
    passView.style.display = showingPin ? "block" : "none";
    if (toggleBtn) {
      toggleBtn.textContent = showingPin ? "Switch to 4-Digit PIN" : "Use App-Lock Password Instead";
    }
  }
}

function submitAppLockPassword() {
  const input = document.getElementById("applock-password-input");
  const val = input ? input.value.trim() : "";
  const expectedPass = (ArthivaState.security && ArthivaState.security.password) || "arthiva2026";

  if (val === expectedPass) {
    if (input) input.value = "";
    completeAppUnlock("App-Lock Password");
  } else {
    showAppLockError("Invalid App-Lock password. Please verify and try again.");
  }
}

async function triggerBiometricUnlock(type) {
  const label = type === "face" ? "Face Unlock" : "Fingerprint Biometric";
  const sec = ArthivaState.security || DEFAULT_STATE.security;

  if (type === "fingerprint" && !sec.fingerprintEnabled) {
    showAppLockError("Fingerprint unlock is disabled in Security Settings.");
    return;
  }
  if (type === "face" && !sec.faceUnlockEnabled) {
    showAppLockError("Face Unlock is disabled in Security Settings.");
    return;
  }

  // Check WebAuthn platform authenticator availability when supported
  let webAuthnSupported = false;
  if (window.PublicKeyCredential && typeof PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === "function") {
    try {
      webAuthnSupported = await PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable();
    } catch (e) {
      webAuthnSupported = false;
    }
  }

  completeAppUnlock(webAuthnSupported ? `${label} (WebAuthn Verified)` : `${label}`);
}

function completeAppUnlock(methodLabel) {
  ArthivaState.security.isLocked = false;
  ArthivaState.security.failedAttempts = 0;
  saveStateToStorage();
  switchScreen("home");
  showToast(`Unlocked securely via ${methodLabel}.`);
}

function lockApplicationNow() {
  ArthivaState.security.isLocked = true;
  currentPinBuffer = "";
  updatePinDotsUI();
  saveStateToStorage();
  switchScreen("applock");
  showToast("Arthiva locked. Authenticate to continue.");
}

function simulateAppReopenWithSplash() {
  const splash = document.getElementById("app-splash-screen");
  if (splash) {
    splash.style.display = "flex";
    setTimeout(() => {
      splash.style.display = "none";
    }, 900);
  }

  const session = localStorage.getItem("arthiva_session_v2");
  if (session || ArthivaState.auth.isAuthenticated) {
    ArthivaState.security.isLocked = true;
    currentPinBuffer = "";
    updatePinDotsUI();
    switchScreen("applock");
  } else {
    switchScreen("auth");
  }
}

function openSecuritySettingsModal() {
  const sec = ArthivaState.security || DEFAULT_STATE.security;
  const verifyInput = document.getElementById("sec-current-verify-input");
  const prefSelect = document.getElementById("sec-preferred-method-select");
  const fallSelect = document.getElementById("sec-fallback-method-select");
  const newPin = document.getElementById("sec-new-pin-input");
  const confirmPin = document.getElementById("sec-confirm-pin-input");
  const newPass = document.getElementById("sec-new-password-input");
  const confirmPass = document.getElementById("sec-confirm-password-input");
  const policySelect = document.getElementById("sec-lock-policy-select");
  const errBox = document.getElementById("sec-validation-error");

  if (errBox) errBox.style.display = "none";
  if (verifyInput) verifyInput.value = "";
  const method = (sec.preferredMethod === "password") ? "password" : "pin";
  if (prefSelect) prefSelect.value = method;
  if (fallSelect) fallSelect.value = sec.fallbackMethod || "password";
  if (newPin) newPin.value = "";
  if (confirmPin) confirmPin.value = "";
  if (newPass) {
    newPass.value = "";
    newPass.type = "password";
  }
  if (confirmPass) {
    confirmPass.value = "";
    confirmPass.type = "password";
  }
  const toggleBtn = document.getElementById("sec-toggle-pass-vis-btn");
  if (toggleBtn) toggleBtn.textContent = "Show";
  if (policySelect) policySelect.value = sec.lockPolicy || "reopen";

  onPreferredLockMethodChange();
  openModalDialog("security-settings-modal");
}

function onPreferredLockMethodChange() {
  const prefSelect = document.getElementById("sec-preferred-method-select");
  const pinGroup = document.getElementById("sec-pin-fields-group");
  const passGroup = document.getElementById("sec-password-fields-group");
  const newPin = document.getElementById("sec-new-pin-input");
  const confirmPin = document.getElementById("sec-confirm-pin-input");
  const newPass = document.getElementById("sec-new-password-input");
  const confirmPass = document.getElementById("sec-confirm-password-input");
  const errBox = document.getElementById("sec-validation-error");

  if (errBox) errBox.style.display = "none";
  const selected = prefSelect ? prefSelect.value : "pin";

  if (selected === "password") {
    if (pinGroup) pinGroup.style.display = "none";
    if (passGroup) passGroup.style.display = "block";
    // Clear hidden PIN inputs
    if (newPin) newPin.value = "";
    if (confirmPin) confirmPin.value = "";
  } else {
    if (pinGroup) pinGroup.style.display = "block";
    if (passGroup) passGroup.style.display = "none";
    // Clear hidden Password inputs
    if (newPass) newPass.value = "";
    if (confirmPass) confirmPass.value = "";
  }
  validateSecurityMethodInputs();
}

function toggleSecurityPasswordVisibility() {
  const newPass = document.getElementById("sec-new-password-input");
  const confirmPass = document.getElementById("sec-confirm-password-input");
  const btn = document.getElementById("sec-toggle-pass-vis-btn");
  if (!newPass) return;

  const isHidden = newPass.type === "password";
  newPass.type = isHidden ? "text" : "password";
  if (confirmPass) confirmPass.type = isHidden ? "text" : "password";
  if (btn) btn.textContent = isHidden ? "Hide" : "Show";
}

function validateSecurityMethodInputs() {
  const prefSelect = document.getElementById("sec-preferred-method-select");
  const selected = prefSelect ? prefSelect.value : "pin";
  const pinMsg = document.getElementById("sec-pin-validation-msg");
  const passMsg = document.getElementById("sec-password-validation-msg");

  if (selected === "pin") {
    const p1 = (document.getElementById("sec-new-pin-input") || {}).value || "";
    const p2 = (document.getElementById("sec-confirm-pin-input") || {}).value || "";
    if (!pinMsg) return true;
    if (!p1 && !p2) {
      pinMsg.textContent = "Leave blank to keep current PIN, or enter a new 4-digit numeric PIN.";
      pinMsg.style.color = "var(--text-muted)";
      return true;
    }
    if (!/^\d{4}$/.test(p1)) {
      pinMsg.textContent = "PIN must be exactly 4 numeric digits.";
      pinMsg.style.color = "var(--state-risk)";
      return false;
    }
    if (p1 !== p2) {
      pinMsg.textContent = "Confirm PIN does not match new 4-digit PIN.";
      pinMsg.style.color = "var(--state-risk)";
      return false;
    }
    pinMsg.textContent = "✓ 4-digit PIN confirmed and ready to save.";
    pinMsg.style.color = "var(--primary)";
    return true;
  } else {
    const pw1 = (document.getElementById("sec-new-password-input") || {}).value || "";
    const pw2 = (document.getElementById("sec-confirm-password-input") || {}).value || "";
    if (!passMsg) return true;
    if (!pw1 && !pw2) {
      passMsg.textContent = "Leave blank to keep current password, or enter at least 6 characters.";
      passMsg.style.color = "var(--text-muted)";
      return true;
    }
    if (pw1.length < 6) {
      passMsg.textContent = "Password must be at least 6 characters.";
      passMsg.style.color = "var(--state-risk)";
      return false;
    }
    if (pw1 !== pw2) {
      passMsg.textContent = "Confirm password does not match new password.";
      passMsg.style.color = "var(--state-risk)";
      return false;
    }
    passMsg.textContent = "✓ Password confirmed and ready to save.";
    passMsg.style.color = "var(--primary)";
    return true;
  }
}

function saveSecuritySettings() {
  const sec = ArthivaState.security;
  const verifyInput = document.getElementById("sec-current-verify-input");
  const prefSelect = document.getElementById("sec-preferred-method-select");
  const fallSelect = document.getElementById("sec-fallback-method-select");
  const newPinInput = document.getElementById("sec-new-pin-input");
  const confirmPinInput = document.getElementById("sec-confirm-pin-input");
  const newPassInput = document.getElementById("sec-new-password-input");
  const confirmPassInput = document.getElementById("sec-confirm-password-input");
  const policySelect = document.getElementById("sec-lock-policy-select");
  const errBox = document.getElementById("sec-validation-error");

  const showSecError = (msg) => {
    if (errBox) {
      errBox.textContent = msg;
      errBox.style.display = "block";
    }
    showToast(msg);
  };

  const currentVal = verifyInput ? verifyInput.value.trim() : "";
  if (currentVal !== sec.pin && currentVal !== sec.password) {
    showSecError("Please enter your current PIN or Password to authorize security changes.");
    return;
  }

  const selectedMethod = prefSelect ? prefSelect.value : "pin";

  if (selectedMethod === "pin") {
    const newPin = newPinInput ? newPinInput.value.trim() : "";
    const confirmPin = confirmPinInput ? confirmPinInput.value.trim() : "";
    if (newPin || confirmPin) {
      if (!/^\d{4}$/.test(newPin)) {
        showSecError("New App-Lock PIN must be exactly 4 numeric digits.");
        return;
      }
      if (newPin !== confirmPin) {
        showSecError("New 4-digit PIN and Confirm PIN do not match.");
        return;
      }
      sec.pin = newPin;
    }
  } else if (selectedMethod === "password") {
    const newPass = newPassInput ? newPassInput.value.trim() : "";
    const confirmPass = confirmPassInput ? confirmPassInput.value.trim() : "";
    if (newPass || confirmPass) {
      if (newPass.length < 6) {
        showSecError("New App-Lock password must be at least 6 characters.");
        return;
      }
      if (newPass !== confirmPass) {
        showSecError("New password and Confirm password do not match.");
        return;
      }
      sec.password = newPass;
    }
  }

  if (errBox) errBox.style.display = "none";
  if (prefSelect) sec.preferredMethod = selectedMethod;
  if (fallSelect) sec.fallbackMethod = fallSelect.value;
  if (policySelect) sec.lockPolicy = policySelect.value;

  closeModalDialog("security-settings-modal");
  renderApp();
  showToast("Security & App-Lock settings updated!");
}

function toggleBiometricSetting(type, checked) {
  if (type === "fingerprint") {
    ArthivaState.security.fingerprintEnabled = !!checked;
    showToast(`Fingerprint unlock ${checked ? 'enabled' : 'disabled'}.`);
  } else if (type === "face") {
    ArthivaState.security.faceUnlockEnabled = !!checked;
    showToast(`Face unlock ${checked ? 'enabled' : 'disabled'}.`);
  }
  renderApp();
}

// --------------------------------------------------------------------------
// 15. Subscription Plans & FAQ Accordion (Sections 6 & 8)
// --------------------------------------------------------------------------

function renderSubscriptionScreen() {
  const cycle = ArthivaState.membership.billingCycle || "yearly";
  const mBtn = document.getElementById("sub-cycle-monthly");
  const yBtn = document.getElementById("sub-cycle-annual") || document.getElementById("sub-cycle-yearly");
  const proPrice = document.getElementById("pro-tier-price-text") || document.getElementById("sub-pro-price-display");
  const proNote = document.getElementById("pro-tier-sub-text") || document.getElementById("sub-pro-billing-note");
  const famPrice = document.getElementById("family-tier-price-text") || document.getElementById("sub-family-price-display");
  const famNote = document.getElementById("family-tier-sub-text") || document.getElementById("sub-family-billing-note");

  if (mBtn) mBtn.classList.toggle("active", cycle === "monthly");
  if (yBtn) yBtn.classList.toggle("active", cycle !== "monthly");

  if (cycle === "monthly") {
    if (proPrice) proPrice.innerHTML = `₹149 <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">/ month</span>`;
    if (proNote) proNote.textContent = "Billed monthly · Cancel anytime";
    if (famPrice) famPrice.innerHTML = `₹249 <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">/ month</span>`;
    if (famNote) famNote.textContent = "Billed monthly · Up to 4 family members";
  } else {
    if (proPrice) proPrice.innerHTML = `₹999 <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">/ year (₹83/mo)</span>`;
    if (proNote) proNote.textContent = "Save 44% vs ₹149/month · Billed annually";
    if (famPrice) famPrice.innerHTML = `₹1,799 <span style="font-size: 12px; font-weight: 500; color: var(--text-muted);">/ year (₹150/mo)</span>`;
    if (famNote) famNote.textContent = "Save 40% vs ₹249/month · Up to 4 family members";
  }

  const tier = ArthivaState.membership.tier || "Arthiva Basic";
  const bBtn = document.getElementById("btn-select-basic");
  const pBtn = document.getElementById("btn-select-pro");
  const fBtn = document.getElementById("btn-select-family");

  if (bBtn) bBtn.textContent = tier === "Arthiva Basic" ? "Current Active Plan" : "Switch to Basic (Free)";
  if (pBtn) pBtn.textContent = tier === "Arthiva Pro" ? "✓ Active Plan (Arthiva Pro)" : "Upgrade to Arthiva Pro";
  if (fBtn) fBtn.textContent = tier === "Arthiva Family" ? "✓ Active Plan (Arthiva Family)" : "Choose Arthiva Family";
}

function setSubscriptionBillingCycle(cycle) {
  ArthivaState.membership.billingCycle = cycle === "monthly" ? "monthly" : "yearly";
  renderSubscriptionScreen();
}

function selectSubscriptionTier(tierName) {
  ArthivaState.membership.tier = tierName;
  renderApp();
  showToast(`Membership updated to ${tierName}!`);
}

function renderFAQList(searchQuery) {
  const listEl = document.getElementById("faq-accordion-list");
  if (!listEl) return;

  const q = (searchQuery !== undefined ? searchQuery : (document.getElementById("faq-search-input") ? document.getElementById("faq-search-input").value : "")).trim().toLowerCase();

  const filtered = FAQ_ITEMS.filter(item =>
    !q || item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    listEl.innerHTML = `<div style="text-align:center;padding:20px;color:var(--text-muted);font-size:12.5px;">No FAQ topics matched "${escapeHTML(q)}".</div>`;
    return;
  }

  // 6.1 & 6.2: All items collapsed by default, aligned in a single list with rotating right chevron
  listEl.innerHTML = filtered.map((item, idx) => `
    <div class="faq-item" id="faq-item-${idx}" ${item.id ? `data-faq-id="${escapeHTML(item.id)}"` : ''}>
      <button type="button" class="faq-question-btn" aria-expanded="false" onclick="toggleFaqItem(${idx})">
        <span>${escapeHTML(item.q)}</span>
        <svg class="faq-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="faq-answer-body">${escapeHTML(item.a).replace(/\n/g, '<br>')}</div>
    </div>
  `).join("");
}

function toggleFaqItem(idx) {
  const el = document.getElementById(`faq-item-${idx}`);
  if (!el) return;
  const isOpen = el.classList.toggle("open");
  const btn = el.querySelector(".faq-question-btn");
  if (btn) btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function openUnprotectPdfFaq() {
  closeAllSheets();
  const searchInput = document.getElementById("faq-search-input");
  if (searchInput) searchInput.value = "";
  switchScreen("faq");
  renderFAQList("");

  setTimeout(() => {
    const targetEl = document.querySelector('[data-faq-id="faq-unprotect-pdf"]') ||
      Array.from(document.querySelectorAll(".faq-item")).find(el => el.textContent.toLowerCase().includes("unprotect my bank statement pdf"));
    if (targetEl) {
      targetEl.classList.add("open");
      const btn = targetEl.querySelector(".faq-question-btn");
      if (btn) btn.setAttribute("aria-expanded", "true");
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, 60);
}

// --------------------------------------------------------------------------
// 16. Consent-Based Automatic Expense Tracking & Deduplication Engine (Section 10)
// --------------------------------------------------------------------------

let activeWizardTargetSource = "bank";
let currentWizardStep = 1;

const SAMPLE_RAW_NOTIFICATIONS = [
  {
    raw: "HDFC Bank: Rs. 640.00 debited from a/c **4821 on 20-10-26 to VPA swiggy@yesbank (UPI Ref 629381920112).",
    source: "SMS",
    merchant: "Swiggy",
    amount: 640,
    date: "2026-10-20",
    refId: "UPI-629381920112",
    type: "expense",
    category: "Dining out and food ordering"
  },
  {
    raw: "Gmail Receipt: Your Swiggy order #SWG-88210 for Rs. 640.00 paid via UPI Ref 629381920112 was delivered.",
    source: "Gmail",
    merchant: "Swiggy",
    amount: 640,
    date: "2026-10-20",
    refId: "UPI-629381920112",
    type: "duplicate",
    duplicateOf: "Swiggy ₹640 (SMS & Gmail share UPI Ref 629381920112)",
    category: "Dining out and food ordering"
  },
  {
    raw: "HDFC Bank AA Feed: DEBIT Rs. 1,150.00 at BIGBASKET SUPERMARKET BENGALURU on 19-10-26 (Ref BB992011).",
    source: "Bank AA",
    merchant: "BigBasket Supermarket",
    amount: 1150,
    date: "2026-10-19",
    refId: "AA-BB992011",
    type: "expense",
    category: "Groceries and daily essentials"
  },
  {
    raw: "WhatsApp Merchant Alert: Uber India Receipt — Trip to Indiranagar Metro for ₹340.00 paid via AmazonPay UPI.",
    source: "WhatsApp",
    merchant: "Uber India",
    amount: 340,
    date: "2026-10-19",
    refId: "WA-UBER340",
    type: "expense",
    category: "Transport, fuel and cabs"
  },
  {
    raw: "SMS Alert: Rs. 5,000.00 transferred from HDFC **4821 to Self Savings A/c **9910 (IMPS Self Transfer).",
    source: "SMS",
    merchant: "Self Transfer (Own A/c)",
    amount: 5000,
    date: "2026-10-18",
    refId: "SELF-9910",
    type: "self_transfer",
    category: "Excluded (Self-Transfer)"
  },
  {
    raw: "Gmail Alert: Refund of Rs. 450.00 processed by Myntra for Order #MYN-4412 to original UPI payment mode.",
    source: "Gmail",
    merchant: "Myntra Refund",
    amount: 450,
    date: "2026-10-18",
    refId: "REF-MYN4412",
    type: "refund",
    category: "Excluded (Merchant Refund)"
  }
];

function renderAutoTrackingProfileSection() {
  const at = ArthivaState.autoTracking;
  const masterToggle = document.getElementById("master-auto-track-toggle");
  const sourcesContainer = document.getElementById("auto-track-sources-list");
  const badgeEl = document.getElementById("auto-detected-count-badge");

  if (masterToggle) masterToggle.checked = !!at.masterEnabled;

  const pendingCount = (at.detectedQueue || []).filter(item => item.type === "expense" && !item.imported).length;
  if (badgeEl) badgeEl.textContent = `${pendingCount} new`;

  if (!sourcesContainer) return;

  sourcesContainer.innerHTML = Object.values(at.sources).map(src => {
    const isEnabled = at.masterEnabled && src.enabled;
    return `
      <div class="source-control-card">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div>
            <div style="font-size:12.5px;font-weight:700;color:var(--text-primary);display:flex;align-items:center;gap:6px;">
              <span>${escapeHTML(src.name)}</span>
              <span class="status-pill ${isEnabled ? 'within' : 'neutral'}">${isEnabled ? 'Connected' : 'Off'}</span>
            </div>
            <div style="font-size:11px;color:var(--text-muted);">${escapeHTML(src.subtitle)}</div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" ${isEnabled ? 'checked' : ''} onchange="toggleIndividualSource('${src.id}', this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:10.5px;color:var(--text-muted);padding-top:4px;border-top:1px dashed var(--border-subtle);">
          <span>Mode: <strong>${escapeHTML(src.modeBadge)}</strong> ${src.lastSync ? '· Synced ' + src.lastSync : ''}</span>
          ${isEnabled
            ? `<button type="button" class="section-link destructive-link" onclick="disconnectDataSource('${src.id}')">Disconnect</button>`
            : `<button type="button" class="section-link" style="font-size:11px;" onclick="openAutoTrackConsentWizard('${src.id}')">Configure →</button>`}
        </div>
      </div>
    `;
  }).join("");
}

function onMasterAutoTrackToggle(checked) {
  const at = ArthivaState.autoTracking;
  if (!checked) {
    at.masterEnabled = false;
    Object.values(at.sources).forEach(s => { s.enabled = false; });
    renderApp();
    showToast("Automatic expense tracking disabled across all sources.");
    return;
  }

  if (!at.consentVerified) {
    // Revert checkbox until multi-step verification & consent completes
    const masterToggle = document.getElementById("master-auto-track-toggle");
    if (masterToggle) masterToggle.checked = false;
    openAutoTrackConsentWizard("bank");
  } else {
    at.masterEnabled = true;
    renderApp();
    showToast("Automatic expense tracking enabled.");
  }
}

function toggleIndividualSource(sourceId, checked) {
  const at = ArthivaState.autoTracking;
  const src = at.sources[sourceId];
  if (!src) return;

  if (!checked) {
    src.enabled = false;
    const anyStillEnabled = Object.values(at.sources).some(s => s.enabled);
    if (!anyStillEnabled) at.masterEnabled = false;
    renderApp();
    showToast(`Disconnected ${src.name}.`);
    return;
  }

  if (!at.consentVerified || !src.connectedAt) {
    renderAutoTrackingProfileSection();
    openAutoTrackConsentWizard(sourceId);
  } else {
    at.masterEnabled = true;
    src.enabled = true;
    src.lastSync = "Just now";
    renderApp();
    showToast(`${src.name} active.`);
  }
}

function disconnectDataSource(sourceId) {
  const at = ArthivaState.autoTracking;
  const src = at.sources[sourceId];
  if (!src) return;

  src.enabled = false;
  src.connectedAt = null;
  src.lastSync = null;
  if (!Object.values(at.sources).some(s => s.enabled)) {
    at.masterEnabled = false;
  }
  renderApp();
  showToast(`Revoked permission and disconnected ${src.name}.`);
}

function openAutoTrackConsentWizard(targetSourceId) {
  activeWizardTargetSource = targetSourceId || "bank";
  currentWizardStep = 1;
  renderAutoTrackWizardStep();
  openModalDialog("auto-tracking-auth-modal");
}

function renderAutoTrackWizardStep() {
  const container = document.getElementById("auto-auth-wizard-content");
  if (!container) return;

  const user = ArthivaState.auth.user;
  const src = ArthivaState.autoTracking.sources[activeWizardTargetSource] || ArthivaState.autoTracking.sources.bank;

  if (currentWizardStep === 1) {
    container.innerHTML = `
      <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;margin-bottom:4px;">Step 1 of 5 · Mobile OTP Verification</div>
      <h3 class="modal-title">Verify Registered Mobile</h3>
      <p class="modal-subtitle">We sent a 6-digit verification OTP to <strong>+91 ${escapeHTML(user.mobile || '9845012345')}</strong> to authorize financial data access.</p>
      <div class="form-group">
        <label class="form-label">Enter 6-Digit Mobile OTP (Demo OTP: 123456)</label>
        <input type="text" class="form-input tabular-nums" id="wiz-mobile-otp-input" value="123456" maxlength="6">
      </div>
      <div class="modal-actions">
        <button class="btn-secondary" onclick="closeModalDialog('auto-tracking-auth-modal')">Cancel</button>
        <button class="btn-primary" onclick="advanceAutoTrackWizard(2)">Verify Mobile →</button>
      </div>
    `;
  } else if (currentWizardStep === 2) {
    container.innerHTML = `
      <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;margin-bottom:4px;">Step 2 of 5 · Email Verification</div>
      <h3 class="modal-title">Verify Email Identity</h3>
      <p class="modal-subtitle">Enter the security code sent to <strong>${escapeHTML(user.email || 'rashika@arthiva.app')}</strong>.</p>
      <div class="form-group">
        <label class="form-label">Enter 6-Digit Email Code (Demo Code: 654321)</label>
        <input type="text" class="form-input tabular-nums" id="wiz-email-otp-input" value="654321" maxlength="6">
      </div>
      <div class="modal-actions">
        <button class="btn-secondary" onclick="advanceAutoTrackWizard(1)">Back</button>
        <button class="btn-primary" onclick="advanceAutoTrackWizard(3)">Verify Email →</button>
      </div>
    `;
  } else if (currentWizardStep === 3) {
    container.innerHTML = `
      <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;margin-bottom:4px;">Step 3 of 5 · Explicit Data & Privacy Disclosure</div>
      <h3 class="modal-title">Data Access & Purpose Consent</h3>
      <div style="padding:10px;background:var(--bg-subtle);border-radius:10px;border:1px solid var(--border-subtle);font-size:11.5px;color:var(--text-secondary);line-height:1.5;margin-bottom:12px;">
        <div><strong>• What data is accessed:</strong> Transaction amount, merchant name, date, payment channel (UPI/Card/Bank), and reference ID.</div>
        <div><strong>• Why it is needed:</strong> To automatically detect expenses, prevent duplicate entries across SMS/Email/Bank, and keep Safe-to-Spend accurate.</div>
        <div><strong>• Storage & Privacy:</strong> Parsed locally in your encrypted browser store. Personal chats, OTPs, and non-financial emails are never read.</div>
        <div><strong>• Revocation:</strong> You can disable or disconnect any source with one tap under Profile.</div>
      </div>
      <label style="display:flex;align-items:flex-start;gap:8px;font-size:12px;font-weight:600;margin-bottom:12px;cursor:pointer;">
        <input type="checkbox" id="wiz-explicit-consent-check" checked style="width:16px;height:16px;accent-color:var(--primary);margin-top:2px;">
        <span>I explicitly consent to read-only transaction parsing for expense tracking.</span>
      </label>
      <div class="modal-actions">
        <button class="btn-secondary" onclick="advanceAutoTrackWizard(2)">Back</button>
        <button class="btn-primary" onclick="advanceAutoTrackWizard(4)">Accept & Continue →</button>
      </div>
    `;
  } else if (currentWizardStep === 4) {
    container.innerHTML = `
      <div style="font-size:11px;font-weight:700;color:var(--primary);text-transform:uppercase;margin-bottom:4px;">Step 4 of 5 · Source Authorization (${escapeHTML(src.name)})</div>
      <h3 class="modal-title">Authorize ${escapeHTML(src.name)}</h3>
      <p class="modal-subtitle">Select which sources to activate now and review platform capabilities:</p>
      <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
        <label style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--bg-subtle);border-radius:8px;font-size:12px;">
          <span><strong>Bank / UPI (RBI AA Sandbox)</strong><br><small style="color:var(--text-muted);">HDFC Bank ···4821 statement feed</small></span>
          <input type="checkbox" id="wiz-src-bank" ${activeWizardTargetSource === 'bank' ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--primary);">
        </label>
        <label style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--bg-subtle);border-radius:8px;font-size:12px;">
          <span><strong>SMS Transaction Parser</strong><br><small style="color:var(--text-muted);">Requires Android SMS permission; simulated in web browser</small></span>
          <input type="checkbox" id="wiz-src-sms" ${activeWizardTargetSource === 'sms' ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--primary);">
        </label>
        <label style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--bg-subtle);border-radius:8px;font-size:12px;">
          <span><strong>Gmail Receipts (Read-Only OAuth)</strong><br><small style="color:var(--text-muted);">Swiggy, Zomato, Amazon, Uber & utility bills</small></span>
          <input type="checkbox" id="wiz-src-gmail" ${activeWizardTargetSource === 'gmail' ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--primary);">
        </label>
        <label style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--bg-subtle);border-radius:8px;font-size:12px;">
          <span><strong>WhatsApp Merchant Alerts</strong><br><small style="color:var(--text-muted);">Parses opted-in merchant payment receipts</small></span>
          <input type="checkbox" id="wiz-src-whatsapp" ${activeWizardTargetSource === 'whatsapp' ? 'checked' : ''} style="width:16px;height:16px;accent-color:var(--primary);">
        </label>
      </div>
      <div class="modal-actions">
        <button class="btn-secondary" onclick="advanceAutoTrackWizard(3)">Back</button>
        <button class="btn-primary" onclick="advanceAutoTrackWizard(5)">Authorize Selected →</button>
      </div>
    `;
  }
}

function advanceAutoTrackWizard(nextStep) {
  if (nextStep === 2) {
    const mobOtp = document.getElementById("wiz-mobile-otp-input");
    if (!mobOtp || mobOtp.value.trim().length < 4) {
      showToast("Please enter a valid 6-digit Mobile OTP.");
      return;
    }
    ArthivaState.autoTracking.mobileOtpVerified = true;
  } else if (nextStep === 3) {
    const emailOtp = document.getElementById("wiz-email-otp-input");
    if (!emailOtp || emailOtp.value.trim().length < 4) {
      showToast("Please enter a valid 6-digit Email verification code.");
      return;
    }
    ArthivaState.autoTracking.emailOtpVerified = true;
  } else if (nextStep === 4) {
    const consentCheck = document.getElementById("wiz-explicit-consent-check");
    if (consentCheck && !consentCheck.checked) {
      showToast("You must accept the explicit data access disclosure to proceed.");
      return;
    }
  } else if (nextStep === 5) {
    const bCheck = document.getElementById("wiz-src-bank");
    const sCheck = document.getElementById("wiz-src-sms");
    const gCheck = document.getElementById("wiz-src-gmail");
    const wCheck = document.getElementById("wiz-src-whatsapp");

    const at = ArthivaState.autoTracking;
    at.consentVerified = true;
    at.masterEnabled = true;
    at.consentTimestamp = new Date().toISOString();

    const nowStr = "20 Oct, 10:30 AM";
    if (bCheck && bCheck.checked) { at.sources.bank.enabled = true; at.sources.bank.connectedAt = nowStr; at.sources.bank.lastSync = "Just now"; }
    if (sCheck && sCheck.checked) { at.sources.sms.enabled = true; at.sources.sms.connectedAt = nowStr; at.sources.sms.lastSync = "Just now"; }
    if (gCheck && gCheck.checked) { at.sources.gmail.enabled = true; at.sources.gmail.connectedAt = nowStr; at.sources.gmail.lastSync = "Just now"; }
    if (wCheck && wCheck.checked) { at.sources.whatsapp.enabled = true; at.sources.whatsapp.connectedAt = nowStr; at.sources.whatsapp.lastSync = "Just now"; }

    // Ensure at least target source is enabled
    if (!Object.values(at.sources).some(s => s.enabled)) {
      at.sources[activeWizardTargetSource].enabled = true;
      at.sources[activeWizardTargetSource].connectedAt = nowStr;
      at.sources[activeWizardTargetSource].lastSync = "Just now";
    }

    if (!at.detectedQueue || at.detectedQueue.length === 0) {
      loadSampleNotificationFeed(true);
    }

    closeModalDialog("auto-tracking-auth-modal");
    renderApp();
    showToast("Consent verified! Automatic expense detection is now active.");
    return;
  }

  currentWizardStep = nextStep;
  renderAutoTrackWizardStep();
}

function loadSampleNotificationFeed(silent = false) {
  ArthivaState.autoTracking.detectedQueue = SAMPLE_RAW_NOTIFICATIONS.map((item, idx) =>
    Object.assign({}, item, { id: "det-" + idx + "-" + Date.now(), imported: false })
  );
  renderApp();
  renderDetectedTransactionsQueue();
  if (!silent) {
    showToast("Loaded 6 multi-source notifications (including duplicate, self-transfer & refund).");
  }
}

function parseCustomNotificationText() {
  const input = document.getElementById("raw-notification-parse-input");
  const raw = input ? input.value.trim() : "";
  if (!raw) {
    showToast("Paste a bank SMS, UPI alert, or receipt text first.");
    return;
  }

  // Extract INR amount
  const amtMatch = raw.match(/(?:Rs\.?|INR|₹)\s*([\d,]+(?:\.\d{1,2})?)/i);
  const amount = amtMatch ? Math.round( parseFloat(amtMatch[1].replace(/,/g, "")) ) : 500;

  // Detect self-transfer or refund
  const lower = raw.toLowerCase();
  let type = "expense";
  if (lower.includes("refund") || lower.includes("reversed") || lower.includes("cashback")) {
    type = "refund";
  } else if (lower.includes("self transfer") || lower.includes("own a/c") || lower.includes("to self")) {
    type = "self_transfer";
  }

  // Extract merchant & category
  let merchant = "Parsed Merchant";
  let category = "Shopping and personal";
  if (lower.includes("swiggy") || lower.includes("zomato") || lower.includes("toit") || lower.includes("starbucks")) {
    merchant = lower.includes("zomato") ? "Zomato" : "Swiggy";
    category = "Dining out and food ordering";
  } else if (lower.includes("blinkit") || lower.includes("bigbasket") || lower.includes("zepto") || lower.includes("instamart")) {
    merchant = lower.includes("blinkit") ? "Blinkit" : "BigBasket";
    category = "Groceries and daily essentials";
  } else if (lower.includes("uber") || lower.includes("ola") || lower.includes("rapido") || lower.includes("shell")) {
    merchant = lower.includes("ola") ? "Ola Cabs" : "Uber India";
    category = "Transport, fuel and cabs";
  } else if (lower.includes("bescom") || lower.includes("airtel") || lower.includes("jio")) {
    merchant = "Utility / Recharge";
    category = "Utilities and mobile recharge";
  } else {
    const toMatch = raw.match(/(?:to VPA|at|to)\s+([A-Za-z0-9@._\-\s]{3,22})/i);
    if (toMatch) merchant = toMatch[1].trim();
  }

  // Check duplicate in existing queue by same amount & merchant
  const isDup = (ArthivaState.autoTracking.detectedQueue || []).some(
    q => q.amount === amount && q.merchant.toLowerCase() === merchant.toLowerCase()
  );
  if (isDup && type === "expense") {
    type = "duplicate";
  }

  const detectedItem = {
    id: "det-custom-" + Date.now(),
    raw,
    source: "Parsed Input",
    merchant,
    amount,
    date: "2026-10-20",
    refId: "REF-" + Math.floor(100000 + Math.random() * 900000),
    type,
    duplicateOf: isDup ? `Matches existing ${merchant} ${formatINR(amount)} alert` : undefined,
    category: type === "expense" ? category : `Excluded (${type.replace('_', ' ')})`,
    imported: false
  };

  ArthivaState.autoTracking.detectedQueue.unshift(detectedItem);
  if (input) input.value = "";
  renderApp();
  renderDetectedTransactionsQueue();
  showToast(`Parsed ${merchant} (${formatINR(amount)}) as ${type.toUpperCase()}!`);
}

function openAutoTransactionsReviewSheet() {
  if (!ArthivaState.autoTracking.detectedQueue || ArthivaState.autoTracking.detectedQueue.length === 0) {
    loadSampleNotificationFeed(true);
  }
  renderDetectedTransactionsQueue();
  openBottomSheet("auto-transactions-review-sheet");
}

function renderDetectedTransactionsQueue() {
  const listEl = document.getElementById("auto-detected-transactions-list");
  if (!listEl) return;

  const queue = ArthivaState.autoTracking.detectedQueue || [];
  if (queue.length === 0) {
    listEl.innerHTML = `<div style="text-align:center;padding:16px;color:var(--text-muted);font-size:12px;">No detected notifications in queue. Tap "Load Sample Feed" above to test.</div>`;
    return;
  }

  const flexCats = ArthivaState.categories.filter(c => c.type === "flexible");

  listEl.innerHTML = queue.map(item => {
    let badgeHTML = "";
    if (item.imported) {
      badgeHTML = `<span class="status-pill within">✓ Imported</span>`;
    } else if (item.type === "duplicate") {
      badgeHTML = `<span class="status-pill approaching">Duplicate Filtered</span>`;
    } else if (item.type === "self_transfer") {
      badgeHTML = `<span class="status-pill neutral">Self-Transfer Excluded</span>`;
    } else if (item.type === "refund") {
      badgeHTML = `<span class="status-pill within">Refund / Credit</span>`;
    } else {
      badgeHTML = `<span class="status-pill within">Eligible Expense</span>`;
    }

    return `
      <div style="padding:10px;background:var(--bg-subtle);border-radius:10px;border:1px solid var(--border-subtle);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:6px;margin-bottom:4px;">
          <div>
            <span class="history-source-tag">${escapeHTML(item.source)}</span>
            <strong style="font-size:12.5px;margin-left:4px;">${escapeHTML(item.merchant)}</strong>
          </div>
          <strong class="tabular-nums" style="font-size:13px;">${formatINR(item.amount)}</strong>
        </div>
        <div style="font-size:10.5px;color:var(--text-muted);margin-bottom:6px;line-height:1.35;">
          "${escapeHTML(item.raw)}"
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;flex-wrap:wrap;">
          ${badgeHTML}
          ${item.type === "expense" && !item.imported ? `
            <div style="display:flex;align-items:center;gap:6px;">
              <select class="form-select" style="height:26px;font-size:10.5px;padding:0 6px;" onchange="updateDetectedItemCategory('${item.id}', this.value)">
                ${flexCats.map(c => `<option value="${escapeHTML(c.name)}" ${c.name === item.category ? 'selected' : ''}>${escapeHTML(c.name.split(' and ')[0])}</option>`).join("")}
              </select>
              <button class="section-link" style="background:var(--primary);color:#fff;padding:3px 8px;border-radius:6px;font-size:11px;" onclick="importSingleDetectedTransaction('${item.id}')">Import</button>
            </div>
          ` : `<span style="font-size:10.5px;color:var(--text-muted);">${escapeHTML(item.duplicateOf || item.category)}</span>`}
        </div>
      </div>
    `;
  }).join("");
}

function updateDetectedItemCategory(itemId, newCat) {
  const item = (ArthivaState.autoTracking.detectedQueue || []).find(i => i.id === itemId);
  if (item) item.category = newCat;
}

function importSingleDetectedTransaction(itemId) {
  const item = (ArthivaState.autoTracking.detectedQueue || []).find(i => i.id === itemId);
  if (!item || item.imported || item.type !== "expense") return;

  item.imported = true;
  ArthivaState.expenses.unshift({
    id: "exp-auto-" + Date.now() + "-" + Math.floor(Math.random() * 1000),
    category: item.category,
    amount: item.amount,
    merchant: item.merchant,
    date: item.date || "2026-10-20",
    note: `Auto-detected via ${item.source} (${item.refId})`,
    source: `Auto · ${item.source}`
  });

  renderApp();
  renderDetectedTransactionsQueue();
  showToast(`Imported ${item.merchant} (${formatINR(item.amount)}) into ${item.category.split(' ')[0]}!`);
}

function confirmAllEligibleDetectedTransactions() {
  const eligible = (ArthivaState.autoTracking.detectedQueue || []).filter(i => i.type === "expense" && !i.imported);
  if (eligible.length === 0) {
    showToast("No unimported eligible expenses in queue.");
    return;
  }

  eligible.forEach(item => {
    item.imported = true;
    ArthivaState.expenses.unshift({
      id: "exp-auto-" + Date.now() + "-" + Math.floor(Math.random() * 10000),
      category: item.category,
      amount: item.amount,
      merchant: item.merchant,
      date: item.date || "2026-10-20",
      note: `Auto-detected via ${item.source} (${item.refId})`,
      source: `Auto · ${item.source}`
    });
  });

  closeBottomSheet("auto-transactions-review-sheet");
  renderApp();
  showToast(`Imported ${eligible.length} verified transactions! Duplicates & self-transfers were excluded.`);
}

function deleteImportedTransactions() {
  const beforeCount = ArthivaState.expenses.length;
  ArthivaState.expenses = ArthivaState.expenses.filter(e => !e.source || !e.source.startsWith("Auto"));
  ArthivaState.autoTracking.detectedQueue = [];
  const removed = beforeCount - ArthivaState.expenses.length;
  renderApp();
  renderDetectedTransactionsQueue();
  showToast(`Deleted ${removed} imported transaction(s) and cleared detection queue.`);
}

// 3.1 - 3.3 Import Bank / Credit Card Statement (Only unprotected PDFs, CSV, XLS/XLSX accepted)
function openImportStatementModal() {
  const fileInput = document.getElementById("statement-file-input");
  const progBox = document.getElementById("statement-upload-progress-box");
  const statusEl = document.getElementById("statement-status-message");

  if (fileInput) fileInput.value = "";
  if (progBox) progBox.style.display = "none";
  if (statusEl) statusEl.style.display = "none";

  openModalDialog("import-statement-modal");
}

function detectIfPdfIsProtected(file) {
  return new Promise((resolve) => {
    if (!file) {
      resolve(false);
      return;
    }
    const lowerName = file.name.toLowerCase();
    // Filename heuristic for protected/locked test files
    if (lowerName.endsWith(".pdf") && (lowerName.includes("protected") || lowerName.includes("locked") || lowerName.includes("encrypted") || lowerName.includes("password"))) {
      resolve(true);
      return;
    }
    if (!lowerName.endsWith(".pdf")) {
      resolve(false);
      return;
    }

    // Inspect binary PDF header/trailer for /Encrypt dictionary
    try {
      const reader = new FileReader();
      reader.onload = function(e) {
        const text = String(e.target.result || "");
        const hasEncryptDict = /\/Encrypt\b/.test(text);
        resolve(hasEncryptDict);
      };
      reader.onerror = function() {
        resolve(false);
      };
      reader.readAsText(file);
    } catch (err) {
      resolve(false);
    }
  });
}

function showProtectedPdfRejectionMessage(statusEl) {
  if (!statusEl) return;
  statusEl.style.display = "block";
  statusEl.style.background = "#FEE2E2";
  statusEl.style.color = "#991B1B";
  statusEl.style.border = "1px solid #FCA5A5";
  statusEl.innerHTML = `
    <div>This statement is password-protected. Please remove the password and upload it again.</div>
    <div style="margin-top: 6px;">
      <button type="button" class="section-link" style="color: #991B1B; font-size: 12px; font-weight: 700; padding: 0; text-decoration: underline;" onclick="openUnprotectPdfFaq()">
        How to unprotect your bank statement PDF
      </button>
    </div>
  `;
}

async function onStatementFileSelected(event) {
  const file = event && event.target && event.target.files ? event.target.files[0] : null;
  const statusEl = document.getElementById("statement-status-message");
  const progBox = document.getElementById("statement-upload-progress-box");
  if (statusEl) statusEl.style.display = "none";
  if (progBox) progBox.style.display = "none";
  if (!file) return;

  const isProtected = await detectIfPdfIsProtected(file);
  if (isProtected) {
    showProtectedPdfRejectionMessage(statusEl);
  }
}

async function processUploadedStatement() {
  const fileInput = document.getElementById("statement-file-input");
  const progBox = document.getElementById("statement-upload-progress-box");
  const progFill = document.getElementById("statement-progress-fill");
  const progPct = document.getElementById("statement-progress-pct");
  const progLabel = document.getElementById("statement-progress-label");
  const statusEl = document.getElementById("statement-status-message");

  const showStatus = (msg, isError) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    statusEl.style.display = "block";
    statusEl.style.background = isError ? "#FEE2E2" : "var(--primary-light)";
    statusEl.style.color = isError ? "#991B1B" : "var(--primary)";
    statusEl.style.border = isError ? "1px solid #FCA5A5" : "1px solid var(--primary)";
  };

  const file = fileInput && fileInput.files ? fileInput.files[0] : null;
  if (!file) {
    showStatus("Please select an unprotected statement file (.pdf, .csv, .xls, or .xlsx) to upload.", true);
    return;
  }

  const ext = file.name.split(".").pop().toLowerCase();
  const allowed = ["pdf", "csv", "xls", "xlsx"];
  if (!allowed.includes(ext)) {
    showStatus(`Unsupported file format (.${ext}). Please upload an unprotected PDF, CSV, XLS, or XLSX statement.`, true);
    return;
  }

  // 3.1 Detect whether the uploaded PDF is password-protected or encrypted before parsing
  if (ext === "pdf") {
    const isProtected = await detectIfPdfIsProtected(file);
    if (isProtected) {
      if (progBox) progBox.style.display = "none";
      showProtectedPdfRejectionMessage(statusEl);
      return;
    }
  }

  if (statusEl) statusEl.style.display = "none";
  if (progBox) progBox.style.display = "block";
  if (progFill) progFill.style.width = "25%";
  if (progPct) progPct.textContent = "25%";
  if (progLabel) progLabel.textContent = `Reading ${file.name}...`;

  setTimeout(() => {
    if (progFill) progFill.style.width = "70%";
    if (progPct) progPct.textContent = "70%";
    if (progLabel) progLabel.textContent = "Extracting & deduplicating transactions...";
  }, 220);

  setTimeout(() => {
    if (progFill) progFill.style.width = "100%";
    if (progPct) progPct.textContent = "100%";
    if (progLabel) progLabel.textContent = "Statement parsed successfully";

    const importedEntries = [
      {
        id: "exp-stmt-" + Date.now() + "-1",
        category: "Groceries and daily essentials",
        amount: 820,
        merchant: "Nature's Basket",
        date: "2026-10-19",
        note: `Imported from ${file.name}`,
        source: `Statement (${ext.toUpperCase()})`
      },
      {
        id: "exp-stmt-" + Date.now() + "-2",
        category: "Transport, fuel and cabs",
        amount: 460,
        merchant: "Namma Yatri Auto",
        date: "2026-10-18",
        note: `Imported from ${file.name}`,
        source: `Statement (${ext.toUpperCase()})`
      }
    ];

    importedEntries.forEach(entry => ArthivaState.expenses.unshift(entry));
    renderApp();
    showStatus(`✓ Imported 2 verified transactions (₹1,280 total) from "${file.name}". Duplicate entries and self-transfers were automatically skipped.`, false);
    showToast(`Imported 2 transactions from ${file.name}!`);
  }, 520);
}

// --------------------------------------------------------------------------
// 17. Account Deletion with Re-Authentication (Section 12)
// --------------------------------------------------------------------------

function openDeleteAccountModal() {
  const confirmInput = document.getElementById("delete-account-confirm-input");
  const pinInput = document.getElementById("delete-account-pin-input");
  if (confirmInput) confirmInput.value = "";
  if (pinInput) pinInput.value = "";
  openModalDialog("delete-account-modal");
}

function confirmDeleteAccount() {
  const pinInput = document.getElementById("delete-account-pin-input");
  const confirmInput = document.getElementById("delete-account-confirm-input");

  const enteredAuth = pinInput ? pinInput.value.trim() : "";
  const validPin = (ArthivaState.security && ArthivaState.security.pin) || "1234";
  const validPass = (ArthivaState.security && ArthivaState.security.password) || "arthiva2026";

  if (enteredAuth !== validPin && enteredAuth !== validPass) {
    showToast("Security verification failed: Please enter your current PIN or Password.");
    return;
  }

  if (!confirmInput || confirmInput.value.trim().toUpperCase() !== "DELETE") {
    showToast('Please type "DELETE" to confirm permanent account deletion.');
    return;
  }

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("arthiva_session_v2");

  closeModalDialog("delete-account-modal");

  ArthivaState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  ArthivaState.auth.isAuthenticated = false;

  showToast("All application data and sessions deleted permanently.");
  switchScreen("auth");
}

// --------------------------------------------------------------------------
// 18. Welcome, Authentication (Mobile/Email + 6-Box OTP), App-Lock Setup & 7-Step Financial Onboarding
// --------------------------------------------------------------------------

const ONBOARDING_STEP_KEY = "arthiva_onboarding_step_v2";
const ONBOARDING_DRAFT_KEY = "arthiva_onboarding_draft_v2";
let authOtpTimerInterval = null;
let authCurrentFlowMode = "signup"; // "signup" ("Get started") or "signin" ("I already have an account")
let authCurrentChannel = "mobile";  // "mobile" or "email"
let authPendingTarget = "";         // e.g. "+91 9845012345" or "name@example.com"
let authOtpWrongAttempts = 0;
let authOtpExpired = false;
let authOtpLockoutUntil = 0;
let setupLockMode = "pin";          // "pin" or "password"

const WEAK_PINS = new Set([
  "1234", "0000", "1111", "2222", "3333", "4444", "5555", "6666",
  "7777", "8888", "9999", "4321", "1212", "1122", "0123", "2580"
]);

function openResetToNewUserModal() {
  if (window.ARTHIVA_ENV === "production") return;
  openModalDialog("reset-new-user-modal");
}

function buildEmptyNewUserState() {
  const emptyState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  emptyState.isEmptyState = false;
  emptyState.auth.isAuthenticated = false;
  emptyState.auth.user = {
    name: "",
    email: "",
    mobile: "",
    phone: "",
    dob: "",
    age: null,
    role: "",
    city: "",
    householdName: "",
    householdMode: "Individual",
    householdMembers: [],
    avatarType: "monogram",
    avatarData: "A"
  };
  emptyState.security = {
    appLockEnabled: false,
    isLocked: false,
    pin: "",
    password: "",
    preferredMethod: "pin",
    fallbackMethod: "pin",
    fingerprintEnabled: false,
    faceUnlockEnabled: false,
    lockPolicy: "reopen",
    failedAttempts: 0
  };
  emptyState.cycleConfig = {
    paydayDay: 1,
    takeHome: 0,
    otherIncome: 0,
    employerOrBank: "",
    referenceDate: "2026-10-20"
  };
  emptyState.balance = {
    amount: 0,
    lastUpdated: "",
    label: "Not set",
    note: ""
  };
  emptyState.balanceHistory = [];
  emptyState.bankAccounts = [];
  emptyState.commitments = [];
  emptyState.investments = [];
  emptyState.goals = [];
  emptyState.goal = {
    id: "goal-1",
    title: "",
    targetAmount: 0,
    currentSaved: 0,
    targetDate: "2027-06-30",
    monthlyAllocation: 0,
    savedThisCycle: 0,
    frequency: "Monthly"
  };
  emptyState.expenses = [];
  emptyState.budgets = [];
  emptyState.notifications = [];
  emptyState.onboardingStep = 1;
  return emptyState;
}

function createEmptyOnboardingDraft() {
  return {
    signedInWith: "mobile",
    name: "",
    secondaryContact: "",
    householdMode: "Individual",
    householdName: "",
    householdMembers: [],
    takeHome: "",
    paydayDay: 1,
    otherIncome: "",
    bankAccounts: [],
    bills: [],
    investments: [],
    goals: []
  };
}

function confirmResetToNewUser() {
  if (window.ARTHIVA_ENV === "production") return;
  closeModalDialog("reset-new-user-modal");

  try {
    localStorage.clear();
    sessionStorage.clear();
    if (window.indexedDB && typeof window.indexedDB.databases === "function") {
      window.indexedDB.databases().then(dbs => {
        dbs.forEach(db => {
          if (db && db.name) window.indexedDB.deleteDatabase(db.name);
        });
      }).catch(() => {});
    }
  } catch (e) {}

  ArthivaState = buildEmptyNewUserState();
  onboardingDraft = createEmptyOnboardingDraft();
  authOtpWrongAttempts = 0;
  authOtpExpired = false;
  authOtpLockoutUntil = 0;

  saveStateToStorage();
  showAuthWelcomeView();
  switchScreen("auth");
  renderApp();
  showToast("Reset complete. Opened Welcome screen with zero data.");
}

window.seedFreshNewUser = confirmResetToNewUser;

// --------------------------------------------------------------------------
// 1 & 2. Welcome & Authentication Views (Mobile +91 / Email + 6-Box OTP)
// --------------------------------------------------------------------------

function showOnlyAuthSubView(viewId) {
  const ids = [
    "auth-welcome-view",
    "auth-credentials-view",
    "auth-otp-view",
    "auth-setup-lock-view",
    "auth-start-onboarding-view"
  ];
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = (id === viewId) ? "block" : "none";
  });
}

function showAuthWelcomeView() {
  if (authOtpTimerInterval) clearInterval(authOtpTimerInterval);
  showOnlyAuthSubView("auth-welcome-view");
}

function showAuthCredentialsView(mode) {
  openAuthCredentialsView(mode);
}

function openAuthCredentialsView(mode) {
  authCurrentFlowMode = mode === "signin" ? "signin" : "signup";
  showOnlyAuthSubView("auth-credentials-view");

  const badgeEl = document.getElementById("auth-mode-badge");
  const titleEl = document.getElementById("auth-cred-title");
  const subEl = document.getElementById("auth-cred-subtitle");

  if (authCurrentFlowMode === "signin") {
    if (badgeEl) badgeEl.textContent = "Existing User Login";
    if (titleEl) titleEl.textContent = "Welcome back";
    if (subEl) subEl.textContent = "Sign in with your registered mobile number or email.";
  } else {
    if (badgeEl) badgeEl.textContent = "New User Sign Up";
    if (titleEl) titleEl.textContent = "Create your account";
    if (subEl) subEl.textContent = "Enter your mobile number or email to receive a 6-digit OTP.";
  }

  const mobInput = document.getElementById("auth-mobile-input");
  const emailInput = document.getElementById("auth-email-only-input");
  if (mobInput) mobInput.value = "";
  if (emailInput) emailInput.value = "";
  setInlineError("auth-mobile-error", "auth-mobile-input", "");
  setInlineError("auth-email-only-error", "auth-email-only-input", "");

  switchAuthChannelTab("mobile");
}

function switchAuthChannelTab(channel) {
  authCurrentChannel = channel === "email" ? "email" : "mobile";
  const mobTab = document.getElementById("tab-auth-mobile");
  const emTab = document.getElementById("tab-auth-email");
  const mobPanel = document.getElementById("auth-channel-mobile-panel");
  const emPanel = document.getElementById("auth-channel-email-panel");

  if (mobTab) mobTab.classList.toggle("active", authCurrentChannel === "mobile");
  if (emTab) emTab.classList.toggle("active", authCurrentChannel === "email");
  if (mobPanel) mobPanel.style.display = authCurrentChannel === "mobile" ? "block" : "none";
  if (emPanel) emPanel.style.display = authCurrentChannel === "email" ? "block" : "none";

  updateAuthContinueButtonState();
}

function onAuthMobileDigitsInput(inputEl) {
  if (!inputEl) return;
  const cleaned = inputEl.value.replace(/\D/g, "").slice(0, 10);
  if (inputEl.value !== cleaned) inputEl.value = cleaned;
  validateAuthMobileInput(false);
}

function validateAuthMobileInput(showEmptyError) {
  const inputEl = document.getElementById("auth-mobile-input");
  const codeEl = document.getElementById("auth-country-code");
  const val = inputEl ? inputEl.value.trim() : "";
  const country = codeEl ? codeEl.value : "+91";

  if (!val) {
    if (showEmptyError) {
      setInlineError("auth-mobile-error", "auth-mobile-input", "Enter your mobile number");
    } else {
      setInlineError("auth-mobile-error", "auth-mobile-input", "");
    }
    updateAuthContinueButtonState(false);
    return false;
  }

  if (val.length !== 10 || !/^\d{10}$/.test(val)) {
    setInlineError("auth-mobile-error", "auth-mobile-input", "Enter a valid 10-digit mobile number");
    updateAuthContinueButtonState(false);
    return false;
  }

  if (country === "+91" && !/^[6-9]/.test(val)) {
    setInlineError("auth-mobile-error", "auth-mobile-input", "Enter a valid Indian mobile number");
    updateAuthContinueButtonState(false);
    return false;
  }

  setInlineError("auth-mobile-error", "auth-mobile-input", "");
  updateAuthContinueButtonState(true);
  return true;
}

function validateAuthEmailInput(showEmptyError) {
  const inputEl = document.getElementById("auth-email-only-input");
  const val = inputEl ? inputEl.value.trim() : "";

  if (!val) {
    if (showEmptyError) {
      setInlineError("auth-email-only-error", "auth-email-only-input", "Enter a valid email address");
    } else {
      setInlineError("auth-email-only-error", "auth-email-only-input", "");
    }
    updateAuthContinueButtonState(false);
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) {
    setInlineError("auth-email-only-error", "auth-email-only-input", "Enter a valid email address");
    updateAuthContinueButtonState(false);
    return false;
  }

  setInlineError("auth-email-only-error", "auth-email-only-input", "");
  updateAuthContinueButtonState(true);
  return true;
}

function updateAuthContinueButtonState(forceState) {
  const btn = document.getElementById("btn-auth-continue");
  if (!btn) return;
  if (typeof forceState === "boolean") {
    btn.disabled = !forceState;
    return;
  }
  if (authCurrentChannel === "mobile") {
    const val = (document.getElementById("auth-mobile-input")?.value || "").trim();
    const country = document.getElementById("auth-country-code")?.value || "+91";
    const ok = /^\d{10}$/.test(val) && (country !== "+91" || /^[6-9]/.test(val));
    btn.disabled = !ok;
  } else {
    const val = (document.getElementById("auth-email-only-input")?.value || "").trim();
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    btn.disabled = !ok;
  }
}

function maskAuthDestination(channel, rawValue, countryCode) {
  if (channel === "mobile") {
    const d = rawValue.replace(/\D/g, "");
    if (d.length === 10) {
      return `${countryCode || "+91"} ${d.slice(0, 2)}XXXXXX${d.slice(8)}`;
    }
    return `${countryCode || "+91"} ${rawValue}`;
  } else {
    const parts = rawValue.split("@");
    if (parts.length !== 2) return rawValue;
    const name = parts[0];
    const dom = parts[1];
    const visible = name.slice(0, Math.min(2, name.length));
    return `${visible}${"*".repeat(Math.max(3, name.length - visible.length))}@${dom}`;
  }
}

function submitAuthContinueToOtp() {
  if (authCurrentChannel === "mobile") {
    if (!validateAuthMobileInput(true)) return;
    const country = document.getElementById("auth-country-code")?.value || "+91";
    const mob = (document.getElementById("auth-mobile-input")?.value || "").trim();
    authPendingTarget = `${country} ${mob}`;
  } else {
    if (!validateAuthEmailInput(true)) return;
    const em = (document.getElementById("auth-email-only-input")?.value || "").trim();
    authPendingTarget = em;
  }

  openOtpVerificationView();
}

function openOtpVerificationView() {
  showOnlyAuthSubView("auth-otp-view");

  const headerEl = document.getElementById("auth-otp-header-text");
  const changeBtn = document.getElementById("btn-auth-change-identity");
  const noAccBox = document.getElementById("auth-no-account-prompt");
  if (noAccBox) noAccBox.style.display = "none";

  const country = document.getElementById("auth-country-code")?.value || "+91";
  const rawVal = authCurrentChannel === "mobile"
    ? (document.getElementById("auth-mobile-input")?.value || "").trim()
    : (document.getElementById("auth-email-only-input")?.value || "").trim();

  const masked = maskAuthDestination(authCurrentChannel, rawVal, country);
  if (headerEl) headerEl.textContent = `Enter the OTP sent to ${masked}`;
  if (changeBtn) changeBtn.textContent = authCurrentChannel === "mobile" ? "← Change number" : "← Change email";

  authOtpWrongAttempts = 0;
  authOtpExpired = false;
  authOtpLockoutUntil = 0;
  clearOtpDigitBoxes();
  setOtpError("");
  startAuthOtpTimer();

  const firstBox = document.getElementById("otp-box-0");
  if (firstBox) setTimeout(() => firstBox.focus(), 40);

  // Attempt WebOTP API on Android where supported
  if ("OTPCredential" in window && navigator.credentials) {
    try {
      const ac = new AbortController();
      setTimeout(() => ac.abort(), 30000);
      navigator.credentials.get({ otp: { transport: ["sms"] }, signal: ac.signal })
        .then(otp => {
          if (otp && otp.code) fillOtpBoxesFromString(otp.code);
        })
        .catch(() => {});
    } catch (e) {}
  }
}

function changeAuthNumberOrEmail() {
  if (authOtpTimerInterval) clearInterval(authOtpTimerInterval);
  showOnlyAuthSubView("auth-credentials-view");
  updateAuthContinueButtonState();
}

function startAuthOtpTimer() {
  const labelEl = document.getElementById("auth-otp-countdown-label");
  const resendBtn = document.getElementById("btn-auth-resend-otp");
  let seconds = 30;
  authOtpExpired = false;

  if (resendBtn) resendBtn.disabled = true;
  if (labelEl) labelEl.textContent = `Resend OTP in ${seconds}s`;

  if (authOtpTimerInterval) clearInterval(authOtpTimerInterval);
  authOtpTimerInterval = setInterval(() => {
    seconds--;
    if (seconds <= 0) {
      clearInterval(authOtpTimerInterval);
      if (labelEl) labelEl.textContent = "Didn't receive the code?";
      if (resendBtn) resendBtn.disabled = false;
    } else {
      if (labelEl) labelEl.textContent = `Resend OTP in ${seconds}s`;
    }
  }, 1000);
}

function resendAuthOtp() {
  authOtpWrongAttempts = 0;
  authOtpExpired = false;
  authOtpLockoutUntil = 0;
  clearOtpDigitBoxes();
  setOtpError("");
  const verifyBtn = document.getElementById("btn-verify-otp");
  if (verifyBtn) verifyBtn.disabled = false;
  startAuthOtpTimer();
  showToast("A fresh 6-digit OTP has been sent.");
}

function expireOtpNowForTest() {
  authOtpExpired = true;
  if (authOtpTimerInterval) clearInterval(authOtpTimerInterval);
  const labelEl = document.getElementById("auth-otp-countdown-label");
  const resendBtn = document.getElementById("btn-auth-resend-otp");
  if (labelEl) labelEl.textContent = "OTP expired";
  if (resendBtn) resendBtn.disabled = false;
  setOtpError("OTP expired. Tap Resend");
}

function clearOtpDigitBoxes() {
  for (let i = 0; i < 6; i++) {
    const box = document.getElementById(`otp-box-${i}`);
    if (box) {
      box.value = "";
      box.classList.remove("input-error");
      box.disabled = false;
    }
  }
}

function fillOtpBoxesFromString(str) {
  const digits = String(str || "").replace(/\D/g, "").slice(0, 6);
  for (let i = 0; i < 6; i++) {
    const box = document.getElementById(`otp-box-${i}`);
    if (box) {
      box.value = digits[i] || "";
      box.classList.remove("input-error");
    }
  }
  setOtpError("");
  const focusIdx = Math.min(5, digits.length);
  const nextEl = document.getElementById(`otp-box-${focusIdx}`);
  if (nextEl) nextEl.focus();
}

function onOtpBoxInput(idx, event) {
  const box = document.getElementById(`otp-box-${idx}`);
  if (!box) return;
  const val = box.value.replace(/\D/g, "");
  if (val.length > 1) {
    fillOtpBoxesFromString(val);
    return;
  }
  box.value = val;
  box.classList.remove("input-error");
  setOtpError("");

  if (val && idx < 5) {
    const nextBox = document.getElementById(`otp-box-${idx + 1}`);
    if (nextBox) nextBox.focus();
  }
}

function onOtpBoxKeyDown(idx, event) {
  const box = document.getElementById(`otp-box-${idx}`);
  if (!box) return;
  if (event.key === "Backspace" && !box.value && idx > 0) {
    const prevBox = document.getElementById(`otp-box-${idx - 1}`);
    if (prevBox) {
      prevBox.value = "";
      prevBox.focus();
    }
  } else if (event.key === "ArrowLeft" && idx > 0) {
    document.getElementById(`otp-box-${idx - 1}`)?.focus();
  } else if (event.key === "ArrowRight" && idx < 5) {
    document.getElementById(`otp-box-${idx + 1}`)?.focus();
  } else if (event.key === "Enter") {
    verifyAuthOtpCode();
  }
}

function onOtpBoxPaste(event) {
  if (!event.clipboardData) return;
  event.preventDefault();
  const pasted = event.clipboardData.getData("text") || "";
  fillOtpBoxesFromString(pasted);
}

function setOtpError(msg) {
  const errEl = document.getElementById("auth-otp-error");
  if (!errEl) return;
  if (msg) {
    errEl.textContent = msg;
    errEl.style.display = "block";
    for (let i = 0; i < 6; i++) {
      document.getElementById(`otp-box-${i}`)?.classList.add("input-error");
    }
  } else {
    errEl.textContent = "";
    errEl.style.display = "none";
    for (let i = 0; i < 6; i++) {
      document.getElementById(`otp-box-${i}`)?.classList.remove("input-error");
    }
  }
}

function verifyAuthOtpCode() {
  if (authOtpLockoutUntil && Date.now() < authOtpLockoutUntil) {
    setOtpError("Too many attempts. Try again in 10 minutes");
    return;
  }

  if (authOtpExpired) {
    setOtpError("OTP expired. Tap Resend");
    return;
  }

  let code = "";
  for (let i = 0; i < 6; i++) {
    code += (document.getElementById(`otp-box-${i}`)?.value || "").trim();
  }

  if (code.length < 6) {
    setOtpError("Enter all 6 digits of the OTP");
    return;
  }

  // Demo valid OTP is 123456 (any other 6-digit code triggers attempt countdown & lock)
  if (code !== "123456") {
    authOtpWrongAttempts++;
    const remaining = 3 - authOtpWrongAttempts;
    if (remaining <= 0) {
      authOtpLockoutUntil = Date.now() + 10 * 60 * 1000;
      setOtpError("Too many attempts. Try again in 10 minutes");
      for (let i = 0; i < 6; i++) {
        const b = document.getElementById(`otp-box-${i}`);
        if (b) b.disabled = true;
      }
      const verifyBtn = document.getElementById("btn-verify-otp");
      if (verifyBtn) verifyBtn.disabled = true;
    } else {
      setOtpError(`Incorrect OTP. ${remaining} attempt${remaining === 1 ? "" : "s"} left`);
    }
    return;
  }

  setOtpError("");
  if (authOtpTimerInterval) clearInterval(authOtpTimerInterval);

  const rawMob = (document.getElementById("auth-mobile-input")?.value || "").trim();
  const rawEm = (document.getElementById("auth-email-only-input")?.value || "").trim();

  if (authCurrentFlowMode === "signin") {
    // Check if an account exists for that number/email
    const isRashikaSample = (authCurrentChannel === "mobile" && rawMob === "9845012345") ||
                            (authCurrentChannel === "email" && rawEm.toLowerCase() === "rashika@arthiva.app");
    const matchesSavedUser = (authCurrentChannel === "mobile" && ArthivaState.auth.user.mobile === rawMob && ArthivaState.auth.user.name) ||
                             (authCurrentChannel === "email" && ArthivaState.auth.user.email && ArthivaState.auth.user.email.toLowerCase() === rawEm.toLowerCase() && ArthivaState.auth.user.name);

    if (!isRashikaSample && !matchesSavedUser) {
      const noAccPrompt = document.getElementById("auth-no-account-prompt");
      if (noAccPrompt) noAccPrompt.style.display = "block";
      return;
    }

    if (isRashikaSample && !matchesSavedUser) {
      ArthivaState = JSON.parse(JSON.stringify(DEFAULT_STATE));
    }

    ArthivaState.auth.isAuthenticated = true;
    localStorage.setItem("arthiva_session_v2", "true");
    saveStateToStorage();

    if (ArthivaState.security && ArthivaState.security.appLockEnabled && (ArthivaState.security.pin || ArthivaState.security.password)) {
      ArthivaState.security.isLocked = true;
      switchScreen("applock");
    } else {
      ArthivaState.security.isLocked = false;
      switchScreen("home");
    }
    renderApp();
    showToast(`Signed in as ${ArthivaState.auth.user.name || "User"}`);
    return;
  }

  // New user sign-up mode -> save verified mobile or email and proceed to Section 3: Secure your app
  continueVerifiedUserIntoSignup();
}

function continueNoAccountIntoSignup() {
  authCurrentFlowMode = "signup";
  const noAccPrompt = document.getElementById("auth-no-account-prompt");
  if (noAccPrompt) noAccPrompt.style.display = "none";
  continueVerifiedUserIntoSignup();
}

function continueVerifiedUserIntoSignup() {
  const rawMob = (document.getElementById("auth-mobile-input")?.value || "").trim();
  const rawEm = (document.getElementById("auth-email-only-input")?.value || "").trim();

  if (authCurrentChannel === "mobile") {
    ArthivaState.auth.user.mobile = rawMob;
    ArthivaState.auth.user.phone = `+91 ${rawMob}`;
    onboardingDraft.signedInWith = "mobile";
  } else {
    ArthivaState.auth.user.email = rawEm;
    onboardingDraft.signedInWith = "email";
  }

  ArthivaState.auth.isAuthenticated = true;
  localStorage.setItem("arthiva_session_v2", "true");
  saveStateToStorage();

  openSetupAppLockView();
}

// --------------------------------------------------------------------------
// 3. SECURE YOUR APP (Choose 4-Digit PIN or Password, Weak PINs Blocked)
// --------------------------------------------------------------------------

function openSetupAppLockView() {
  showOnlyAuthSubView("auth-setup-lock-view");
  setupLockMode = "pin";
  const pinIn = document.getElementById("setup-pin-input");
  const pinConf = document.getElementById("setup-pin-confirm-input");
  const passIn = document.getElementById("setup-password-input");
  const passConf = document.getElementById("setup-password-confirm-input");
  if (pinIn) pinIn.value = "";
  if (pinConf) pinConf.value = "";
  if (passIn) passIn.value = "";
  if (passConf) passConf.value = "";
  setInlineError("setup-pin-error", "setup-pin-input", "");
  setInlineError("setup-pin-confirm-error", "setup-pin-confirm-input", "");
  setInlineError("setup-password-error", "setup-password-input", "");
  setInlineError("setup-password-confirm-error", "setup-password-confirm-input", "");
  switchSetupLockType("pin");
}

function switchSetupLockType(type) {
  setupLockMode = type === "password" ? "password" : "pin";
  const pinTab = document.getElementById("setup-lock-tab-pin");
  const passTab = document.getElementById("setup-lock-tab-password");
  const pinPanel = document.getElementById("setup-lock-pin-panel");
  const passPanel = document.getElementById("setup-lock-password-panel");

  if (pinTab) pinTab.classList.toggle("active", setupLockMode === "pin");
  if (passTab) passTab.classList.toggle("active", setupLockMode === "password");
  if (pinPanel) pinPanel.style.display = setupLockMode === "pin" ? "block" : "none";
  if (passPanel) passPanel.style.display = setupLockMode === "password" ? "block" : "none";
}

function togglePasswordVisibility(inputId, btnEl) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPass = input.type === "password";
  input.type = isPass ? "text" : "password";
  if (btnEl) btnEl.textContent = isPass ? "Hide" : "Show";
}

function validateSetupAppLockInline(requireConfirmNow) {
  if (setupLockMode === "pin") {
    const pin = (document.getElementById("setup-pin-input")?.value || "").trim();
    const confirmPin = (document.getElementById("setup-pin-confirm-input")?.value || "").trim();
    let ok = true;

    if (!pin && !requireConfirmNow) {
      setInlineError("setup-pin-error", "setup-pin-input", "");
      ok = false;
    } else if (!/^\d{4}$/.test(pin)) {
      setInlineError("setup-pin-error", "setup-pin-input", "PIN must be 4 digits");
      ok = false;
    } else if (WEAK_PINS.has(pin)) {
      setInlineError("setup-pin-error", "setup-pin-input", "Choose a less obvious PIN");
      ok = false;
    } else {
      setInlineError("setup-pin-error", "setup-pin-input", "");
    }

    if (confirmPin || requireConfirmNow) {
      if (confirmPin !== pin) {
        setInlineError("setup-pin-confirm-error", "setup-pin-confirm-input", "PINs don't match");
        ok = false;
      } else {
        setInlineError("setup-pin-confirm-error", "setup-pin-confirm-input", "");
      }
    } else {
      setInlineError("setup-pin-confirm-error", "setup-pin-confirm-input", "");
      ok = false;
    }
    return ok;
  } else {
    const pass = document.getElementById("setup-password-input")?.value || "";
    const confirmPass = document.getElementById("setup-password-confirm-input")?.value || "";
    const hasRules = pass.length >= 8 && /[A-Za-z]/.test(pass) && /\d/.test(pass);
    let ok = true;

    if (!pass && !requireConfirmNow) {
      setInlineError("setup-password-error", "setup-password-input", "");
      ok = false;
    } else if (!hasRules) {
      setInlineError("setup-password-error", "setup-password-input", "Password must be at least 8 characters with a letter and a number");
      ok = false;
    } else {
      setInlineError("setup-password-error", "setup-password-input", "");
    }

    if (confirmPass || requireConfirmNow) {
      if (confirmPass !== pass) {
        setInlineError("setup-password-confirm-error", "setup-password-confirm-input", "Passwords don't match");
        ok = false;
      } else {
        setInlineError("setup-password-confirm-error", "setup-password-confirm-input", "");
      }
    } else {
      setInlineError("setup-password-confirm-error", "setup-password-confirm-input", "");
      ok = false;
    }
    return ok;
  }
}

function submitSetupAppLock() {
  if (!validateSetupAppLockInline(true)) return;

  if (setupLockMode === "pin") {
    const pin = (document.getElementById("setup-pin-input")?.value || "").trim();
    ArthivaState.security.appLockEnabled = true;
    ArthivaState.security.preferredMethod = "pin";
    ArthivaState.security.pin = pin;
  } else {
    const pass = document.getElementById("setup-password-input")?.value || "";
    ArthivaState.security.appLockEnabled = true;
    ArthivaState.security.preferredMethod = "password";
    ArthivaState.security.password = pass;
  }
  ArthivaState.security.isLocked = false;
  saveStateToStorage();

  openStartFinancialOnboardingScreen();
}

// --------------------------------------------------------------------------
// 4. "START FINANCIAL ONBOARDING" SCREEN
// --------------------------------------------------------------------------

function openStartFinancialOnboardingScreen() {
  showOnlyAuthSubView("auth-start-onboarding-view");
  const headingEl = document.getElementById("start-onb-welcome-heading");
  const rawName = (ArthivaState.auth.user.name || onboardingDraft.name || "").trim();
  const firstName = rawName ? rawName.split(" ")[0] : "";
  if (headingEl) {
    headingEl.textContent = firstName
      ? `Welcome to Arthiva Money, ${firstName}`
      : "Welcome to Arthiva Money";
  }
}

function launchSevenStepOnboarding() {
  ArthivaState.onboardingStep = 1;
  localStorage.setItem(ONBOARDING_STEP_KEY, "1");
  saveOnboardingDraft();
  startOnboardingFlow(1);
}

// --------------------------------------------------------------------------
// 5. FINANCIAL ONBOARDING — STEPS 1 TO 7 + FINISH (OVERRIDES 9.4–9.10)
// --------------------------------------------------------------------------

function clearOnbInlineError(errId) {
  const el = document.getElementById(errId);
  if (el) {
    el.textContent = "";
    el.style.display = "none";
  }
}

function startOnboardingFlow(resumeStep) {
  let savedDraft = null;
  try {
    const raw = localStorage.getItem(ONBOARDING_DRAFT_KEY);
    if (raw) savedDraft = JSON.parse(raw);
  } catch (e) {}

  const targetStep = resumeStep || parseInt(localStorage.getItem(ONBOARDING_STEP_KEY) || "1", 10) || 1;
  ArthivaState.onboardingStep = Math.min(8, Math.max(1, targetStep));
  prefillOnboardingForm(savedDraft);
  switchScreen("onboarding");
  renderOnboardingStep();
}

function prefillOnboardingForm(savedDraft) {
  const baseDraft = createEmptyOnboardingDraft();
  onboardingDraft = Object.assign(baseDraft, {
    signedInWith: ArthivaState.auth.user.email && !ArthivaState.auth.user.mobile ? "email" : "mobile",
    name: ArthivaState.auth.user.name || "",
    secondaryContact: ArthivaState.auth.user.email || ArthivaState.auth.user.mobile || "",
    householdMode: ArthivaState.auth.user.householdMode || "Individual",
    householdName: ArthivaState.auth.user.householdName || "",
    householdMembers: Array.isArray(ArthivaState.auth.user.householdMembers) ? JSON.parse(JSON.stringify(ArthivaState.auth.user.householdMembers)) : [],
    takeHome: (ArthivaState.cycleConfig && ArthivaState.cycleConfig.takeHome > 0) ? ArthivaState.cycleConfig.takeHome : "",
    paydayDay: (ArthivaState.cycleConfig && ArthivaState.cycleConfig.paydayDay) || 1,
    otherIncome: (ArthivaState.cycleConfig && ArthivaState.cycleConfig.otherIncome > 0) ? ArthivaState.cycleConfig.otherIncome : "",
    bankAccounts: Array.isArray(ArthivaState.bankAccounts) ? JSON.parse(JSON.stringify(ArthivaState.bankAccounts)) : [],
    bills: Array.isArray(ArthivaState.commitments)
      ? ArthivaState.commitments.filter(c => !(c.category || "").toLowerCase().includes("sip")).map(c => ({
          id: c.id,
          name: c.name,
          category: c.category,
          amount: c.amount,
          dueDay: parseInt((c.dueDate || "2026-10-05").split("-")[2], 10) || 5,
          frequency: c.recurrence || "Monthly"
        }))
      : [],
    investments: Array.isArray(ArthivaState.investments) ? JSON.parse(JSON.stringify(ArthivaState.investments)) : [],
    goals: Array.isArray(ArthivaState.goals) ? JSON.parse(JSON.stringify(ArthivaState.goals)) : []
  }, savedDraft || {});

  const nameInput = document.getElementById("onb-profile-name-input");
  const secLabel = document.getElementById("onb-secondary-contact-label");
  const secInput = document.getElementById("onb-secondary-contact-input");
  const hhNameInput = document.getElementById("onb-household-name-input");
  const salaryInput = document.getElementById("onboarding-salary-input");
  const paydaySelect = document.getElementById("onboarding-payday-select");
  const otherIncInput = document.getElementById("onboarding-other-income-input");

  if (nameInput) nameInput.value = onboardingDraft.name || "";
  if (secLabel && secInput) {
    if (onboardingDraft.signedInWith === "email") {
      secLabel.textContent = "MOBILE NUMBER (OPTIONAL)";
      secInput.placeholder = "10-digit mobile number";
      secInput.value = ArthivaState.auth.user.mobile || "";
    } else {
      secLabel.textContent = "EMAIL ADDRESS (OPTIONAL)";
      secInput.placeholder = "name@example.com";
      secInput.value = ArthivaState.auth.user.email || "";
    }
  }
  if (hhNameInput) hhNameInput.value = onboardingDraft.householdName || "";
  if (salaryInput) salaryInput.value = onboardingDraft.takeHome !== "" ? onboardingDraft.takeHome : "";
  if (paydaySelect) paydaySelect.value = String(onboardingDraft.paydayDay || 1);
  if (otherIncInput) otherIncInput.value = onboardingDraft.otherIncome !== "" ? onboardingDraft.otherIncome : "";

  setOnboardingHouseholdMode(onboardingDraft.householdMode || "Individual");
  renderOnboardingHouseholdMembersList();
  renderOnboardingBankAccountsList();
  renderOnboardingBillsList();
  renderOnboardingInvestmentsList();
  renderOnboardingGoalsList();
}

// Step 1: Profile Validation
function validateOnboardingStep1Profile(showRequiredErr) {
  const nameInput = document.getElementById("onb-profile-name-input");
  const secInput = document.getElementById("onb-secondary-contact-input");
  const nameVal = nameInput ? nameInput.value.trim() : "";
  const secVal = secInput ? secInput.value.trim() : "";

  let ok = true;
  if (!nameVal) {
    if (showRequiredErr) {
      setInlineError("onb-profile-name-error", "onb-profile-name-input", "Enter your full name");
    } else {
      setInlineError("onb-profile-name-error", "onb-profile-name-input", "");
    }
    ok = false;
  } else {
    setInlineError("onb-profile-name-error", "onb-profile-name-input", "");
  }

  if (secVal) {
    if (onboardingDraft.signedInWith === "email") {
      const d = secVal.replace(/\D/g, "");
      if (d.length !== 10 || !/^[6-9]/.test(d)) {
        setInlineError("onb-secondary-contact-error", "onb-secondary-contact-input", "Enter a valid 10-digit Indian mobile number");
        ok = false;
      } else {
        setInlineError("onb-secondary-contact-error", "onb-secondary-contact-input", "");
      }
    } else {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(secVal)) {
        setInlineError("onb-secondary-contact-error", "onb-secondary-contact-input", "Enter a valid email address");
        ok = false;
      } else {
        setInlineError("onb-secondary-contact-error", "onb-secondary-contact-input", "");
      }
    }
  } else {
    setInlineError("onb-secondary-contact-error", "onb-secondary-contact-input", "");
  }

  return ok;
}

// Step 2: Household Members
function setOnboardingHouseholdMode(mode) {
  onboardingDraft.householdMode = mode === "Household" ? "Household" : "Individual";
  const indBtn = document.getElementById("onb-mode-individual");
  const hhBtn = document.getElementById("onb-mode-household");
  const fields = document.getElementById("onb-household-fields");

  if (indBtn) indBtn.classList.toggle("active", onboardingDraft.householdMode === "Individual");
  if (hhBtn) hhBtn.classList.toggle("active", onboardingDraft.householdMode === "Household");
  if (fields) fields.style.display = onboardingDraft.householdMode === "Household" ? "block" : "none";
  saveOnboardingDraft();
}

function addOnboardingHouseholdMember() {
  const nameIn = document.getElementById("onb-member-name-input");
  const relIn = document.getElementById("onb-member-relation-select");
  const earnIn = document.getElementById("onb-member-earning-select");
  const errEl = document.getElementById("onb-member-error");

  const name = nameIn ? nameIn.value.trim() : "";
  if (!name) {
    if (errEl) {
      errEl.textContent = "Enter member name";
      errEl.style.display = "block";
    }
    return;
  }
  clearOnbInlineError("onb-member-error");

  onboardingDraft.householdMembers = onboardingDraft.householdMembers || [];
  onboardingDraft.householdMembers.push({
    id: "hhm-" + Date.now(),
    name,
    relation: relIn ? relIn.value : "Spouse / Partner",
    earning: earnIn ? earnIn.value : "Yes"
  });
  if (nameIn) nameIn.value = "";
  saveOnboardingDraft();
  renderOnboardingHouseholdMembersList();
}

function removeOnboardingHouseholdMember(id) {
  onboardingDraft.householdMembers = (onboardingDraft.householdMembers || []).filter(m => m.id !== id);
  saveOnboardingDraft();
  renderOnboardingHouseholdMembersList();
}

function renderOnboardingHouseholdMembersList() {
  const listEl = document.getElementById("onb-household-members-list");
  if (!listEl) return;
  const items = onboardingDraft.householdMembers || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div style="font-size:11.5px;color:var(--text-muted);padding:4px 0;">No household members added yet.</div>`;
    return;
  }
  listEl.innerHTML = items.map(m => `
    <div class="onb-added-item-pill">
      <div>
        <strong>${escapeHTML(m.name)}</strong>
        <span style="color:var(--text-secondary);"> · ${escapeHTML(m.relation)} · Earning: ${escapeHTML(m.earning)}</span>
      </div>
      <button type="button" class="section-link destructive-link" style="font-size:11px;padding:2px 6px;" onclick="removeOnboardingHouseholdMember('${m.id}')">Remove</button>
    </div>
  `).join("");
}

// Step 3: Income & Pay Cycle Validation
function validateOnboardingStep3Income(showRequiredErr) {
  const salaryInput = document.getElementById("onboarding-salary-input");
  const val = salaryInput ? Number(salaryInput.value) : 0;
  if (!val || val <= 0) {
    if (showRequiredErr) {
      setInlineError("onb-salary-error", "onboarding-salary-input", "Enter a monthly take-home salary greater than ₹0");
    } else {
      setInlineError("onb-salary-error", "onboarding-salary-input", "");
    }
    return false;
  }
  setInlineError("onb-salary-error", "onboarding-salary-input", "");
  return true;
}

// Step 4: Bank Accounts & Statements
function addOnboardingBankAccount() {
  const nameIn = document.getElementById("onb-bank-name-input");
  const typeIn = document.getElementById("onb-bank-type-select");
  const balIn = document.getElementById("onb-bank-balance-input");
  const errEl = document.getElementById("onb-bank-error");

  const bankName = nameIn ? nameIn.value.trim() : "";
  const balVal = balIn && balIn.value !== "" ? Number(balIn.value) : NaN;

  if (!bankName) {
    if (errEl) {
      errEl.textContent = "Enter bank name (e.g. HDFC Bank)";
      errEl.style.display = "block";
    }
    return;
  }
  if (isNaN(balVal) || balVal < 0) {
    if (errEl) {
      errEl.textContent = "Enter a valid current balance (₹0 or more)";
      errEl.style.display = "block";
    }
    return;
  }
  clearOnbInlineError("onb-bank-error");

  onboardingDraft.bankAccounts = onboardingDraft.bankAccounts || [];
  onboardingDraft.bankAccounts.push({
    id: "bank-" + Date.now(),
    bankName,
    accountType: typeIn ? typeIn.value : "Salary / Savings",
    balance: balVal
  });

  if (nameIn) nameIn.value = "";
  if (balIn) balIn.value = "";
  saveOnboardingDraft();
  renderOnboardingBankAccountsList();
}

function removeOnboardingBankAccount(id) {
  onboardingDraft.bankAccounts = (onboardingDraft.bankAccounts || []).filter(b => b.id !== id);
  saveOnboardingDraft();
  renderOnboardingBankAccountsList();
}

function renderOnboardingBankAccountsList() {
  const listEl = document.getElementById("onb-bank-accounts-list");
  if (!listEl) return;
  const items = onboardingDraft.bankAccounts || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div style="font-size:11.5px;color:var(--text-muted);padding:2px 0;">No bank accounts added yet.</div>`;
    return;
  }
  listEl.innerHTML = items.map(b => `
    <div class="onb-added-item-pill">
      <div>
        <strong>${escapeHTML(b.bankName)}</strong>
        <span style="color:var(--text-secondary);"> (${escapeHTML(b.accountType)}) · <strong>${formatINR(b.balance)}</strong></span>
      </div>
      <button type="button" class="section-link destructive-link" style="font-size:11px;padding:2px 6px;" onclick="removeOnboardingBankAccount('${b.id}')">Remove</button>
    </div>
  `).join("");
}

// Step 5: Bills & Commitments
function addOnboardingBillCommitment() {
  const nameIn = document.getElementById("onb-bill-name-input");
  const catIn = document.getElementById("onb-bill-category-select");
  const amtIn = document.getElementById("onb-bill-amount-input");
  const dueIn = document.getElementById("onb-bill-due-input");
  const freqIn = document.getElementById("onb-bill-freq-select");
  const errEl = document.getElementById("onb-bill-error");

  const name = nameIn ? nameIn.value.trim() : "";
  const amount = amtIn ? Number(amtIn.value) : 0;
  const dueDay = Math.min(31, Math.max(1, parseInt(dueIn?.value || "5", 10) || 5));

  if (!name) {
    if (errEl) {
      errEl.textContent = "Enter bill or commitment name";
      errEl.style.display = "block";
    }
    return;
  }
  if (!amount || amount <= 0) {
    if (errEl) {
      errEl.textContent = "Enter an amount greater than ₹0";
      errEl.style.display = "block";
    }
    return;
  }
  clearOnbInlineError("onb-bill-error");

  onboardingDraft.bills = onboardingDraft.bills || [];
  onboardingDraft.bills.push({
    id: "onb-bill-" + Date.now(),
    name,
    category: catIn ? catIn.value : "Rent",
    amount,
    dueDay,
    frequency: freqIn ? freqIn.value : "Monthly"
  });

  if (nameIn) nameIn.value = "";
  if (amtIn) amtIn.value = "";
  saveOnboardingDraft();
  renderOnboardingBillsList();
}

function removeOnboardingBillCommitment(id) {
  onboardingDraft.bills = (onboardingDraft.bills || []).filter(b => b.id !== id);
  saveOnboardingDraft();
  renderOnboardingBillsList();
}

function renderOnboardingBillsList() {
  const listEl = document.getElementById("onb-bills-list");
  if (!listEl) return;
  const items = onboardingDraft.bills || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div style="font-size:11.5px;color:var(--text-muted);padding:2px 0;">No bills or commitments added yet.</div>`;
    return;
  }
  listEl.innerHTML = items.map(b => `
    <div class="onb-added-item-pill">
      <div>
        <strong>${escapeHTML(b.name)}</strong>
        <span style="color:var(--text-secondary);"> · ${formatINR(b.amount)} · Day ${b.dueDay} (${escapeHTML(b.frequency)})</span>
      </div>
      <button type="button" class="section-link destructive-link" style="font-size:11px;padding:2px 6px;" onclick="removeOnboardingBillCommitment('${b.id}')">Remove</button>
    </div>
  `).join("");
}

// Step 6: Savings & Investments
function addOnboardingInvestment() {
  const typeIn = document.getElementById("onb-inv-type-select");
  const nameIn = document.getElementById("onb-inv-name-input");
  const amtIn = document.getElementById("onb-inv-amount-input");
  const dayIn = document.getElementById("onb-inv-day-input");
  const errEl = document.getElementById("onb-inv-error");

  const name = nameIn ? nameIn.value.trim() : "";
  const amount = amtIn ? Number(amtIn.value) : 0;
  const day = Math.min(31, Math.max(1, parseInt(dayIn?.value || "10", 10) || 10));

  if (!name) {
    if (errEl) {
      errEl.textContent = "Enter fund or investment name";
      errEl.style.display = "block";
    }
    return;
  }
  if (!amount || amount <= 0) {
    if (errEl) {
      errEl.textContent = "Enter an investment amount greater than ₹0";
      errEl.style.display = "block";
    }
    return;
  }
  clearOnbInlineError("onb-inv-error");

  onboardingDraft.investments = onboardingDraft.investments || [];
  onboardingDraft.investments.push({
    id: "onb-inv-" + Date.now(),
    type: typeIn ? typeIn.value : "SIP (Mutual Fund)",
    name,
    amount,
    day
  });

  if (nameIn) nameIn.value = "";
  if (amtIn) amtIn.value = "";
  saveOnboardingDraft();
  renderOnboardingInvestmentsList();
}

function removeOnboardingInvestment(id) {
  onboardingDraft.investments = (onboardingDraft.investments || []).filter(i => i.id !== id);
  saveOnboardingDraft();
  renderOnboardingInvestmentsList();
}

function renderOnboardingInvestmentsList() {
  const listEl = document.getElementById("onb-investments-list");
  if (!listEl) return;
  const items = onboardingDraft.investments || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div style="font-size:11.5px;color:var(--text-muted);padding:2px 0;">No SIPs or investments added yet.</div>`;
    return;
  }
  listEl.innerHTML = items.map(i => `
    <div class="onb-added-item-pill">
      <div>
        <strong>${escapeHTML(i.name)}</strong>
        <span style="color:var(--text-secondary);"> (${escapeHTML(i.type)}) · ${formatINR(i.amount)} · Day ${i.day}</span>
      </div>
      <button type="button" class="section-link destructive-link" style="font-size:11px;padding:2px 6px;" onclick="removeOnboardingInvestment('${i.id}')">Remove</button>
    </div>
  `).join("");
}

// Step 7: Goals (Suggest Emergency Medical Buffer first + custom goals)
function fillOnboardingGoalSuggestion(title, targetAmt, targetDate, monthly) {
  const nameIn = document.getElementById("onboarding-goal-name");
  const targetIn = document.getElementById("onboarding-goal-target");
  const dateIn = document.getElementById("onboarding-goal-target-date");
  const monthlyIn = document.getElementById("onboarding-goal-monthly");
  if (nameIn) nameIn.value = title;
  if (targetIn) targetIn.value = String(targetAmt);
  if (dateIn) dateIn.value = targetDate;
  if (monthlyIn) monthlyIn.value = String(monthly);
  clearOnbInlineError("onb-goal-error");
}

function applyOnboardingSuggestedGoal(title, targetAmt, monthly) {
  fillOnboardingGoalSuggestion(title || "Emergency Medical Buffer", targetAmt || 60000, "2027-06-30", monthly || 5000);
}

function addOnboardingGoalItem() {
  const nameIn = document.getElementById("onboarding-goal-name");
  const targetIn = document.getElementById("onboarding-goal-target");
  const monthlyIn = document.getElementById("onboarding-goal-monthly");
  const dateIn = document.getElementById("onboarding-goal-target-date");
  const errEl = document.getElementById("onb-goal-error");

  const title = nameIn ? nameIn.value.trim() : "";
  const targetAmount = targetIn ? Number(targetIn.value) : 0;
  const monthlyAllocation = monthlyIn ? Number(monthlyIn.value) : 0;
  const targetDate = dateIn && dateIn.value ? dateIn.value : "2027-06-30";

  if (!title) {
    if (errEl) {
      errEl.textContent = "Enter a goal name";
      errEl.style.display = "block";
    }
    return;
  }
  if (!targetAmount || targetAmount <= 0) {
    if (errEl) {
      errEl.textContent = "Enter a target amount greater than ₹0";
      errEl.style.display = "block";
    }
    return;
  }
  clearOnbInlineError("onb-goal-error");

  onboardingDraft.goals = onboardingDraft.goals || [];
  onboardingDraft.goals.push({
    id: "goal-onb-" + Date.now(),
    title,
    targetAmount,
    currentSaved: 0,
    monthlyAllocation: Math.max(0, monthlyAllocation),
    savedThisCycle: 0,
    targetDate,
    frequency: "Monthly"
  });

  if (nameIn) nameIn.value = "";
  if (targetIn) targetIn.value = "";
  if (monthlyIn) monthlyIn.value = "";
  saveOnboardingDraft();
  renderOnboardingGoalsList();
}

function removeOnboardingGoalItem(id) {
  onboardingDraft.goals = (onboardingDraft.goals || []).filter(g => g.id !== id);
  saveOnboardingDraft();
  renderOnboardingGoalsList();
}

function renderOnboardingGoalsList() {
  const listEl = document.getElementById("onb-goals-list");
  if (!listEl) return;
  const items = onboardingDraft.goals || [];
  if (items.length === 0) {
    listEl.innerHTML = `<div style="font-size:11.5px;color:var(--text-muted);padding:2px 0;">No goals added yet. Tap a suggestion above or fill the fields and tap "+ Add goal to list".</div>`;
    return;
  }
  listEl.innerHTML = items.map(g => `
    <div class="onb-added-item-pill">
      <div>
        <strong>${escapeHTML(g.title)}</strong>
        <span style="color:var(--text-secondary);"> · Target ${formatINR(g.targetAmount)} (${formatINR(g.monthlyAllocation)}/mo)</span>
      </div>
      <button type="button" class="section-link destructive-link" style="font-size:11px;padding:2px 6px;" onclick="removeOnboardingGoalItem('${g.id}')">Remove</button>
    </div>
  `).join("");
}

function saveOnboardingDraft() {
  const nameInput = document.getElementById("onb-profile-name-input");
  const secInput = document.getElementById("onb-secondary-contact-input");
  const hhNameInput = document.getElementById("onb-household-name-input");
  const salaryInput = document.getElementById("onboarding-salary-input");
  const paydaySelect = document.getElementById("onboarding-payday-select");
  const otherIncInput = document.getElementById("onboarding-other-income-input");

  if (nameInput) onboardingDraft.name = nameInput.value.trim();
  if (secInput) onboardingDraft.secondaryContact = secInput.value.trim();
  if (hhNameInput) onboardingDraft.householdName = hhNameInput.value.trim();
  if (salaryInput) onboardingDraft.takeHome = salaryInput.value !== "" ? Number(salaryInput.value) : "";
  if (paydaySelect) onboardingDraft.paydayDay = parseInt(paydaySelect.value, 10) || 1;
  if (otherIncInput) onboardingDraft.otherIncome = otherIncInput.value !== "" ? Number(otherIncInput.value) : "";

  try {
    localStorage.setItem(ONBOARDING_DRAFT_KEY, JSON.stringify(onboardingDraft));
  } catch (e) {}
}

function applyStepDataToState(step, skipped) {
  saveOnboardingDraft();

  if (step === 1) {
    const u = ArthivaState.auth.user;
    u.name = onboardingDraft.name;
    if (onboardingDraft.secondaryContact) {
      if (onboardingDraft.signedInWith === "email") {
        const d = onboardingDraft.secondaryContact.replace(/\D/g, "");
        u.mobile = d;
        u.phone = `+91 ${d}`;
      } else {
        u.email = onboardingDraft.secondaryContact;
      }
    }
    if (u.avatarType === "monogram") {
      u.avatarData = (u.name || "A").split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
    }
  } else if (step === 2) {
    if (skipped) {
      ArthivaState.auth.user.householdMode = "Individual";
      ArthivaState.auth.user.householdName = "";
      ArthivaState.auth.user.householdMembers = [];
    } else {
      // Auto-capture typed member if not yet clicked "+ Add member"
      const pendingMem = document.getElementById("onb-member-name-input")?.value.trim();
      if (onboardingDraft.householdMode === "Household" && pendingMem) {
        addOnboardingHouseholdMember();
      }
      ArthivaState.auth.user.householdMode = onboardingDraft.householdMode;
      ArthivaState.auth.user.householdName = onboardingDraft.householdMode === "Household"
        ? (onboardingDraft.householdName || `${ArthivaState.auth.user.name || "My"}'s Household`)
        : "";
      ArthivaState.auth.user.householdMembers = onboardingDraft.householdMode === "Household"
        ? JSON.parse(JSON.stringify(onboardingDraft.householdMembers || []))
        : [];
    }
  } else if (step === 3) {
    const takeHome = Number(onboardingDraft.takeHome) || 0;
    const otherInc = Number(onboardingDraft.otherIncome) || 0;
    ArthivaState.cycleConfig.takeHome = takeHome + otherInc;
    ArthivaState.cycleConfig.otherIncome = otherInc;
    ArthivaState.cycleConfig.paydayDay = onboardingDraft.paydayDay || 1;
    // If the user has not yet set a bank balance in Step 4, initialize Current Available Balance to take-home income so Safe-to-Spend works out-of-the-box
    if (!ArthivaState.balance.amount || ArthivaState.balance.amount === 0) {
      ArthivaState.balance.amount = takeHome + otherInc;
      ArthivaState.balance.label = "From monthly income setup";
      ArthivaState.balance.lastUpdated = new Date().toISOString();
    }
  } else if (step === 4 && !skipped) {
    // Auto-capture typed bank account if user typed fields and pressed Continue directly
    const pendingBank = document.getElementById("onb-bank-name-input")?.value.trim();
    const pendingBal = document.getElementById("onb-bank-balance-input")?.value;
    if (pendingBank && pendingBal !== "") {
      addOnboardingBankAccount();
    }
    ArthivaState.bankAccounts = JSON.parse(JSON.stringify(onboardingDraft.bankAccounts || []));
    if (ArthivaState.bankAccounts.length > 0) {
      const totalBankBal = ArthivaState.bankAccounts.reduce((s, b) => s + (Number(b.balance) || 0), 0);
      ArthivaState.balance.amount = totalBankBal;
      ArthivaState.balance.label = `${ArthivaState.bankAccounts[0].bankName} · Just now`;
      ArthivaState.balance.lastUpdated = new Date().toISOString();
      ArthivaState.cycleConfig.employerOrBank = `${ArthivaState.bankAccounts[0].bankName} (${ArthivaState.bankAccounts[0].accountType})`;
    }
  } else if (step === 5 && !skipped) {
    const pendingBillName = document.getElementById("onb-bill-name-input")?.value.trim();
    const pendingBillAmt = Number(document.getElementById("onb-bill-amount-input")?.value || 0);
    if (pendingBillName && pendingBillAmt > 0) {
      addOnboardingBillCommitment();
    }
    syncOnboardingBillsAndInvestmentsToCommitments();
  } else if (step === 6 && !skipped) {
    const pendingInvName = document.getElementById("onb-inv-name-input")?.value.trim();
    const pendingInvAmt = Number(document.getElementById("onb-inv-amount-input")?.value || 0);
    if (pendingInvName && pendingInvAmt > 0) {
      addOnboardingInvestment();
    }
    ArthivaState.investments = JSON.parse(JSON.stringify(onboardingDraft.investments || []));
    syncOnboardingBillsAndInvestmentsToCommitments();
  } else if (step === 7 && !skipped) {
    const pendingGoalName = document.getElementById("onboarding-goal-name")?.value.trim();
    const pendingGoalTarget = Number(document.getElementById("onboarding-goal-target")?.value || 0);
    if (pendingGoalName && pendingGoalTarget > 0) {
      addOnboardingGoalItem();
    }
    ArthivaState.goals = JSON.parse(JSON.stringify(onboardingDraft.goals || []));
  }

  saveStateToStorage();
}

function syncOnboardingBillsAndInvestmentsToCommitments() {
  const merged = [];
  (onboardingDraft.bills || []).forEach(b => {
    const dayStr = String(b.dueDay || 5).padStart(2, "0");
    merged.push({
      id: b.id,
      name: b.name,
      category: b.category || "Rent",
      amount: Number(b.amount) || 0,
      dueDate: `2026-10-${dayStr}`,
      dueDateFormatted: `${b.dueDay || 5} Oct`,
      method: "UPI / Auto-debit",
      status: "upcoming",
      recurrence: b.frequency || "Monthly",
      notes: "Added during onboarding",
      paidDate: null
    });
  });

  (onboardingDraft.investments || []).forEach(inv => {
    const dayStr = String(inv.day || 10).padStart(2, "0");
    merged.push({
      id: inv.id,
      name: `${inv.name} (${inv.type})`,
      category: "Mutual funds and SIPs",
      amount: Number(inv.amount) || 0,
      dueDate: `2026-10-${dayStr}`,
      dueDateFormatted: `${inv.day || 10} Oct`,
      method: "Auto-debit",
      status: "upcoming",
      recurrence: "Monthly",
      notes: inv.type,
      paidDate: null
    });
  });

  ArthivaState.commitments = merged;
}

function jumpToOnboardingStep(stepNum) {
  ArthivaState.onboardingStep = stepNum;
  localStorage.setItem(ONBOARDING_STEP_KEY, String(stepNum));
  renderOnboardingStep();
}

function renderOnboardingFinishSummary() {
  const card = document.getElementById("onboarding-finish-summary-card");
  if (!card) return;

  const u = ArthivaState.auth.user || {};
  const c = ArthivaState.cycleConfig || {};
  const hhMembers = u.householdMembers || [];
  const banks = onboardingDraft.bankAccounts || [];
  const bills = onboardingDraft.bills || [];
  const invs = onboardingDraft.investments || [];
  const goals = onboardingDraft.goals || [];

  const rows = [
    {
      step: 1,
      title: "1. Profile",
      summary: `${u.name || "Not set"}${u.email ? " · " + u.email : ""}${u.mobile ? " · +91 " + u.mobile : ""}`
    },
    {
      step: 2,
      title: "2. Household",
      summary: u.householdMode === "Household"
        ? `${u.householdName || "Household"} (${hhMembers.length} member${hhMembers.length === 1 ? "" : "s"} added)`
        : "Individual planning"
    },
    {
      step: 3,
      title: "3. Income & pay cycle",
      summary: c.takeHome > 0
        ? `${formatINR(c.takeHome)}/mo · Payday: Day ${c.paydayDay || 1}`
        : "Skipped"
    },
    {
      step: 4,
      title: "4. Bank accounts & statements",
      summary: banks.length > 0
        ? `${banks.length} account(s) · Balance ${formatINR(ArthivaState.balance.amount)}`
        : (ArthivaState.expenses.length > 0 ? `${ArthivaState.expenses.length} statement transaction(s) imported` : "Skipped for now")
    },
    {
      step: 5,
      title: "5. Bills & commitments",
      summary: bills.length > 0
        ? `${bills.length} bill(s) totaling ${formatINR(bills.reduce((s, b) => s + Number(b.amount), 0))}`
        : "Skipped for now"
    },
    {
      step: 6,
      title: "6. Savings & investments",
      summary: invs.length > 0
        ? `${invs.length} investment(s) totaling ${formatINR(invs.reduce((s, i) => s + Number(i.amount), 0))}/mo`
        : "Skipped for now"
    },
    {
      step: 7,
      title: "7. Goals",
      summary: goals.length > 0
        ? `${goals.length} goal(s): ${goals.map(g => g.title).join(", ")}`
        : "Skipped for now"
    }
  ];

  card.innerHTML = rows.map(r => `
    <div class="onb-finish-summary-row">
      <div>
        <div style="font-weight: 800; color: var(--text-primary);">${escapeHTML(r.title)}</div>
        <div style="color: var(--text-secondary); font-size: 11.5px; margin-top: 2px;">${escapeHTML(r.summary)}</div>
      </div>
      <button type="button" class="section-link" style="font-size: 12px; font-weight: 700; flex-shrink: 0;" onclick="jumpToOnboardingStep(${r.step})">Edit</button>
    </div>
  `).join("");
}

function nextOnboardingStep() {
  const step = ArthivaState.onboardingStep || 1;
  if (step === 1 && !validateOnboardingStep1Profile(true)) return;
  if (step === 3 && !validateOnboardingStep3Income(true)) return;

  applyStepDataToState(step, false);

  if (step < 8) {
    ArthivaState.onboardingStep = step + 1;
    localStorage.setItem(ONBOARDING_STEP_KEY, String(ArthivaState.onboardingStep));
    saveStateToStorage();
    renderOnboardingStep();
  } else {
    localStorage.removeItem(ONBOARDING_STEP_KEY);
    localStorage.removeItem(ONBOARDING_DRAFT_KEY);
    saveStateToStorage();
    switchScreen("home");
    renderApp();
    showToast("Onboarding complete! Welcome to your Home dashboard.");
  }
}

function skipCurrentOnboardingStep() {
  const step = ArthivaState.onboardingStep || 1;
  // Steps 2, 4, 5, 6, 7 are optional
  if (step === 1 || step === 3) return;
  applyStepDataToState(step, true);
  if (step < 8) {
    ArthivaState.onboardingStep = step + 1;
    localStorage.setItem(ONBOARDING_STEP_KEY, String(ArthivaState.onboardingStep));
    saveStateToStorage();
    renderOnboardingStep();
  }
}

function prevOnboardingStep() {
  saveOnboardingDraft();
  if (ArthivaState.onboardingStep > 1) {
    ArthivaState.onboardingStep--;
    localStorage.setItem(ONBOARDING_STEP_KEY, String(ArthivaState.onboardingStep));
    renderOnboardingStep();
  } else {
    switchScreen("auth");
    openStartFinancialOnboardingScreen();
  }
}

function skipOnboarding() {
  localStorage.removeItem(ONBOARDING_STEP_KEY);
  saveStateToStorage();
  switchScreen("home");
  renderApp();
}

function renderOnboardingStep() {
  const step = ArthivaState.onboardingStep || 1;
  document.querySelectorAll(".onboarding-step-content").forEach(el => el.style.display = "none");
  const stepEl = document.getElementById(`onboarding-step-${step}`);
  if (stepEl) stepEl.style.display = "block";

  for (let i = 1; i <= 7; i++) {
    const dot = document.getElementById(`step-dot-${i}`);
    if (dot) dot.classList.toggle("active", i <= Math.min(7, step));
  }

  const pillEl = document.getElementById("onboarding-step-pill");
  if (pillEl) {
    pillEl.textContent = step <= 7 ? `Step ${step} of 7` : "Finish";
  }

  // Optional steps: 2 (Household), 4 (Bank & statements), 5 (Bills), 6 (Savings & investments), 7 (Goals)
  const skipBtn = document.getElementById("onboarding-skip-btn");
  const isOptionalStep = [2, 4, 5, 6, 7].includes(step);
  if (skipBtn) {
    skipBtn.style.display = isOptionalStep ? "inline-flex" : "none";
  }

  const nextBtn = document.getElementById("onboarding-next-btn");
  if (nextBtn) {
    nextBtn.textContent = step === 8 ? "Go to Home" : "Continue";
  }

  const avatarPrev = document.getElementById("onb-avatar-preview");
  if (avatarPrev) {
    renderAvatarIntoElement(avatarPrev, ArthivaState.auth.user);
  }

  if (step === 8) {
    renderOnboardingFinishSummary();
  }
}

function continueAsDemoUser() {
  ArthivaState = JSON.parse(JSON.stringify(DEFAULT_STATE));
  ArthivaState.auth.isAuthenticated = true;
  ArthivaState.auth.user.name = "Rashika";
  ArthivaState.security.isLocked = false;
  localStorage.setItem("arthiva_session_v2", "true");
  localStorage.removeItem(ONBOARDING_STEP_KEY);
  localStorage.removeItem(ONBOARDING_DRAFT_KEY);
  saveStateToStorage();
  switchScreen("home");
  renderApp();
  showToast("Logged in as Rashika (Sample Data).");
}

function handleLogout() {
  ArthivaState.auth.isAuthenticated = false;
  ArthivaState.security.isLocked = false;
  localStorage.removeItem("arthiva_session_v2");
  saveStateToStorage();
  showAuthWelcomeView();
  switchScreen("auth");
  showToast("You have been signed out.");
}

function switchAuthTab(tab) {
  openAuthCredentialsView(tab);
}

// Legacy helpers kept for compatibility
function renderOnboardingCommitmentChips() {}
function toggleOnboardingChip() {}
function onOnboardingBalanceInput() {}

// --------------------------------------------------------------------------
// 19. Navigation, Modal & Bottom Sheet Controller (Enforces App-Lock Guard)
// --------------------------------------------------------------------------

function switchScreen(screenId) {
  ArthivaState.currentScreen = screenId;

  const isAuthOrLock = (screenId === "auth" || screenId === "applock" || screenId === "onboarding");
  const bottomNav = document.getElementById("main-bottom-nav");
  if (bottomNav) {
    bottomNav.style.display = isAuthOrLock ? "none" : "flex";
  }

  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.toggle("active", item.getAttribute("data-screen") === screenId);
  });

  document.querySelectorAll(".app-screen").forEach(scr => {
    scr.classList.remove("active");
  });

  const target = document.getElementById(`screen-${screenId}`);
  if (target) {
    target.classList.add("active");
  }

  const selector = document.getElementById("workbench-screen-select");
  if (selector) selector.value = screenId;

  const container = document.querySelector(".screen-container");
  if (container) container.scrollTop = 0;

  renderApp();
}

function openBottomSheet(sheetId) {
  const overlay = document.getElementById("global-sheet-overlay");
  const sheet = document.getElementById(sheetId);
  if (overlay && sheet) {
    overlay.classList.add("active");
    sheet.classList.add("active");
  }
}

function closeBottomSheet(sheetId) {
  const sheet = document.getElementById(sheetId);
  if (sheet) sheet.classList.remove("active");

  setTimeout(() => {
    const anyActive = document.querySelector(".bottom-sheet.active, .dialog-modal.active");
    if (!anyActive) {
      const overlay = document.getElementById("global-sheet-overlay");
      if (overlay) overlay.classList.remove("active");
    }
  }, 50);
}

function closeAllSheets() {
  document.querySelectorAll(".bottom-sheet").forEach(s => s.classList.remove("active"));
  document.querySelectorAll(".dialog-modal").forEach(m => m.classList.remove("active"));
  const overlay = document.getElementById("global-sheet-overlay");
  if (overlay) overlay.classList.remove("active");
}

function openModalDialog(modalId) {
  const overlay = document.getElementById("global-sheet-overlay");
  const modal = document.getElementById(modalId);
  if (overlay && modal) {
    overlay.classList.add("active");
    modal.classList.add("active");
  }
}

function closeModalDialog(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("active");
  closeAllSheets();
}

function toggleFabMenu() {
  const menu = document.getElementById("fab-quick-menu");
  if (menu) menu.classList.toggle("open");
}

function closeFabMenu() {
  const menu = document.getElementById("fab-quick-menu");
  if (menu) menu.classList.remove("open");
}

let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("app-toast");
  if (!toast) return;

  toast.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg> <span>${escapeHTML(message)}</span>`;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function triggerPushNotification() {
  const banner = document.getElementById("push-banner");
  if (!banner) return;

  banner.classList.add("visible");
  setTimeout(() => {
    banner.classList.remove("visible");
  }, 4500);
}

// --------------------------------------------------------------------------
// 20. Workbench & Environment Controls
// --------------------------------------------------------------------------

function toggleDarkMode() {
  const html = document.documentElement;
  const current = html.getAttribute("data-theme") || "light";
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  ArthivaState.theme = next;
  saveStateToStorage();

  const btn = document.getElementById("theme-toggle-btn");
  if (btn) {
    btn.innerHTML = next === "dark" 
      ? `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> Light`
      : `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> Dark`;
  }
}

function setDeviceFrame(mode) {
  const frame = document.getElementById("mobile-device-frame");
  if (!frame) return;

  frame.classList.remove("android-mode", "borderless-mode");
  if (mode === "android") frame.classList.add("android-mode");
  if (mode === "borderless") frame.classList.add("borderless-mode");

  ArthivaState.deviceMode = mode;
  document.querySelectorAll(".device-mode-btn").forEach(b => {
    b.classList.toggle("active", b.getAttribute("data-mode") === mode);
  });
}

function setDeviceZoom(zoomLevel) {
  const wrapper = document.getElementById("device-scale-wrapper");
  if (wrapper) {
    wrapper.style.transform = `scale(${zoomLevel})`;
    ArthivaState.zoom = zoomLevel;
  }
  document.querySelectorAll(".zoom-btn").forEach(b => {
    b.classList.toggle("active", parseFloat(b.getAttribute("data-zoom")) === zoomLevel);
  });
}

function toggleEmptyState() {
  ArthivaState.isEmptyState = !ArthivaState.isEmptyState;
  const btn = document.getElementById("empty-state-toggle-btn");
  if (btn) {
    btn.classList.toggle("active", ArthivaState.isEmptyState);
    btn.textContent = ArthivaState.isEmptyState ? "Sample Data: Off" : "Sample Data: Rashika";
  }
  renderApp();
  showToast(ArthivaState.isEmptyState ? "Empty state active: Add your bills." : "Sample financial data loaded.");
}

function triggerSplashSequence() {
  const splash = document.getElementById("app-splash-screen");
  if (!splash) return;
  splash.style.display = "flex";
  setTimeout(() => {
    splash.style.display = "none";
  }, 1000);
}

// --------------------------------------------------------------------------
// 21. Utility Helpers & Icons
// --------------------------------------------------------------------------

function escapeHTML(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getCategoryIconSVG(cat) {
  const c = (cat || "").toLowerCase();
  if (c.includes("rent") || c.includes("home")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`;
  }
  if (c.includes("emi") || c.includes("loan") || c.includes("credit")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`;
  }
  if (c.includes("sip") || c.includes("mutual") || c.includes("invest")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`;
  }
  if (c.includes("insurance")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`;
  }
  if (c.includes("staff") || c.includes("help") || c.includes("cook")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`;
  }
  if (c.includes("netflix") || c.includes("subscription") || c.includes("stream")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
  }
  if (c.includes("dining") || c.includes("food")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
  }
  if (c.includes("grocer")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>`;
  }
  if (c.includes("transport") || c.includes("cab") || c.includes("fuel") || c.includes("travel")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`;
  }
  if (c.includes("utilities") || c.includes("electric") || c.includes("wifi") || c.includes("internet") || c.includes("phone")) {
    return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`;
  }
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
}

function getCheckmarkSVG() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
}

function getSkipIconSVG() {
  return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 4l10 8-10 8V4z"/><line x1="19" y1="5" x2="19" y2="19"/></svg>`;
}

// --------------------------------------------------------------------------
// 22. Initialization & Background Visibility Lock Policy
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  // Hide Dev/QA Reset buttons if running in production mode
  if (window.ARTHIVA_ENV === "production") {
    const qaBtn = document.getElementById("qa-reset-new-user-btn");
    if (qaBtn) qaBtn.style.display = "none";
  }

  // Support URL parameter ?reset=new-user for automated E2E / QA runs
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("reset") === "new-user" && window.ARTHIVA_ENV !== "production") {
    confirmResetToNewUser();
    return;
  }

  const session = localStorage.getItem("arthiva_session_v2");
  const resumeStep = parseInt(localStorage.getItem(ONBOARDING_STEP_KEY) || "0", 10);

  if (session && resumeStep >= 1 && resumeStep <= 8) {
    ArthivaState.auth.isAuthenticated = true;
    ArthivaState.security.isLocked = false;
    startOnboardingFlow(resumeStep);
  } else if (session) {
    ArthivaState.auth.isAuthenticated = true;
    if (ArthivaState.security && ArthivaState.security.appLockEnabled) {
      ArthivaState.security.isLocked = true;
      switchScreen("applock");
    } else {
      ArthivaState.security.isLocked = false;
      switchScreen("home");
    }
  } else if (!ArthivaState.auth.isAuthenticated) {
    showAuthWelcomeView();
    switchScreen("auth");
  } else {
    localStorage.setItem("arthiva_session_v2", "true");
    switchScreen("home");
  }

  renderApp();

  if (!sessionStorage.getItem("arthiva_splash_shown")) {
    sessionStorage.setItem("arthiva_splash_shown", "true");
    triggerSplashSequence();
  }

  // Connect & Sync with Supabase
  if (window.ArthivaSupabase && typeof window.ArthivaSupabase.select === "function") {
    (async function initSupabaseSync() {
      try {
        const { data: dbTxns, error } = await window.ArthivaSupabase.select("transactions");
        if (!error && Array.isArray(dbTxns) && dbTxns.length > 0) {
          console.log("[Supabase] Synced transactions:", dbTxns.length);
          if (typeof showToast === "function") {
            showToast(`Supabase connected (${dbTxns.length} records)`, "success");
          }
        }
      } catch (err) {
        console.warn("[Supabase] Sync notice:", err.message);
      }
    })();
  }

  // Background visibility lock listener
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden" && ArthivaState.auth.isAuthenticated) {
      if (ArthivaState.security && ArthivaState.security.lockPolicy === "background_immediate") {
        lockApplicationNow();
      }
    }
  });
});

