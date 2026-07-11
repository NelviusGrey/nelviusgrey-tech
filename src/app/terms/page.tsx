import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { legalContent } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Website terms and conditions for NelviusGrey Tech.",
};

export default function TermsPage() {
  const content = legalContent.terms;

  return (
    <>
      <PageHeader
        eyebrow={`Updated ${content.updated}`}
        title={content.title}
        description="Terms for using the NelviusGrey Tech website and interpreting public project and service information."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
            {content.sections.map((section) => (
              <article key={section.title} className="border-t border-white/10 pt-7">
                <h2 className="font-display text-3xl font-light tracking-normal text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-white/66">{section.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
