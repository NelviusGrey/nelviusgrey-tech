export function SiteBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#030504]" />
      <div className="nature-drift absolute inset-0 opacity-[0.18]">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=80')] bg-cover bg-center" />
      </div>
      <div className="site-grid absolute inset-0 opacity-[0.6]" />
      <div className="film-grain absolute inset-0 opacity-[0.08]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_5%,rgba(0,164,56,0.12),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(0,164,56,0.08),transparent_28%),linear-gradient(180deg,rgba(3,5,4,0.15),#030504_78%)]" />
      <div className="absolute left-0 top-24 h-px w-full bg-gradient-to-r from-transparent via-[color:var(--brand-green)]/20 to-transparent" />
      <div className="absolute bottom-24 right-0 h-px w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-16 top-1/4 h-80 w-96 rotate-12 border border-[color:var(--brand-green)]/10" />
      <div className="absolute -right-24 bottom-28 h-72 w-96 -rotate-12 border border-white/8" />
    </div>
  );
}
