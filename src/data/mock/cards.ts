import type { Card } from '../../types/card';

export const mockCards: Card[] = [
  {
    id: 'card-visa-001',
    network: 'visa',
    last4: '4521',
    holderName: 'MICHAEL CHID',
    accent: '#1b1c1e',
    expiryMonth: 8,
    expiryYear: 29,
    isDefault: true,
    createdAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'card-mc-001',
    network: 'mastercard',
    last4: '8890',
    holderName: 'MICHAEL CHID',
    accent: '#e91e63',
    expiryMonth: 11,
    expiryYear: 28,
    createdAt: '2026-02-01T00:00:00.000Z',
  },
];