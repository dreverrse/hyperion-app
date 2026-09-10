import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        'flex h-10 w-full rounded-xl border border-neutral-700 bg-neutral-800/50 px-3 py-2 text-sm text-white placeholder:text-neutral-500 focus-visible:outline-none focus-visible:border-brand-coral focus-visible:ring-2 focus-visible:ring-brand-coral/40 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = 'Input';