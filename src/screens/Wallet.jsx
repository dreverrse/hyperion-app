import { ChevronLeft, Sliders, Share, Plus } from '../components/icons';

const stripedStyle = {
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

const avatarEmoji = ['👨🏻‍💼', '🧔🏾', '🤠', '🧔🏻', '🧓🏼'];
const avatarBg = ['bg-orange-100', 'bg-red-100', 'bg-amber-100', 'bg-yellow-100', 'bg-gray-200'];

function ContributorBar({ index }) {
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

export default function Wallet({ onNavigate }) {
  return (
    <main className="flex-1 overflow-y-auto no-scrollbar space-y-4 pb-24 flex flex-col">
      <nav className="flex items-center justify-between px-6 pt-2">
        <button
          type="button"
          aria-label="Back to dashboard"
          onClick={() => onNavigate('dashboard')}
          className="w-11 h-11 rounded-full bg-[#1E1F24] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-white text-lg font-bold tracking-tight">Wallet</h1>
        <button
          type="button"
          aria-label="Filter"
          className="w-11 h-11 rounded-full bg-[#1E1F24] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
        >
          <Sliders className="w-5 h-5" />
        </button>
      </nav>

      <section className="px-5 space-y-4">
        <article className="bg-[#eaedf0] rounded-[34px] p-6 flex flex-col justify-between h-[178px] shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-neutral-500 text-xs font-semibold mb-1.5">Tobuya</p>
              <h2 className="text-neutral-900 text-[26px] font-bold tracking-tight leading-none">
                $20,200
              </h2>
            </div>
            <button
              type="button"
              aria-label="Share Tobuya wallet"
              className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-800 hover:scale-105 active:scale-95 transition-all"
            >
              <Share className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2.5">
              {avatarEmoji.slice(0, 4).map((emoji, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${avatarBg[i]} border-2 border-white shadow-sm flex items-center justify-center text-sm`}
                >
                  {emoji}
                </div>
              ))}
              <div className="w-10 h-9 px-2 bg-[#c9d4dc] rounded-full border-2 border-white shadow-sm flex items-center justify-center">
                <span className="text-[11px] font-bold text-[#12151b]">2+</span>
              </div>
            </div>
            <span className="text-neutral-500 text-[13px] font-semibold">5 contributors</span>
          </div>
        </article>

        <article className="bg-[#1b1c1e] rounded-[34px] p-6 flex flex-col justify-between h-[178px] border border-white/5 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-neutral-400 text-xs font-semibold mb-1.5">Familia</p>
              <h2 className="text-white text-[26px] font-bold tracking-tight leading-none">$17,500</h2>
            </div>
            <div className="flex items-center space-x-2">
              <button
                type="button"
                aria-label="Add member"
                className="w-10 h-10 rounded-full bg-[#2b2c30] flex items-center justify-center text-white hover:bg-[#34353a] transition-colors active:scale-95"
              >
                <Plus className="w-4 h-4" strokeWidth={2.5} />
              </button>
              <button
                type="button"
                aria-label="Share Familia wallet"
                className="w-10 h-10 rounded-full bg-[#2b2c30] flex items-center justify-center text-white hover:bg-[#34353a] transition-colors active:scale-95"
              >
                <Share className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex -space-x-2.5">
              {avatarEmoji.map((emoji, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${avatarBg[i]} border-2 border-[#1b1c1e] shadow-sm flex items-center justify-center text-sm`}
                >
                  {emoji}
                </div>
              ))}
            </div>
            <span className="text-neutral-400 text-[13px] font-semibold">5 members</span>
          </div>
        </article>
      </section>

      <section className="px-5">
        <div className="bg-[#131317] rounded-3xl p-5">
          <div className="flex items-center justify-between mb-5 px-1">
            <h3 className="text-white text-sm font-bold">Contributors</h3>
            <span className="text-neutral-400 text-[11px] font-medium">Avg. week</span>
          </div>
          <div className="flex justify-between items-end gap-2.5 h-[178px]">
            {barLabels.map((bar, i) => (
              <div key={bar.name} className="flex flex-col items-center justify-end h-full flex-1">
                <div className="flex-1 w-full flex items-end justify-center overflow-hidden">
                  <div className="w-full max-w-[38px] h-full flex items-end justify-center">
                    <ContributorBar index={i} />
                  </div>
                </div>
                <span
                  className={`mt-2 text-[10.5px] font-semibold ${bar.className}`}
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