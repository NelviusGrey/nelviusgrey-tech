import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <section className={cn("px-4 pb-14 pt-36 sm:px-6 lg:px-8", className)}>
      <Reveal className="mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
          {eyebrow}
        </p>
        <h1 className="max-w-6xl text-balance font-display text-5xl font-light leading-[0.95] tracking-[-0.075em] text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-white/68">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
