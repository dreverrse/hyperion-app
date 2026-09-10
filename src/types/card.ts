export type CardNetwork = 'visa' | 'mastercard';

export interface Card {
  id: string;
  network: CardNetwork;
  last4: string;
  holderName: string;
  accent: string;
  expiryMonth: number;
  expiryYear: number;
  isDefault?: boolean;
  createdAt?: string;
}