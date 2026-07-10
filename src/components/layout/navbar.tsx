"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/ui/brand-mark";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <nav
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300",
          isScrolled
            ? "border-white/12 bg-[#050907]/86 shadow-2xl shadow-black/35 backdrop-blur-xl"
            : "border-white/8 bg-[#050907]/42 backdrop-blur-md",
        )}
        aria-label="Main navigation"
      >
        <Link href="/" aria-label="NelviusGrey Tech home">
          <BrandMark />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-white/62 transition hover:bg-white/7 hover:text-white",
                  active && "bg-[color:var(--brand-green-soft)] text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="inline-flex h-10 items-center gap-2 rounded-md bg-[color:var(--brand-green)] px-4 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_28px_var(--brand-glow)]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-md border border-white/12 text-white transition hover:border-[color:var(--brand-green)]/50 hover:text-[color:var(--brand-green)] lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="mx-auto mt-3 max-w-7xl rounded-lg border border-white/12 bg-[#050907]/95 p-3 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
          <div className="grid gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-md px-4 py-3 text-sm font-medium text-white/70 transition hover:bg-white/7 hover:text-white",
                    active && "bg-[color:var(--brand-green-soft)] text-white",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-4 text-sm font-semibold text-[#021008]"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
