import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { ChevronLeft } from '../components/icons';
import { cn } from '../lib/utils';

const SETTINGS_ITEMS = [
  { label: 'Personal Information', to: '/profile' },
  { label: 'Security', to: '#' },
  { label: 'Notifications Preferences', to: '/notifications' },
  { label: 'Cards', to: '/cards' },
  { label: 'Help Center', to: '#' },
  { label: 'Privacy Policy', to: '#' },
  { label: 'Terms of Service', to: '#' },
] as const;

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader title="Settings" backTo="/profile" dark />

      <div className="bg-brand-card border border-neutral-800 rounded-[24px] overflow-hidden">
        {SETTINGS_ITEMS.map((item, i) => (
          <button
            key={item.label}
            onClick={() => item.to !== '#' && navigate(item.to)}
            className={cn(
              'w-full flex items-center justify-between px-4 lg:px-5 py-4 lg:py-5 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60',
              i < SETTINGS_ITEMS.length - 1 && 'border-b border-neutral-800'
            )}
          >
            <span className="text-base lg:text-[16px] text-white font-medium">{item.label}</span>
            <ChevronLeft className="w-5 h-5 text-neutral-500 rotate-180" />
          </button>
        ))}
      </div>
    </div>
  );
}