'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    if (!res.ok) {
      let data: any = null;
      try {
        data = await res.json();
      } catch {
        data = null;
      }
      setError(data?.error ?? 'Unable to register');
      return;
    }
    const signInRes = await signIn('credentials', { email, password, redirect: false, callbackUrl: '/' });
    if (signInRes?.error) {
      setError('Account created, but sign-in failed. Please sign in manually.');
      return;
    }
    window.location.href = signInRes?.url ?? '/';
  }

  return (
    <div className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_28px_90px_rgba(17,24,39,0.16)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative hidden overflow-hidden bg-[linear-gradient(145deg,rgba(200,102,63,0.96)_0%,rgba(15,118,110,0.94)_100%)] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div className="absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-white/12 blur-3xl" />
          <div className="absolute right-14 top-16 h-32 w-32 rounded-full border border-white/16" />
          <div className="relative">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/72">
              Join ILAKA
            </p>
            <h1 className="mt-5 font-[family:var(--font-fraunces)] text-5xl leading-[0.94]">
              Build your own neighborhood signal.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/80">
              Create an account, set your local radius, and start discovering or hosting gatherings that feel actually close to home.
            </p>
          </div>

          <div className="relative grid grid-cols-2 gap-3">
            <div className="rounded-[1.6rem] border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/68">Host</p>
              <p className="mt-2 text-3xl font-semibold">Local</p>
            </div>
            <div className="rounded-[1.6rem] border border-white/14 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/68">Discover</p>
              <p className="mt-2 text-3xl font-semibold">Nearby</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <Card className="w-full max-w-md space-y-6">
            <div>
              <p className="eyebrow">Create account</p>
              <h1 className="mt-4 text-3xl font-semibold">Create your ILAKA</h1>
              <p className="mt-2 text-sm leading-6 text-muted">
                Start with a profile, then tune the map to your neighborhood and the kinds of moments you want more of.
              </p>
            </div>

            <form className="space-y-3" onSubmit={handleSubmit}>
              <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              {error ? <p className="text-sm text-red-500">{error}</p> : null}
              <Button type="submit" className="w-full">Create account</Button>
            </form>

            <p className="text-sm text-muted">
              Already have an account? <Link className="font-semibold text-[var(--accent)]" href="/login">Sign in</Link>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
