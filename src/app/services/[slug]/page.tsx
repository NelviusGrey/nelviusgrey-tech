import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { serviceLandingPages } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export function generateStaticParams() { return serviceLandingPages.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = serviceLandingPages.find((service) => service.slug === slug);
  return item ? createPageMetadata({ title: item.title, description: item.description, path: `/services/${item.slug}` }) : {};
}

export default async function ServiceLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = serviceLandingPages.find((service) => service.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: item.title }]} />
      <PageHeader eyebrow="NelviusGrey Tech / Service" title={item.title} description={item.promise} variant="systems" />
      <main className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="border border-white/10 bg-white/[0.025] p-6 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">The operational problem</p>
            <p className="mt-5 text-xl leading-9 text-white/72">{item.problem}</p>
            <h2 className="mt-12 font-display text-3xl font-light text-white">Who it is for</h2>
            <p className="mt-4 leading-8 text-white/62">{item.audience}</p>
            <h2 className="mt-12 font-display text-3xl font-light text-white">Implementation approach</h2>
            <p className="mt-4 leading-8 text-white/62">{item.approach}</p>
          </section>
          <aside className="border border-[color:var(--brand-green)]/25 bg-[color:var(--dim-green)] p-6 sm:p-9">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">Capabilities</p>
            <ul className="mt-5 grid gap-3">{item.capabilities.map((capability) => <li key={capability} className="border-b border-white/10 pb-3 text-white/72">{capability}</li>)}</ul>
            <p className="mt-10 font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">Typical deliverables</p>
            <ul className="mt-5 grid gap-3">{item.deliverables.map((deliverable) => <li key={deliverable} className="border-b border-white/10 pb-3 text-white/72">{deliverable}</li>)}</ul>
            <Link href="/contact" className="mt-10 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-[color:var(--brand-green)] px-5 text-sm font-semibold text-[#021008]">Start a Project</Link>
          </aside>
        </div>
        <section className="mx-auto mt-6 max-w-7xl border-t border-white/10 pt-10">
          <h2 className="font-display text-3xl font-light text-white">Explore related work</h2>
          <div className="mt-5 flex flex-wrap gap-3">{item.relatedWork.map((work) => <Link key={work.href} href={work.href} className="rounded-md border border-white/10 px-4 py-3 text-sm text-white/68 transition hover:border-[color:var(--brand-green)]/50 hover:text-white">{work.label}</Link>)}</div>
        </section>
      </main>
      <FinalCta />
    </>
  );
}
