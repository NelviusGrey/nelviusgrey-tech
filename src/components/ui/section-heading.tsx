import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-4xl font-light tracking-[-0.065em] text-white sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-base leading-8 text-white/68 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
