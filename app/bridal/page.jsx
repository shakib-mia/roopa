import PageHero from '@/components/PageHero';
import Line from '@/components/Line';
import CTA from '@/components/CTA';
import { bridal, steps, waLink } from '@/lib/data';

export const metadata = { title: 'Bridal packages | Roopa Beauty Parlour' };

export default function Bridal() {
  return (
    <>
      <PageHero lines={['Your wedding,', 'your face.']}>Every bride gets a free trial look two weeks before the date. We travel to your venue within the city.</PageHero>

      <section className="bg-blush px-6 py-28 text-ink md:px-12 md:py-36">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {bridal.map(([name, desc, price, hot], i) => (
            <article key={name} data-reveal="wipe" style={{ '--d': `${i * 150}ms` }}
              className={`flex flex-col justify-between rounded-3xl p-8 md:p-10 ${hot ? 'bg-plum text-blush md:-translate-y-6' : 'bg-white'}`}>
              <div><h2 className="font-display text-3xl">{name}</h2><p className={`mt-3 ${hot ? 'text-blush/75' : 'text-ink/65'}`}>{desc}</p></div>
              <div className="mt-12">
                <p className={`font-display text-4xl ${hot ? 'text-marigold' : 'text-gulaal'}`}>{price}</p>
                <a href={waLink(`Hi Roopa, I'm interested in the ${name} bridal package.`)} className={`mt-5 inline-block rounded-full px-6 py-3 text-sm font-semibold ${hot ? 'bg-marigold text-ink' : 'bg-ink text-white'}`}>Ask about dates</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-28 md:px-12 md:py-36">
        <h2 className="font-display text-5xl font-light md:text-6xl"><Line>How it works</Line></h2>
        <ol className="mt-12 space-y-10">
          {steps.map(([t, d], i) => (
            <li key={t} data-reveal="up" className="flex gap-6">
              <span className="font-display text-5xl text-marigold">{i + 1}</span>
              <div><h3 className="font-display text-2xl md:text-3xl">{t}</h3><p className="mt-2 max-w-lg text-blush/70">{d}</p></div>
            </li>
          ))}
        </ol>
      </section>
      <CTA />
    </>
  );
}
