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
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader
        title="Transactions"
        backTo="/profile"
        dark
        right={
          <button
            onClick={() => navigate('/transaction/new')}
            className="w-10 h-10 rounded-full bg-[#1E1F24] border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center"
          >
            <Plus className="w-4 h-4" />
          </button>
        }
      />

      {/* Search */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500" />
        <input
          type="text"
          placeholder="Search transactions..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-neutral-800/50 border border-neutral-700 rounded-[16px] text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-brand-coral focus:ring-1 focus:ring-brand-coral/40 transition-all"
        />
      </div>

      {/* List */}
      <div className="space-y-3">
        {transactions.map((tx) => {
          const isIncome = tx.type === 'income';
          return (
            <div
              key={tx.id}
              className="bg-[#1F2024] border border-neutral-800 rounded-[24px] px-5 py-4 flex items-center justify-between active:bg-neutral-800/40 transition-colors"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">
                    {tx.categoryId === 'Food & Drinks' ? '🍕' :
                     tx.categoryId === 'Shopping' ? '🛍️' :
                     tx.categoryId === 'Transportation' ? '🚗' :
                     tx.categoryId === 'Bills' ? '📄' :
                     tx.categoryId === 'Entertainment' ? '🎮' : '💰'}
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-[15px] font-medium text-white truncate">                    {tx.title}</p>
                   <p className="text-xs text-neutral-500">{tx.categoryId ?? '—'} · {formatTxDate(tx.date)}</p>
                </div>
              </div>
              <span className={`text-[15px] font-semibold flex-shrink-0 ${isIncome ? 'text-green-500' : 'text-white'}`}>
                {isIncome ? '+' : '-'}${Math.abs(tx.amount).toFixed(2)}
              </span>
            </div>
          );
        })}

        {transactions.length === 0 && (
          <p className="text-center text-neutral-500 py-12 text-sm">No transactions found</p>
        )}
      </div>
    </div>
  );
}
