import type { Metadata } from "next";

import { BlogFeed } from "@/components/sections/blog-feed";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Blog and Insights",
  description:
    "Technology insights and article feeds on AI, startups, climate-tech, fintech, cybersecurity, software, and digital transformation.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog and insights"
        title="Current technology signals for builders, founders, and impact-driven organizations."
        description="Browse curated technology articles and, when a NewsAPI key is configured, live updates across AI, startups, climate-tech, fintech, cybersecurity, software, and digital transformation."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technology articles"
            title="Global technology news with a practical innovation lens."
            description="The site fetches titles, sources, dates, short descriptions, images, and links only. Full article content remains with the original publisher."
          />
          <BlogFeed />
        </div>
      </section>
    </>
  );
}
