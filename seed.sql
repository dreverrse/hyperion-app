-- seed.sql — sample data matching src/data/mock/*
-- Run after migrations: psql "$DATABASE_URL" -f seed.sql

-- ──────────────────────────────────────────────
-- Profile
-- ──────────────────────────────────────────────
insert into public.profiles (id, name, email, avatar_emoji, currency)
values (
  '00000000-0000-0000-0000-000000000001',
  'Michael Chid',
  'michael@hyperion.app',
  '👨🏻💼',
  'USD'
);

-- ──────────────────────────────────────────────
-- Wallets
-- ──────────────────────────────────────────────
insert into public.wallets (id, user_id, name, balance, accent, type, is_default)
values
  ('00000000-0000-0000-0000-000000000101',
   '00000000-0000-0000-0000-000000000001',
   'Tobuya', 20200, '#eaedf0', 'bank', true),
  ('00000000-0000-0000-0000-000000000102',
   '00000000-0000-0000-0000-000000000001',
   'Familia', 17500, '#1b1c1e', 'e-wallet', false);

-- ──────────────────────────────────────────────
-- Transactions
-- ──────────────────────────────────────────────
insert into public.transactions (id, wallet_id, title, icon, merchant, amount, type, status, date, display_date)
values
  ('00000000-0000-0000-0000-000000000201',
   '00000000-0000-0000-0000-000000000101',
   'Received from Wachid', 'paypal', null,
   232, 'income', 'success',
   '2026-09-08T09:05:00Z', 'Today, 09.05 am'),

  ('00000000-0000-0000-0000-000000000202',
   '00000000-0000-0000-0000-000000000102',
   'Spotify Family', 'spotify', null,
   15.99, 'expense', 'success',
   '2026-09-07T14:20:00Z', 'Yesterday, 14.20 pm'),

  ('00000000-0000-0000-0000-000000000203',
   '00000000-0000-0000-0000-000000000101',
   'Monthly Salary', null, 'Acme Corp',
   5000, 'income', 'success',
   '2026-09-01T08:00:00Z', '01 Sep, 08.00 am'),

  ('00000000-0000-0000-0000-000000000204',
   '00000000-0000-0000-0000-000000000102',
   'Groceries', null, 'Toko Sayur Sejahtera',
   84.50, 'expense', 'success',
   '2026-09-03T17:12:00Z', '03 Sep, 17.12 pm'),

  ('00000000-0000-0000-0000-000000000205',
   '00000000-0000-0000-0000-000000000101',
   'Transportation', null, 'Gojek',
   12.75, 'expense', 'pending',
   '2026-09-05T07:45:00Z', '05 Sep, 07.45 am');

-- ──────────────────────────────────────────────
-- Budgets
-- ──────────────────────────────────────────────
insert into public.budgets (id, user_id, category, amount, spent)
values
  ('00000000-0000-0000-0000-000000000301',
   '00000000-0000-0000-0000-000000000001',
   'Food & Drinks', 500, 312),
  ('00000000-0000-0000-0000-000000000302',
   '00000000-0000-0000-0000-000000000001',
   'Shopping', 300, 240),
  ('00000000-0000-0000-0000-000000000303',
   '00000000-0000-0000-0000-000000000001',
   'Transportation', 150, 96.50),
  ('00000000-0000-0000-0000-000000000304',
   '00000000-0000-0000-0000-000000000001',
   'Bills', 400, 400),
  ('00000000-0000-0000-0000-000000000305',
   '00000000-0000-0000-0000-000000000001',
   'Entertainment', 200, 74);

-- ──────────────────────────────────────────────
-- Goals
-- ──────────────────────────────────────────────
insert into public.goals (id, user_id, title, target, saved, deadline, status, emoji)
values
  ('00000000-0000-0000-0000-000000000401',
   '00000000-0000-0000-0000-000000000001',
   'Japan Trip', 5000, 3000,
   '2026-12-25T00:00:00Z', 'in_progress', '🗼'),
  ('00000000-0000-0000-0000-000000000402',
   '00000000-0000-0000-0000-000000000001',
   'PS5 Bundle', 650, 650,
   '2027-01-15T00:00:00Z', 'completed', '🎮'),
  ('00000000-0000-0000-0000-000000000403',
   '00000000-0000-0000-0000-000000000001',
   'Emergency Fund', 10000, 4200,
   null, 'in_progress', '🛟');

-- ──────────────────────────────────────────────
-- Cards
-- ──────────────────────────────────────────────
insert into public.cards (id, user_id, network, last4, holder_name, accent, expiry_month, expiry_year, is_default)
values
  ('00000000-0000-0000-0000-000000000501',
   '00000000-0000-0000-0000-000000000001',
   'visa', '4521', 'MICHAEL CHID', '#1b1c1e', 8, 29, true),
  ('00000000-0000-0000-0000-000000000502',
   '00000000-0000-0000-0000-000000000001',
   'mastercard', '8890', 'MICHAEL CHID', '#e91e63', 11, 28, false);

-- ──────────────────────────────────────────────
-- Notifications
-- ──────────────────────────────────────────────
insert into public.notifications (id, user_id, type, title, message, is_read, created_at, display_date)
values
  ('00000000-0000-0000-0000-000000000601',
   '00000000-0000-0000-0000-000000000001',
   'payment', 'Payment received',
   'You received $232.00 from Wachid via PayPal.',
   false, '2026-09-08T09:05:00Z', 'Today, 09.05 am'),
  ('00000000-0000-0000-0000-000000000602',
   '00000000-0000-0000-0000-000000000001',
   'budget', 'Budget almost reached',
   'Your Shopping budget is at 80% of the monthly limit.',
   false, '2026-09-08T08:00:00Z', 'Today, 08.00 am'),
  ('00000000-0000-0000-0000-000000000603',
   '00000000-0000-0000-0000-000000000001',
   'goal', 'Goal progress',
   'You are 60% toward your Japan Trip goal. Keep going!',
   true, '2026-09-07T18:20:00Z', 'Yesterday, 18.20 pm'),
  ('00000000-0000-0000-0000-000000000604',
   '00000000-0000-0000-0000-000000000001',
   'security', 'New sign-in',
   'A new device signed in to your account from Jakarta, ID.',
   true, '2026-09-07T07:30:00Z', 'Yesterday, 07.30 am'),
  ('00000000-0000-0000-0000-000000000605',
   '00000000-0000-0000-0000-000000000001',
   'summary', 'Weekly summary',
   'You spent $112.25 this week and saved $18 toward your goals.',
   true, '2026-09-06T21:00:00Z', '06 Sep, 09.00 pm');
