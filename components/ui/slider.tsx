'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

export function Slider({ className, ...props }: SliderPrimitive.SliderProps) {
  return (
    <SliderPrimitive.Root
      className={cn('relative flex w-full touch-none select-none items-center', className)}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-[rgba(23,18,14,0.08)] dark:bg-[rgba(255,255,255,0.08)]">
        <SliderPrimitive.Range className="absolute h-full bg-[linear-gradient(90deg,var(--secondary)_0%,var(--accent)_100%)]" />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block h-5 w-5 rounded-full border border-white/60 bg-white shadow-[0_10px_24px_rgba(17,24,39,0.18)] transition hover:scale-105" />
    </SliderPrimitive.Root>
  );
}
