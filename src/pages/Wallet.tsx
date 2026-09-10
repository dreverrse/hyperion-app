import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, Sliders, Share, Plus } from '../components/icons';

const stripedStyle: CSSProperties = {
  background: '#f1f4f8',
  backgroundImage:
    'repeating-linear-gradient(-45deg, rgba(220,226,233,.95), rgba(220,226,233,.95) 7px, rgba(238,242,247,.5) 7px, rgba(238,242,247,.5) 14px)',
};

const barLabels = [
  { name: 'Dian', className: 'text-neutral-700' },
  { name: 'Fahmi', className: 'text-white' },
  { name: 'Irfan', className: 'text-white' },
  { name: 'Ridwan', className: 'text-white' },
  { name: 'Wahyu', className: 'text-white' },
];

const avatarEmoji = ['👨🏻\u200D💼', '🧔🏾', '🤠', '🧔🏻', '🧓🏼'];
const avatarBg = ['bg-orange-100', 'bg-red-100', 'bg-amber-100', 'bg-yellow-100', 'bg-gray-200'];

function ContributorBar({ index }: { index: number }) {
  if (index === 0) {
    return <div className="bg-white h-full shadow-sm rounded-lg" />;
  }
  if (index === 1) {
    return <div className="bg-[#35363b] h-[78%] shadow-sm rounded-lg" />;
  }
  const innerHeights = ['h-[68%]', 'h-[52%]', 'h-[48%]'];
  return (
    <div className="h-[86%] w-full flex items-end">
      <div className={`${innerHeights[index - 2]} w-full bg-[#35363b] rounded-lg`} style={stripedStyle} />
    </div>
  );
}

export default function Wallet() {
  return (
    <main className="space-y-3 sm:space-y-4 flex flex-col">
      <nav className="flex items-center justify-between px-4 sm:px-6 pt-2">
        <Link
          to="/"
          aria-label="Back to dashboard"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1E1F24] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </Link>
        <h1 className="text-white text-base sm:text-lg font-bold tracking-tight">Wallet</h1>
        <button
          type="button"
          aria-label="Filter"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1E1F24] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
        >
          <Sliders className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </nav>

      <section className="px-4 sm:px-5 space-y-3 sm:space-y-4">
        <article className="bg-[#eaedf0] rounded-2xl sm:rounded-[34px] p-4 sm:p-6 flex flex-col justify-between min-h-[150px] sm:h-[178px] shadow-sm">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="text-neutral-500 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5">Tobuya</p>
              <h2 className="text-neutral-900 text-xl sm:text-[26px] font-bold tracking-tight leading-none">$20,200</h2>
            </div>
            <button
              type="button"
              aria-label="Share Tobuya wallet"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-800 hover:scale-105 active:scale-95 transition-all flex-shrink-0"
            >
              <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2 sm:-space-x-2.5">
              {avatarEmoji.slice(0, 4).map((emoji, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${avatarBg[i]} border-2 border-white shadow-sm flex items-center justify-center text-xs sm:text-sm`}
                >
                  {emoji}
                </div>
              ))}
              <div className="w-8 sm:w-10 h-7 sm:h-9 px-1.5 sm:px-2 bg-[#c9d4dc] rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <span className="text-[9px] sm:text-[11px] font-bold text-[#12151b]">2+</span>
              </div>
            </div>
            <span className="text-neutral-500 text-[11px] sm:text-[13px] font-semibold">5 contributors</span>
          </div>
        </article>

        <article className="bg-[#1b1c1e] rounded-2xl sm:rounded-[34px] p-4 sm:p-6 flex flex-col justify-between min-h-[150px] sm:h-[178px] border border-white/5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="text-neutral-400 text-[10px] sm:text-xs font-semibold mb-1 sm:mb-1.5">Familia</p>
              <h2 className="text-white text-xl sm:text-[26px] font-bold tracking-tight leading-none">$17,500</h2>
            </div>
            <div className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0">
              <button
                type="button"
                aria-label="Add member"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b2c30] flex items-center justify-center text-white hover:bg-[#34353a] transition-colors active:scale-95"
              >
                <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                aria-label="Share Familia wallet"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#2b2c30] flex items-center justify-center text-white hover:bg-[#34353a] transition-colors active:scale-95"
              >
                <Share className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2 sm:-space-x-2.5">
              {avatarEmoji.map((emoji, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full ${avatarBg[i]} border-2 border-[#1b1c1e] shadow-sm flex items-center justify-center text-xs sm:text-sm`}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-neutral-400 text-[11px] sm:text-[13px] font-semibold">5 members</span>
          </div>
        </article>
      </section>

      <section className="px-4 sm:px-5">
        <div className="bg-[#131317] rounded-2xl sm:rounded-3xl p-4 sm:p-5">
          <div className="flex items-center justify-between mb-4 sm:mb-5 px-0 sm:px-1">
            <h3 className="text-white text-xs sm:text-sm font-bold">Contributors</h3>
            <span className="text-neutral-400 text-[10px] sm:text-[11px] font-medium">Avg. week</span>
          </div>
          <div className="flex justify-between items-end gap-1.5 sm:gap-2.5 h-[140px] sm:h-[178px]">
            {barLabels.map((bar, i) => (
              <div key={bar.name} className="flex flex-col items-center justify-end h-full flex-1">
                <div className="flex-1 w-full flex items-end justify-center overflow-hidden">
                  <div className="w-full max-w-[28px] sm:max-w-[38px] h-full flex items-end justify-center">
                    <ContributorBar index={i} />
                  </div>
                </div>
                <span
                  className={`mt-1.5 sm:mt-2 text-[9px] sm:text-[10.5px] font-semibold ${bar.className}`}
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {bar.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
