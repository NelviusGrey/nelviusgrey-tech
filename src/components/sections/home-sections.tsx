import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { CapabilityMarquee } from "@/components/sections/capability-marquee";
import { FinalCta } from "@/components/sections/final-cta";
import { InteractiveServices } from "@/components/sections/interactive-services";
import { ProjectExhibition } from "@/components/sections/project-exhibition";
import { SectorSwitcher } from "@/components/sections/sector-switcher";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  insights,
  processSteps,
  siteConfig,
} from "@/lib/constants";

export function HomeSections() {
  return (
    <>
      <section id="brand-statement" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
              Engineering / Data / Design
            </p>
            <h2 className="mt-8 max-w-6xl font-display text-5xl font-light leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-8xl">
              We combine engineering, data and design to turn complex problems into systems people can actually use.
            </h2>
          </Reveal>
        </div>
      </section>

      <CapabilityMarquee />

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Selected work"
            title="Project-led systems for climate, data, business and social impact."
            description="Where approved screenshots are unavailable, visuals are presented as conceptual or demo representations. The work descriptions stay honest and avoid invented outcomes."
          />
          <div className="mt-12">
            <ProjectExhibition compact />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Core capabilities"
            title="Six ways we turn real operational pressure into intelligent digital systems."
            description="Each capability connects product thinking, data structure, interface design and practical implementation."
          />
          <div className="mt-12">
            <InteractiveServices compact />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Sector solutions"
            title="African-rooted systems for institutions, businesses and programmes with real constraints."
            description="The active sector changes the operational challenge, common pain points, workflow and solution direction."
          />
          <div className="mt-12">
            <SectorSwitcher />
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <SectionHeading
              eyebrow="Operating philosophy"
              title="Useful technology begins with the real problem."
              description="The process is calm, structured and designed to move from uncertainty to a working system without losing the people who will use it."
            />
          </Reveal>
          <div className="grid gap-3">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.035}
                className="grid gap-5 border border-white/10 bg-white/[0.025] p-5 sm:grid-cols-[8rem_1fr]"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
                  {String(index + 1).padStart(2, "0")} - {step.title}
                </p>
                <p className="text-sm leading-7 text-white/62">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-10 border-y border-white/10 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="relative min-h-[34rem] overflow-hidden bg-[#070908]">
            <Image
              src={siteConfig.brand.founderPhoto}
              alt="Ighere G. Nelson, Founder and Chief Innovation Technologist of NelviusGrey Tech"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-bottom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[color:var(--brand-green)]">
              Founder preview
            </p>
            <h2 className="mt-6 font-display text-5xl font-light tracking-normal text-white sm:text-7xl">
              Ighere G. Nelson
            </h2>
            <p className="mt-3 text-white/54">{siteConfig.founder.title}</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66">
              A Computer Science graduate and technology builder working across digital
              product development, data systems, climate technology, social-impact
              technology and practical automation for African contexts.
            </p>
            <Link prefetch={false} href="/about" className="mt-8 inline-flex text-sm font-semibold text-[color:var(--brand-green)]">
              Read the founder story
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Insights"
            title="Thinking about systems that survive beyond launch."
            description="Internally authored notes on social impact technology, useful data, climate intelligence and practical automation."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.slice(0, 3).map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.04}>
                <Link prefetch={false} href={`/insights/${article.slug}`} className="group block border border-white/10 bg-[#060806] p-5 transition hover:-translate-y-1 hover:border-[color:var(--brand-green)]/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      unoptimized
                      className="object-cover opacity-[0.58] transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-5 font-mono text-xs uppercase tracking-[0.22em] text-[color:var(--brand-green)]">
                    {article.category} / {article.readingTime}
                  </p>
                  <h3 className="mt-4 font-display text-2xl font-light tracking-normal text-white">
                    {article.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
