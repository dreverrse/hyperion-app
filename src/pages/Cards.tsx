import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { Plus } from '../components/icons';
import { getCards } from '../services';
import type { Card } from '../types';

export default function Cards() {
  const navigate = useNavigate();
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    getCards().then(setCards);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto no-scrollbar flex flex-col px-4 sm:px-6 pt-3 pb-24 bg-[#151518] space-y-4">
      <PageHeader
        title="Cards"
        backTo="/settings"
        dark
        right={
          <button
            onClick={() => navigate('/cards/new')}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1E1F24] border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center"
          >
            <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        }
      />

      <div className="space-y-3">
        {cards.map((c) => (
          <div
            key={c.id}
            className="rounded-[24px] px-4 sm:px-5 py-4 sm:py-5 text-white relative overflow-hidden"
            style={{ backgroundColor: c.accent }}
          >
            {c.isDefault && (
              <span className="absolute top-3 right-3 sm:top-4 sm:right-4 text-[10px] sm:text-xs bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full">
                Default
              </span>
            )}
            <p className="text-[10px] sm:text-xs uppercase tracking-widest opacity-70 mt-1">
              {c.network === 'visa' ? 'Visa' : 'Mastercard'}
            </p>
            <p className="text-base sm:text-xl font-mono tracking-[0.2em] mt-4 sm:mt-6">
              •••• •••• •••• {c.last4}
            </p>
            <div className="flex items-end justify-between mt-4 sm:mt-6">
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs opacity-60">Cardholder</p>
                <p className="text-xs sm:text-sm font-medium truncate">{c.holderName}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-[10px] sm:text-xs opacity-60">Expires</p>
                <p className="text-xs sm:text-sm font-medium">{c.expiryMonth}/{c.expiryYear}</p>
              </div>
            </div>
          </div>
        ))}

        {cards.length === 0 && (
          <p className="text-center text-neutral-500 py-12 text-sm">No cards yet</p>
        )}
      </div>
    </div>
  );
}
