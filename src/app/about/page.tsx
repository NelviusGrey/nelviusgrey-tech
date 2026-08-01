import type { Metadata } from "next";

import { Reveal } from "@/components/animations/reveal";
import { BrandPhoto } from "@/components/media/brand-photo";
import { AboutNetwork } from "@/components/sections/about-network";
import { FinalCta } from "@/components/sections/final-cta";
import { FounderSignal } from "@/components/sections/editorial-systems";
import { ProcessJourney } from "@/components/sections/narrative-systems";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { values } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "Learn about NelviusGrey Tech, its Lagos roots, founder story, mission, values and approach to responsible innovation.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NelviusGrey Tech"
        title="A Lagos-rooted technology studio building systems for African realities and global ambition."
        description="NelviusGrey Tech designs practical, intelligent and scalable technology that helps organisations operate smarter, understand their data and create meaningful real-world outcomes."
        variant="editorial"
      />

      <AboutNetwork />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Brand origin"
              title="Built for work that sits between technology, people, data and change."
              description="The company exists for organisations that need digital systems to do more than look impressive. The work is about clarity, adoption, evidence, and tools that remain useful after launch day."
            />
          </Reveal>
          <BrandPhoto
            mediaKey="companyGroupPortrait"
            className="min-h-[32rem] lg:min-h-[40rem]"
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority
          />
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-5 lg:grid-cols-2">
          <Reveal className="border border-white/10 bg-white/[0.025] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Mission
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              To design practical, intelligent and scalable technology that helps
              organisations operate smarter, understand their data and create meaningful
              real-world outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="border border-white/10 bg-white/[0.025] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Vision
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              To become a trusted African technology and innovation partner for
              organisations building stronger businesses, communities and institutions.
            </p>
          </Reveal>
        </div>
      </section>

      <FounderSignal />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Operating principles"
            title="Responsible innovation is not a slogan. It is a way of making decisions."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.035} className="border border-white/10 bg-white/[0.025] p-5 text-lg text-white/78">
                {value}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessJourney />

      <FinalCta />
    </>
  );
}
