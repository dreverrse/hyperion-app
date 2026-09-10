export type NotificationType = 'payment' | 'budget' | 'goal' | 'security' | 'summary';

export interface AppNotification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  isRead: boolean;
  createdAt: string;
  displayDate?: string | null;
}