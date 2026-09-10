import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Plus } from '../components/icons';
import { getBudgets } from '../services';
import type { Budget } from '../types';

const CATEGORY_COLORS: Record<string, string> = {
  'Food & Drinks': '#ea580c',
  'Shopping': '#8b5cf6',
  'Transportation': '#0ea5e9',
  'Bills': '#ef4444',
  'Entertainment': '#22c55e',
};

export default function Budgets() {
  const navigate = useNavigate();
  const [budgets, setBudgets] = useState<Budget[]>([]);

  useEffect(() => {
    getBudgets().then(setBudgets);
  }, []);

  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader
        title="Budgets"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/budgets/new')}
            className="w-11 h-11 rounded-full bg-brand-surface border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center touch-target"
          >
            <Plus className="w-5 h-5" />
          </button>
        }
      />

      <div className="space-y-3 lg:space-y-4">
        {budgets.map((b) => {
          const percent = b.amount > 0 ? Math.min((b.spent / b.amount) * 100, 100) : 0;
          const color = CATEGORY_COLORS[b.category] ?? '#ea580c';

          return (
            <div key={b.id} className="bg-brand-card border border-neutral-800 rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 space-y-3">
              <div className="flex items-center justify-between gap-2 lg:gap-3">
                <span className="text-base lg:text-[16px] font-medium text-white">{b.category}</span>
                <span className="text-xs lg:text-sm text-neutral-400 flex-shrink-0">
                  ${b.spent.toFixed(2)} <span className="text-neutral-600">/ ${b.amount.toFixed(2)}</span>
                </span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${percent}%`, backgroundColor: color }}
                />
              </div>
              <p className="text-xs lg:text-sm text-neutral-500">{percent.toFixed(0)}% used</p>
            </div>
          );
        })}

        {budgets.length === 0 && (
          <p className="text-center text-neutral-500 py-16 text-sm">No budgets yet</p>
        )}
      </div>
    </div>
  );
}