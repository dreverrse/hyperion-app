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
    return <div className="bg-brand-surface h-[78%] shadow-sm rounded-lg" />;
  }
  const innerHeights = ['h-[68%]', 'h-[52%]', 'h-[48%]'];
  return (
    <div className="h-[86%] w-full flex items-end">
      <div className={`${innerHeights[index - 2]} w-full bg-brand-surface rounded-lg`} style={stripedStyle} />
    </div>
  );
}

export default function Wallet() {
  return (
    <main className="space-y-3 lg:space-y-5 flex flex-col px-4 py-3 safe-top lg:px-6">
      <nav className="flex items-center justify-between">
        <Link
          to="/"
          aria-label="Back to dashboard"
          className="w-11 h-11 rounded-full bg-brand-surface flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 touch-target"
        >
          <ChevronLeft className="w-5 h-5" />
        </Link>
        <h1 className="text-white text-lg font-bold tracking-tight">Wallet</h1>
        <button
          type="button"
          aria-label="Filter"
          className="w-11 h-11 rounded-full bg-brand-surface flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 touch-target"
        >
          <Sliders className="w-5 h-5" />
        </button>
      </nav>

      <section className="space-y-3 lg:space-y-4">
        <article className="bg-brand-accentLight rounded-2xl lg:rounded-[34px] p-4 lg:p-6 flex flex-col justify-between min-h-[150px] lg:h-[178px] shadow-sm">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="text-neutral-500 text-xs lg:text-sm font-semibold mb-1 lg:mb-1.5">Tobuya</p>
              <h2 className="text-brand-black text-xl lg:text-[26px] font-bold tracking-tight leading-none">$20,200</h2>
            </div>
            <button
              type="button"
              aria-label="Share Tobuya wallet"
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-black hover:scale-105 active:scale-95 transition-all flex-shrink-0 touch-target"
            >
              <Share className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2 lg:-space-x-2.5">
              {avatarEmoji.slice(0, 4).map((emoji, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full ${avatarBg[i]} border-2 border-white shadow-sm flex items-center justify-center text-sm lg:text-base`}
                >
                  {emoji}
                </div>
              ))}
              <div className="w-9 lg:w-11 h-8 lg:h-10 px-2 lg:px-2.5 bg-[#c9d4dc] rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <span className="text-[10px] lg:text-[12px] font-bold text-brand-black">2+</span>
              </div>
            </div>
            <span className="text-neutral-500 text-xs lg:text-sm font-semibold">5 contributors</span>
          </div>
        </article>

        <article className="bg-brand-surface rounded-2xl lg:rounded-[34px] p-4 lg:p-6 flex flex-col justify-between min-h-[150px] lg:h-[178px] border border-white/5 shadow-sm">
          <div className="flex items-start justify-between">
            <div className="min-w-0">
              <p className="text-neutral-400 text-xs lg:text-sm font-semibold mb-1 lg:mb-1.5">Familia</p>
              <h2 className="text-white text-xl lg:text-[26px] font-bold tracking-tight leading-none">$17,500</h2>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
              <button
                type="button"
                aria-label="Add member"
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-brand-card flex items-center justify-center text-white hover:bg-brand-surface transition-colors active:scale-95 touch-target"
              >
                <Plus className="w-4.5 h-4.5 lg:w-5 lg:h-5" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                aria-label="Share Familia wallet"
                className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-brand-card flex items-center justify-center text-white hover:bg-brand-surface transition-colors active:scale-95 touch-target"
              >
                <Share className="w-4.5 h-4.5 lg:w-5 lg:h-5" />
              </button>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2 lg:-space-x-2.5">
              {avatarEmoji.map((emoji, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 lg:w-9 lg:h-9 rounded-full ${avatarBg[i]} border-2 border-brand-surface shadow-sm flex items-center justify-center text-sm lg:text-base`}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-neutral-400 text-xs lg:text-sm font-semibold">5 members</span>
          </div>
        </article>
      </section>

      <section>
        <div className="bg-brand-card rounded-2xl lg:rounded-3xl p-4 lg:p-5">
          <div className="flex items-center justify-between mb-4 lg:mb-5 px-0 lg:px-1">
            <h3 className="text-white text-sm lg:text-base font-bold">Contributors</h3>
            <span className="text-neutral-400 text-xs lg:text-sm font-medium">Avg. week</span>
          </div>
          <div className="flex justify-between items-end gap-2 lg:gap-3 h-[140px] lg:h-[178px]">
            {barLabels.map((bar, i) => (
              <div key={bar.name} className="flex flex-col items-center justify-end h-full flex-1">
                <div className="flex-1 w-full flex items-end justify-center overflow-hidden">
                  <div className="w-full max-w-[28px] lg:max-w-[38px] h-full flex items-end justify-center">
                    <ContributorBar index={i} />
                  </div>
                </div>
                <span
                  className={`mt-2 lg:mt-2.5 text-[9px] lg:text-[10.5px] font-semibold ${bar.className}`}
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