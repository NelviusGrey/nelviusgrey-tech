import { CapabilityMarquee } from "@/components/sections/capability-marquee";
import { Reveal } from "@/components/animations/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveServices } from "@/components/sections/interactive-services";
import { ImmersiveWork } from "@/components/sections/immersive-work";
import { BrandStatementSystem, ProcessJourney } from "@/components/sections/narrative-systems";
import { FounderSignal, InsightSignalRail } from "@/components/sections/editorial-systems";
import { SectorSwitcher } from "@/components/sections/sector-switcher";
import { SectionHeading } from "@/components/ui/section-heading";

export function HomeSections() {
  return (
    <>
      <ImmersiveWork />

      <BrandStatementSystem />

      <CapabilityMarquee />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <SectionHeading
              eyebrow="Core capabilities"
              title="From operational pressure to a system people can use."
              description="Product thinking, data structure, interface design and implementation are treated as one connected problem."
            />
          </Reveal>
          <div className="mt-12">
            <InteractiveServices compact />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <SectionHeading
              eyebrow="Sector solutions"
              title="Technology shaped around real operating environments."
              description="Explore how the challenge, workflow and solution direction change across sectors."
            />
          </Reveal>
          <div className="mt-12">
            <SectorSwitcher />
          </div>
        </div>
      </section>

      <ProcessJourney />

      <FounderSignal />
      <InsightSignalRail />

      <FinalCta />
    </>
  );
}
