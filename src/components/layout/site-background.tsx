export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[color:var(--obsidian)]" />
      <div className="nature-drift royal-canopy absolute inset-0 opacity-[0.22]" />
      <div className="topographic-lines ambient-drift absolute inset-0 opacity-[0.38]" />
      <div className="site-grid absolute inset-0 opacity-[0.58]" />
      <div className="film-grain absolute inset-0 opacity-[0.1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_4%,rgba(0,164,56,0.16),transparent_28rem),radial-gradient(circle_at_8%_86%,rgba(0,164,56,0.08),transparent_24rem),linear-gradient(180deg,rgba(3,5,4,0.18),#030504_72%)]" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--brand-green)]/24 to-transparent" />
      <div className="absolute bottom-24 right-0 h-px w-2/3 bg-gradient-to-r from-transparent via-[color:var(--champagne)]/14 to-transparent" />
      <div className="absolute -left-16 top-1/4 h-80 w-96 rotate-12 border border-[color:var(--line-green)]" />
      <div className="absolute -right-24 bottom-28 h-72 w-96 -rotate-12 border border-white/8" />
      <div className="absolute left-6 top-[34vh] hidden font-mono text-[0.62rem] uppercase tracking-[0.28em] text-white/18 lg:block">
        NG-LAG / 06.5244N
      </div>
      <div className="absolute bottom-[18vh] right-8 hidden font-mono text-[0.62rem] uppercase tracking-[0.28em] text-[color:var(--champagne)]/24 lg:block">
        Intelligence Network / 03.3792E
      </div>
    </div>
  );
}
