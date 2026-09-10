import type { AppNotification } from '../types/notification';
import { mockNotifications } from '../data/mock/notifications';

let notificationStore: AppNotification[] = mockNotifications.map((n) => ({
  ...n,
}));

export async function getNotifications(): Promise<AppNotification[]> {
  return notificationStore
    .map((n) => ({ ...n }))
    .sort(
      (a, b) =>
        Number(a.isRead) - Number(b.isRead) ||
        b.createdAt.localeCompare(a.createdAt),
    );
}

export async function getUnreadCount(): Promise<number> {
  return notificationStore.filter((n) => !n.isRead).length;
}

export async function markNotificationRead(id: string): Promise<void> {
  notificationStore = notificationStore.map((n) =>
    n.id === id ? { ...n, isRead: true } : n,
  );
}

export async function markAllNotificationsRead(): Promise<void> {
  notificationStore = notificationStore.map((n) => ({ ...n, isRead: true }));
}