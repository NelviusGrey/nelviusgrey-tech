import type { Metadata } from "next";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { Reveal } from "@/components/animations/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { PageHeader } from "@/components/ui/page-header";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact NelviusGrey Tech for web development, dashboards, automation, climate-tech, NGO systems, IT infrastructure, and innovation consulting.",
};

const contactCards = [
  {
    label: "Phone",
    value: siteConfig.phone.join(" / "),
    href: `tel:${siteConfig.phone[0]}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: `${siteConfig.email.founder} / ${siteConfig.email.support}`,
    href: `mailto:${siteConfig.email.founder}`,
    icon: Mail,
  },
  {
    label: "Office",
    value: siteConfig.address,
    href: "https://www.google.com/maps/search/?api=1&query=08%2C%20Oseni%20Liadi%20Street%2C%20Okota%20Isolo%2C%20Lagos%2C%20Nigeria",
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "NelviusGrey Tech and Ighere G. Nelson",
    href: siteConfig.links.companyLinkedIn,
    icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us what you want to build. We will help you shape it into a practical digital solution."
        description="Share the problem, product idea, workflow, data need, or organizational challenge. NelviusGrey Tech can help turn it into a clear digital system."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contactCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <Reveal
                  key={card.label}
                  delay={index * 0.04}
                  className="rounded-lg border border-white/10 bg-white/[0.035] p-5"
                >
                  <a href={card.href} target={card.label === "Office" || card.label === "LinkedIn" ? "_blank" : undefined} rel={card.label === "Office" || card.label === "LinkedIn" ? "noreferrer" : undefined} className="flex gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md border border-[color:var(--brand-green)]/25 bg-[color:var(--brand-green-soft)] text-[color:var(--brand-green)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{card.label}</span>
                      <span className="mt-1 block text-sm leading-7 text-white/60">{card.value}</span>
                    </span>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-stretch">
          <Reveal className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035]">
            <iframe
              title="NelviusGrey Tech office map"
              src="https://www.google.com/maps?q=08%2C%20Oseni%20Liadi%20Street%2C%20Okota%20Isolo%2C%20Lagos%2C%20Nigeria&output=embed"
              className="h-[420px] w-full border-0 grayscale"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
          <Reveal delay={0.08} className="glass-panel rounded-lg p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Direct links
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
              Start with a conversation.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/64">
              For project inquiries, collaboration, advisory, or technology support, reach
              out through email, phone, WhatsApp, or LinkedIn.
            </p>
            <div className="mt-7 grid gap-3">
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
              >
                WhatsApp: {siteConfig.phone[0]}
              </a>
              <a
                href={siteConfig.links.companyLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
              >
                Company LinkedIn
              </a>
              <a
                href={siteConfig.links.founderLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
              >
                Founder LinkedIn
              </a>
              <a
                href={siteConfig.links.privacyPolicy}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50"
              >
                <Download className="h-4 w-4 text-[color:var(--brand-green)]" />
                Download Privacy Policy
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
