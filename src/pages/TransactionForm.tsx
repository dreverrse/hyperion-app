import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { cn } from '../lib/utils';
import { SUPPORTED_CATEGORIES } from '../lib/constants';
import { createTransaction } from '../services';

type TxType = 'income' | 'expense';

export default function TransactionForm() {
  const navigate = useNavigate();
  const [type, setType] = useState<TxType>('expense');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>(SUPPORTED_CATEGORIES[0]);
  const [saving, setSaving] = useState(false);

  const handleSubmit = async () => {
    const parsed = parseFloat(amount);
    if (!description.trim() || isNaN(parsed) || parsed <= 0) return;
    setSaving(true);
    await createTransaction({
      walletId: 'wallet-tobuya',
      type,
      amount: parsed,
      title: description.trim(),
      categoryId: category,
      date: new Date().toISOString(),
    });
    setSaving(false);
    navigate(-1);
  };

  return (
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader title="New Transaction" backTo="/transactions" dark />

      {/* Type Toggle */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-1 flex">
        {(['expense', 'income'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={cn(
              'flex-1 py-3 lg:py-3.5 rounded-[20px] text-base font-medium transition-all touch-target',
              type === t ? 'bg-brand-coral text-white' : 'text-neutral-400'
            )}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Amount */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-4 lg:p-5 space-y-1">
        <label className="text-xs lg:text-sm text-neutral-500 uppercase tracking-wider">Amount</label>
        <div className="flex items-baseline space-x-1">
          <span className="text-xl lg:text-2xl text-neutral-500 font-medium">$</span>
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-2xl lg:text-3xl font-bold text-white placeholder:text-neutral-700 focus:outline-none touch-target"
            inputMode="decimal"
          />
        </div>
      </div>

      {/* Description */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-4 lg:p-5 space-y-1">
        <label className="text-xs lg:text-sm text-neutral-500 uppercase tracking-wider">Description</label>
        <input
          type="text"
          placeholder="What was this for?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full bg-transparent text-base lg:text-[16px] text-white placeholder:text-neutral-600 focus:outline-none touch-target"
        />
      </div>

      {/* Category */}
      <div className="bg-brand-card border border-neutral-800 rounded-[24px] p-4 lg:p-5 space-y-2">
        <label className="text-xs lg:text-sm text-neutral-500 uppercase tracking-wider">Category</label>
        <div className="flex flex-wrap gap-2">
          {SUPPORTED_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                'px-3 lg:px-4 py-2 lg:py-2.5 rounded-full text-sm lg:text-base font-medium transition-all border touch-target',
                category === cat
                  ? 'bg-brand-coral text-white border-brand-coral'
                  : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-neutral-500'
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={saving || !description.trim() || !amount}
        className={cn(
          'w-full py-4 lg:py-5 rounded-[20px] text-base lg:text-[16px] font-semibold transition-all active:scale-[0.98] touch-target',
          saving || !description.trim() || !amount
            ? 'bg-neutral-800 text-neutral-600 cursor-not-allowed'
            : 'bg-brand-coral text-white hover:bg-brand-coralHover'
        )}
      >
        {saving ? 'Saving...' : 'Add Transaction'}
      </button>
    </div>
  );
}