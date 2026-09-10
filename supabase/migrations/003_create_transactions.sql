-- 003: transactions table
create table public.transactions (
  id          uuid primary key default gen_random_uuid(),
  wallet_id   uuid        not null references public.wallets(id) on delete cascade,
  category_id uuid,
  title       text        not null,
  icon        text,
  merchant    text,
  amount      numeric     not null,
  type        text        not null default 'expense',
  status      text        not null default 'success',
  date        timestamptz not null default now(),
  display_date text,
  note        text,
  created_at  timestamptz not null default now()
);

create index idx_transactions_wallet_id on public.transactions(wallet_id);
create index idx_transactions_date      on public.transactions(date);

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
