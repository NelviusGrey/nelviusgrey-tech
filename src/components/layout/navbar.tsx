"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MagneticLink } from "@/components/animations/magnetic-link";
import { BrandMark } from "@/components/ui/brand-mark";
import { navLinks, siteConfig } from "@/lib/constants";
import { menuPanel } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "relative z-[55] mx-auto flex max-w-[88rem] items-center justify-between border px-4 py-3 transition-all duration-300",
          isScrolled
            ? "rounded-lg border-white/12 bg-[#060806]/88 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "rounded-none border-transparent bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <Link prefetch={false} href="/" aria-label="NelviusGrey Tech home" className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[color:var(--brand-green)]">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link prefetch={false}
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium text-white/58 transition hover:bg-white/[0.06] hover:text-white",
                  active && "text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 -z-10 rounded-md border border-white/10 bg-white/[0.07]"
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <MagneticLink
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[color:var(--brand-green)] px-4 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_var(--brand-glow)]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </MagneticLink>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-white/12 bg-black/20 text-white transition hover:border-[color:var(--brand-green)]/50 hover:text-[color:var(--brand-green)] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuPanel}
            className="fixed inset-0 z-[45] bg-[#030504]/98 px-4 pb-8 pt-28 backdrop-blur-xl lg:hidden"
          >
            <div className="site-grid absolute inset-0 opacity-[0.35]" aria-hidden="true" />
            <div className="relative mx-auto flex h-full max-w-2xl flex-col justify-between">
              <div className="grid gap-2">
                {navLinks.map((link, index) => {
                  const active =
                    pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.045, duration: 0.35 }}
                    >
                      <Link prefetch={false}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between border-b border-white/10 py-5 font-display text-4xl font-light tracking-normal text-white/70 transition hover:text-white",
                          active && "text-white",
                        )}
                      >
                        {link.label}
                        <span className="font-mono text-xs tracking-[0.24em] text-[color:var(--brand-green)]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              <div className="grid gap-3 text-sm text-white/58">
                <Link prefetch={false}
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-5 font-semibold text-[#021008]"
                >
                  Start a Project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <a href={siteConfig.links.whatsapp} target="_blank" rel="noreferrer" className="text-center">
                  WhatsApp {siteConfig.phone[0]}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
