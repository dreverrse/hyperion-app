import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import useCapacitorStatusBar from '../hooks/useCapacitorStatusBar';
import BottomNav from '../components/BottomNav';
import Dashboard from '../pages/Dashboard';
import Wallet from '../pages/Wallet';
import Activity from '../pages/Activity';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Notifications from '../pages/Notifications';
import Budgets from '../pages/Budgets';
import Goals from '../pages/Goals';
import Cards from '../pages/Cards';
import Transactions from '../pages/Transactions';
import TransactionForm from '../pages/TransactionForm';
import WalletDetail from '../pages/WalletDetail';
import About from '../pages/About';
import Analytics from '../pages/Analytics';
import type { ScreenName } from '../types/navigation';

export default function AppShell() {
  useCapacitorStatusBar();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const active: ScreenName | undefined =
    pathname === '/' ? 'dashboard' : pathname === '/wallet' ? 'wallet' : pathname === '/activity' ? 'activity' : undefined;

  return (
    <div className="relative w-full h-screen h-[100dvh] bg-[#121214] overflow-hidden flex flex-col">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/wallet/:id" element={<WalletDetail />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/budgets" element={<Budgets />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/transaction/new" element={<TransactionForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>

      {active && (
        <div className="absolute bottom-2 inset-x-4 sm:inset-x-6 z-40 pointer-events-none">
          <BottomNav
            active={active}
            onNavigate={(screen) => navigate(screen === 'dashboard' ? '/' : `/${screen}`)}
          />
        </div>
      )}

      <div className="absolute bottom-0 inset-x-0 flex justify-center pb-1 pointer-events-none z-50 pb-safe">
        <div className="w-32 h-1 bg-neutral-600 rounded-full" />
      </div>
    </div>
  );
}
