# Arthiva Money

> **India-first personal & household finance management app.** Built for real Indian financial habits — salary cycles, fixed commitments (Rent, EMIs, SIPs, Insurance), family goals, and safe-to-spend tracking.

---

## ✨ Features

- **Salary-Cycle Budgeting:** Track finances based on your actual pay cycle rather than rigid calendar months.
- **Commitments & Bills Manager:** Manage EMIs, SIPs, utility bills, school fees, and rent with due date tracking.
- **Indian Financial Nuances:** Native support for Indian number formatting (₹, Lakhs, Crores), UPI modes, and Indian household finance.
- **Supabase Cloud Backend:** Authentication, real-time transaction syncing, and cloud storage powered by Supabase.
- **Secure by Design:** Client-side lock options, credential protection, and privacy-first architecture.
- **PWA & Mobile Ready:** Responsive design optimized for mobile screens, standalone installation, and APK packaging via PWABuilder.

---

## 📖 Technical Documentation

- **[Complete API & Data Operations Reference](API_DOCUMENTATION.md):** Full documentation of all Supabase database operations, Auth flows, Realtime replication, Storage bucket usage, client-side vector engines, and database schemas with RLS policies.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/Arthiva.git
cd Arthiva
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Fill in your Supabase project credentials in `.env`:
```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-supabase-publishable-key
```

### 3. Run Locally
Open `index.html` directly in any modern web browser or serve it using any static HTTP server:
```bash
# Using Python
python -m http.server 8000

# Or using npx serve
npx serve .
```

---

## 🗄️ Supabase Setup

Run the following SQL in your **Supabase SQL Editor** to create the required tables:

```sql
create table public.transactions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  date date not null default current_date,
  description text not null,
  merchant text,
  category text default 'General',
  account text default 'Primary Bank',
  payment_mode text default 'UPI',
  amount numeric not null,
  type text not null check (type in ('in', 'out', 'income', 'expense'))
);

alter table public.transactions enable row level security;
create policy "Allow public read" on public.transactions for select using (true);
create policy "Allow public insert" on public.transactions for insert with check (true);
```

---

## 📱 Mobile APK Generation

1. Host this project on **Vercel** or **Netlify**.
2. Go to **[PWABuilder.com](https://www.pwabuilder.com)** and enter your deployment URL.
3. Select **Android** and download the packaged `.apk` ready for testing on Android devices.

---

## 🔒 Security
- **Never commit `.env` or sensitive secret keys to source control.**
- Only publishable/anon keys should be used on client-side code.
