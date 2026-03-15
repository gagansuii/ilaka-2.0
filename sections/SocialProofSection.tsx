'use client';

import { motion } from 'framer-motion';
import { fadeUp, stagger } from '@/animations/motion';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { socialStats, testimonials } from '@/utils/landing-data';

export function SocialProofSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-[1440px] space-y-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} variants={fadeUp}>
          <SectionHeading
            eyebrow="Section 06 - Social proof"
            title="Local momentum becomes visible fast."
            description="A few strong hosts create compounding trust. Once people see real activity near them, the product starts to feel inevitable."
            align="center"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={stagger}
          className="grid gap-4 md:grid-cols-4"
        >
          {socialStats.map((stat) => (
            <motion.article key={stat.label} variants={fadeUp} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface-strong)] p-6 text-center shadow-[0_24px_60px_rgba(17,24,39,0.1)]">
              <p className="font-[family:var(--font-fraunces)] text-5xl leading-none text-[var(--accent)]">{stat.value}</p>
              <p className="mt-4 text-sm leading-6 text-muted">{stat.label}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          variants={stagger}
          className="grid gap-4 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article key={testimonial.name} variants={fadeUp} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 shadow-[0_24px_60px_rgba(17,24,39,0.08)]">
              <p className="text-lg leading-8">{`"${testimonial.quote}"`}</p>
              <div className="mt-6 border-t border-[var(--line)] pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted">{testimonial.role}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
