-- =========================================================================
-- ARTHIVA MONEY - COMPLETE DATABASE SCHEMA WITH RLS & REALTIME
-- =========================================================================

-- 1. PROFILES TABLE (Stores user settings, payday cycle, balance)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT DEFAULT 'User',
  mobile TEXT,
  city TEXT DEFAULT 'Bengaluru',
  role TEXT DEFAULT 'Professional',
  payday_day INT DEFAULT 1,
  take_home NUMERIC(12, 2) DEFAULT 50000,
  employer_bank TEXT DEFAULT 'Salary Account',
  current_balance NUMERIC(12, 2) DEFAULT 0,
  household_name TEXT DEFAULT 'My Household',
  household_mode TEXT DEFAULT 'Individual',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. COMMITMENTS & BILLS TABLE
CREATE TABLE IF NOT EXISTS public.commitments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  due_date DATE NOT NULL,
  method TEXT DEFAULT 'UPI',
  status TEXT DEFAULT 'upcoming', -- 'upcoming', 'paid', 'due', 'risk', 'scheduled'
  recurrence TEXT DEFAULT 'Monthly',
  is_at_risk BOOLEAN DEFAULT FALSE,
  has_grace_period BOOLEAN DEFAULT FALSE,
  grace_period_end_date DATE,
  paid_date DATE,
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. EXPENSES TABLE (Flexible / Daily Spending)
CREATE TABLE IF NOT EXISTS public.expenses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  amount NUMERIC(12, 2) NOT NULL,
  merchant TEXT,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  note TEXT,
  source TEXT DEFAULT 'Manual',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SAVINGS GOALS TABLE
CREATE TABLE IF NOT EXISTS public.goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  target_amount NUMERIC(12, 2) NOT NULL,
  current_saved NUMERIC(12, 2) DEFAULT 0,
  target_date DATE NOT NULL,
  monthly_allocation NUMERIC(12, 2) DEFAULT 0,
  saved_this_cycle NUMERIC(12, 2) DEFAULT 0,
  frequency TEXT DEFAULT 'Monthly',
  linked_account TEXT,
  celebrated_milestone INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. GOAL CONTRIBUTIONS TABLE
CREATE TABLE IF NOT EXISTS public.goal_contributions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  goal_id UUID NOT NULL REFERENCES public.goals(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  amount NUMERIC(12, 2) NOT NULL,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  note TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. BUDGETS TABLE (Pacing limits per category)
CREATE TABLE IF NOT EXISTS public.budgets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  category TEXT NOT NULL,
  spending_limit NUMERIC(12, 2) NOT NULL,
  icon TEXT DEFAULT 'tag',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, category)
);

-- 7. BALANCE AUDIT LOGS TABLE
CREATE TABLE IF NOT EXISTS public.balance_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  previous_balance NUMERIC(12, 2) NOT NULL,
  new_balance NUMERIC(12, 2) NOT NULL,
  change_amount NUMERIC(12, 2) NOT NULL,
  reason TEXT,
  source TEXT DEFAULT 'Manual check-in',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. STATEMENT IMPORTS LOG TABLE
CREATE TABLE IF NOT EXISTS public.statement_imports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  file_name TEXT NOT NULL,
  file_url TEXT,
  transactions_count INT DEFAULT 0,
  imported_at TIMESTAMPTZ DEFAULT NOW()
);

-- =========================================================================
-- ENABLE ROW LEVEL SECURITY (RLS) ON ALL TABLES
-- =========================================================================
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.commitments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expenses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.goals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.goal_contributions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budgets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.balance_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.statement_imports ENABLE ROW LEVEL SECURITY;

-- CREATE RLS POLICIES (Users can only read, insert, update, delete their own data)
DO $$
DECLARE
  tbl TEXT;
BEGIN
  FOR tbl IN SELECT tablename FROM pg_tables WHERE schemaname = 'public' AND tablename IN (
    'profiles', 'commitments', 'expenses', 'goals', 'goal_contributions', 'budgets', 'balance_logs', 'statement_imports'
  )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS "Users can manage their own %s" ON public.%I', tbl, tbl);
    IF tbl = 'profiles' THEN
      EXECUTE format('CREATE POLICY "Users can manage their own profiles" ON public.profiles FOR ALL USING (auth.uid() = id) WITH CHECK (auth.uid() = id)');
    ELSE
      EXECUTE format('CREATE POLICY "Users can manage their own %s" ON public.%I FOR ALL USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id)', tbl, tbl);
    END IF;
  END LOOP;
END $$;

-- Automatic profile creation trigger on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, mobile)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', 'Arthiva Member'),
    COALESCE(NEW.phone, NEW.raw_user_meta_data->>'mobile', '')
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- =========================================================================
-- ENABLE SUPABASE REALTIME REPLICATION
-- =========================================================================
ALTER PUBLICATION supabase_realtime ADD TABLE 
  public.profiles, 
  public.commitments, 
  public.expenses, 
  public.goals, 
  public.budgets;

-- =========================================================================
-- STORAGE BUCKET FOR BANK STATEMENTS
-- =========================================================================
INSERT INTO storage.buckets (id, name, public) 
VALUES ('statements', 'statements', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Users can upload their own statements" 
ON storage.objects FOR INSERT 
TO authenticated 
WITH CHECK (bucket_id = 'statements' AND (storage.foldername(name))[1] = auth.uid()::text);

CREATE POLICY "Users can view their own statements" 
ON storage.objects FOR SELECT 
TO authenticated 
USING (bucket_id = 'statements' AND (storage.foldername(name))[1] = auth.uid()::text);
