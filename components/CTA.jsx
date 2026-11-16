import Line from './Line';
import { waLink } from '@/lib/data';

export default function CTA() {
  return (
    <section className="bg-gulaal px-6 py-28 text-white md:px-12 md:py-36">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">
        <h2 className="font-display text-5xl font-light leading-tight md:text-7xl"><Line>Ready when</Line><Line d={120}>you are.</Line></h2>
        <a data-reveal="up" href={waLink('Hi Roopa, I would like to book an appointment')}
          className="self-start rounded-full bg-white px-10 py-5 text-lg font-semibold text-ink transition hover:bg-marigold">Book on WhatsApp</a>
      </div>
    </section>
  );
}
