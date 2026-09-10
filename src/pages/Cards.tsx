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
    <div className="flex flex-col px-4 py-3 safe-top space-y-4 lg:px-6 lg:space-y-5 bg-brand-black">
      <PageHeader
        title="Cards"
        backTo="/settings"
        dark
        right={
          <button
            onClick={() => navigate('/cards/new')}
            className="w-11 h-11 rounded-full bg-brand-surface border border-neutral-800 text-neutral-300 hover:text-white active:scale-95 transition-all flex items-center justify-center touch-target"
          >
            <Plus className="w-5 h-5" />
          </button>
        }
      />

      <div className="space-y-3 lg:space-y-4">
        {cards.map((c) => (
          <div
            key={c.id}
            className="rounded-[24px] px-4 lg:px-5 py-4 lg:py-5 text-white relative overflow-hidden"
            style={{ backgroundColor: c.accent }}
          >
            {c.isDefault && (
              <span className="absolute top-3 right-3 lg:top-4 lg:right-4 text-xs bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                Default
              </span>
            )}
            <p className="text-xs lg:text-sm uppercase tracking-widest opacity-70 mt-1">
              {c.network === 'visa' ? 'Visa' : 'Mastercard'}
            </p>
            <p className="text-base lg:text-xl font-mono tracking-[0.2em] mt-4 lg:mt-6">
              •••• •••• •••• {c.last4}
            </p>
            <div className="flex items-end justify-between mt-4 lg:mt-6">
              <div className="min-w-0">
                <p className="text-xs lg:text-sm opacity-60">Cardholder</p>
                <p className="text-sm lg:text-base font-medium truncate">{c.holderName}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="text-xs lg:text-sm opacity-60">Expires</p>
                <p className="text-sm lg:text-base font-medium">{c.expiryMonth}/{c.expiryYear}</p>
              </div>
            </div>
          </div>
        ))}

        {cards.length === 0 && (
          <p className="text-center text-neutral-500 py-16 text-sm">No cards yet</p>
        )}
      </div>
    </div>
  );
}