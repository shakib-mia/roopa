'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function SmoothScroll({ children }) {
  const pathname = usePathname();
  const lenis = useRef(null);
  const layers = useRef([]);
  const io = useRef(null);
  const reduce = useRef(false);

  // Set up once for the whole site
  useEffect(() => {
    reduce.current = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce.current) return; // content stays visible, no animation
    const root = document.documentElement;
    root.classList.add('js');

    const l = (lenis.current = new Lenis({ lerp: 0.085, smoothWheel: true }));
    l.on('scroll', ({ scroll, limit }) => {
      root.style.setProperty('--scroll', scroll);
      root.style.setProperty('--progress', limit ? scroll / limit : 0);
      for (const el of layers.current) {
        const r = el.parentElement.getBoundingClientRect();
        if (r.bottom < -200 || r.top > innerHeight + 200) continue;
        el.style.transform = `translate3d(0, ${r.top * parseFloat(el.dataset.speed)}px, 0)`;
      }
    });

    let id;
    const raf = (t) => { l.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);

    io.current = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.current.unobserve(e.target); } }),
      { threshold: 0.18, rootMargin: '0px 0px -6% 0px' }
    );

    const onClick = (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      e.preventDefault();
      l.scrollTo(a.getAttribute('href'), { offset: -80, duration: 1.4 });
    };
    document.addEventListener('click', onClick);

    return () => {
      cancelAnimationFrame(id); l.destroy(); io.current.disconnect();
      document.removeEventListener('click', onClick); root.classList.remove('js');
    };
  }, []);

  // Re-run on every page change: jump to top, find new parallax layers and reveals
  useEffect(() => {
    if (reduce.current || !lenis.current) return;
    lenis.current.scrollTo(0, { immediate: true });
    layers.current = [...document.querySelectorAll('[data-speed]')];
    document.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => io.current.observe(el));
    lenis.current.resize();
  }, [pathname]);

  return children;
}
