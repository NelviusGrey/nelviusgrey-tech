import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { navLinks, services, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#020403]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            {siteConfig.tagline} Digital products, data systems, automation, and
            intelligent infrastructure for organizations solving real-world problems.
          </p>
          <p className="mt-5 text-xs text-white/38">
            Selected imagery via Unsplash and Pexels.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <div className="mt-4 grid gap-3">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]"
              >
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <div className="mt-4 grid gap-4 text-sm text-white/58">
            <a className="flex gap-3 transition hover:text-white" href={`tel:${siteConfig.phone[0]}`}>
              <Phone className="mt-0.5 h-4 w-4 text-[color:var(--brand-green)]" />
              <span>{siteConfig.phone.join(" / ")}</span>
            </a>
            <a
              className="flex gap-3 transition hover:text-white"
              href={`mailto:${siteConfig.email.founder}`}
            >
              <Mail className="mt-0.5 h-4 w-4 text-[color:var(--brand-green)]" />
              <span>{siteConfig.email.founder}</span>
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
              <span>{siteConfig.address}</span>
            </p>
            <a
              className="flex gap-3 transition hover:text-white"
              href={siteConfig.links.privacyPolicy}
              target="_blank"
              rel="noreferrer"
            >
              <Download className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
              <span>Download Privacy Policy</span>
            </a>
            <div className="flex gap-3">
              <a
                href={siteConfig.links.companyLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white/60 transition hover:border-[color:var(--brand-green)] hover:text-[color:var(--brand-green)]"
                aria-label="NelviusGrey Tech on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.founderLinkedIn}
                target="_blank"
                rel="noreferrer"
                className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white/60 transition hover:border-[color:var(--brand-green)] hover:text-[color:var(--brand-green)]"
                aria-label="Ighere G. Nelson on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} NelviusGrey Tech. All rights reserved.</p>
          <a
            href={siteConfig.links.privacyPolicy}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[color:var(--brand-green)]"
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
