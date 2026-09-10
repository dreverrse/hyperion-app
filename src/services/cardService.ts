import type { Card } from '../types/card';
import { mockCards } from '../data/mock/cards';

export async function getCards(): Promise<Card[]> {
  return mockCards.map((c) => ({ ...c }));
}