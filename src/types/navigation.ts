import type { ComponentType } from 'react';

export type ScreenName =
  | 'dashboard'
  | 'wallet'
  | 'activity'
  | 'profile'
  | 'settings'
  | 'budgets'
  | 'analytics'
  | 'goals'
  | 'cards'
  | 'transactions'
  | 'transactionForm'
  | 'walletDetail'
  | 'notifications'
  | 'about';

export interface NavigationContextValue {
  navigate: (screen: ScreenName, params?: Record<string, unknown>) => void;
  currentScreen: ScreenName;
}

export type PageComponent = ComponentType;