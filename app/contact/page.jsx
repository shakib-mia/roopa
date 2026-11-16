import PageHero from '@/components/PageHero';
import BookingForm from '@/components/BookingForm';

export const metadata = { title: 'Book an appointment | Roopa Beauty Parlour' };

export default function Contact() {
  return (
    <>
      <PageHero lines={['Book your', 'appointment']}>Fill in the form and we will continue on WhatsApp to confirm your slot.</PageHero>
      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 md:grid-cols-2 md:px-12 md:pb-36">
        <div data-reveal="up" className="space-y-8 text-lg">
          <div><h2 className="font-display text-2xl text-marigold">Hours</h2><p className="mt-2">Open daily, 10 am to 8 pm</p><p className="text-blush/70">Walk-ins welcome. Bridal needs 2 weeks’ notice.</p></div>
          <div><h2 className="font-display text-2xl text-marigold">Address</h2><p className="mt-2 text-blush/70">Add your shop address here.</p></div>
          <div><h2 className="font-display text-2xl text-marigold">Phone</h2><p className="mt-2 text-blush/70">Add your phone number here.</p></div>
        </div>
        <div data-reveal="up" style={{ '--d': '150ms' }}><BookingForm /></div>
      </section>
    </>
  );
}
