import { Fraunces, Manrope } from 'next/font/google';
import 'lenis/dist/lenis.css';
import './globals.css';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const display = Fraunces({ subsets: ['latin'], variable: '--font-display', axes: ['opsz'] });
const body = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const metadata = {
  title: 'Roopa Beauty Parlour | Bridal makeup, facials, hair & henna',
  description: 'Bridal makeup, facials, hair spa, threading and mehndi by artists with 18 years of experience. Book on WhatsApp.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="bg-plum font-body text-blush antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
