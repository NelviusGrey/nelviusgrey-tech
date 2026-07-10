import type { Metadata } from "next";

import { SolutionCard } from "@/components/cards/solution-card";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { solutionAreas } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Thematic technology solution areas for business, climate, agriculture, social impact, humanitarian, government, data, AI, and digital infrastructure needs.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Solutions and thematic areas"
        title="Technology shaped around the sectors where better systems create real value."
        description="NelviusGrey Tech serves organizations working across business growth, social impact, climate resilience, agriculture, humanitarian programs, institutional transformation, data, AI, and digital infrastructure."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Where we work"
            title="From SME workflows to development-sector systems."
            description="Each thematic area includes common problems, how NelviusGrey Tech helps, and example solutions that can be adapted to the organization."
          />
          <div className="mt-12 grid gap-5">
            {solutionAreas.map((solution, index) => (
              <SolutionCard key={solution.title} solution={solution} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
