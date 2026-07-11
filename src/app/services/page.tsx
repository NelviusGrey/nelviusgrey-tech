import type { Metadata } from "next";

import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveServices } from "@/components/sections/interactive-services";
import { PageHeader } from "@/components/ui/page-header";

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
        <div className="mx-auto max-w-[88rem]">
          <InteractiveServices />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
