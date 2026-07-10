import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";

export default function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center px-4 py-28">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-10 flex justify-center">
          <BrandMark />
        </div>
        <p className="font-mono text-sm uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
          404 / Lost Signal
        </p>
        <h1 className="mt-5 font-display text-5xl font-light tracking-[-0.06em] text-white sm:text-7xl">
          This system path does not exist.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-white/62">
          The page may have moved, or the route may not be part of this deployment.
          Return home and continue exploring NelviusGrey Tech.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-12 items-center justify-center rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008]"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
