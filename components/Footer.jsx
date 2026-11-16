import Link from 'next/link';
import { links } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-blush/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <p className="font-display text-3xl">Roopa</p>
          <p className="mt-2 text-sm text-blush/60">Open daily, 10 am to 8 pm. Add your address and phone here.</p>
        </div>
        <ul className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {links.map(([href, label]) => <li key={href}><Link href={href} className="hover:text-marigold">{label}</Link></li>)}
        </ul>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-xs text-blush/40">© 2026 Roopa Beauty Parlour</p>
    </footer>
  );
}
