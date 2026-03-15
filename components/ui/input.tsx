import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-[1.35rem] border border-[var(--line)] bg-[rgba(255,255,255,0.58)] px-4 py-2 text-sm text-[var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none backdrop-blur-sm transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:bg-[var(--surface-strong)] focus:shadow-[0_0_0_4px_rgba(200,102,63,0.12)] dark:bg-[rgba(15,23,42,0.34)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
