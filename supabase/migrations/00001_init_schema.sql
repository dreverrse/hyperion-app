-- ============================================
-- Hyperion App — Initial Schema
-- ============================================

-- Enums
create type public.transaction_type as enum ('income', 'expense');
create type public.transaction_status as enum ('success', 'pending', 'failed');
create type public.goal_status as enum ('in_progress', 'completed', 'paused');

-- ============================================
-- profiles
-- ============================================
create table public.profiles (
  id         uuid primary key references auth.users(id) on delete cascade,
  name       text not null,
  email      text,
  avatar_url text,
  currency   text default 'IDR',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update
  using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = ''
as $$
begin
  insert into public.profiles (id, name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'name', new.raw_user_meta_data ->> 'full_name', split_part(new.email, '@', 1)),
    new.email
  );
  return new;
end;
$$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- ============================================
-- wallets
-- ============================================
create table public.wallets (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  name       text not null,
  balance    numeric(15,2) not null default 0,
  accent     text not null default '#FF6B6B',
  type       text not null default 'main',
  is_default boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_wallets_user_id on public.wallets(user_id);

alter table public.wallets enable row level security;

create policy "Users can view own wallets"
  on public.wallets for select
  using (auth.uid() = user_id);

create policy "Users can insert own wallets"
  on public.wallets for insert
  with check (auth.uid() = user_id);

create policy "Users can update own wallets"
  on public.wallets for update
  using (auth.uid() = user_id);

create policy "Users can delete own wallets"
  on public.wallets for delete
  using (auth.uid() = user_id);

-- ============================================
-- transactions
-- ============================================
create table public.transactions (
  id          uuid primary key default gen_random_uuid(),
  wallet_id   uuid not null references public.wallets(id) on delete cascade,
  category_id uuid,
  title       text not null,
  merchant    text,
  amount      numeric(15,2) not null,
  type        public.transaction_type not null default 'expense',
  status      public.transaction_status not null default 'success',
  date        date not null default current_date,
  note        text,
  created_at  timestamptz not null default now()
);

create index idx_transactions_wallet_id on public.transactions(wallet_id);
create index idx_transactions_date on public.transactions(date desc);

alter table public.transactions enable row level security;

create policy "Users can view own transactions"
  on public.transactions for select
  using (
    exists (
      select 1 from public.wallets
      where wallets.id = transactions.wallet_id
        and wallets.user_id = auth.uid()
    )
  );

create policy "Users can insert own transactions"
  on public.transactions for insert
  with check (
    exists (
      select 1 from public.wallets
      where wallets.id = transactions.wallet_id
        and wallets.user_id = auth.uid()
    )
  );

create policy "Users can update own transactions"
  on public.transactions for update
  using (
    exists (
      select 1 from public.wallets
      where wallets.id = transactions.wallet_id
        and wallets.user_id = auth.uid()
    )
  );

create policy "Users can delete own transactions"
  on public.transactions for delete
  using (
    exists (
      select 1 from public.wallets
      where wallets.id = transactions.wallet_id
        and wallets.user_id = auth.uid()
    )
  );

-- ============================================
-- budgets
-- ============================================
create table public.budgets (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  category   text not null,
  amount     numeric(15,2) not null,
  spent      numeric(15,2) not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_budgets_user_id on public.budgets(user_id);

alter table public.budgets enable row level security;

create policy "Users can view own budgets"
  on public.budgets for select
  using (auth.uid() = user_id);

create policy "Users can insert own budgets"
  on public.budgets for insert
  with check (auth.uid() = user_id);

create policy "Users can update own budgets"
  on public.budgets for update
  using (auth.uid() = user_id);

create policy "Users can delete own budgets"
  on public.budgets for delete
  using (auth.uid() = user_id);

-- ============================================
-- goals
-- ============================================
create table public.goals (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles(id) on delete cascade,
  title      text not null,
  target     numeric(15,2) not null,
  saved      numeric(15,2) not null default 0,
  deadline   date,
  status     public.goal_status not null default 'in_progress',
  emoji      text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index idx_goals_user_id on public.goals(user_id);

alter table public.goals enable row level security;

create policy "Users can view own goals"
  on public.goals for select
  using (auth.uid() = user_id);

create policy "Users can insert own goals"
  on public.goals for insert
  with check (auth.uid() = user_id);

create policy "Users can update own goals"
  on public.goals for update
  using (auth.uid() = user_id);

create policy "Users can delete own goals"
  on public.goals for delete
  using (auth.uid() = user_id);

-- ============================================
-- updated_at trigger
-- ============================================
create or replace function public.update_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger update_profiles_updated_at
  before update on public.profiles
  for each row execute function public.update_updated_at();

create trigger update_wallets_updated_at
  before update on public.wallets
  for each row execute function public.update_updated_at();

create trigger update_budgets_updated_at
  before update on public.budgets
  for each row execute function public.update_updated_at();

create trigger update_goals_updated_at
  before update on public.goals
  for each row execute function public.update_updated_at();
