import type { NextConfig } from "next";

const isSitesExport = process.env.SITES_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isSitesExport
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isSitesExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
