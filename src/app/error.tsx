"use client";

import { RefreshCw } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("NelviusGrey Tech route error", error);
  }, [error]);

  return (
    <section className="grid min-h-[70svh] place-items-center px-4 py-32 sm:px-6 lg:px-8">
      <div className="max-w-2xl border border-white/10 bg-[#060806]/86 p-8 text-center shadow-[var(--shadow-panel)]">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
          System interruption
        </p>
        <h1 className="mt-5 font-display text-5xl font-light tracking-normal text-white">
          This page needs a quick refresh.
        </h1>
        <p className="mt-5 text-sm leading-7 text-white/58">
          The site is still available. Try loading this route again.
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-5 text-sm font-semibold text-[#021008]"
        >
          Retry page
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
