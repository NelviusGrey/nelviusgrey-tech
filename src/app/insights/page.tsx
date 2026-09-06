import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { NewsExperience } from "@/components/news/news-experience";
import { PageHeader } from "@/components/ui/page-header";
import { insightCategories, publicInsights as insights } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";

export const metadata: Metadata = createPageMetadata({
  title: "Insights",
  description:
    "NelviusGrey Tech insights on digital product engineering, data systems, AI automation, social-impact technology and business systems.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
      <PageHeader
        eyebrow="Insights"
        title="Notes on building digital systems that survive beyond launch."
        description="Internally authored thinking about social impact technology, useful organisational data, practical AI and durable digital infrastructure."
        variant="editorial"
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
            NelviusGrey notes
          </p>
          <div className="no-scrollbar -mx-4 mt-6 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
            {insightCategories.map((category) => (
              <span key={category} className="shrink-0 rounded-md border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/58">
                {category}
              </span>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {insights.map((article) => (
              <Link prefetch={false} key={article.slug} href={`/insights/${article.slug}`} className="group border border-white/10 bg-[#060806] p-5 transition hover:-translate-y-1 hover:border-[color:var(--brand-green)]/40">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    unoptimized
                    className="object-cover opacity-[0.58] transition duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-green)]">
                  {article.category} / {article.readingTime}
                </p>
                <h2 className="mt-4 font-display text-3xl font-light tracking-normal text-white">
                  {article.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-white/58">{article.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NewsExperience />
    </>
  );
}
