import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { serviceCapabilities } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NelviusGrey Tech capabilities across digital products, data systems, ClimateTech, MEL systems, AI automation and technology advisory.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Capabilities for organisations that need technology to become operational infrastructure."
        description="Each service is designed around the problem it addresses, the deliverables it can produce, who it serves and how it connects to related capabilities."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-6">
          {serviceCapabilities.map((service, index) => (
            <Reveal
              key={service.slug}
              delay={index * 0.035}
              className="grid border border-white/10 bg-[#060806]/84 lg:grid-cols-[0.55fr_1.45fr]"
              id={service.slug}
            >
              <div className="border-b border-white/10 p-6 lg:border-b-0 lg:border-r">
                <div className="grid h-12 w-12 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)]">
                  <Icon name={service.icon} />
                </div>
                <p className="mt-8 font-mono text-xs text-[color:var(--brand-green)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-4 font-display text-4xl font-light tracking-[-0.06em] text-white">
                  {service.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-white/62">{service.summary}</p>
              </div>
              <div className="grid gap-8 p-6 md:grid-cols-2 xl:grid-cols-4">
                <div>
                  <p className="text-sm font-semibold text-white">Problems addressed</p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/56">
                    {service.problems.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Typical deliverables</p>
                  <ul className="mt-4 grid gap-2 text-sm text-white/56">
                    {service.deliverables.map((item) => (
                      <li key={item}>- {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Who it is for</p>
                  <p className="mt-4 text-sm leading-7 text-white/56">{service.audience}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Related capabilities</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.related.map((item) => (
                      <span key={item} className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/52">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link prefetch={false} href="/contact" className="mt-6 inline-flex text-sm font-semibold text-[color:var(--brand-green)]">
                    Discuss this service
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
