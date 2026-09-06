import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { BrandLoader } from "@/components/layout/brand-loader";
import { CustomCursor } from "@/components/layout/custom-cursor";
import { Navbar } from "@/components/layout/navbar";
import { PageProgress } from "@/components/layout/page-progress";
import { SiteBackground } from "@/components/layout/site-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { SITE_URL, siteConfig } from "@/lib/constants";
import { absoluteUrl } from "@/lib/seo";
import "./globals.css";

const homepageDescription =
  "NelviusGrey Tech designs intelligent digital products, data systems and automation tools for organisations solving real operational problems.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "NelviusGrey Tech | Intelligent Digital Systems for Real-World Progress",
    template: "%s | NelviusGrey Tech",
  },
  description: homepageDescription,
  keywords: [
    "NelviusGrey Tech",
    "technology company Nigeria",
    "web app development Lagos",
    "data dashboards",
    "NGO technology systems",
    "business automation",
    "AI automation",
    "MEL systems",
    "GIS technology",
  ],
  authors: [{ name: "NelviusGrey Tech" }],
  creator: "NelviusGrey Tech",
  openGraph: {
    title: "NelviusGrey Tech | Intelligent Digital Systems for Real-World Progress",
    description: homepageDescription,
    url: SITE_URL,
    siteName: "NelviusGrey Tech",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: absoluteUrl(siteConfig.brand.logoPath),
        width: 1200,
        height: 630,
        alt: "NelviusGrey Tech logo mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NelviusGrey Tech | Intelligent Digital Systems for Real-World Progress",
    description: homepageDescription,
    images: [
      {
        url: absoluteUrl(siteConfig.brand.logoPath),
        alt: "NelviusGrey Tech logo mark",
      },
    ],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-48x48.png", type: "image/png", sizes: "48x48" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: siteConfig.name,
    url: SITE_URL,
    slogan: siteConfig.tagline,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
      sameAs: [siteConfig.links.founderLinkedIn],
    },
    logo: absoluteUrl(siteConfig.brand.logoPath),
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 8 Oseni Liadi Street, Okota, Isolo",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone[0],
        contactType: "customer support",
        areaServed: "NG",
      },
    ],
    email: siteConfig.email.support,
    sameAs: [
      siteConfig.links.companyLinkedIn,
      siteConfig.links.founderLinkedIn,
      siteConfig.links.facebook,
    ],
  };

  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-md bg-[color:var(--brand-green)] px-4 py-2 text-sm font-semibold text-[#021008] transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <LenisProvider>
          <BrandLoader />
          <PageProgress />
          <SiteBackground />
          <Navbar />
          <main id="main-content" className="relative z-10">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
          <BackToTop />
          <CustomCursor />
        </LenisProvider>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
