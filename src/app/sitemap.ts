import type { MetadataRoute } from "next";

import { navLinks, siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return navLinks.map((link) => ({
    url: new URL(link.href, siteConfig.url).toString(),
    lastModified: new Date(),
    changeFrequency: link.href === "/" ? "weekly" : "monthly",
    priority: link.href === "/" ? 1 : 0.7,
  }));
}
