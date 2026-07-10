import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AnimatedCounter } from "@/components/animations/animated-counter";
import { Reveal } from "@/components/animations/reveal";
import { ProjectCard } from "@/components/cards/project-card";
import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  processSteps,
  projects,
  services,
  siteConfig,
  stats,
  whyChooseUs,
} from "@/lib/constants";

export function HomeSections() {
  return (
    <>
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Purpose-built technology"
              title="A Nigerian innovation company building practical systems with global ambition."
              description="NelviusGrey Tech is a purpose-driven technology company founded by Ighere G. Nelson. We combine technical execution, creative problem-solving, data thinking, and sector awareness to build tools that are beautiful, useful, scalable, and impact-driven."
            />
            <Link
              href="/about"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-md border border-white/14 px-5 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50 hover:bg-[color:var(--brand-green-soft)]"
            >
              Learn About Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="relative overflow-hidden rounded-lg border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=82"
              alt="Professionals collaborating in a strategy and technology meeting"
              width={1400}
              height={900}
              unoptimized
              className="h-full max-h-[460px] w-full object-cover opacity-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 grid gap-4 p-5 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-md border border-white/10 bg-black/50 p-4 backdrop-blur">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="font-mono text-3xl font-semibold text-[color:var(--brand-green)]"
                  />
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/52">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Core services"
            title="Digital products, data systems, and infrastructure built for real operations."
            description="From public-facing platforms to internal systems, NelviusGrey Tech designs technology that helps teams work smarter, report clearly, and serve users with confidence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Why choose us"
              title="Technology design that understands both the system and the field."
              description="We design with the business process, sector context, end users, reporting requirements, and long-term maintainability in view."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item, index) => (
              <Reveal
                key={item}
                delay={index * 0.04}
                className="flex min-h-24 gap-4 rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[color:var(--brand-green)]" />
                <p className="text-base font-medium text-white/82">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Solution concepts and project directions with practical value."
              description="A snapshot of the kind of systems NelviusGrey Tech builds and supports across impact, business, analytics, and web development."
            />
            <Link
              href="/projects"
              className="inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-md border border-white/14 px-5 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50 hover:bg-[color:var(--brand-green-soft)]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="How We Turn Ideas Into Working Systems"
            description="A focused delivery path for moving from a real-world problem to a system people can actually use."
            align="center"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-6">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 0.04}
                className="relative rounded-lg border border-white/10 bg-white/[0.035] p-5"
              >
                <span className="font-mono text-sm text-[color:var(--brand-green)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/58">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-[color:var(--brand-green)]/22 bg-[linear-gradient(135deg,rgba(0,164,56,0.14),rgba(255,255,255,0.035))] p-8 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-green)]">
                Build with NelviusGrey Tech
              </p>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                Ready to build something intelligent?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
                Tell us what you want to build. We will help you shape it into a
                practical digital solution.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[color:var(--brand-green)] px-6 text-sm font-semibold text-[#021008] transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_var(--brand-glow)]"
            >
              Work With {siteConfig.name}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
