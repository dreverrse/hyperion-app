import { Link } from 'react-router-dom';
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

export default function Dashboard() {
  return (
    <main className="flex-1 overflow-y-auto no-scrollbar px-4 sm:px-6 pt-2 pb-24 flex flex-col space-y-4 sm:space-y-6">
      <nav className="flex items-center justify-between">
        <Link
          to="/profile"
          aria-label="Profile"
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1F24] flex items-center justify-center text-[#FF6B78] hover:opacity-90 active:scale-95 transition-all"
        >
          <FaceIcon className="w-5 h-5 sm:w-6 sm:h-6" />
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-2.5">
          <button
            type="button"
            aria-label="Search"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1F24] text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <SearchIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <Link
            to="/notifications"
            aria-label="Notifications"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1E1F24] text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all"
          >
            <BellIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </Link>
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center border-2 border-neutral-700">
            <UserIcon className="w-6 h-6 sm:w-7 sm:h-7 text-neutral-300 mt-0.5 sm:mt-1" />
          </div>
        </div>
      </nav>

      <section className="pt-1 sm:pt-2">
        <p className="text-neutral-400 text-xs sm:text-sm font-medium">Good morning</p>
        <h1 className="text-white text-xl sm:text-2xl font-bold tracking-tight mt-0.5">Michael Chid</h1>
      </section>

      <section className="grid grid-cols-2 gap-3 sm:gap-3.5">
        <article
          id="open-balance-modal"
          className="bg-[#FF6B78] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[120px] sm:h-[138px] shadow-lg relative overflow-hidden group cursor-pointer active:scale-95 transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-tight">$100,320</p>
              <p className="text-[10px] sm:text-[11px] font-medium text-white/90 mt-0.5">+12.05%</p>
            </div>
            <button
              type="button"
              aria-label="Balance details"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center text-[#FF6B78] shadow-sm active:scale-95 transition-all flex-shrink-0"
            >
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          <span className="text-white text-sm sm:text-base font-semibold">Balance</span>
        </article>

        <article className="bg-[#1E1F24] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[120px] sm:h-[138px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-tight">$20,005</p>
              <p className="text-[10px] sm:text-[11px] font-medium text-rose-400 mt-0.5">-2.35%</p>
            </div>
            <button
              type="button"
              aria-label="Income details"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#27282F] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 flex-shrink-0"
            >
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          <span className="text-white text-sm sm:text-base font-semibold">Income</span>
        </article>

        <article className="bg-[#1E1F24] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col justify-between min-h-[120px] sm:h-[138px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-base sm:text-[17px] font-bold text-white tracking-tight leading-tight">$12,040</p>
              <p className="text-[10px] sm:text-[11px] font-medium text-emerald-400 mt-0.5">+4.50%</p>
            </div>
            <button
              type="button"
              aria-label="Expense details"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#27282F] flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 flex-shrink-0"
            >
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
          <span className="text-white text-sm sm:text-base font-semibold">Expense</span>
        </article>

        <article className="bg-[#1E1F24] rounded-2xl sm:rounded-3xl p-3.5 sm:p-4 flex flex-col justify-center items-center min-h-[120px] sm:h-[138px] cursor-pointer hover:bg-[#23242A] transition-colors border border-neutral-800/40">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-300">
            <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-white text-sm sm:text-base font-semibold mt-2 sm:mt-0 sm:pb-0.5">Add widget</span>
        </article>
      </section>

      <section className="bg-[#DCE2E6] rounded-2xl sm:rounded-3xl p-4 sm:p-5 text-neutral-900 pb-16">
        <div className="flex justify-between items-center mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-bold text-neutral-900">Transaction</h2>
          <Link to="/transactions" className="text-neutral-500 hover:text-neutral-900 text-xs font-semibold">
            See all
          </Link>
        </div>
        <div className="space-y-3 sm:space-y-3.5">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 sm:space-x-3.5 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FF6B78] flex items-center justify-center text-white shrink-0 shadow-sm">
                <PaypalIcon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug truncate">Received from Wachid</h3>
                <p className="text-[10px] sm:text-xs text-neutral-500">Today, 09.05 am</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-neutral-900 flex-shrink-0">+$232</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 sm:space-x-3.5 min-w-0">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-neutral-900 flex items-center justify-center text-white shrink-0 shadow-sm">
                <SpotifyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug truncate">Spotify Family</h3>
                <p className="text-[10px] sm:text-xs text-neutral-500">Yesterday, 14.20 pm</p>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-neutral-900 flex-shrink-0">-$15.99</span>
          </div>
        </div>
      </section>
    </main>
  );
}
