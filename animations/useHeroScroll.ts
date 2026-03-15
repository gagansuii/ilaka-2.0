'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useHeroScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const context = gsap.context(() => {
      gsap.set([headlineRef.current, bodyRef.current, ctaRef.current], { opacity: 0, y: 36 });

      gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            progressRef.current = self.progress;
            section.style.setProperty('--hero-progress', `${self.progress}`);
          }
        }
      })
        .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.22, ease: 'power2.out' }, 0.04)
        .to(bodyRef.current, { opacity: 1, y: 0, duration: 0.18, ease: 'power2.out' }, 0.12)
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.16, ease: 'power2.out' }, 0.16);
    }, section);

    return () => context.revert();
  }, []);

  return { sectionRef, headlineRef, bodyRef, ctaRef, progressRef };
}
