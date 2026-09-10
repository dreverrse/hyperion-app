import type { AppNotification } from '../../types/notification';

export const mockNotifications: AppNotification[] = [
  {
    id: 'notif-payment-001',
    type: 'payment',
    title: 'Payment received',
    message: 'You received $232.00 from Wachid via PayPal.',
    isRead: false,
    createdAt: '2026-09-08T09:05:00.000Z',
    displayDate: 'Today, 09.05 am',
  },
  {
    id: 'notif-budget-001',
    type: 'budget',
    title: 'Budget almost reached',
    message: 'Your Shopping budget is at 80% of the monthly limit.',
    isRead: false,
    createdAt: '2026-09-08T08:00:00.000Z',
    displayDate: 'Today, 08.00 am',
  },
  {
    id: 'notif-goal-001',
    type: 'goal',
    title: 'Goal progress',
    message: 'You are 60% toward your Japan Trip goal. Keep going!',
    isRead: true,
    createdAt: '2026-09-07T18:20:00.000Z',
    displayDate: 'Yesterday, 18.20 pm',
  },
  {
    id: 'notif-security-001',
    type: 'security',
    title: 'New sign-in',
    message: 'A new device signed in to your account from Jakarta, ID.',
    isRead: true,
    createdAt: '2026-09-07T07:30:00.000Z',
    displayDate: 'Yesterday, 07.30 am',
  },
  {
    id: 'notif-summary-001',
    type: 'summary',
    title: 'Weekly summary',
    message: 'You spent $112.25 this week and saved $18 toward your goals.',
    isRead: true,
    createdAt: '2026-09-06T21:00:00.000Z',
    displayDate: '06 Sep, 09.00 pm',
  },
];