'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Compass, MapPin, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useHeroScroll } from '@/animations/useHeroScroll';

const NeighborhoodCanvas = dynamic(
  () => import('@/three/NeighborhoodCanvas').then((module) => module.NeighborhoodCanvas),
  {
    ssr: false,
    loading: () => <div className="h-full w-full animate-pulse bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.85),rgba(255,255,255,0.08))]" />
  }
);

export function HeroSection() {
  const { sectionRef, headlineRef, bodyRef, ctaRef, progressRef } = useHeroScroll();

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden px-4 pt-28 [--hero-progress:0] sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 opacity-70">
        <NeighborhoodCanvas progressRef={progressRef} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(245,237,226,0.26)_0%,rgba(245,237,226,0.02)_32%,rgba(245,237,226,0.72)_100%)] dark:bg-[linear-gradient(180deg,rgba(9,13,19,0.18)_0%,rgba(9,13,19,0.04)_35%,rgba(9,13,19,0.82)_100%)]" />

      <div className="relative mx-auto grid min-h-[calc(100svh-7rem)] max-w-[1440px] items-end gap-10 pb-10 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="max-w-3xl space-y-6">
          <p className="eyebrow w-fit border border-white/40 bg-[rgba(255,255,255,0.55)] shadow-[0_18px_40px_rgba(17,24,39,0.1)] dark:border-white/10 dark:bg-[rgba(15,23,42,0.36)]">
            <Compass className="h-3.5 w-3.5" />
            Cinematic neighborhood discovery
          </p>

          <div ref={headlineRef} className="space-y-4">
            <h1 className="max-w-4xl font-[family:var(--font-fraunces)] text-5xl leading-[0.9] sm:text-6xl lg:text-[6.2rem]">
              Your neighbourhood is more alive than you think.
            </h1>
          </div>

          <div ref={bodyRef} className="space-y-4">
            <p className="max-w-2xl text-base leading-8 text-muted sm:text-lg">
              Discover the people, skills, and stories around you through a map-first platform built for local curiosity.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="info-pill">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                Run clubs
              </span>
              <span className="info-pill">
                <MapPin className="h-4 w-4 text-[var(--secondary)]" />
                Art workshops
              </span>
              <span className="info-pill">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                Skillshare sessions
              </span>
            </div>
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/discover">Explore your Ilaaka</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/events/new">Start an Activity</Link>
            </Button>
          </div>
        </div>

        <div className="grid gap-4 lg:pb-6">
          <div className="rounded-[1.8rem] border border-white/45 bg-[rgba(255,255,255,0.62)] p-5 shadow-[0_24px_60px_rgba(17,24,39,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.34)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--secondary)]">Live signal</p>
            <p className="mt-3 text-2xl font-semibold">Nodes are waking up across the city.</p>
            <p className="mt-2 text-sm leading-6 text-muted">Scroll to reveal how Ilaaka turns familiar streets into invitations.</p>
          </div>
          <div className="rounded-[1.8rem] border border-white/45 bg-[rgba(255,255,255,0.56)] p-5 shadow-[0_24px_60px_rgba(17,24,39,0.12)] backdrop-blur-2xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.3)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--accent)]">Movement</p>
            <div className="mt-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(200,102,63,0.16)]">
                <Sparkles className="h-5 w-5 text-[var(--accent)]" />
              </div>
              <p className="text-sm leading-6 text-muted">
                Ilaaka is not just an app. It is a movement to rediscover local life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/40 bg-[rgba(255,255,255,0.56)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--muted)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.32)]">
        Scroll to explore
      </div>
    </section>
  );
}
