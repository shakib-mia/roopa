import Link from 'next/link';
import { MandalaOuter, MandalaInner } from '@/components/Mandala';
import Line from '@/components/Line';
import CTA from '@/components/CTA';
import { featured, quotes, waLink } from '@/lib/data';

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden px-6 md:px-12">
        <div className="absolute -right-[22vw] top-1/2 h-[min(95vw,820px)] w-[min(95vw,820px)] -translate-y-1/2 text-marigold/70">
          <div data-speed="-0.12" className="h-full w-full">
            <div className="mandala h-full w-full"><MandalaOuter /></div>
            <div className="mandala-rev absolute inset-[18%]"><MandalaInner /></div>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl pt-24">
          <h1 className="max-w-3xl font-display text-[clamp(3.2rem,9vw,8rem)] font-light leading-[0.95] tracking-tight">
            <Line>Glow that</Line><Line d={120}>feels like</Line><Line d={240}>home.</Line>
          </h1>
          <p data-reveal="up" style={{ '--d': '500ms' }} className="mt-8 max-w-md text-lg leading-relaxed text-blush/80">
            Bridal makeup, facials, hair and mehndi from artists who have been dressing Indian brides for 18 years.
          </p>
          <div data-reveal="up" style={{ '--d': '650ms' }} className="mt-10 flex flex-wrap gap-4">
            <a href={waLink('Hi Roopa, I would like to book an appointment')} className="rounded-full bg-marigold px-8 py-4 font-semibold text-ink transition hover:bg-gulaal hover:text-white">Book on WhatsApp</a>
            <Link href="/services" className="rounded-full border border-blush/40 px-8 py-4 font-semibold transition hover:border-marigold hover:text-marigold">See services</Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-marigold/30 py-5 font-display text-2xl italic text-marigold" aria-hidden="true">
        <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
          {[0, 1].map((k) => (
            <div key={k} className="flex gap-12">
              {['Bridal makeup', 'Kesar facial', 'Hair spa', 'Mehndi', 'Threading', 'Saree draping', 'Manicure'].map((t) => <span key={t + k}>{t}</span>)}
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-5xl px-6 py-28 md:px-12 md:py-36">
        <h2 className="font-display text-5xl font-light md:text-7xl"><Line>Most booked</Line></h2>
        <ul className="mt-12 divide-y divide-blush/15">
          {featured.map(([name, desc, price], i) => (
            <li key={name} data-reveal="up" style={{ '--d': `${i * 80}ms` }} className="flex items-baseline justify-between gap-6 py-7">
              <div><h3 className="font-display text-2xl md:text-3xl">{name}</h3><p className="mt-1 text-sm text-blush/60 md:text-base">{desc}</p></div>
              <span className="whitespace-nowrap font-display text-xl md:text-2xl">{price}</span>
            </li>
          ))}
        </ul>
        <Link data-reveal="up" href="/services" className="mt-10 inline-block font-semibold text-marigold underline underline-offset-8">View all services and prices</Link>
      </section>

      <section className="bg-blush px-6 py-28 text-ink md:px-12 md:py-36">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
          <h2 className="max-w-xl font-display text-5xl font-light leading-tight md:text-7xl"><Line>Your wedding,</Line><Line d={120}>your face.</Line></h2>
          <div data-reveal="up" className="max-w-sm">
            <p className="text-ink/70">Packages from ₹6,500, with a free trial look for every bride.</p>
            <Link href="/bridal" className="mt-6 inline-block rounded-full bg-ink px-8 py-4 font-semibold text-white transition hover:bg-gulaal">See bridal packages</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-28 md:px-12 md:py-36">
        <h2 className="font-display text-5xl font-light md:text-7xl"><Line>Kind words</Line></h2>
        <div className="mt-14 grid gap-12 md:grid-cols-3">
          {quotes.slice(0, 3).map(([who, tag, text], i) => (
            <figure key={who} data-reveal="up" style={{ '--d': `${i * 120}ms` }}>
              <blockquote className="font-display text-xl leading-relaxed">“{text}”</blockquote>
              <figcaption className="mt-5 text-sm text-blush/60"><span className="font-semibold text-marigold">{who}</span>, {tag}</figcaption>
            </figure>
          ))}
        </div>
        <Link data-reveal="up" href="/reviews" className="mt-12 inline-block font-semibold text-marigold underline underline-offset-8">Read more reviews</Link>
      </section>
      <CTA />
    </>
  );
}
