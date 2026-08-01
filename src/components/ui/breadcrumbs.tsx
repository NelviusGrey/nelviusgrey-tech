import Link from "next/link";

import { absoluteUrl } from "@/lib/seo";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: absoluteUrl(item.href) } : {}),
    })),
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <ol className="flex min-w-0 flex-wrap items-center gap-2 text-xs text-white/48">
          {items.map((item, index) => (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-[color:var(--brand-green)]">/</span>}
              {item.href ? <Link prefetch={false} href={item.href} className="truncate transition hover:text-white">{item.label}</Link> : <span aria-current="page" className="truncate text-white/72">{item.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
