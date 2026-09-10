import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { getWallet, getTransactionsByWallet } from '../services';
import type { Wallet, Transaction } from '../types';

function formatTxDate(dateStr: string) {
  const d = new Date(dateStr);
  const now = new Date();
  if (d.toDateString() === now.toDateString()) return 'Today';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export default function WalletDetail() {
  const { id } = useParams<{ id: string }>();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (!id) return;
    getWallet(id).then((w) => {
      if (w) {
        setWallet(w);
        getTransactionsByWallet(id).then(setTransactions);
      }
    });
  }, [id]);

  if (!wallet) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#151518]">
        <p className="text-neutral-500 text-sm">Wallet not found</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-5 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader title={wallet.name} backTo="/profile" dark />

      {/* Wallet Card */}
      <div
        className="rounded-[24px] px-5 py-6 text-white relative overflow-hidden"
        style={{ backgroundColor: wallet.accent }}
      >
        <p className="text-xs uppercase tracking-widest opacity-70">{wallet.type}</p>
        <p className="text-3xl font-bold mt-4">${wallet.balance.toLocaleString()}</p>
        <p className="text-sm opacity-60 mt-2">Balance</p>
      </div>

      {/* Transactions */}
      <h3 className="text-sm font-medium text-neutral-400 uppercase tracking-wider">Recent Transactions</h3>
      <div className="space-y-3">
        {transactions.map((tx) => {
          const isIncome = tx.type === 'income';
          return (
            <div
              key={tx.id}
              className="bg-[#1F2024] border border-neutral-800 rounded-[24px] px-5 py-4 flex items-center justify-between"
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
                   <p className="text-[15px] font-medium text-white truncate">{tx.title}</p>
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
          <p className="text-center text-neutral-500 py-8 text-sm">No transactions</p>
        )}
      </div>
    </div>
  );
}
