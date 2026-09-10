import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

const badgeVariants: Record<BadgeVariant, string> = {
  default: 'bg-brand-coral text-white',
  secondary: 'bg-neutral-800 text-white',
  destructive: 'bg-red-500 text-white',
  outline: 'border border-neutral-700 text-neutral-300',
};

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand-coral focus:ring-offset-2',
        badgeVariants[variant],
        className,
      )}
      {...props}
    />
  ),
);
Badge.displayName = 'Badge';