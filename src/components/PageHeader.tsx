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
    <header className={cn('flex items-center justify-between px-4 sm:px-6 pt-3', className)}>
      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
        <button
          type="button"
          aria-label="Back"
          onClick={goBack}
          className={cn(
            'w-9 h-9 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center flex-shrink-0 active:scale-95 transition-all',
            dark
              ? 'bg-[#1E1F24] border-neutral-800 text-neutral-300 hover:text-white'
              : 'bg-white/70 backdrop-blur-sm border-neutral-200 text-[#12151b] hover:bg-white',
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h1 className={cn('text-lg sm:text-xl font-bold tracking-tight truncate', dark ? 'text-white' : 'text-[#12151b]')}>
          {title}
        </h1>
      </div>
      <div className="w-9 sm:w-10 flex items-center justify-center flex-shrink-0">{right}</div>
    </header>
  );
}
