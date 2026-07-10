import Image from "next/image";

import { siteConfig } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function BrandMark({
  compact = false,
  className,
}: {
  compact?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-md border border-[color:var(--brand-green)]/35 bg-[color:var(--brand-green-soft)] shadow-[0_0_28px_var(--brand-glow)]">
        <span className="absolute inset-x-0 top-0 h-px bg-[color:var(--brand-green)]" />
        <Image
          src="/images/logo/nelviusgrey-tech-logo.png"
          alt="NelviusGrey Tech logo"
          fill
          sizes="40px"
          className="object-cover"
          priority
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-semibold text-white">{siteConfig.name}</span>
          <span className="block text-[0.68rem] uppercase tracking-[0.2em] text-white/45">
            Innovation Systems
          </span>
        </span>
      )}
    </div>
  );
}
