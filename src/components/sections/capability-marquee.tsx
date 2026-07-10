import { capabilityTicker } from "@/lib/constants";

export function CapabilityMarquee() {
  const items = [...capabilityTicker, ...capabilityTicker];

  return (
    <section className="overflow-hidden border-y border-white/10 bg-[#060806]/70 py-5">
      <div className="marquee-track flex w-max gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.28em] text-white/52">
        {items.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            <span>{item}</span>
            <span className="h-1.5 w-1.5 rounded-sm bg-[color:var(--brand-green)]" />
          </span>
        ))}
      </div>
    </section>
  );
}
