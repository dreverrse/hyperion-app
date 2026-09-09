import { ChevronLeft, Dots, ChartAxisIcon, ChartIcon, ChartPlusIcon, Share } from '../components/icons.jsx';

const stripedStyle = {
  background: '#f6f8fb',
  backgroundImage:
    'repeating-linear-gradient(-45deg, rgba(255,255,255,.95), rgba(255,255,255,.95) 4px, rgba(224,230,238,.75) 4px, rgba(224,230,238,.75) 8px)',
};

const MONTHS = [
  { label: 'Jan', height: 'h-16' },
  { label: 'Feb', height: 'h-14' },
  { label: 'Mar', height: 'h-24' },
  { label: 'Apr', height: 'h-[142px]', active: true },
  { label: 'Mei', height: 'h-28' },
  { label: 'Jun', height: 'h-20' },
];

export default function ActivityScreen({ onNavigate }) {
  return (
    <main className="flex-1 overflow-y-auto no-scrollbar px-5 pt-3 pb-24 flex flex-col space-y-4">
      {/* Activity Top Bar */}
      <section className="flex justify-between items-center py-2">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => onNavigate('dashboard')}
            className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#12151b] shadow-sm active:scale-95 transition-transform hover:bg-white"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <h1 className="text-[24px] font-bold tracking-tight text-[#12151b]">Today Activity</h1>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#12151b] shadow-sm active:scale-95 transition-transform hover:bg-white">
          <Dots className="w-5 h-5" />
        </button>
      </section>

      {/* My Spent Card */}
      <section className="bg-white rounded-[36px] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartIcon className="w-4 h-4" />
            </div>
            <span className="font-semibold text-[#12151b] text-[16px]">My Spent</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartAxisIcon className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-2 mb-6">
          <h2 className="text-[34px] font-extrabold tracking-tight text-[#12151b] leading-none">$81,200</h2>
          <p className="text-[12.5px] font-medium text-[#8794a1] mt-1.5">On the last 6 months</p>
        </div>
        {/* Monthly Bar Chart */}
        <div className="relative pt-12 pb-1">
          <div className="absolute left-1/2 -translate-x-[2px] top-0 -translate-y-1 flex flex-col items-center z-20 pointer-events-none">
            <div className="bg-[#22252c] text-white px-3 py-1.5 rounded-xl shadow-lg flex flex-col items-center">
              <span className="text-[12px] font-bold leading-tight">$29,500</span>
              <span className="text-[9px] text-gray-400 font-normal">Apr 2023</span>
            </div>
            <div className="w-2.5 h-2.5 bg-white rounded-full border-2 border-[#ff5c6c] shadow -mt-1 z-30"></div>
          </div>
          <div className="grid grid-cols-6 gap-2.5 items-end h-44 px-1">
            {MONTHS.map((m) => (
              <div
                key={m.label}
                className={`flex flex-col items-center h-full justify-end ${m.active ? 'relative' : ''}`}
              >
                {m.active ? (
                  <div className={`w-full ${m.height} rounded-2xl bg-[#ff5c6c] shadow-md flex items-start justify-center pt-1.5`}>
                    <div className="w-3.5 h-3.5 rounded-full bg-white flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#ff5c6c]"></div>
                    </div>
                  </div>
                ) : (
                  <div className={`w-full ${m.height} rounded-2xl border border-white/60`} style={stripedStyle}></div>
                )}
                <span
                  className={`text-[11.5px] mt-3 ${
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
      <section className="bg-white rounded-[36px] p-5 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2.5">
            <div className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartPlusIcon className="w-4 h-4" />
            </div>
            <span className="font-semibold text-[#12151b] text-[16px]">Income</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <ChartAxisIcon className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b]">
              <Share className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="mt-2">
          <h2 className="text-[34px] font-extrabold tracking-tight text-[#12151b] leading-none opacity-90">$81,200</h2>
        </div>
      </section>
    </main>
  );
}