import { type ComponentRef, forwardRef, type ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

const buttonVariants: Record<ButtonVariant, string> = {
  default: 'bg-brand-coral text-white hover:bg-brand-coralHover',
  destructive: 'bg-red-500 text-white hover:bg-red-600',
  outline: 'border border-neutral-700 bg-transparent text-white hover:bg-neutral-800/60',
  secondary: 'bg-neutral-800 text-white hover:bg-neutral-700',
  ghost: 'text-neutral-300 hover:bg-neutral-800/60 hover:text-white',
  link: 'text-neutral-300 underline-offset-4 hover:underline',
};

const buttonSizes: Record<ButtonSize, string> = {
  default: 'h-10 px-4 py-2',
  sm: 'h-9 rounded-md px-3',
  lg: 'h-11 rounded-md px-8',
  icon: 'h-10 w-10',
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export const Button = forwardRef<ComponentRef<'button'>, ButtonProps>(
  ({ className, variant = 'default', size = 'default', type = 'button', ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-coral focus-visible:ring-offset-2 focus-visible:ring-offset-[#121214] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    />
  ),
);
Button.displayName = 'Button';