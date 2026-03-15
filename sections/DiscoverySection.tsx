'use client';

import { motion } from 'framer-motion';
import { CalendarClock, MapPin } from 'lucide-react';
import { fadeUp, stagger } from '@/animations/motion';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { demoEvents } from '@/utils/landing-data';

export function DiscoverySection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-start">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} variants={fadeUp}>
          <SectionHeading
            eyebrow="Section 02 - Discovery moment"
            title="The city starts speaking in invitations."
            description="Pins appear, event cards rise, and the interface rewards curiosity without overwhelming the map."
          />
          <div className="mt-8 space-y-3">
            <div className="info-pill">Soft pin pulses</div>
            <div className="info-pill">3D tilt cards</div>
            <div className="info-pill">Progressive details</div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-2"
        >
          {demoEvents.map((event, index) => (
            <motion.article
              key={event.title}
              variants={fadeUp}
              whileHover={{ y: -10, rotateX: index % 2 === 0 ? 4 : -4, rotateY: index % 2 === 0 ? -5 : 5 }}
              transition={{ type: 'spring', stiffness: 220, damping: 20 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-5 shadow-[0_26px_70px_rgba(17,24,39,0.12)]"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 opacity-70" style={{ background: `radial-gradient(circle at top right, ${event.accent}33, transparent 55%)` }} />
              <div className="relative space-y-5">
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ background: `${event.accent}22`, color: event.accent }}>
                    {event.label}
                  </span>
                  <span className="rounded-full border border-[var(--line)] bg-[rgba(255,255,255,0.46)] px-3 py-1 text-xs font-medium dark:bg-[rgba(15,23,42,0.24)]">
                    Preview
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{event.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{event.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="info-pill px-3 py-1.5 text-xs">
                    <CalendarClock className="h-3.5 w-3.5" style={{ color: event.accent }} />
                    {event.time}
                  </span>
                  <span className="info-pill px-3 py-1.5 text-xs">
                    <MapPin className="h-3.5 w-3.5" style={{ color: event.accent }} />
                    Near you
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
