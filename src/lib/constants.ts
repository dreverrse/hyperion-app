export const APP_NAME = 'Hyperion';
export const APP_VERSION = '1.0.0';
export const DEFAULT_CURRENCY = 'USD';
export const DEFAULT_LOCALE = 'en-US';

export const SUPPORTED_CATEGORIES = [
  'Food & Drinks',
  'Shopping',
  'Transportation',
  'Bills',
  'Entertainment',
] as const;

export const TABS = [
  { id: 'dashboard', label: 'Dashboard', to: '/' },
  { id: 'wallet', label: 'Wallet', to: '/wallet' },
  { id: 'activity', label: 'Activity', to: '/activity' },
] as const;

export const MONTHS_SHORT = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'Mei',
  'Jun',
  'Jul',
  'Agu',
  'Sep',
  'Okt',
  'Nov',
  'Des',
] as const;