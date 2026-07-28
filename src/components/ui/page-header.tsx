import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  variant = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  variant?: "default" | "editorial" | "systems" | "gallery" | "contact";
}) {
  return (
    <section data-route-environment={variant} className={cn("route-environment relative overflow-hidden px-4 pb-14 pt-36 sm:px-6 lg:px-8", className)}>
      <div aria-hidden className="route-environment__field pointer-events-none absolute inset-0" />
      <Reveal className="relative mx-auto max-w-7xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
          {eyebrow}
        </p>
        <h1 className="max-w-6xl text-balance font-display text-5xl font-light leading-[0.95] tracking-normal text-white sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-white/68">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
