import type { Goal } from '../../types/goal';

export const mockGoals: Goal[] = [
  {
    id: 'goal-japan-001',
    userId: 'user-001',
    title: 'Japan Trip',
    target: 5000,
    saved: 3000,
    deadline: '2026-12-25T00:00:00.000Z',
    status: 'in_progress',
    emoji: '🗼',
    createdAt: '2026-01-02T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
  {
    id: 'goal-ps5-001',
    userId: 'user-001',
    title: 'PS5 Bundle',
    target: 650,
    saved: 650,
    deadline: '2027-01-15T00:00:00.000Z',
    status: 'completed',
    emoji: '🎮',
    createdAt: '2026-02-14T00:00:00.000Z',
    updatedAt: '2026-08-30T00:00:00.000Z',
  },
  {
    id: 'goal-fund-001',
    userId: 'user-001',
    title: 'Emergency Fund',
    target: 10000,
    saved: 4200,
    status: 'in_progress',
    emoji: '🛟',
    createdAt: '2026-03-01T00:00:00.000Z',
    updatedAt: '2026-09-08T00:00:00.000Z',
  },
];