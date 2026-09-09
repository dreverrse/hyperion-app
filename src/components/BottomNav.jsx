import { NavHome, NavWallet, NavChart } from './icons';

const isDarkTab = (a) => a === 'dashboard' || a === 'wallet';

export default function BottomNav({ active = 'dashboard', onNavigate }) {
  const dark = isDarkTab(active);
  const base = dark
    ? 'w-full bg-[#232328]/95 backdrop-blur-md rounded-full px-3 py-2 flex items-center justify-between border border-white/5 shadow-2xl pointer-events-auto'
    : 'w-full bg-white/90 backdrop-blur-md rounded-full px-2 py-1.5 flex items-center justify-between border border-white/60 pointer-events-auto';

  const tabClasses = (name) => {
    if (name === active) {
      return dark
        ? 'w-11 h-11 rounded-full bg-black/40 flex items-center justify-center text-white active:scale-95 transition-all'
        : 'h-11 px-4 rounded-full bg-white shadow-sm flex items-center space-x-2 border border-black/5 active:scale-95 transition-all';
    }
    return dark
      ? 'w-11 h-11 rounded-full flex items-center justify-center text-neutral-400 hover:text-white active:scale-95 transition-all'
      : 'w-11 h-11 rounded-full flex items-center justify-center text-[#8794a1] hover:text-[#12151b] active:scale-95 transition-all';
  };

  return (
    <div className={base}>
      <button
        type="button"
        aria-label="Dashboard"
        className={tabClasses('dashboard')}
        onClick={() => onNavigate('dashboard')}
      >
        <NavHome />
      </button>
      <button
        type="button"
        aria-label="Wallet"
        className={tabClasses('wallet')}
        onClick={() => onNavigate('wallet')}
      >
        <NavWallet />
      </button>
      <button
        type="button"
        aria-label="Activity"
        className={tabClasses('activity')}
        onClick={() => onNavigate('activity')}
      >
        <NavChart />
      </button>
    </div>
  );
}