import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { ChevronLeft } from './icons';

interface ListItemProps {
  icon?: ReactNode;
  iconClassName?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  right?: ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
  contentClassName?: string;
}

export default function ListItem({
  icon,
  iconClassName,
  title,
  subtitle,
  right,
  to,
  onClick,
  className,
  contentClassName,
}: ListItemProps) {
  const interactive = Boolean(to || onClick);
  const content = (
    <>
      {icon ? (
        <div
          className={cn(
            'w-11 h-11 rounded-full flex items-center justify-center shrink-0',
            iconClassName ?? 'bg-[#e6ebf0]/60 text-[#12151b]',
          )}
        >
          {icon}
        </div>
      ) : null}
      <div className={cn('flex-1 min-w-0', contentClassName)}>
        <div className="text-sm font-bold text-[#12151b] leading-snug">{title}</div>
        {subtitle ? <div className="text-xs text-[#8794a1] mt-0.5">{subtitle}</div> : null}
      </div>
      {interactive ? (
        right ?? (
          <ChevronLeft className="w-4 h-4 -rotate-180 text-[#c1c9d4]" />
        )
      ) : (
        right
      )}
    </>
  );

  const classes = cn(
    'w-full flex items-center gap-3.5 px-2 py-3',
    interactive ? 'cursor-pointer active:scale-[0.99] transition-transform' : '',
    className,
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {content}
      </Link>
    );
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return <div className={classes}>{content}</div>;
}