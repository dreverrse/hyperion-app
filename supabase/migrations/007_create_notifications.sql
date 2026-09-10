-- 007: notifications table
create table public.notifications (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid        not null references public.profiles(id) on delete cascade,
  type         text        not null default 'payment',
  title        text        not null,
  message      text        not null,
  is_read      boolean     not null default false,
  created_at   timestamptz not null default now(),
  display_date text
);

create index idx_notifications_user_id on public.notifications(user_id);

alter table public.notifications enable row level security;

create policy "Users can view own notifications"
  on public.notifications for select
  using (auth.uid() = user_id);

create policy "Users can insert own notifications"
  on public.notifications for insert
  with check (auth.uid() = user_id);

create policy "Users can update own notifications"
  on public.notifications for update
  using (auth.uid() = user_id);

create policy "Users can delete own notifications"
  on public.notifications for delete
  using (auth.uid() = user_id);
