import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { formatDate } from '../lib/formatDate';
import { formatSigned } from '../lib/formatCurrency';
import type { Transaction } from '../types/transaction';
import { ArrowUpRight, PaypalIcon, SpotifyIcon } from './icons';

interface TransactionRowProps {
  transaction: Transaction;
  to?: string;
  className?: string;
}

function renderIcon(transaction: Transaction) {
  if (transaction.icon === 'paypal') {
    return (
      <div className="w-11 h-11 rounded-full bg-[#FF6B78] flex items-center justify-center text-white shrink-0 shadow-sm">
        <PaypalIcon className="w-5 h-5" />
      </div>
    );
  }
  if (transaction.icon === 'spotify') {
    return (
      <div className="w-11 h-11 rounded-full bg-neutral-900 flex items-center justify-center text-emerald-400 shrink-0 shadow-sm">
        <SpotifyIcon className="w-5 h-5" />
      </div>
    );
  }
  const income = transaction.type === 'income';
  return (
    <div className="w-11 h-11 rounded-full bg-[#e6ebf0]/60 flex items-center justify-center text-[#12151b] shrink-0">
      <ArrowUpRight className={cn('w-4 h-4', !income && 'rotate-90')} />
    </div>
  );
}

function StatusBadge({ status }: { status: Transaction['status'] }) {
  if (status === 'success') {
    return null;
  }
  const pending = status === 'pending';
  return (
    <span
      className={cn(
        'px-1.5 py-0.5 rounded-full text-[10px] font-bold mt-0.5',
        pending ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-600',
      )}
    >
      {pending ? 'Pending' : 'Failed'}
    </span>
  );
}

export default function TransactionRow({ transaction, to, className }: TransactionRowProps) {
  const subtitle = transaction.merchant ?? transaction.displayDate ?? formatDate(transaction.date);
  const signed = formatSigned(transaction.type === 'income' ? transaction.amount : -transaction.amount);
  const amountClassName =
    transaction.type === 'income' ? 'text-green-600' : 'text-red-500';

  const row = (
    <>
      {renderIcon(transaction)}
      <div className="flex-1 min-w-0">
        <div className="text-sm font-bold text-neutral-900 leading-snug truncate">{transaction.title}</div>
        <div className="text-xs text-neutral-500 truncate">{subtitle}</div>
      </div>
      <div className="flex flex-col items-end shrink-0">
        <span className={cn('text-sm font-bold', amountClassName)}>{signed}</span>
        <StatusBadge status={transaction.status} />
      </div>
    </>
  );

  const classes = cn('w-full flex items-center gap-3.5 py-3.5', className);

  if (to) {
    return (
      <Link to={to} className={cn(classes, 'active:scale-[0.99] transition-transform')}>
        {row}
      </Link>
    );
  }

  return <div className={classes}>{row}</div>;
}