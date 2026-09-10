import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Dots, ChartAxisIcon, ChartIcon, ChartPlusIcon, Share } from '../components/icons';

const stripedStyle: CSSProperties = {
  background: '#f6f8fb',
  backgroundImage:
    'repeating-linear-gradient(-45deg, rgba(255,255,255,.95), rgba(255,255,255,.95) 4px, rgba(224,230,238,.75) 4px, rgba(224,230,238,.75) 8px)',
};

interface MonthBar {
  label: string;
  height: string;
  active?: boolean;
}

const MONTHS: MonthBar[] = [
  { label: 'Jan', height: 'h-12 lg:h-16' },
  { label: 'Feb', height: 'h-10 lg:h-14' },
  { label: 'Mar', height: 'h-20 lg:h-24' },
  { label: 'Apr', height: 'h-[100px] lg:h-[142px]', active: true },
  { label: 'Mei', height: 'h-20 lg:h-28' },
  { label: 'Jun', height: 'h-16 lg:h-20' },
];

export default function Activity() {
  return (
    <main className="px-4 py-3 safe-top space-y-3 lg:space-y-5 lg:px-6">
      {/* Activity Top Bar */}
      <section className="flex justify-between items-center py-1 lg:py-2">
        <div className="flex items-center space-x-2 lg:space-x-3">
          <Link
            to="/"
            aria-label="Back to dashboard"
            className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-brand-black shadow-sm active:scale-95 transition-transform hover:bg-white touch-target"
          >
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-lg lg:text-[24px] font-bold tracking-tight text-brand-black">Today Activity</h1>
        </div>
        <button
          type="button"
          aria-label="Activity menu"
          className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-brand-black shadow-sm active:scale-95 transition-transform hover:bg-white touch-target"
        >
          <Dots className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>
      </section>

      {/* My Spent Card */}
      <section className="bg-white rounded-2xl lg:rounded-[36px] p-4 lg:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 lg:mb-3">
          <div className="flex items-center space-x-2 lg:space-x-2.5">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black">
              <ChartIcon className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </div>
            <span className="font-semibold text-brand-black text-sm lg:text-[16px]">My Spent</span>
          </div>
          <div className="flex items-center space-x-1.5 lg:space-x-2">
            <button
              type="button"
              aria-label="Chart axis"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black touch-target"
            >
              <ChartAxisIcon className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </button>
            <button
              type="button"
              aria-label="Share spent report"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black touch-target"
            >
              <Share className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
        <div className="mt-2 mb-4 lg:mb-6">
          <h2 className="text-2xl lg:text-[34px] font-extrabold tracking-tight text-brand-black leading-none">$81,200</h2>
          <p className="text-xs lg:text-[12.5px] font-medium text-[#8794a1] mt-1 lg:mt-1.5">On the last 6 months</p>
        </div>
        {/* Monthly Bar Chart */}
        <div className="relative pt-10 lg:pt-12 pb-1">
          <div className="absolute left-1/2 -translate-x-[2px] top-0 -translate-y-1 flex flex-col items-center z-20 pointer-events-none">
            <div className="bg-brand-surface text-white px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-lg lg:rounded-xl shadow-lg flex flex-col items-center">
              <span className="text-xs lg:text-[12px] font-bold leading-tight">$29,500</span>
              <span className="text-[8px] lg:text-[9px] text-gray-400 font-normal">Apr 2023</span>
            </div>
            <div className="w-2.5 lg:w-3 h-2.5 lg:h-3 bg-white rounded-full border-2 border-brand-coral shadow -mt-1 z-30" />
          </div>
          <div className="grid grid-cols-6 gap-1.5 lg:gap-2.5 items-end h-36 lg:h-44 px-0.5 lg:px-1">
            {MONTHS.map((m) => (
              <div
                key={m.label}
                className={`flex flex-col items-center h-full justify-end ${m.active ? 'relative' : ''}`}
              >
                {m.active ? (
                  <div className={`w-full ${m.height} rounded-xl lg:rounded-2xl bg-brand-coral shadow-md flex items-start justify-center pt-1 lg:pt-1.5`}>
                    <div className="w-3.5 lg:w-4 h-3.5 lg:h-4 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 lg:w-2.5 h-2 lg:h-2.5 rounded-full bg-brand-coral" />
                    </div>
                  </div>
                ) : (
                  <div className={`w-full ${m.height} rounded-xl lg:rounded-2xl border border-white/60`} style={stripedStyle} />
                )}
                <span
                  className={`text-xs lg:text-[11.5px] mt-2 lg:mt-3 ${
                    m.active ? 'font-semibold text-brand-black' : 'font-medium text-[#8794a1]'
                  }`}
                >
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Income Card */}
      <section className="bg-white rounded-2xl lg:rounded-[36px] p-4 lg:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 lg:mb-3">
          <div className="flex items-center space-x-2 lg:space-x-2.5">
            <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black">
              <ChartPlusIcon className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </div>
            <span className="font-semibold text-brand-black text-sm lg:text-[16px]">Income</span>
          </div>
          <div className="flex items-center space-x-1.5 lg:space-x-2">
            <button
              type="button"
              aria-label="Chart axis"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black touch-target"
            >
              <ChartAxisIcon className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </button>
            <button
              type="button"
              aria-label="Share income report"
              className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-brand-black touch-target"
            >
              <Share className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-2xl lg:text-[34px] font-extrabold tracking-tight text-brand-black leading-none opacity-90">$81,200</h2>
        </div>
      </section>
    </main>
  );
}