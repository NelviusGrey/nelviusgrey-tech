import type { Metadata } from "next";
import { Geist_Mono, Manrope, Sora } from "next/font/google";
import { BackToTop } from "@/components/layout/back-to-top";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageProgress } from "@/components/layout/page-progress";
import { SiteBackground } from "@/components/layout/site-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NelviusGrey Tech | Intelligent Digital Systems for Real-World Progress",
    template: "%s | NelviusGrey Tech",
  },
  description:
    "NelviusGrey Tech designs digital products, data systems, automation tools, ClimateTech platforms and technology infrastructure for businesses, institutions and impact-driven organisations.",
  keywords: [
    "NelviusGrey Tech",
    "technology company Nigeria",
    "web app development Lagos",
    "data dashboards",
    "climate-tech",
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
    description:
      "Digital products, data platforms and intelligent infrastructure for organisations building a better future.",
    url: siteConfig.url,
    siteName: "NelviusGrey Tech",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/brand/logo-mark.png",
        width: 1200,
        height: 630,
        alt: "NelviusGrey Tech logo mark",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NelviusGrey Tech",
    description: "Intelligent digital systems for real-world progress.",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    slogan: siteConfig.tagline,
    founder: {
      "@type": "Person",
      name: siteConfig.founder.name,
      jobTitle: siteConfig.founder.title,
      sameAs: [siteConfig.links.founderLinkedIn],
    },
    logo: new URL(siteConfig.brand.logoPath, siteConfig.url).toString(),
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
    <html
      lang="en"
      className={`${sora.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-md bg-[color:var(--brand-green)] px-4 py-2 text-sm font-semibold text-[#021008] transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <PageProgress />
        <SiteBackground />
        <Navbar />
        <main id="main-content" className="relative z-10">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
