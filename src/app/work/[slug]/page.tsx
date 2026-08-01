import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { getWorkCase, workCases, workProof } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

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

  return createPageMetadata({
    title: item.title,
    description: item.summary,
    path: `/work/${item.slug}`,
    image: item.image,
    imageAlt: item.title,
  });
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
      <PageHeader eyebrow={item.category} title={item.title} description={item.summary} variant="gallery" />

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <div className="mb-5 flex flex-wrap gap-2">
            <span className="border border-[color:var(--brand-green)]/30 bg-[color:var(--brand-green-soft)] px-3 py-2 text-xs font-semibold text-white">
              {workProof[item.slug]?.ownership ?? "Project"}
            </span>
            <span className="border border-white/10 bg-white/[0.035] px-3 py-2 text-xs text-white/64">
              {workProof[item.slug]?.status ?? "Project direction"}
            </span>
          </div>
          <div className="relative min-h-[34rem] overflow-hidden border border-white/10 bg-[#060806]">
            <Image
              src={item.image}
              alt={`${item.title} product interface`}
              fill
              sizes="100vw"
              unoptimized={"gallery" in item}
              priority
              className={`${
                "gallery" in item ? "object-contain opacity-100" : "object-cover opacity-[0.62]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" />
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

      {"gallery" in item && item.gallery.length > 1 && (
        <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="interface-gallery-title">
          <div className="mx-auto max-w-[88rem]">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-green)]">Product evidence</p>
            <h2 id="interface-gallery-title" className="mt-5 max-w-4xl font-display text-4xl font-light text-white sm:text-6xl">The system, shown through its real interfaces.</h2>
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {item.gallery.slice(1).map((shot) => (
                <figure key={shot.src} className="overflow-hidden border border-white/10 bg-[#060806] p-2">
                  <Image src={shot.src} alt={shot.alt} width={1900} height={1100} sizes="(max-width: 1024px) 100vw, 50vw" className="h-auto w-full object-contain" />
                  <figcaption className="px-3 py-3 text-sm text-white/48">{shot.alt}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

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
