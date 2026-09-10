import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Plus } from '../components/icons';
import { getGoals } from '../services';
import type { Goal } from '../types';

const STATUS_LABELS: Record<string, string> = {
  in_progress: 'In Progress',
  completed: 'Completed',
  pending: 'Pending',
};

const STATUS_COLORS: Record<string, string> = {
  in_progress: 'bg-brand-coral',
  completed: 'bg-green-500',
  pending: 'bg-neutral-600',
};

export default function Goals() {
  const navigate = useNavigate();
  const [goals, setGoals] = useState<Goal[]>([]);

  useEffect(() => {
    getGoals().then(setGoals);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-4 sm:px-6 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader
        title="Goals"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/goals/new')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E1F24] border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        }
      />

      <div className="space-y-3">
        {goals.map((g) => {
          const percent = g.target > 0 ? Math.min((g.saved / g.target) * 100, 100) : 0;

          return (
            <div key={g.id} className="bg-[#1F2024] border border-neutral-800 rounded-[24px] px-4 sm:px-5 py-3.5 sm:py-4 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">{g.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm sm:text-[15px] font-medium text-white truncate">{g.title}</span>
                    <span className={`text-[11px] sm:text-xs px-2 py-0.5 rounded-full text-white flex-shrink-0 ${STATUS_COLORS[g.status] ?? 'bg-neutral-600'}`}>
                      {STATUS_LABELS[g.status] ?? g.status}
                    </span>
                  </div>
                </div>
              </div>
              <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-coral rounded-full transition-all duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-xs sm:text-sm">
                <span className="text-neutral-400">
                  ${g.saved.toLocaleString()} <span className="text-neutral-600">/ ${g.target.toLocaleString()}</span>
                </span>
                <span className="text-neutral-500">{percent.toFixed(0)}%</span>
              </div>
            </div>
          );
        })}

        {goals.length === 0 && (
          <p className="text-center text-neutral-500 py-12 text-sm">No goals yet</p>
        )}
      </div>
    </div>
  );
}
