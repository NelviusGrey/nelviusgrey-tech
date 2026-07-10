import type { Metadata } from "next";

import { PageHeader } from "@/components/ui/page-header";
import { legalContent, siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for NelviusGrey Tech website enquiries and services.",
};

export default function PrivacyPage() {
  const content = legalContent.privacy;

  return (
    <>
      <PageHeader
        eyebrow={`Updated ${content.updated}`}
        title={content.title}
        description="A plain-language summary of how NelviusGrey Tech handles website enquiries and project-contact information."
      />
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
            {content.sections.map((section) => (
              <article key={section.title} className="border-t border-white/10 pt-7">
                <h2 className="font-display text-3xl font-light tracking-[-0.05em] text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-8 text-white/66">{section.body}</p>
              </article>
            ))}
          </div>
          <a
            href={siteConfig.links.privacyPolicy}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex text-sm font-semibold text-[color:var(--brand-green)]"
          >
            Download legacy policy document
          </a>
        </div>
      </section>
    </>
  );
}
