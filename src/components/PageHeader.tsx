import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ChevronLeft } from './icons';

interface PageHeaderProps {
  title: string;
  backTo?: string;
  dark?: boolean;
  right?: ReactNode;
  className?: string;
}

export default function PageHeader({ title, backTo, dark = false, right, className }: PageHeaderProps) {
  const navigate = useNavigate();

  const goBack = () => {
    if (backTo) {
      navigate(backTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <header className={cn('flex items-center justify-between px-4 py-3 safe-top', className)}>
      <div className="flex items-center space-x-3 min-w-0">
        <button
          type="button"
          aria-label="Back"
          onClick={goBack}
          className={cn(
            'w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 active:scale-95 transition-all touch-target',
            dark
              ? 'bg-brand-surface border-neutral-800 text-neutral-300 hover:text-white'
              : 'bg-white/70 backdrop-blur-sm border-neutral-200 text-brand-black hover:bg-white',
          )}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className={cn('text-lg font-bold tracking-tight truncate', dark ? 'text-white' : 'text-brand-black')}>
          {title}
        </h1>
      </div>
      <div className="w-11 flex items-center justify-center flex-shrink-0">{right}</div>
    </header>
  );
}