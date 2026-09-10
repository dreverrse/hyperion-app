-- 006: cards table
create table public.cards (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid        not null references public.profiles(id) on delete cascade,
  network      text        not null default 'visa',
  last4        text        not null,
  holder_name  text        not null,
  accent       text        default '#1b1c1e',
  expiry_month integer     not null,
  expiry_year  integer     not null,
  is_default   boolean     not null default false,
  created_at   timestamptz not null default now()
);

create index idx_cards_user_id on public.cards(user_id);

alter table public.cards enable row level security;

create policy "Users can view own cards"
  on public.cards for select
  using (auth.uid() = user_id);

create policy "Users can insert own cards"
  on public.cards for insert
  with check (auth.uid() = user_id);

create policy "Users can update own cards"
  on public.cards for update
  using (auth.uid() = user_id);

create policy "Users can delete own cards"
  on public.cards for delete
  using (auth.uid() = user_id);
