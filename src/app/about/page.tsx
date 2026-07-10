import type { Metadata } from "next";
import Image from "next/image";

import { Reveal } from "@/components/animations/reveal";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NelviusGrey Tech, its mission, vision, founder, and commitment to practical technology for business and impact-driven organizations.",
};

const differencePoints = [
  "We translate real operational problems into digital systems that teams can use.",
  "We design for business, social impact, climate, agriculture, and institutional contexts.",
  "We treat data structure, user experience, and maintainability as part of one system.",
  "We keep delivery practical, documented, and aligned with the realities of each client.",
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NelviusGrey Tech"
        title="A purpose-driven technology company designing intelligent systems for real-world work."
        description="NelviusGrey Tech helps businesses, NGOs, SMEs, government agencies, and impact-driven organizations move from scattered workflows to practical digital products, dashboards, automation tools, and infrastructure."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Brand story"
              title="Built for organizations that need technology to do more than look polished."
              description="NelviusGrey Tech brings together software development, data thinking, system planning, and innovation support to help organizations solve operational, social, environmental, agricultural, and humanitarian challenges."
            />
            <p className="mt-6 text-base leading-8 text-white/64">
              The company is rooted in Nigeria and built for global relevance. Its work
              focuses on practical technology: systems that help teams collect better data,
              coordinate people, automate repeatable work, communicate professionally, and
              make decisions with clearer evidence.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative overflow-hidden rounded-lg border border-white/10">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1400&q=82"
              alt="Professional technology team planning a digital product"
              width={1200}
              height={900}
              unoptimized
              className="h-[420px] w-full object-cover opacity-[0.82]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030604] via-transparent to-transparent" />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="glass-panel rounded-lg p-6 sm:p-8">
            <div className="relative grid min-h-[520px] overflow-hidden rounded-lg border border-[color:var(--brand-green)]/20 bg-[linear-gradient(135deg,rgba(0,164,56,0.16),rgba(255,255,255,0.035))]">
              <div className="absolute inset-x-8 bottom-0 top-16 border border-[color:var(--brand-green)]/15" />
              <Image
                src="/images/founder/ighere-g-nelson.png"
                alt="Ighere G. Nelson, Founder and Chief Innovation Technologist of NelviusGrey Tech"
                width={392}
                height={650}
                priority
                className="relative z-10 mx-auto mt-auto h-[500px] w-auto object-contain"
              />
              <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#030604] via-[#030604]/20 to-transparent p-6">
                <p className="text-lg font-semibold text-white">{siteConfig.founder.name}</p>
                <p className="mt-2 text-sm text-white/58">{siteConfig.founder.title}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Founder
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Ighere G. Nelson
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/68">
              Ighere G. Nelson is a Computer Science graduate, technology builder, and
              Founder / Chief Innovation Technologist of NelviusGrey Tech. His work cuts
              across digital product development, data systems, climate-tech, NGO
              technology systems, business automation, dashboards, and innovation support.
            </p>
            <p className="mt-5 text-base leading-8 text-white/62">
              He is passionate about using technology to build practical tools that solve
              real-world problems for businesses, communities, and institutions. His
              approach is grounded in usefulness, clarity, and systems that can be
              maintained beyond the first launch.
            </p>
            <a
              href={siteConfig.links.founderLinkedIn}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex h-11 items-center rounded-md border border-white/14 px-5 text-sm font-semibold text-white transition hover:border-[color:var(--brand-green)]/50 hover:bg-[color:var(--brand-green-soft)]"
            >
              View Founder LinkedIn
            </a>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-2">
          <Reveal className="glass-panel rounded-lg p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Mission
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              Our mission is to design and deliver practical, intelligent, and scalable
              technology solutions that help businesses, institutions, and impact-driven
              organizations operate smarter, make better decisions, and solve complex
              social, environmental, agricultural, and humanitarian challenges.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="glass-panel rounded-lg p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Vision
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              Our vision is to become a trusted technology and innovation partner across
              Africa and beyond for transformative digital solutions across business,
              climate, agriculture, social impact, and humanitarian sectors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Values"
            title="The principles that shape every system we design."
            description="NelviusGrey Tech is built around purposeful innovation, clear execution, and technology that respects the people who depend on it."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                key={value}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-5 text-lg font-semibold text-white/82"
              >
                {value}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="What makes us different"
            title="We do not separate beautiful interfaces from useful systems."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {differencePoints.map((point, index) => (
              <Reveal
                key={point}
                delay={index * 0.04}
                className="rounded-lg border border-white/10 bg-white/[0.035] p-6 text-base leading-8 text-white/66"
              >
                {point}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
