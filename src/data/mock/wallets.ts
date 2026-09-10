import type { Wallet } from '../../types/wallet';

export const mockWallets: Wallet[] = [
  {
    id: 'wallet-tobuya',
    name: 'Tobuya',
    balance: 20200,
    accent: '#eaedf0',
    type: 'bank',
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'wallet-familia',
    name: 'Familia',
    balance: 17500,
    accent: '#1b1c1e',
    type: 'e-wallet',
    createdAt: '2026-01-01T00:00:00.000Z',
  },
];