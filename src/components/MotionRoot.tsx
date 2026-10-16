'use client';
import { useEffect } from 'react';

export function MotionRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal], [data-step]'));
    if (reduce) {
      nodes.forEach(el => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    }, { threshold: 0.05, rootMargin: '0px 0px -4% 0px' });
    nodes.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
  return <>{children}</>;
}
