import { MandalaOuter } from './Mandala';
import Line from './Line';

export default function PageHero({ title, lines, children }) {
  return (
    <section className="relative flex min-h-[62svh] items-end overflow-hidden px-6 pb-16 pt-36 md:px-12 md:pb-24">
      <div className="absolute -right-[18vw] top-1/2 h-[min(80vw,620px)] w-[min(80vw,620px)] -translate-y-1/2 text-marigold/50">
        <div data-speed="-0.1" className="h-full w-full"><div className="mandala h-full w-full"><MandalaOuter /></div></div>
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <h1 className="max-w-3xl font-display text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.98] tracking-tight">
          {(lines || [title]).map((l, i) => <Line key={l} d={i * 120}>{l}</Line>)}
        </h1>
        {children && <p data-reveal="up" style={{ '--d': '350ms' }} className="mt-6 max-w-lg text-lg text-blush/75">{children}</p>}
      </div>
    </section>
  );
}
