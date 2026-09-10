import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { SearchIcon, Plus } from '../components/icons';
import { getTransactions, searchTransactions } from '../services';
import type { Transaction } from '../types';

function formatTxDate(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) return 'Today';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function Transactions() {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  useEffect(() => {
    if (query.trim()) {
      searchTransactions(query).then(setTransactions);
    } else {
      getTransactions().then(setTransactions);
    }
  }, [query]);

  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader
        title="Transactions"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/transaction/new')}
            className="w-11 h-11 rounded-full bg-brand-surface border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center touch-target"
          >
            <Plus className="w-5 h-5" />
          </button>
        }
      />

      {/* Search */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
        <input
          type="text"
          placeholder="Search transactions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 bg-neutral-800/50 border border-neutral-700 rounded-[16px] text-base text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-coral focus:ring-1 focus:ring-brand-coral/40 transition-all touch-target"
        />
      </div>

      {/* List */}
      <div className="space-y-3">
        {transactions.map((tx) => {
          const isIncome = tx.type === 'income';
          return (
            <div
              key={tx.id}
              className="bg-brand-card border border-neutral-800 rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 flex items-center justify-between active:bg-neutral-800/40 transition-colors touch-target"
            >
              <div className="flex items-center space-x-3 lg:space-x-4 min-w-0">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0 touch-target">
                  <span className="text-lg lg:text-xl">
                    {tx.categoryId === 'Food & Drinks' ? '🍕' :
                     tx.categoryId === 'Shopping' ? '🛍️' :
                     tx.categoryId === 'Transportation' ? '🚗' :
                     tx.categoryId === 'Bills' ? '📄' :
                     tx.categoryId === 'Entertainment' ? '🎮' : '💰'}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-base lg:text-[16px] font-medium text-white truncate">{tx.title}</p>
                  <p className="text-xs lg:text-sm text-neutral-500">{tx.categoryId ?? '—'} · {formatTxDate(tx.date)}</p>
                </div>
              </div>
              <span className={`text-base lg:text-[16px] font-semibold flex-shrink-0 ml-3 ${isIncome ? 'text-green-500' : 'text-white'}`}>
                {isIncome ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
              </span>
            </div>
          );
        })}

        {transactions.length === 0 && (
          <p className="text-center text-neutral-500 py-16 text-sm">No transactions found</p>
        )}
      </div>
    </div>
  );
}