'use client';

import { motion } from 'framer-motion';
import { fadeUp } from '@/animations/motion';
import { SectionHeading } from '@/components/landing/SectionHeading';
import { growthNodes } from '@/utils/landing-data';

const growthLinks = [
  ['host', 'join-a'],
  ['host', 'join-b'],
  ['join-a', 'skillshare'],
  ['join-a', 'run-club'],
  ['join-b', 'art-night'],
  ['skillshare', 'circle-a'],
  ['run-club', 'circle-b'],
  ['run-club', 'circle-c'],
  ['art-night', 'circle-d']
] as const;

const nodeMap = new Map(growthNodes.map((node) => [node.id, node]));

export function ViralLoopSection() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[420px_minmax(0,1fr)] lg:items-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-10%' }} variants={fadeUp}>
          <SectionHeading
            eyebrow="Section 07 - Viral loop"
            title="One host can light up an entire neighborhood graph."
            description="A single run club becomes a group of regulars. Those regulars host their own workshops, meetups, and rituals. Ilaaka grows through visible participation."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[460px] overflow-hidden rounded-[2.4rem] border border-[var(--line)] bg-[var(--surface-strong)] shadow-[0_24px_70px_rgba(17,24,39,0.12)]"
        >
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {growthLinks.map(([fromId, toId]) => {
              const from = nodeMap.get(fromId);
              const to = nodeMap.get(toId);
              if (!from || !to) return null;
              return (
                <motion.line
                  key={`${fromId}-${toId}`}
                  x1={from.x}
                  y1={from.y}
                  x2={to.x}
                  y2={to.y}
                  stroke="rgba(200,102,63,0.32)"
                  strokeWidth="0.4"
                  strokeDasharray="2 1.2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              );
            })}
          </svg>

          {growthNodes.map((node, index) => (
            <motion.div
              key={node.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="absolute"
              style={{ left: node.x, top: node.y, transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <div className="absolute inset-0 animate-ping rounded-full bg-[rgba(200,102,63,0.16)]" />
                <div className="relative rounded-full border border-white/50 bg-[rgba(255,252,247,0.82)] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] shadow-[0_18px_50px_rgba(17,24,39,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[rgba(15,23,42,0.42)]">
                  {node.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
