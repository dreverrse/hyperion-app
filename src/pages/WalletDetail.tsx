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
      <div className="flex-1 flex items-center justify-center bg-brand-black px-4 py-3 safe-top lg:px-6">
        <p className="text-neutral-500 text-sm">Wallet not found</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader title={wallet.name} backTo="/profile" dark />

      {/* Wallet Card */}
      <div
        className="rounded-[24px] px-4 lg:px-5 py-5 lg:py-6 text-white relative overflow-hidden"
        style={{ backgroundColor: wallet.accent }}
      >
        <p className="text-xs lg:text-sm uppercase tracking-widest opacity-70">{wallet.type}</p>
        <p className="text-2xl lg:text-3xl font-bold mt-3 lg:mt-4">${wallet.balance.toLocaleString()}</p>
        <p className="text-sm lg:text-base opacity-60 mt-1.5 lg:mt-2">Balance</p>
      </div>

      {/* Transactions */}
      <h3 className="text-xs lg:text-sm font-medium text-neutral-400 uppercase tracking-wider">Recent Transactions</h3>
      <div className="space-y-3 lg:space-y-4">
        {transactions.map((tx) => {
          const isIncome = tx.type === 'income';
          return (
            <div
              key={tx.id}
              className="bg-brand-card border border-neutral-800 rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 flex items-center justify-between active:bg-neutral-800/40 transition-colors touch-target"
            >
              <div className="flex items-center space-x-3 lg:space-x-4 min-w-0">
                <div className="w-11 h-11 lg:w-12 lg:h-12 rounded-full bg-neutral-800 flex items-center justify-center flex-shrink-0 touch-target">
                  <span className="text-base lg:text-xl">
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
          <p className="text-center text-neutral-500 py-12 text-sm">No transactions</p>
        )}
      </div>
    </div>
  );
}