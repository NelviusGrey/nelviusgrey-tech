import { ArrowRight, MessageCircle } from "lucide-react";

import { MagneticLink } from "@/components/animations/magnetic-link";
import { Reveal } from "@/components/animations/reveal";
import { BrandMark } from "@/components/ui/brand-mark";
import { HoneycombNetwork } from "@/components/visual/honeycomb-network";
import { siteConfig } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-[88rem] overflow-hidden border border-[color:var(--brand-green)]/24 bg-[#060806]/88 shadow-[var(--shadow-deep)]">
        <div className="relative p-8 sm:p-12 lg:p-16">
          <HoneycombNetwork activeIndex={4} className="absolute inset-0 min-h-0 border-0 opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#060806]/94 via-[#060806]/80 to-[#030504]/76" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--brand-green)]/12 blur-3xl" />
          <div className="travelling-line absolute left-0 right-0 top-0 h-px" />
          <div className="relative mb-10 flex items-center gap-4">
            <BrandMark compact />
            <span className="h-px flex-1 bg-gradient-to-r from-[color:var(--brand-green)]/45 to-transparent" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
            Start the conversation
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl font-light tracking-normal text-white sm:text-7xl">
            Have a problem worth solving?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
            Tell us what you are trying to improve. We will help you shape it into
            a practical digital system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticLink
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008]"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </MagneticLink>
            <MagneticLink
              href={siteConfig.links.whatsapp}
              external
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/12 px-6 text-sm font-semibold text-white hover:border-[color:var(--brand-green)]/50"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </MagneticLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
