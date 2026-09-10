import type { Budget } from '../../types/budget';

export const mockBudgets: Budget[] = [
  {
    id: 'budget-food-001',
    category: 'Food & Drinks',
    amount: 500,
    spent: 312,
    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
  {
    id: 'budget-shopping-001',
    category: 'Shopping',
    amount: 300,
    spent: 240,
    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
  {
    id: 'budget-transport-001',
    category: 'Transportation',
    amount: 150,
    spent: 96.5,
    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
  {
    id: 'budget-bills-001',
    category: 'Bills',
    amount: 400,
    spent: 400,
    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
  {
    id: 'budget-ent-001',
    category: 'Entertainment',
    amount: 200,
    spent: 74,
    createdAt: '2026-09-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
];