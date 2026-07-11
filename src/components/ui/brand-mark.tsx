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
      <span
        className={cn(
          "relative block shrink-0 overflow-hidden",
          compact ? "h-9 w-9" : "h-12 w-12 sm:h-14 sm:w-14",
        )}
      >
        <Image
          src={siteConfig.brand.logoPath}
          alt="NelviusGrey Tech logo mark"
          fill
          sizes={compact ? "36px" : "56px"}
          className="object-contain"
          priority
        />
      </span>
      {!compact && (
        <span className="font-display leading-[0.98] tracking-normal text-white">
          <span className="block text-[1.35rem] font-light sm:text-[1.65rem]">NelviusGrey</span>
          <span className="block text-[1.35rem] font-light sm:text-[1.65rem]">Tech</span>
        </span>
      )}
    </div>
  );
}
