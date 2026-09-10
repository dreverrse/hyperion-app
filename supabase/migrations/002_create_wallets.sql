-- 002: wallets table
create table public.wallets (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid        not null references public.profiles(id) on delete cascade,
  name       text        not null,
  balance    numeric     not null default 0,
  accent     text        default '#eaedf0',
  type       text        not null default 'bank',
  is_default boolean     not null default false,
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
