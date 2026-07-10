import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/ui/page-header";
import { getInsight, insights } from "@/lib/constants";

export function generateStaticParams() {
  return insights.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    openGraph: {
      title: article.title,
      description: article.description,
      images: [{ url: article.cover, alt: article.title }],
      type: "article",
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getInsight(slug);

  if (!article) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: article.author,
    datePublished: article.date,
  };

  return (
    <>
      <PageHeader
        eyebrow={`${article.category} / ${article.readingTime}`}
        title={article.title}
        description={article.description}
      />

      <article className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden border border-white/10 bg-[#060806]">
            <Image
              src={article.cover}
              alt={article.title}
              fill
              sizes="100vw"
              unoptimized
              priority
              className="object-cover opacity-[0.66]"
            />
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/42">
              {article.author} / {article.date}
            </p>
            <div className="mt-8 grid gap-7">
              {article.body.map((paragraph) => (
                <p key={paragraph} className="text-xl leading-10 text-white/72">
                  {paragraph}
                </p>
              ))}
            </div>
            <Link href="/insights" className="mt-10 inline-flex text-sm font-semibold text-[color:var(--brand-green)]">
              Back to insights
            </Link>
          </div>
        </div>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
