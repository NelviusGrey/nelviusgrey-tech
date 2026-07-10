import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { Icon } from "@/components/ui/icon";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore NelviusGrey Tech services across web development, custom IT infrastructure, dashboards, climate-tech, NGO systems, and business automation.",
};

const serviceImages = [
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1300&q=82",
  "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1300&q=82",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1300&q=82",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1300&q=82",
  "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1300&q=82",
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1300&q=82",
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Technology services for organizations that need reliable systems, clearer data, and better digital operations."
        description="NelviusGrey Tech helps teams design, build, document, launch, and improve practical digital tools across business, impact, climate, agriculture, development, and institutional contexts."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Capabilities"
            title="Six service lines designed to work together."
            description="Each service can stand alone or combine into a broader digital transformation program."
          />
          <div className="mt-12 grid gap-8">
            {services.map((service, index) => (
              <Reveal
                key={service.title}
                delay={index * 0.04}
                className="grid overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative min-h-72">
                  <Image
                    src={serviceImages[index]}
                    alt={service.title}
                    fill
                    unoptimized
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover opacity-[0.78]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-transparent" />
                  <div className="absolute left-5 top-5 grid h-12 w-12 place-items-center rounded-md border border-[color:var(--brand-green)]/30 bg-black/45 text-[color:var(--brand-green)] backdrop-blur">
                    <Icon name={service.icon} />
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-sm text-[color:var(--brand-green)]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-white/66">{service.summary}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {service.deliverables.map((deliverable) => (
                      <div
                        key={deliverable}
                        className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/64"
                      >
                        {deliverable}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
