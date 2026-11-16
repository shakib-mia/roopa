export default function Line({ children, d = 0 }) {
  return <span data-reveal="line" style={{ '--d': `${d}ms` }}><span>{children}</span></span>;
}
