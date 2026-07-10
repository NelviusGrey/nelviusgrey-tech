import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import type { workCases } from "@/lib/constants";

type Project = (typeof workCases)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal
      delay={index * 0.04}
      className="glass-panel group overflow-hidden rounded-lg transition duration-300 hover:-translate-y-1 hover:border-[color:var(--brand-green)]/35"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover opacity-[0.76] transition duration-700 group-hover:scale-105 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-[#030604]/20 to-transparent" />
        <span className="absolute left-4 top-4 rounded-md border border-white/12 bg-black/45 px-3 py-1 text-xs font-medium text-white/76 backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold tracking-tight text-white">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-white/62">{project.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.capabilities.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-white/56"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${project.slug}`}
          className="mt-6 inline-flex text-sm font-semibold text-[color:var(--brand-green)] transition hover:text-white"
        >
          Read case study
        </Link>
      </div>
    </Reveal>
  );
}
