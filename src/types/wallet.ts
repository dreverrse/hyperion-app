export type WalletType = 'bank' | 'e-wallet' | 'cash' | 'crypto';

export interface Wallet {
  id: string;
  name: string;
  balance: number;
  accent?: string;
  type: WalletType;
  isDefault?: boolean;
  createdAt?: string;
  updatedAt?: string;
}