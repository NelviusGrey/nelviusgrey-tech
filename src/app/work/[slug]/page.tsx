import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { getWorkCase, workCases } from "@/lib/constants";

export function generateStaticParams() {
  return workCases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkCase(slug);

  if (!item) {
    return {};
  }

  return {
    title: item.title,
    description: item.summary,
    openGraph: {
      title: `${item.title} | NelviusGrey Tech`,
      description: item.summary,
      images: [{ url: item.image, alt: item.title }],
    },
  };
}

export default async function WorkCasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getWorkCase(slug);

  if (!item) {
    notFound();
  }

  const sections = [
    ["Context", item.context],
    ["Challenge", item.challenge],
    ["Approach", item.approach],
    ["System or product delivered", item.delivered],
    ["Lessons", item.lessons],
  ] as const;

  return (
    <>
      <PageHeader eyebrow={item.category} title={item.title} description={item.summary} />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="relative min-h-[34rem] overflow-hidden border border-white/10 bg-[#060806]">
            <Image
              src={item.image}
              alt={`${item.title} conceptual visual`}
              fill
              sizes="100vw"
              unoptimized
              priority
              className="object-cover opacity-[0.62]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-[#030504]/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {item.capabilities.map((capability) => (
                <span key={capability} className="rounded-md border border-white/10 bg-black/35 px-3 py-1 text-xs text-white/68 backdrop-blur">
                  {capability}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[72rem] gap-5">
          {sections.map(([title, body]) => (
            <article key={title} className="grid gap-5 border-t border-white/10 py-8 md:grid-cols-[16rem_1fr]">
              <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
                {title}
              </h2>
              <p className="text-lg leading-9 text-white/68">{body}</p>
            </article>
          ))}
          <article className="grid gap-5 border-t border-white/10 py-8 md:grid-cols-[16rem_1fr]">
            <h2 className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Technology used
            </h2>
            <div className="flex flex-wrap gap-2">
              {item.technology.map((technology) => (
                <span key={technology} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2 text-sm text-white/64">
                  {technology}
                </span>
              ))}
            </div>
          </article>
          <div className="border-t border-white/10 pt-8">
            <Link prefetch={false} href="/work" className="text-sm font-semibold text-[color:var(--brand-green)]">
              Back to all work
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
