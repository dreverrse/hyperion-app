import PageHeader from '../components/PageHeader';
import { APP_NAME, APP_VERSION } from '../lib/constants';

export default function About() {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-4 sm:px-6 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader title="About" backTo="/settings" dark />

      {/* Logo Card */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] p-5 sm:p-8 flex flex-col items-center space-y-3">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-coral flex items-center justify-center">
          <span className="text-white text-xl sm:text-2xl font-bold">H</span>
        </div>
        <p className="text-lg sm:text-xl font-bold text-white">{APP_NAME}</p>
        <p className="text-xs sm:text-sm text-neutral-500">Version {APP_VERSION}</p>
      </div>

      {/* Description */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] p-4 sm:p-5">
        <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
          {APP_NAME} is a modern financial tracking app designed to help you manage your wallets,
          track transactions, set budgets, and achieve your savings goals — all from your mobile device.
        </p>
      </div>

      {/* Links */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] overflow-hidden">
        {['Privacy Policy', 'Terms of Service', 'Open Source Licenses'].map((label, i, arr) => (
          <button
            key={label}
            className={`w-full flex items-center justify-between px-4 sm:px-5 py-3.5 sm:py-4 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60 text-sm sm:text-[15px] text-white font-medium ${i < arr.length - 1 ? 'border-b border-neutral-800' : ''}`}
          >
            {label}
            <span className="text-neutral-500">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
