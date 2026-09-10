import PageHeader from '../components/PageHeader';
import { APP_NAME, APP_VERSION } from '../lib/constants';

export default function About() {
  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader title="About" backTo="/settings" dark />

      {/* Logo Card */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] p-8 flex flex-col items-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-brand-coral flex items-center justify-center">
          <span className="text-white text-2xl font-bold">H</span>
        </div>
        <p className="text-xl font-bold text-white">{APP_NAME}</p>
        <p className="text-sm text-neutral-500">Version {APP_VERSION}</p>
      </div>

      {/* Description */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] p-5">
        <p className="text-sm text-neutral-400 leading-relaxed">
          {APP_NAME} is a modern financial tracking app designed to help you manage your wallets,
          track transactions, set budgets, and achieve your savings goals — all from your mobile device.
        </p>
      </div>

      {/* Links */}
      <div className="bg-[#1F2024] border border-neutral-800 rounded-[24px] overflow-hidden">
        {['Privacy Policy', 'Terms of Service', 'Open Source Licenses'].map((label) => (
          <button
            key={label}
            className="w-full flex items-center justify-between px-5 py-4 hover:bg-neutral-800/40 transition-colors active:bg-neutral-800/60 text-[15px] text-white font-medium"
          >
            {label}
            <span className="text-neutral-500">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
