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
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader
        title="Notifications"
        backTo="/settings"
        dark
        right={
          <button
            onClick={handleMarkAllRead}
            className="px-4 py-2 text-sm font-medium text-brand-coral active:scale-95 transition-all touch-target"
          >
            Read all
          </button>
        }
      />

      <div className="space-y-3 lg:space-y-4">
        {notifications.map((n) => (
          <button
            key={n.id}
            onClick={() => !n.isRead && handleMarkRead(n.id)}
            className={cn(
              'w-full text-left bg-brand-card border border-neutral-800 rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 transition-colors active:bg-neutral-800/40',
              !n.isRead && 'border-l-2 border-l-brand-coral'
            )}
          >
            <div className="flex items-start justify-between gap-2 lg:gap-3">
              <p className={cn('text-base lg:text-[16px] font-medium leading-snug', n.isRead ? 'text-neutral-400' : 'text-white')}>
                {n.title}
              </p>
              {!n.isRead && (
                <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-brand-coral flex-shrink-0" />
              )}
            </div>
            <p className="text-sm lg:text-base text-neutral-500 mt-2">{n.message}</p>
            <p className="text-xs lg:text-sm text-neutral-600 mt-3">
              {new Date(n.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
            </p>
          </button>
        ))}

        {notifications.length === 0 && (
          <p className="text-center text-neutral-500 py-16 text-sm">No notifications yet</p>
        )}
      </div>
    </div>
  );
}