'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/animations/motion';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { Button } from '@/components/ui/button';
import { creatorSteps } from '@/utils/landing-data';

export function CreatorStorySection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[420px_minmax(0,1fr)]">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} variants={fadeUp} className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="Section 05 - Creator story"
            title="Hosting should feel like building a movement."
            description="From banner to location to the first joins, Ilaaka treats event creation like a creative act instead of a cold dashboard flow."
          />
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/events/new">Start an Activity</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={stagger}
          className="grid gap-4"
        >
          {creatorSteps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={fadeUp}
              className="grid gap-4 rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-[0_24px_60px_rgba(17,24,39,0.1)] md:grid-cols-[92px_minmax(0,1fr)_260px]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.5rem] bg-[rgba(200,102,63,0.12)] text-2xl font-semibold text-[var(--accent)]">
                {index + 1}
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--secondary)]">{step.kicker}</p>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-sm leading-7 text-muted">{step.description}</p>
              </div>
              <div className="rounded-[1.7rem] border border-[var(--line)] bg-[rgba(255,255,255,0.4)] p-4 dark:bg-[rgba(15,23,42,0.24)]">
                <div className="h-28 rounded-[1.4rem] bg-[linear-gradient(135deg,rgba(200,102,63,0.92)_0%,rgba(15,118,110,0.72)_100%)]" />
                <div className="mt-4 h-3 w-24 rounded-full bg-[rgba(23,18,14,0.1)] dark:bg-[rgba(255,255,255,0.1)]" />
                <div className="mt-3 h-3 w-40 rounded-full bg-[rgba(23,18,14,0.08)] dark:bg-[rgba(255,255,255,0.08)]" />
                <div className="mt-2 h-3 w-32 rounded-full bg-[rgba(23,18,14,0.08)] dark:bg-[rgba(255,255,255,0.08)]" />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
