import {
  FaceIcon,
  SearchIcon,
  BellIcon,
  UserIcon,
  ArrowUpRight,
  Plus,
  PaypalIcon,
  SpotifyIcon,
} from '../components/icons';

export default function Dashboard({ onNavigate }) {
  return (
    <main className="flex-1 overflow-y-auto no-scrollbar px-6 pt-2 pb-24 flex flex-col space-y-6">
      <nav className="flex items-center justify-between">
        <button
          type="button"
          aria-label="Profile"
          className="w-12 h-12 rounded-full bg-[#1E1F24] flex items-center justify-center text-[#FF6B78] hover:opacity-90 active:scale-95 transition-all"
        >
          <FaceIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-2.5">
          <button
            type="button"
            aria-label="Search"
            className="w-12 h-12 rounded-full bg-[#1E1F24] text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="w-12 h-12 rounded-full bg-[#1E1F24] text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <BellIcon className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center border-2 border-neutral-700">
            <UserIcon className="w-7 h-7 text-neutral-300 mt-1" />
          </div>
        </div>
      </nav>

      <section className="pt-2">
        <p className="text-neutral-400 text-sm font-medium">Good morning</p>
        <h1 className="text-white text-2xl font-bold tracking-tight mt-0.5">Michael Chid</h1>
      </section>

      <section className="grid grid-cols-2 gap-3.5">
        <article
          id="open-balance-modal"
          className="bg-[#FF6B78] rounded-3xl p-4 flex flex-col justify-between h-[138px] shadow-lg relative overflow-hidden group cursor-pointer active:scale-95 transition-all"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[17px] font-bold text-white tracking-tight leading-tight">$100,320</p>
              <p className="text-[11px] font-medium text-white/90 mt-0.5">+12.05%</p>
            </div>
            <button
              type="button"
              aria-label="Balance details"
              className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#FF6B78] shadow-sm active:scale-95 transition-all"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-white text-base font-semibold">Balance</span>
        </article>

        <article className="bg-[#1E1F24] rounded-3xl p-4 flex flex-col justify-between h-[138px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[17px] font-bold text-white tracking-tight leading-tight">$20,005</p>
              <p className="text-[11px] font-medium text-rose-400 mt-0.5">-2.35%</p>
            </div>
            <button
              type="button"
              aria-label="Income details"
              className="w-9 h-9 rounded-full bg-[#27282F] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-white text-base font-semibold">Income</span>
        </article>

        <article className="bg-[#1E1F24] rounded-3xl p-4 flex flex-col justify-between h-[138px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[17px] font-bold text-white tracking-tight leading-tight">$12,040</p>
              <p className="text-[11px] font-medium text-emerald-400 mt-0.5">+4.50%</p>
            </div>
            <button
              type="button"
              aria-label="Expense details"
              className="w-9 h-9 rounded-full bg-[#27282F] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95"
            >
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
          <span className="text-white text-base font-semibold">Expense</span>
        </article>

        <article className="bg-[#1E1F24] rounded-3xl p-4 flex flex-col justify-between items-center h-[138px] cursor-pointer hover:bg-[#23242A] transition-colors border border-neutral-800/40">
          <div className="w-full flex justify-center pt-2">
            <div className="w-10 h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-300">
              <Plus className="w-5 h-5" />
            </div>
          </div>
          <span className="text-white text-base font-semibold pb-0.5">Add widget</span>
        </article>
      </section>

      <section className="bg-[#DCE2E6] rounded-3xl p-5 text-neutral-900 pb-16">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-neutral-900">Transaction</h2>
          <a className="text-neutral-500 hover:text-neutral-900 text-xs font-semibold" href="#">
            See all
          </a>
        </div>
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-[#FF6B78] flex items-center justify-center text-white shrink-0 shadow-sm">
                <PaypalIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 leading-snug">Received from Wachid</h3>
                <p className="text-xs text-neutral-500">Today, 09.05 am</p>
              </div>
            </div>
            <span className="text-sm font-bold text-neutral-900">+$232</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3.5">
              <div className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm">
                <SpotifyIcon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-neutral-900 leading-snug">Spotify Family</h3>
                <p className="text-xs text-neutral-500">Yesterday, 14.20 pm</p>
              </div>
            </div>
            <span className="text-sm font-bold text-neutral-900">-$15.99</span>
          </div>
        </div>
      </section>
    </main>
  );
}