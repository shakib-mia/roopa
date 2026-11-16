import PageHero from '@/components/PageHero';
import Line from '@/components/Line';
import CTA from '@/components/CTA';
import { serviceGroups } from '@/lib/data';

export const metadata = { title: 'Services and prices | Roopa Beauty Parlour' };

export default function Services() {
  return (
    <>
      <PageHero lines={['Services', 'and prices']}>Prices start at the amounts shown. Final price depends on length and design.</PageHero>
      <div className="mx-auto max-w-5xl px-6 pb-28 md:px-12 md:pb-36">
        {serviceGroups.map(([group, items]) => (
          <section key={group} className="pt-16 md:pt-24">
            <h2 className="font-display text-4xl font-light text-marigold md:text-5xl"><Line>{group}</Line></h2>
            <ul className="mt-6 divide-y divide-blush/15">
              {items.map(([name, desc, price], i) => (
                <li key={name} data-reveal="up" style={{ '--d': `${i * 60}ms` }} className="flex items-baseline justify-between gap-6 py-6 transition-colors hover:text-marigold">
                  <div><h3 className="font-display text-2xl md:text-3xl">{name}</h3><p className="mt-1 text-sm text-blush/60 md:text-base">{desc}</p></div>
                  <span className="whitespace-nowrap font-display text-xl md:text-2xl">{price}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <CTA />
    </>
  );
}
