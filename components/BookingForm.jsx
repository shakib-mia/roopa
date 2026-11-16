'use client';
import { useState } from 'react';
import { serviceGroups, waLink } from '@/lib/data';

const options = serviceGroups.flatMap(([, items]) => items.map(([n]) => n)).concat('Bridal package');
const field = 'w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink focus:border-gulaal';

export default function BookingForm() {
  const [f, setF] = useState({ name: '', service: options[0], date: '' });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const ready = f.name.trim().length > 1;
  const href = waLink(`Hi Roopa, I'm ${f.name}. I'd like to book: ${f.service}${f.date ? ` on ${f.date}` : ''}.`);

  return (
    <div className="space-y-5 rounded-3xl bg-blush p-8 text-ink md:p-10">
      <div><label htmlFor="n" className="mb-2 block text-sm font-semibold">Your name</label>
        <input id="n" value={f.name} onChange={set('name')} className={field} autoComplete="name" /></div>
      <div><label htmlFor="s" className="mb-2 block text-sm font-semibold">Service</label>
        <select id="s" value={f.service} onChange={set('service')} className={field}>{options.map((o) => <option key={o}>{o}</option>)}</select></div>
      <div><label htmlFor="d" className="mb-2 block text-sm font-semibold">Preferred date</label>
        <input id="d" type="date" value={f.date} onChange={set('date')} className={field} /></div>
      <a href={ready ? href : undefined} aria-disabled={!ready}
        className={`block rounded-full px-8 py-4 text-center font-semibold text-white transition ${ready ? 'bg-gulaal hover:bg-plum' : 'cursor-not-allowed bg-ink/30'}`}>
        Send request on WhatsApp
      </a>
      {!ready && <p className="text-sm text-ink/60">Enter your name to continue.</p>}
    </div>
  );
}
