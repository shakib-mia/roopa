# Roopa Beauty Parlour (Next.js 14 + Tailwind 3 + Lenis)
npm install && npm run dev

Pages: / , /services , /bridal , /reviews , /contact
- Content (prices, packages, reviews, WhatsApp number): lib/data.js  (change WA)
- Navbar: transparent at top, solid plum after 24px of scroll (components/Navbar.jsx)
- Lenis, reveals and parallax re-initialise on every route change: components/SmoothScroll.jsx
- Reveals: data-reveal="up|wipe|line". Parallax: data-speed="0.1" on a child of the section.
- Respects prefers-reduced-motion.
# roopa
