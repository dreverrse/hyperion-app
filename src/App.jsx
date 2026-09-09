import { useState } from 'react'
import useCapacitorStatusBar from './hooks/useCapacitorStatusBar'
import BottomNav from './components/BottomNav'
import Dashboard from './screens/Dashboard'
import Wallet from './screens/Wallet'
import Activity from './screens/Activity'

const SCREENS = {
  dashboard: Dashboard,
  wallet: Wallet,
  activity: Activity,
}

export default function App() {
  const [active, setActive] = useState('dashboard')
  useCapacitorStatusBar()

  const Screen = SCREENS[active]

  return (
    <div className="bg-slate-900 flex justify-center items-center min-h-screen p-0 sm:p-4 text-slate-800 antialiased selection:bg-brand-coral selection:text-white">
      <div className="relative w-full max-w-[393px] h-screen sm:h-[844px] bg-[#121214] sm:rounded-[48px] overflow-hidden flex flex-col shadow-2xl border border-neutral-800">
        <Screen onNavigate={setActive} />

        <div className="absolute bottom-5 inset-x-6 z-40 pointer-events-none">
          <BottomNav active={active} onNavigate={setActive} />
        </div>

        <div className="absolute bottom-1 inset-x-0 flex justify-center pb-1 pointer-events-none z-50">
          <div className="w-32 h-1 bg-neutral-600 rounded-full" />
        </div>
      </div>
    </div>
  )
}