import { Download, Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { navLinks, serviceCapabilities, serviceLandingHref, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-white/10 bg-[#020302]">
      <div aria-hidden className="site-grid pointer-events-none absolute inset-0 opacity-35" />
      <div aria-hidden className="travelling-line absolute inset-x-0 top-0 h-px opacity-60" />
      <div className="mx-auto grid max-w-[88rem] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.25fr_0.75fr_0.9fr_1fr] lg:px-8">
        <div>
          <BrandMark />
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/58">
            {siteConfig.tagline} Digital products, data systems and intelligent
            infrastructure for organisations building a better future.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-white/32">
            Lagos / African-rooted / Globally ambitious
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Navigation</h3>
          <div className="mt-4 grid gap-3">
            {navLinks.map((link) => (
              <Link prefetch={false} key={link.href} href={link.href} className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]">
                {link.label}
              </Link>
            ))}
            <Link prefetch={false} href="/privacy" className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]">
              Privacy
            </Link>
            <Link prefetch={false} href="/terms" className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]">
              Terms
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Capabilities</h3>
          <div className="mt-4 grid gap-3">
            {serviceCapabilities.map((service) => (
              <Link prefetch={false} key={service.slug} href={serviceLandingHref(service.slug)} className="text-sm text-white/55 transition hover:text-[color:var(--brand-green)]">
                {service.title}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <div className="mt-4 grid gap-4 text-sm text-white/58">
            <a className="flex gap-3 transition hover:text-white" href={`tel:${siteConfig.phone[0].replace(/\s/g, "")}`}>
              <Phone className="mt-0.5 h-4 w-4 text-[color:var(--brand-green)]" />
              <span>{siteConfig.phone.join(" / ")}</span>
            </a>
            <a className="flex gap-3 transition hover:text-white" href={`mailto:${siteConfig.email.founder}`}>
              <Mail className="mt-0.5 h-4 w-4 text-[color:var(--brand-green)]" />
              <span>{siteConfig.email.founder}</span>
            </a>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
              <span>{siteConfig.address}</span>
            </p>
            <a className="flex gap-3 transition hover:text-white" href={siteConfig.links.privacyPolicy} target="_blank" rel="noreferrer">
              <Download className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--brand-green)]" />
              <span>Download Privacy Policy</span>
            </a>
            <div className="flex gap-3">
              <a href={siteConfig.links.companyLinkedIn} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white/60 transition hover:border-[color:var(--brand-green)] hover:text-[color:var(--brand-green)]" aria-label="NelviusGrey Tech on LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={siteConfig.links.facebook} target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-md border border-white/12 text-white/60 transition hover:border-[color:var(--brand-green)] hover:text-[color:var(--brand-green)]" aria-label="NelviusGrey Tech on Facebook">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-6 sm:px-6 lg:px-8">
        <Link
          href="/contact"
          data-cursor="Start"
          className="footer-wordmark mx-auto mb-12 block max-w-[88rem] overflow-hidden border-b border-white/10 pb-8 font-display text-[clamp(3.5rem,11vw,10rem)] font-light leading-[0.8] tracking-[-0.06em] text-white/10 transition-colors hover:text-[color:var(--brand-green)]/38"
        >
          Let&apos;s build what&apos;s next.
        </Link>
        <div className="mx-auto flex max-w-[88rem] flex-col gap-3 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright {new Date().getFullYear()} NelviusGrey Tech. All rights reserved.</p>
          <p>Technology for Change. Systems for the Future.</p>
        </div>
      </div>
    </footer>
  );
}
