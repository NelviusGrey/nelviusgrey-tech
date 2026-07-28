import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { SectorSwitcher } from "@/components/sections/sector-switcher";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { sectorSolutions } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry and operational solution areas for climate, NGOs, agriculture, financial services, SMEs and public institutions.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions"
        title="Sector-aware technology for the operational challenges behind the interface."
        description="Solutions are organised by industry and operational problem, not by generic service labels. The goal is to shape systems around context."
        variant="systems"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectorSwitcher showBrandMedia />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Solution map"
            title="Every sector has a different path from data to decisions."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {sectorSolutions.map((sector) => (
              <article key={sector.slug} className="border border-white/10 bg-white/[0.025] p-6">
                <h2 className="font-display text-3xl font-light tracking-normal text-white">{sector.title}</h2>
                <p className="mt-4 text-sm leading-7 text-white/62">{sector.challenge}</p>
                <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--brand-green)]">
                  Example workflow
                </p>
                <p className="mt-3 text-sm leading-7 text-white/56">{sector.workflow}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
