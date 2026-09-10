-- 005: goals table
create table public.goals (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid        not null references public.profiles(id) on delete cascade,
  title      text        not null,
  target     numeric     not null,
  saved      numeric     not null default 0,
  deadline   timestamptz,
  status     text        not null default 'in_progress',
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
