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
    <div className="flex flex-col px-4 sm:px-6 pt-3 bg-[#151518] space-y-4">
      <PageHeader title="Settings" backTo="/profile" dark />

      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] overflow-hidden">
        {SETTINGS_ITEMS.map((item, i) => (
          <button
            key={item.label}
            onClick={() => item.to !== '#' && navigate(item.to)}
            className={cn(
              'w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60',
              i < SETTINGS_ITEMS.length - 1 && 'border-b border-neutral-800'
            )}
          >
            <span className="text-sm sm:text-[15px] text-white font-medium">{item.label}</span>
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-neutral-500 rotate-180" />
          </button>
        ))}
      </div>
    </div>
  );
}
