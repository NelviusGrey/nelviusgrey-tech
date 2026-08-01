import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { ProjectExhibition } from "@/components/sections/project-exhibition";
import { PageHeader } from "@/components/ui/page-header";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work",
  description:
    "Selected work and solution concepts from NelviusGrey Tech across ClimateTech, data systems, social impact, automation and web experiences.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Selected work and solution concepts, presented with honest context."
        description="A filterable index of product directions, data systems, climate-intelligence concepts, social-impact systems, business tools and web experiences."
        variant="gallery"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <ProjectExhibition />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
