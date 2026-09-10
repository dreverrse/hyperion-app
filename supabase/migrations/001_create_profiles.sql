-- 001: profiles table
create table public.profiles (
  id         uuid primary key default gen_random_uuid(),
  name       text        not null,
  email      text        unique,
  avatar_url text,
  avatar_emoji text,
  currency   text        default 'USD',
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
