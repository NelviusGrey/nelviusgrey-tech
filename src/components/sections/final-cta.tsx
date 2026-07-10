import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { siteConfig } from "@/lib/constants";

export function FinalCta() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="mx-auto max-w-[88rem] overflow-hidden border border-[color:var(--brand-green)]/24 bg-[#060806]/88 p-8 sm:p-12 lg:p-16">
        <div className="relative">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[color:var(--brand-green)]/12 blur-3xl" />
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
            Start the conversation
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-5xl font-light tracking-[-0.07em] text-white sm:text-7xl">
            Have a problem worth solving?
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
            Tell us what you are trying to improve. We will help you shape it into
            a practical digital system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008]"
            >
              Start a Conversation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/12 px-6 text-sm font-semibold text-white hover:border-[color:var(--brand-green)]/50"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
