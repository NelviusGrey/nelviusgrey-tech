export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="site-grid absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(0,164,56,0.08),transparent_32%),linear-gradient(180deg,rgba(3,6,4,0.15),#030604_78%)]" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--brand-green)]/25 to-transparent" />
      <div className="absolute bottom-24 right-0 h-px w-2/3 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      <div className="absolute -left-20 top-1/3 h-64 w-80 rotate-12 border border-[color:var(--brand-green)]/10" />
      <div className="absolute -right-24 bottom-28 h-72 w-96 -rotate-12 border border-white/8" />
    </div>
  );
}
