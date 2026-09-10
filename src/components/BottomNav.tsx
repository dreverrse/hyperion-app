import type { ScreenName } from '../types/navigation';
import { NavHome, NavWallet, NavChart } from './icons';

const isDarkTab = (active: ScreenName): boolean => active === 'dashboard' || active === 'wallet';

interface BottomNavProps {
  active?: ScreenName;
  onNavigate: (screen: ScreenName) => void;
}

export default function BottomNav({ active = 'dashboard', onNavigate }: BottomNavProps) {
  const dark = isDarkTab(active);
  const base = dark
    ? 'w-full mx-auto max-w-[420px] bg-brand-surface/95 backdrop-blur-md rounded-[28px] px-3 py-2.5 flex items-center justify-between border border-white/5 shadow-[0_20px_35px_-8px_rgba(0,0,0,0.45)] pointer-events-auto'
    : 'w-full mx-auto max-w-[420px] bg-white/90 backdrop-blur-md rounded-[28px] px-2 py-2 flex items-center justify-between border border-white/60 pointer-events-auto';

  const tabClasses = (name: ScreenName): string => {
    if (name === active) {
      return dark
        ? 'w-12 h-12 rounded-full bg-black/40 flex items-center justify-center text-white active:scale-95 transition-all touch-target'
        : 'h-11 px-4 rounded-full bg-white shadow-sm flex items-center space-x-2 border border-black/5 active:scale-95 transition-all touch-target';
    }
    return dark
      ? 'w-12 h-12 rounded-full flex items-center justify-center text-neutral-400 hover:text-white active:scale-95 transition-all touch-target'
      : 'w-11 h-11 rounded-full flex items-center justify-center text-[#8794a1] hover:text-[#12151b] active:scale-95 transition-all touch-target';
  };

  return (
    <div className={base} role="navigation" aria-label="Main navigation">
      <button
        type="button"
        aria-label="Dashboard"
        aria-current={active === 'dashboard' ? 'page' : undefined}
        className={tabClasses('dashboard')}
        onClick={() => onNavigate('dashboard')}
      >
        <NavHome className="w-5.5 h-5.5" />
      </button>
      <button
        type="button"
        aria-label="Wallet"
        aria-current={active === 'wallet' ? 'page' : undefined}
        className={tabClasses('wallet')}
        onClick={() => onNavigate('wallet')}
      >
        <NavWallet className="w-5.5 h-5.5" />
      </button>
      <button
        type="button"
        aria-label="Activity"
        aria-current={active === 'activity' ? 'page' : undefined}
        className={tabClasses('activity')}
        onClick={() => onNavigate('activity')}
      >
        <NavChart className="w-5.5 h-5.5" />
      </button>
    </div>
  );
}