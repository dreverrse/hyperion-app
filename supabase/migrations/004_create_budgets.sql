-- 004: budgets table
create table public.budgets (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid        not null references public.profiles(id) on delete cascade,
  category   text        not null,
  amount     numeric     not null,
  spent      numeric     not null default 0,
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
