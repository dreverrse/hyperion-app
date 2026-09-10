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
    <div className="bg-[#f5f5f7] flex flex-col">
      <div className="px-4 sm:px-6 pt-3 pb-2 flex items-center justify-between">
        <button
          onClick={() => navigate('/profile')}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center text-[#12151b] shadow-sm active:scale-95 transition-transform hover:bg-white"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
        <h1 className="text-base sm:text-lg font-bold tracking-tight text-[#12151b]">Analytics</h1>
        <button className="w-9 sm:w-10 flex items-center justify-center">
          <Share className="w-4 h-4 sm:w-5 sm:h-5 text-[#12151b]" />
        </button>
      </div>

      <div className="px-4 sm:px-6 pt-3 flex flex-col space-y-4">
        {/* Activity Card */}
        <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-sm">
          <p className="text-sm sm:text-[15px] font-semibold text-[#12151b]">Activity</p>
          <div className="flex items-end justify-between mt-4 h-36 sm:h-[160px]">
            {bars.map((bar, i) => {
              const h = bar.active ? 142 : [64, 56, 96, 142, 112, 80][i] ?? 64;
              return (
                <div key={i} className="flex flex-col items-center space-y-1.5 sm:space-y-2 flex-1">
                  <div
                    className={cn(
                      'w-6 sm:w-8 rounded-t-lg transition-all duration-300',
                      bar.active ? 'bg-[#ea580c]' : 'bg-[#eaedf0]'
                    )}
                    style={{ height: `${h}px` }}
                  />
                  <span className={cn('text-[10px] sm:text-xs', bar.active ? 'text-[#ea580c] font-medium' : 'text-[#a0a3ab]')}>
                    {MONTHS[i]}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Income / Expense Cards */}
        <div className="flex space-x-3">
          <div className="flex-1 bg-white rounded-[24px] p-3.5 sm:p-5 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#3BB668]" />
              <p className="text-[10px] sm:text-xs text-[#a0a3ab] font-medium">Income</p>
            </div>
            <p className="text-base sm:text-[20px] font-bold text-[#12151b] mt-1.5 sm:mt-2">
              {formatCurrency(stats.income)}
            </p>
            <p className={cn('text-[10px] sm:text-xs mt-1', stats.deltaIncome >= 0 ? 'text-[#3BB668]' : 'text-[#ea580c]')}>
              {stats.deltaIncome >= 0 ? '↑' : '↓'} {Math.abs(stats.deltaIncome)}%
            </p>
          </div>
          <div className="flex-1 bg-white rounded-[24px] p-3.5 sm:p-5 shadow-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#ea580c]" />
              <p className="text-[10px] sm:text-xs text-[#a0a3ab] font-medium">Expense</p>
            </div>
            <p className="text-base sm:text-[20px] font-bold text-[#12151b] mt-1.5 sm:mt-2">
              {formatCurrency(stats.expense)}
            </p>
            <p className={cn('text-[10px] sm:text-xs mt-1', stats.deltaExpense <= 0 ? 'text-[#3BB668]' : 'text-[#ea580c]')}>
              {stats.deltaExpense >= 0 ? '↑' : '↓'} {Math.abs(stats.deltaExpense)}%
            </p>
          </div>
        </div>

        {/* Activity Spent */}
        <div className="bg-white rounded-[24px] p-4 sm:p-5 shadow-sm">
          <p className="text-xs sm:text-sm text-[#a0a3ab] font-medium">This Month Spent</p>
          <p className="text-xl sm:text-[24px] font-bold text-[#12151b] mt-1">
            {formatCurrency(stats.activitySpent)}
          </p>
        </div>
      </div>
    </div>
  );
}
