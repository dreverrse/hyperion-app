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
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader
        title="Goals"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/goals/new')}
            className="w-11 h-11 rounded-full bg-brand-surface border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center touch-target"
          >
            <Plus className="w-5 h-5" />
          </button>
        }
      />

      <div className="space-y-3 lg:space-y-4">
        {goals.map((g) => {
          const percent = g.target > 0 ? Math.min((g.saved / g.target) * 100, 100) : 0;

          return (
            <div key={g.id} className="bg-brand-card border border-neutral-800 rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 space-y-3">
              <div className="flex items-center space-x-3 lg:space-x-4">
                <span className="text-xl lg:text-2xl flex-shrink-0">{g.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 lg:gap-3">
                    <span className="text-base lg:text-[16px] font-medium text-white truncate">{g.title}</span>
                    <span className={`text-xs lg:text-sm px-2.5 lg:px-3 py-1 lg:py-1.5 rounded-full text-white flex-shrink-0 ${STATUS_COLORS[g.status] ?? 'bg-neutral-600'}`}>
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
              <div className="flex items-center justify-between text-xs lg:text-sm">
                <span className="text-neutral-400">
                  ${g.saved.toLocaleString()} <span className="text-neutral-600">/ ${g.target.toLocaleString()}</span>
                </span>
                <span className="text-neutral-500">{percent.toFixed(0)}%</span>
              </div>
            </div>
          );
        })}

        {goals.length === 0 && (
          <p className="text-center text-neutral-500 py-16 text-sm">No goals yet</p>
        )}
      </div>
    </div>
  );
}