import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { Icon } from "@/components/ui/icon";
import { serviceLandingHref, type serviceCapabilities } from "@/lib/constants";

type Service = (typeof serviceCapabilities)[number];

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal
      delay={index * 0.04}
      className="glass-panel group flex h-full flex-col rounded-lg p-6 transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/40"
    >
      <div className="mb-7 grid h-11 w-11 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)] transition group-hover:shadow-[0_0_28px_var(--brand-glow)]">
        <Icon name={service.icon} className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-white">{service.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-white/62">{service.summary}</p>
      <Link
        prefetch={false}
        href={serviceLandingHref(service.slug)}
        className="mt-7 text-sm font-semibold text-[color:var(--brand-green)] transition hover:text-white"
      >
        View deliverables
      </Link>
    </Reveal>
  );
}
