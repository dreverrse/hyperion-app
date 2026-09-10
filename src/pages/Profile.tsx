import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { SettingsIcon, BellIcon, TargetIcon, CreditCardIcon, ChevronLeft, LogoutIcon } from '../components/icons';
import { cn } from '../lib/utils';
import { getProfile } from '../services';
import type { UserProfile as ProfileType } from '../types';

const MENU_ITEMS = [
  { label: 'Settings', icon: SettingsIcon, to: '/settings' },
  { label: 'Notifications', icon: BellIcon, to: '/notifications' },
  { label: 'Budgets', icon: TargetIcon, to: '/budgets' },
  { label: 'Goals', icon: TargetIcon, to: '/goals' },
  { label: 'Cards', icon: CreditCardIcon, to: '/cards' },
  { label: 'About', icon: SettingsIcon, to: '/about' },
] as const;

export default function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState<ProfileType | null>(null);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader title="Profile" dark />

      {/* Avatar Card */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] p-6 flex items-center space-x-4">
        <div className="w-16 h-16 rounded-full bg-neutral-700 flex items-center justify-center text-3xl">
          {profile?.avatarEmoji ?? '👨🏻‍💼'}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[20px] font-bold text-white truncate">{profile?.name ?? '—'}</p>
          <p className="text-sm text-neutral-400 truncate">{profile?.email ?? '—'}</p>
        </div>
        <button
          onClick={() => navigate('/profile/edit')}
          className="w-10 h-10 rounded-full bg-[#1E1F24] border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center"
        >
          <PencilIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Menu */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] overflow-hidden">
        {MENU_ITEMS.map((item, i) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              onClick={() => navigate(item.to)}
              className={cn(
                'w-full flex items-center justify-between px-5 py-4 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60',
                i < MENU_ITEMS.length - 1 && 'border-b border-neutral-800'
              )}
            >
              <div className="flex items-center space-x-3">
                <Icon className="w-5 h-5 text-neutral-400" />
                <span className="text-[15px] text-white font-medium">{item.label}</span>
              </div>
              <ChevronLeft className="w-4 h-4 text-neutral-500 rotate-180" />
            </button>
          );
        })}
      </div>

      {/* Logout */}
      <button className="bg-[#1F2024] border border-neutral-800 rounded-[24px] px-5 py-4 flex items-center space-x-3 hover:bg-red-900/20 transition-colors active:bg-red-900/40">
        <LogoutIcon className="w-5 h-5 text-red-400" />
        <span className="text-[15px] text-red-400 font-medium">Log Out</span>
      </button>
    </div>
  );
}

function PencilIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  );
}
