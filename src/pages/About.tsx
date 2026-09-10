import PageHeader from '../components/PageHeader';
import { APP_NAME, APP_VERSION } from '../lib/constants';

export default function About() {
  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader title="About" backTo="/settings" dark />

      {/* Logo Card */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-5 lg:p-8 flex flex-col items-center space-y-3">
        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-brand-coral flex items-center justify-center">
          <span className="text-white text-2xl lg:text-3xl font-bold">H</span>
        </div>
        <p className="text-lg lg:text-xl font-bold text-white">{APP_NAME}</p>
        <p className="text-sm lg:text-base text-neutral-500">Version {APP_VERSION}</p>
      </div>

      {/* Description */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-4 lg:p-5">
        <p className="text-sm lg:text-base text-neutral-400 leading-relaxed">
          {APP_NAME} is a modern financial tracking app designed to help you manage your wallets,
          track transactions, set budgets, and achieve your savings goals — all from your mobile device.
        </p>
      </div>

      {/* Links */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] overflow-hidden">
        {['Privacy Policy', 'Terms of Service', 'Open Source Licenses'].map((label, i, arr) => (
          <button
            key={label}
            className={`w-full flex items-center justify-between px-4 lg:px-5 py-4 lg:py-5 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60 text-base lg:text-[16px] text-white font-medium ${i < arr.length - 1 ? 'border-b border-neutral-800' : ''}`}
          >
            {label}
            <span className="text-neutral-500">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}