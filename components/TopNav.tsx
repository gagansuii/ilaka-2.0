'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Compass, Map, User } from 'lucide-react';

export function TopNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border px-4 py-3 backdrop-blur-xl ${isHome ? 'border-white/35 bg-[rgba(255,252,247,0.52)] shadow-[0_20px_60px_rgba(17,24,39,0.08)] dark:border-white/10 dark:bg-[rgba(15,23,42,0.26)]' : 'border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_20px_60px_rgba(17,24,39,0.12)]'}`}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.4)] p-1 sm:flex dark:bg-[rgba(15,23,42,0.32)]">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => window.history.back()} aria-label="Go back">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0" onClick={() => window.history.forward()} aria-label="Go forward">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <Link href="/" className="min-w-0">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--secondary)_0%,var(--accent)_100%)] text-white shadow-[0_16px_30px_rgba(15,118,110,0.22)]">
                <Compass className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--secondary)]">
                  {isHome ? 'Rediscover local life' : 'Neighborhood now'}
                </p>
                <p className="truncate font-[family:var(--font-fraunces)] text-xl leading-none">
                  ILAKA
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          {isHome ? (
            <>
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link href="/discover">
                  <Map className="h-4 w-4" />
                  Explore Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                <Link href="/events/new">Host Event</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild size="sm" className="hidden sm:inline-flex">
                <Link href="/events/new">Host Event</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
                <Link href="/">Home</Link>
              </Button>
            </>
          )}
          <Button asChild variant="outline" size="sm" className="sm:hidden">
            <Link href={isHome ? '/discover' : '/events/new'}>{isHome ? 'Map' : 'New'}</Link>
          </Button>
          <Button asChild variant="ghost" size="sm" className="h-10 w-10 rounded-full p-0" aria-label="Profile">
            <Link href="/profile">
              <User className="h-4 w-4" />
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
