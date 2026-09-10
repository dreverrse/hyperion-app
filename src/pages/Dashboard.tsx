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
    <main className="px-4 py-3 safe-top space-y-4 lg:space-y-6 lg:px-6">
      <nav className="flex items-center justify-between">
        <Link
          to="/profile"
          aria-label="Profile"
          className="w-11 h-11 rounded-full bg-brand-surface flex items-center justify-center text-brand-coral hover:opacity-90 active:scale-95 transition-all touch-target"
        >
          <FaceIcon className="w-5.5 h-5.5" />
        </Link>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            aria-label="Search"
            className="w-11 h-11 rounded-full bg-brand-surface text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all touch-target"
          >
            <SearchIcon className="w-5 h-5" />
          </button>
          <Link
            to="/notifications"
            aria-label="Notifications"
            className="w-11 h-11 rounded-full bg-brand-surface text-neutral-300 flex items-center justify-center hover:bg-neutral-800 active:scale-95 transition-all touch-target"
          >
            <BellIcon className="w-5 h-5" />
          </Link>
          <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-700 flex items-center justify-center border-2 border-neutral-700 touch-target">
            <UserIcon className="w-6 h-6 text-neutral-300" />
          </div>
        </div>
      </nav>

      <section className="pt-1">
        <p className="text-neutral-400 text-sm font-medium">Good morning</p>
        <h1 className="text-white text-xl font-bold tracking-tight mt-1">Michael Chid</h1>
      </section>

      <section className="grid grid-cols-2 gap-3 lg:gap-4">
        <article
          id="open-balance-modal"
          className="bg-brand-coral rounded-2xl lg:rounded-3xl p-4 lg:p-5 flex flex-col justify-between min-h-[120px] lg:h-[148px] shadow-lg relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all"
        >
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-lg lg:text-[19px] font-bold text-white tracking-tight leading-tight">$100,320</p>
              <p className="text-[11px] lg:text-[12px] font-medium text-white/90 mt-0.5">+12.05%</p>
            </div>
            <button
              type="button"
              aria-label="Balance details"
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-coral shadow-sm active:scale-95 transition-all flex-shrink-0 touch-target"
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </div>
          <span className="text-white text-base lg:text-lg font-semibold">Balance</span>
        </article>

        <article className="bg-brand-surface rounded-2xl lg:rounded-3xl p-4 lg:p-5 flex flex-col justify-between min-h-[120px] lg:h-[148px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-lg lg:text-[19px] font-bold text-white tracking-tight leading-tight">$20,005</p>
              <p className="text-[11px] lg:text-[12px] font-medium text-rose-400 mt-0.5">-2.35%</p>
            </div>
            <button
              type="button"
              aria-label="Income details"
              className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 flex-shrink-0 touch-target"
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </div>
          <span className="text-white text-base lg:text-lg font-semibold">Income</span>
        </article>

        <article className="bg-brand-surface rounded-2xl lg:rounded-3xl p-4 lg:p-5 flex flex-col justify-between min-h-[120px] lg:h-[148px] relative group border border-neutral-800/40">
          <div className="flex justify-between items-start">
            <div className="min-w-0">
              <p className="text-lg lg:text-[19px] font-bold text-white tracking-tight leading-tight">$12,040</p>
              <p className="text-[11px] lg:text-[12px] font-medium text-emerald-400 mt-0.5">+4.50%</p>
            </div>
            <button
              type="button"
              aria-label="Expense details"
              className="w-10 h-10 rounded-full bg-brand-card flex items-center justify-center text-neutral-300 hover:text-white transition-colors active:scale-95 flex-shrink-0 touch-target"
            >
              <ArrowUpRight className="w-4.5 h-4.5" />
            </button>
          </div>
          <span className="text-white text-base lg:text-lg font-semibold">Expense</span>
        </article>

        <article className="bg-brand-surface rounded-2xl lg:rounded-3xl p-4 lg:p-5 flex flex-col justify-center items-center min-h-[120px] lg:h-[148px] cursor-pointer hover:bg-brand-card transition-colors border border-neutral-800/40">
          <div className="w-11 h-11 rounded-full border border-neutral-600 flex items-center justify-center text-neutral-300 touch-target">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-white text-base lg:text-lg font-semibold mt-2 lg:mt-0 lg:pb-1">Add widget</span>
        </article>
      </section>

      <section className="bg-brand-accentLight rounded-2xl lg:rounded-3xl p-4 lg:p-5 text-brand-black pb-16">
        <div className="flex justify-between items-center mb-3 lg:mb-4">
          <h2 className="text-base lg:text-lg font-bold text-brand-black">Transaction</h2>
          <Link to="/transactions" className="text-neutral-500 hover:text-brand-black text-sm font-semibold">
            See all
          </Link>
        </div>
        <div className="space-y-3 lg:space-y-4">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 lg:space-x-4 min-w-0">
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-brand-coral flex items-center justify-center text-white shrink-0 shadow-sm touch-target">
                <PaypalIcon className="w-5 h-5 lg:w-6 lg:h-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm lg:text-base font-bold text-brand-black leading-snug truncate">Received from Wachid</h3>
                <p className="text-[11px] lg:text-xs text-neutral-500">Today, 09.05 am</p>
              </div>
            </div>
            <span className="text-sm lg:text-base font-bold text-brand-black flex-shrink-0">+$232</span>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center space-x-3 lg:space-x-4 min-w-0">
              <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-brand-black flex items-center justify-center text-white shrink-0 shadow-sm touch-target">
                <SpotifyIcon className="w-5 h-5 lg:w-6 lg:h-6 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm lg:text-base font-bold text-brand-black leading-snug truncate">Spotify Family</h3>
                <p className="text-[11px] lg:text-xs text-neutral-500">Yesterday, 14.20 pm</p>
              </div>
            </div>
            <span className="text-sm lg:text-base font-bold text-brand-black flex-shrink-0">-$15.99</span>
          </div>
        </div>
      </section>
    </main>
  );
}