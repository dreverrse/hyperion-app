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
    <header className={cn('flex items-center justify-between px-5 pt-3', className)}>
      <div className="flex items-center space-x-3">
        <button
          type="button"
          aria-label="Back"
          onClick={goBack}
          className={cn(
            'w-10 h-10 rounded-full border flex items-center justify-center active:scale-95 transition-all',
            dark
              ? 'bg-[#1E1F24] border-neutral-800 text-neutral-300 hover:text-white'
              : 'bg-white/70 backdrop-blur-sm border-neutral-200 text-[#12151b] hover:bg-white',
          )}
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <h1 className={cn('text-[20px] font-bold tracking-tight', dark ? 'text-white' : 'text-[#12151b]')}>
          {title}
        </h1>
      </div>
      <div className="w-10 flex items-center justify-center">{right}</div>
    </header>
  );
}