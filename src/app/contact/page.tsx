import type { Metadata } from "next";
import { Download, Facebook, Linkedin, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { BrandPhoto } from "@/components/media/brand-photo";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { projectEntryPaths, serviceCapabilities, siteConfig } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact NelviusGrey Tech for digital products, data systems, ClimateTech, MEL systems, AI automation and technology advisory.",
  path: "/contact",
});

const contactOptions = [
  {
    label: "WhatsApp",
    value: siteConfig.phone[0],
    href: siteConfig.links.whatsapp,
    icon: MessageCircle,
  },
  {
    label: "Phone",
    value: siteConfig.phone.join(" / "),
    href: `tel:${siteConfig.phone[0].replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: `${siteConfig.email.founder} / ${siteConfig.email.support}`,
    href: `mailto:${siteConfig.email.founder}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "NelviusGrey Tech",
    href: siteConfig.links.companyLinkedIn,
    icon: Linkedin,
  },
  {
    label: "Facebook",
    value: "NelviusGrey Tech",
    href: siteConfig.links.facebook,
    icon: Facebook,
  },
  {
    label: "Office",
    value: siteConfig.address,
    href: "https://www.google.com/maps/search/?api=1&query=No.%208%20Oseni%20Liadi%20Street%2C%20Okota%2C%20Isolo%2C%20Lagos%2C%20Nigeria",
    icon: MapPin,
  },
];

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const initialService = serviceCapabilities.some((item) => item.title === service)
    ? service
    : undefined;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you are trying to improve."
        description="Share the problem, system, workflow or digital product you want to shape. We will help you turn it into a practical technology direction."
        variant="contact"
      />

      <section className="px-4 pb-4 sm:px-6 lg:px-8" aria-labelledby="project-path-title">
        <div className="mx-auto max-w-[88rem]">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-green)]">
            Choose a starting point
          </p>
          <h2 id="project-path-title" className="mt-4 max-w-3xl font-display text-3xl font-light text-white sm:text-5xl">
            What are you trying to build or improve?
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {projectEntryPaths.map((path) => (
              <a
                key={path.label}
                href={`/contact?service=${encodeURIComponent(path.service)}#project-form`}
                className="border border-white/10 bg-white/[0.025] p-5 transition hover:border-[color:var(--brand-green)]/45 hover:bg-[color:var(--brand-green-soft)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--brand-green)]"
              >
                <span className="block font-semibold text-white">{path.label}</span>
                <span className="mt-3 block text-sm leading-6 text-white/55">{path.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-[88rem] gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid min-w-0 gap-3">
            <BrandPhoto
              mediaKey="cloudInfrastructure"
              className="mb-3 min-h-[22rem] sm:min-h-[28rem]"
              sizes="(max-width: 1024px) 100vw, 36vw"
            />
            {contactOptions.map((option, index) => {
              const Icon = option.icon;

              return (
                <Reveal key={option.label} delay={index * 0.035} className="min-w-0 border border-white/10 bg-white/[0.025] p-5">
                  <a
                    href={option.href}
                    target={option.href.startsWith("http") ? "_blank" : undefined}
                    rel={option.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex gap-4"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-white">{option.label}</span>
                      <span className="mt-1 block break-words text-sm leading-7 text-white/60">{option.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
            <Reveal delay={0.25} className="min-w-0 border border-white/10 bg-white/[0.025] p-5">
              <a href={siteConfig.links.privacyPolicy} target="_blank" rel="noreferrer" className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)]">
                  <Download className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold text-white">Download Privacy Policy</span>
                  <span className="mt-1 block text-sm leading-7 text-white/60">
                    Opens the existing Google Drive policy document.
                  </span>
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="min-w-0" id="project-form">
            <ContactForm initialService={initialService} />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem] overflow-hidden border border-white/10 bg-[#060806]">
          <iframe
            title="NelviusGrey Tech office map"
            src="https://www.google.com/maps?q=No.%208%20Oseni%20Liadi%20Street%2C%20Okota%2C%20Isolo%2C%20Lagos%2C%20Nigeria&output=embed"
            className="h-[420px] w-full border-0 grayscale"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
