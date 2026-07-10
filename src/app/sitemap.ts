import type { MetadataRoute } from "next";

import { insights, navLinks, siteConfig, workCases } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    ...navLinks.map((link) => link.href),
    "/privacy",
    "/terms",
  ];

  const staticEntries = staticRoutes.map((href) => ({
    url: new URL(href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: href === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: href === "/" ? 1 : 0.7,
  }));

  const workEntries = workCases.map((item) => ({
    url: new URL(`/work/${item.slug}`, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const insightEntries = insights.map((item) => ({
    url: new URL(`/insights/${item.slug}`, siteConfig.url).toString(),
    lastModified: new Date(item.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...workEntries, ...insightEntries];
}
