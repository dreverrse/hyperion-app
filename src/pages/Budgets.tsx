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
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader
        title="Budgets"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/budgets/new')}
            className="w-10 h-10 rounded-full bg-[#1E1F24] border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center"
          >
            <Plus className="w-4 h-4" />
          </button>
        }
      />

      <div className="space-y-3">
        {budgets.map((b) => {
          const percent = b.amount > 0 ? Math.min((b.spent / b.amount) * 100, 100) : 0;
          const color = CATEGORY_COLORS[b.category] ?? '#ea580c';

          return (
            <div key={b.id} className="bg-[#1F2024] border border-neutral-800 rounded-[24px] px-5 py-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[15px] font-medium text-white">{b.category}</span>
                <span className="text-sm text-neutral-400">
                  ${b.spent.toFixed(2)} <span className="text-neutral-600">/ ${b.amount.toFixed(2)}</span>
                </span>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-300"
                  style={{ width: `${percent}%`, backgroundColor: color }}
                />
              </div>
              <p className="text-xs text-neutral-500">{percent.toFixed(0)}% used</p>
            </div>
          );
        })}

        {budgets.length === 0 && (
          <p className="text-center text-neutral-500 py-12 text-sm">No budgets yet</p>
        )}
      </div>
    </div>
  );
}
