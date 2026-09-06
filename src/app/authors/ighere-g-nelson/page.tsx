import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig, workCases, publicInsights as insights } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ title: "Ighere G. Nelson", description: "Ighere G. Nelson is Founder / Chief Innovation Technologist at NelviusGrey Tech, building practical digital, data and automation systems from Lagos, Nigeria.", path: "/authors/ighere-g-nelson", image: siteConfig.brand.founderPhoto, imageAlt: "Ighere G. Nelson" });

export default function AuthorPage() {
  const personJsonLd = { "@context": "https://schema.org", "@type": "Person", name: siteConfig.founder.name, jobTitle: siteConfig.founder.title, url: "https://www.nelviusgreytech.com.ng/authors/ighere-g-nelson", image: "https://www.nelviusgreytech.com.ng" + siteConfig.brand.founderPhoto, worksFor: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, sameAs: [siteConfig.links.founderLinkedIn] };
  return <>
    <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: siteConfig.founder.name }]} />
    <PageHeader eyebrow="Author / Founder" title={siteConfig.founder.name} description="Founder / Chief Innovation Technologist working across technology product development, data systems, AI automation and social-impact information systems." />
    <main className="px-4 pb-16 sm:px-6 lg:px-8"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div className="relative min-h-[28rem] overflow-hidden border border-white/10 bg-white/[0.025]"><Image src={siteConfig.brand.founderPhoto} alt="Ighere G. Nelson" fill sizes="(max-width: 1024px) 100vw, 35vw" className="object-cover object-top" priority /></div><section className="border border-white/10 bg-white/[0.025] p-6 sm:p-9"><p className="text-lg leading-9 text-white/72">Ighere G. Nelson leads NelviusGrey Tech from Lagos, Nigeria, with a focus on turning complex organisational needs into clear, maintainable digital products and operating systems.</p><div className="mt-10 flex flex-wrap gap-2">{["Technology product development", "Data systems and analytics", "ClimateTech and InsurTech", "Social-impact information systems"].map((item) => <span key={item} className="rounded-md border border-white/10 px-3 py-2 text-sm text-white/62">{item}</span>)}</div><h2 className="mt-12 font-display text-3xl font-light text-white">Selected work</h2><div className="mt-5 grid gap-3">{workCases.slice(0, 3).map((item) => <Link key={item.slug} href={`/work/${item.slug}`} className="border-b border-white/10 py-3 text-white/68 hover:text-white">{item.title}</Link>)}</div><h2 className="mt-12 font-display text-3xl font-light text-white">Selected insights</h2><div className="mt-5 grid gap-3">{insights.slice(0, 3).map((item) => <Link key={item.slug} href={`/insights/${item.slug}`} className="border-b border-white/10 py-3 text-white/68 hover:text-white">{item.title}</Link>)}</div></section></div></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} /><FinalCta />
  </>;
}
