"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { BrandPhoto } from "@/components/media/brand-photo";
import { HoneycombNetwork } from "@/components/visual/honeycomb-network";
import { Icon } from "@/components/ui/icon";
import { serviceCapabilities, type ServiceCapability } from "@/lib/constants";
import { cn } from "@/lib/utils";

function ServiceDetail({
  service,
  index,
  compact,
}: {
  service: ServiceCapability;
  index: number;
  compact?: boolean;
}) {
  return (
    <motion.div
      key={service.slug}
      initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.26em] text-[color:var(--brand-green)]">
            Capability {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-4 max-w-3xl font-display text-4xl font-light leading-tight tracking-normal text-white sm:text-5xl">
            {service.title}
          </h3>
        </div>
        <div className="hidden h-14 w-14 shrink-0 place-items-center border border-[color:var(--line-green)] bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)] sm:grid">
          <Icon name={service.icon} />
        </div>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-8 text-white/66">{service.summary}</p>

      <div className={cn("mt-8 grid gap-5", compact ? "md:grid-cols-2" : "md:grid-cols-3")}>
        <div>
          <p className="text-sm font-semibold text-white">Problems addressed</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/56">
            {service.problems.slice(0, compact ? 3 : 4).map((item) => (
              <li key={item} className="border-l border-[color:var(--line-green)] pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Typical deliverables</p>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/56">
            {service.deliverables.slice(0, compact ? 4 : 5).map((item) => (
              <li key={item} className="border-l border-white/10 pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {!compact && (
          <div>
            <p className="text-sm font-semibold text-white">Who it is for</p>
            <p className="mt-4 text-sm leading-7 text-white/56">{service.audience}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {service.related.slice(0, 4).map((item) => (
            <span key={item} className="border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-white/54">
              {item}
            </span>
          ))}
        </div>
        <Link
          prefetch={false}
          href={compact ? `/services#${service.slug}` : "/contact"}
          data-cursor="Explore"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--brand-green)]"
        >
          {compact ? "Explore capability" : "Discuss this service"}
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.div>
  );
}

export function InteractiveServices({
  compact = false,
  showBrandMedia = false,
}: {
  compact?: boolean;
  showBrandMedia?: boolean;
}) {
  const [active, setActive] = useState(0);
  const activeService = serviceCapabilities[active];

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="grid gap-2">
          {serviceCapabilities.map((service, index) => {
            const selected = index === active;

            return (
              <button
                key={service.slug}
                id={service.slug}
                type="button"
                onClick={() => setActive(index)}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                data-cursor="Open"
                className={cn(
                  "group grid grid-cols-[2.75rem_1fr_auto] items-center gap-4 border px-4 py-4 text-left transition duration-300",
                  selected
                    ? "border-[color:var(--line-green)] bg-[color:var(--brand-green-soft)] text-white shadow-[0_0_42px_rgba(0,164,56,0.08)]"
                    : "border-white/10 bg-white/[0.025] text-white/58 hover:border-white/22 hover:text-white",
                )}
                aria-pressed={selected}
              >
                <span className="font-mono text-xs text-[color:var(--brand-green)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl font-light leading-tight tracking-normal">
                  {service.title}
                </span>
                <span className="h-px w-8 bg-white/12 transition group-hover:bg-[color:var(--brand-green)]/60" />
              </button>
            );
          })}
        </div>

        <div className="relative min-h-[32rem] overflow-hidden border border-white/10 bg-[color:var(--carbon)]/82 p-5 sm:p-8">
          <HoneycombNetwork activeIndex={active} compact={compact} className="absolute inset-0 min-h-0 border-0 opacity-55" />
          <div className="absolute inset-0 bg-gradient-to-br from-[color:var(--carbon)] via-[rgba(7,9,8,0.78)] to-[rgba(3,5,4,0.5)]" />
          <AnimatePresence mode="wait">
            <ServiceDetail service={activeService} index={active} compact={compact} />
          </AnimatePresence>
        </div>
      </div>

      {showBrandMedia && (
        <BrandPhoto
          mediaKey="cybersecurityAnalysis"
          className="mt-8 min-h-[26rem] sm:min-h-[34rem] lg:min-h-[42rem]"
          sizes="(max-width: 1024px) 100vw, 88rem"
        />
      )}
    </div>
  );
}
