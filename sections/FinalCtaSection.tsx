'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const closingNodes = Array.from({ length: 32 }).map((_, index) => ({
  left: `${8 + (index % 8) * 11}%`,
  top: `${12 + Math.floor(index / 8) * 20}%`,
  delay: `${(index % 6) * 0.5}s`
}));

export function FinalCtaSection() {
  return (
    <section className="px-4 pb-24 pt-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] overflow-hidden rounded-[2.6rem] border border-[var(--line)] bg-[linear-gradient(145deg,rgba(255,252,247,0.82)_0%,rgba(234,223,206,0.92)_100%)] px-6 py-16 shadow-[0_30px_90px_rgba(17,24,39,0.16)] dark:bg-[linear-gradient(145deg,rgba(19,26,35,0.92)_0%,rgba(10,14,20,0.98)_100%)] sm:px-8 lg:px-12 lg:py-20">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/40 bg-[rgba(255,255,255,0.42)] px-6 py-16 backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.28)] sm:px-10">
          <div className="absolute inset-0">
            {closingNodes.map((node) => (
              <span
                key={`${node.left}-${node.top}`}
                className="absolute h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_0_8px_rgba(200,102,63,0.08)] animate-[pulse_3.2s_ease-in-out_infinite]"
                style={{ left: node.left, top: node.top, animationDelay: node.delay }}
              />
            ))}
          </div>

          <div className="relative mx-auto max-w-4xl text-center">
            <p className="eyebrow mx-auto justify-center">Section 08 - Final call to action</p>
            <h2 className="mt-6 font-[family:var(--font-fraunces)] text-5xl leading-[0.92] sm:text-6xl lg:text-[5.4rem]">
              Your neighbourhood is waiting.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Hundreds of small nodes become a living map the moment people start showing up for each other.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg">
                <Link href="/register">Join Ilaaka</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events/new">Start an Activity</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
