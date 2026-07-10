import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { SiteBackground } from "@/components/layout/site-background";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "NelviusGrey Tech | Technology for Change. Systems for the Future.",
    template: "%s | NelviusGrey Tech",
  },
  description:
    "NelviusGrey Tech designs websites, web apps, data systems, dashboards, automation tools, climate-tech solutions, and digital infrastructure for businesses, SMEs, NGOs, and impact-driven organizations.",
  keywords: [
    "NelviusGrey Tech",
    "technology company Nigeria",
    "web app development Lagos",
    "data dashboards",
    "climate-tech",
    "NGO technology systems",
    "business automation",
  ],
  authors: [{ name: "NelviusGrey Tech" }],
  creator: "NelviusGrey Tech",
  openGraph: {
    title: "NelviusGrey Tech | Technology for Change. Systems for the Future.",
    description:
      "Digital products, data systems, intelligent infrastructure, and practical technology solutions for business and impact-driven organizations.",
    url: siteConfig.url,
    siteName: "NelviusGrey Tech",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NelviusGrey Tech",
    description: "Technology for Change. Systems for the Future.",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
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
    sameAs: [siteConfig.links.companyLinkedIn, siteConfig.links.founderLinkedIn],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteBackground />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppButton />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
