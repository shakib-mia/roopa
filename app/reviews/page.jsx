import PageHero from '@/components/PageHero';
import CTA from '@/components/CTA';
import { quotes } from '@/lib/data';

export const metadata = { title: 'Reviews | Roopa Beauty Parlour' };

export default function Reviews() {
  return (
    <>
      <PageHero lines={['Kind words']}>From brides, regulars and the aunties who noticed.</PageHero>
      <section className="mx-auto grid max-w-6xl gap-x-12 gap-y-16 px-6 pb-28 md:grid-cols-2 md:px-12 md:pb-36">
        {quotes.map(([who, tag, text], i) => (
          <figure key={who} data-reveal="up" style={{ '--d': `${(i % 2) * 120}ms` }} className="border-t border-marigold/40 pt-8">
            <blockquote className="font-display text-2xl leading-relaxed">“{text}”</blockquote>
            <figcaption className="mt-5 text-sm text-blush/60"><span className="font-semibold text-marigold">{who}</span>, {tag}</figcaption>
          </figure>
        ))}
      </section>
      <CTA />
    </>
  );
}
