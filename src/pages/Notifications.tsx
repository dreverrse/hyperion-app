import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import { cn } from '../lib/utils';
import { getNotifications, markNotificationRead, markAllNotificationsRead } from '../services';
import type { AppNotification } from '../types';

export default function Notifications() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);

  const load = () => getNotifications().then(setNotifications);

  useEffect(() => {
    load();
  }, []);

  const handleMarkAllRead = async () => {
    await markAllNotificationsRead();
    load();
  };

  const handleMarkRead = async (id: string) => {
    await markNotificationRead(id);
    load();
  };

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader
        title="Notifications"
        backTo="/settings"
        dark
        right={
          <button
            onClick={handleMarkAllRead}
            className="w-10 flex items-center justify-center text-sm text-brand-coral font-medium active:scale-95 transition-all"
          >
            Read all
          </button>
        }
      />

      <div className="space-y-3">
        {notifications.map((n) => (
          <button
            key={n.id}
            onClick={() => !n.isRead && handleMarkRead(n.id)}
            className={cn(
              'w-full text-left bg-[#1F2024] border border-neutral-800 rounded-[24px] px-5 py-4 transition-colors active:bg-neutral-800/40',
              !n.isRead && 'border-l-2 border-l-brand-coral'
            )}
          >
            <div className="flex items-start justify-between">
              <p className={cn('text-[15px] font-medium', n.isRead ? 'text-neutral-400' : 'text-white')}>
                {n.title}
              </p>
              {!n.isRead && (
                <span className="mt-1 w-2 h-2 rounded-full bg-brand-coral flex-shrink-0" />
              )}
            </div>
            <p className="text-sm text-neutral-500 mt-1">{n.message}</p>
            <p className="text-xs text-neutral-600 mt-2">
              {new Date(n.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
          </button>
        ))}

        {notifications.length === 0 && (
          <p className="text-center text-neutral-500 py-12 text-sm">No notifications yet</p>
        )}
      </div>
    </div>
  );
}
