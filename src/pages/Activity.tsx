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
  { label: 'Jan', height: 'h-12 sm:h-16' },
  { label: 'Feb', height: 'h-10 sm:h-14' },
  { label: 'Mar', height: 'h-20 sm:h-24' },
  { label: 'Apr', height: 'h-[100px] sm:h-[142px]', active: true },
  { label: 'Mei', height: 'h-20 sm:h-28' },
  { label: 'Jun', height: 'h-16 sm:h-20' },
];

export default function Activity() {
  return (
    <main className="px-4 sm:px-5 pt-3 flex flex-col space-y-3 sm:space-y-4">
      {/* Activity Top Bar */}
      <section className="flex justify-between items-center py-1 sm:py-2">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link
            to="/"
            aria-label="Back to dashboard"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#12151b] shadow-sm active:scale-95 transition-transform hover:bg-white"
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </Link>
          <h1 className="text-lg sm:text-[24px] font-bold tracking-tight text-[#12151b]">Today Activity</h1>
        </div>
        <button
          type="button"
          aria-label="Activity menu"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#12151b] shadow-sm active:scale-95 transition-transform hover:bg-white"
        >
          <Dots className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </section>

      {/* My Spent Card */}
      <section className="bg-white rounded-2xl sm:rounded-[36px] p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="font-semibold text-[#12151b] text-sm sm:text-[16px]">My Spent</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              type="button"
              aria-label="Chart axis"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]"
            >
              <ChartAxisIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              type="button"
              aria-label="Share spent report"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]"
            >
              <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        <div className="mt-2 mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-[34px] font-extrabold tracking-tight text-[#12151b] leading-none">$81,200</h2>
          <p className="text-[11px] sm:text-[12.5px] font-medium text-[#8794a1] mt-1 sm:mt-1.5">On the last 6 months</p>
        </div>
        {/* Monthly Bar Chart */}
        <div className="relative pt-10 sm:pt-12 pb-1">
          <div className="absolute left-1/2 -translate-x-[2px] top-0 -translate-y-1 flex flex-col items-center z-20 pointer-events-none">
            <div className="bg-[#22252c] text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl shadow-lg flex flex-col items-center">
              <span className="text-[10px] sm:text-[12px] font-bold leading-tight">$29,500</span>
              <span className="text-[8px] sm:text-[9px] text-gray-400 font-normal">Apr 2023</span>
            </div>
            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white rounded-full border-2 border-[#ff5c6c] shadow -mt-1 z-30" />
          </div>
          <div className="grid grid-cols-6 gap-1.5 sm:gap-2.5 items-end h-36 sm:h-44 px-0.5 sm:px-1">
            {MONTHS.map((m) => (
              <div
                key={m.label}
                className={`flex flex-col items-center h-full justify-end ${m.active ? 'relative' : ''}`}
              >
                {m.active ? (
                  <div className={`w-full ${m.height} rounded-xl sm:rounded-2xl bg-[#ff5c6c] shadow-md flex items-start justify-center pt-1 sm:pt-1.5`}>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff5c6c]" />
                    </div>
                  </div>
                ) : (
                  <div className={`w-full ${m.height} rounded-xl sm:rounded-2xl border border-white/60`} style={stripedStyle} />
                )}
                <span
                  className={`text-[10px] sm:text-[11.5px] mt-2 sm:mt-3 ${
                    m.active ? 'font-semibold text-[#12151b]' : 'font-medium text-[#8794a1]'
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
      <section className="bg-white rounded-2xl sm:rounded-[36px] p-4 sm:p-5 shadow-sm">
        <div className="flex items-center justify-between mb-2.5 sm:mb-3">
          <div className="flex items-center space-x-2 sm:space-x-2.5">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartPlusIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
            <span className="font-semibold text-[#12151b] text-sm sm:text-[16px]">Income</span>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <button
              type="button"
              aria-label="Chart axis"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]"
            >
              <ChartAxisIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
            <button
              type="button"
              aria-label="Share income report"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]"
            >
              <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-2xl sm:text-[34px] font-extrabold tracking-tight text-[#12151b] leading-none opacity-90">$81,200</h2>
        </div>
      </section>
    </main>
  );
}
