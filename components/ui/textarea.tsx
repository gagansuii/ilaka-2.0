import * as React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[132px] w-full rounded-[1.5rem] border border-[var(--line)] bg-[rgba(255,255,255,0.58)] px-4 py-3 text-sm text-[var(--text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] outline-none backdrop-blur-sm transition placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:bg-[var(--surface-strong)] focus:shadow-[0_0_0_4px_rgba(200,102,63,0.12)] dark:bg-[rgba(15,23,42,0.34)] dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.02)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
