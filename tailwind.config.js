/** Design tokens: no raw hex in components */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        plum: '#34102B',      // base / dark surface
        ink: '#1E0A19',       // text on light
        gulaal: '#E4457B',    // action, highlights
        marigold: '#F4A300',  // mandala, accents on dark
        blush: '#FBEAEE',     // light surface
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
