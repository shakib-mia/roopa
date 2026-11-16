'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { links, waLink } from '@/lib/data';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);

  const solid = scrolled || open;
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? 'bg-plum shadow-lg shadow-ink/30' : 'bg-transparent'}`}>
      <div className="progress absolute bottom-0 left-0 h-0.5 w-full bg-marigold" aria-hidden="true" />
      <div className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 md:px-12 ${solid ? 'py-3' : 'py-5'}`}>
        <Link href="/" className="font-display text-2xl font-semibold text-blush">Roopa</Link>

        <nav className="hidden items-center gap-8 text-sm md:flex" aria-label="Main">
          {links.map(([href, label]) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined}
              className={`transition-colors hover:text-marigold ${pathname === href ? 'text-marigold' : ''}`}>{label}</Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={waLink('Hi Roopa, I would like to book an appointment')}
            className="rounded-full bg-gulaal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-marigold hover:text-ink">Book now</a>
          <button onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label="Menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden">
            <span className={`h-0.5 w-6 bg-blush transition ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-blush transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-blush transition ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <nav id="mobile-menu" aria-label="Mobile"
        className={`grid overflow-hidden bg-plum transition-all duration-500 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="min-h-0 px-6">
          {links.map(([href, label]) => (
            <li key={href}><Link href={href} className="block border-t border-blush/10 py-4 font-display text-2xl">{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
