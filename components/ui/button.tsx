import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[var(--text)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50',
          variant === 'primary' &&
            'bg-[linear-gradient(135deg,var(--accent)_0%,var(--accent-strong)_100%)] text-white shadow-[0_18px_40px_rgba(141,52,34,0.28)] hover:-translate-y-0.5 hover:shadow-[0_24px_46px_rgba(141,52,34,0.34)]',
          variant === 'ghost' &&
            'border border-[var(--line)] bg-transparent hover:bg-[rgba(255,255,255,0.38)] dark:hover:bg-[rgba(15,23,42,0.34)]',
          variant === 'outline' &&
            'border border-[var(--line)] bg-[rgba(255,255,255,0.5)] hover:bg-[var(--surface-strong)] dark:bg-[rgba(15,23,42,0.38)]',
          size === 'sm' && 'h-10 px-4 text-sm',
          size === 'md' && 'h-12 px-6 text-sm',
          size === 'lg' && 'h-14 px-7 text-base',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button };
