// Rangoli-style mandala built from rotated petals. Colours come from currentColor.
function Ring({ count, r, rx, ry, sw = 1.4 }) {
  return Array.from({ length: count }, (_, i) => (
    <ellipse key={i} cx="300" cy={300 - r} rx={rx} ry={ry} fill="none" stroke="currentColor"
      strokeWidth={sw} transform={`rotate(${(360 / count) * i} 300 300)`} />
  ));
}
export function MandalaOuter() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden="true">
      <Ring count={24} r={250} rx={14} ry={40} />
      <Ring count={16} r={200} rx={22} ry={58} />
      <circle cx="300" cy="300" r="290" fill="none" stroke="currentColor" strokeDasharray="2 9" strokeWidth="2" />
    </svg>
  );
}
export function MandalaInner() {
  return (
    <svg viewBox="0 0 600 600" className="h-full w-full" aria-hidden="true">
      <Ring count={12} r={130} rx={26} ry={64} sw={1.8} />
      <Ring count={8} r={70} rx={20} ry={46} sw={1.8} />
      <circle cx="300" cy="300" r="14" fill="currentColor" />
    </svg>
  );
}
