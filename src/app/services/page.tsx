import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveServices } from "@/components/sections/interactive-services";
import { PageHeader } from "@/components/ui/page-header";
import { createPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Explore NelviusGrey Tech capabilities across digital products, data systems, ClimateTech, MEL systems, AI automation and technology advisory.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
      <PageHeader
        eyebrow="Services"
        title="Capabilities for organisations that need technology to become operational infrastructure."
        description="Each service is designed around the problem it addresses, the deliverables it can produce, who it serves and how it connects to related capabilities."
        variant="systems"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <InteractiveServices showBrandMedia />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
