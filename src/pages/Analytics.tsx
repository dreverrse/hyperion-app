import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Share } from '../components/icons';
import { cn } from '../lib/utils';
import { mockActivityBars, mockMonthlyStats } from '../data/mock/activity';
import { formatCurrency } from '../lib/formatCurrency';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'];

export default function Analytics() {
  const navigate = useNavigate();
  const [stats] = useState(mockMonthlyStats);
  const [bars] = useState(mockActivityBars);

  return (
    <div className="bg-brand-accentLight flex flex-col min-h-screen min-h-[100dvh] safe-top">
      <div className="px-4 lg:px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => navigate('/profile')}
          className="w-11 h-11 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-brand-black shadow-sm active:scale-95 transition-transform hover:bg-white touch-target"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-lg font-bold tracking-tight text-brand-black">Analytics</h1>
        <button className="w-11 h-11 flex items-center justify-center touch-target">
          <Share className="w-5 h-5 text-brand-black" />
        </button>
      </div>

      <div className="px-4 lg:px-6 pt-3 flex flex-col space-y-4 lg:space-y-5 flex-1">
        {/* Activity Card */}
        <div className="bg-white rounded-[24px] p-4 lg:p-5 shadow-sm">
          <p className="text-base font-semibold text-brand-black">Activity</p>
          <div className="flex items-end justify-between mt-4 h-36 lg:h-[160px]">
            {bars.map((bar, i) => {
              const h = bar.active ? 142 : [64, 56, 96, 142, 112, 80][i] ?? 64;
              return (
                <div key={i} className="flex flex-col items-center space-y-1.5 lg:space-y-2 flex-1">
                  <div
                    className={cn(
                      'w-6 lg:w-8 rounded-t-lg transition-all duration-300',
                      bar.active ? 'bg-brand-coral' : 'bg-brand-accentLight'
                    )}
                    style={{ height: `${h}px` }}
                  />
                  <span className={cn('text-xs lg:text-sm', bar.active ? 'text-brand-coral font-medium' : 'text-neutral-500')}>
                    {MONTHS[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Income / Expense Cards */}
        <div className="flex space-x-3">
          <div className="flex-1 bg-white rounded-[24px] p-4 lg:p-5 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-xs lg:text-sm text-neutral-500 font-medium">Income</p>
            </div>
            <p className="text-base lg:text-[20px] font-bold text-brand-black mt-1.5 lg:mt-2">
              {formatCurrency(stats.income)}
            </p>
            <p className={cn('text-xs lg:text-sm mt-1', stats.deltaIncome >= 0 ? 'text-green-500' : 'text-brand-coral')}>
              {stats.deltaIncome >= 0 ? '↑' : '↓'} {Math.abs(stats.deltaIncome)}%
            </p>
          </div>
          <div className="flex-1 bg-white rounded-[24px] p-4 lg:p-5 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-brand-coral" />
              <p className="text-xs lg:text-sm text-neutral-500 font-medium">Expense</p>
            </div>
            <p className="text-base lg:text-[20px] font-bold text-brand-black mt-1.5 lg:mt-2">
              {formatCurrency(stats.expense)}
            </p>
            <p className={cn('text-xs lg:text-sm mt-1', stats.deltaExpense <= 0 ? 'text-green-500' : 'text-brand-coral')}>
              {stats.deltaExpense >= 0 ? '↑' : '↓'} {Math.abs(stats.deltaExpense)}%
            </p>
          </div>
        </div>

        {/* Activity Spent */}
        <div className="bg-white rounded-[24px] p-4 lg:p-5 shadow-sm">
          <p className="text-sm lg:text-base text-neutral-500 font-medium">This Month Spent</p>
          <p className="text-xl lg:text-[24px] font-bold text-brand-black mt-1">
            {formatCurrency(stats.activitySpent)}
          </p>
        </div>
      </div>
    </div>
  );
}