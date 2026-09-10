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

  const active: ScreenName =
    pathname === '/' ? 'dashboard' : pathname === '/wallet' ? 'wallet' : pathname === '/activity' ? 'activity' : 'dashboard';

  return (
    <div className="relative w-full min-h-screen min-h-[100dvh] bg-brand-black overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto no-scrollbar pb-24 lg:pb-0">
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
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 px-4 lg:px-6 safe-bottom lg:hidden">
        <BottomNav
          active={active}
          onNavigate={(screen) => navigate(screen === 'dashboard' ? '/' : `/${screen}`)}
        />
      </div>

      <div className="fixed bottom-0 inset-x-0 flex justify-center pointer-events-none z-40 lg:hidden safe-bottom">
        <div className="w-32 h-0.5 bg-neutral-600 rounded-full" />
      </div>
    </div>
  );
}
