import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div className={cn('space-y-4', align === 'center' && 'mx-auto max-w-3xl text-center', className)}>
      <p className={cn('eyebrow', align === 'center' && 'justify-center')}>{eyebrow}</p>
      <h2 className="font-[family:var(--font-fraunces)] text-4xl leading-[0.96] sm:text-5xl lg:text-[3.6rem]">
        {title}
      </h2>
      <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">{description}</p>
    </div>
  );
}
