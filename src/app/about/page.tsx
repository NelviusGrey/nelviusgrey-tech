import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Reveal } from "@/components/animations/reveal";
import { FinalCta } from "@/components/sections/final-cta";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps, siteConfig, values } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about NelviusGrey Tech, its Lagos roots, founder story, mission, values and approach to responsible innovation.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About NelviusGrey Tech"
        title="A Lagos-rooted technology studio building systems for African realities and global ambition."
        description="NelviusGrey Tech designs practical, intelligent and scalable technology that helps organisations operate smarter, understand their data and create meaningful real-world outcomes."
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Brand origin"
              title="Built for work that sits between technology, people, data and change."
              description="The company exists for organisations that need digital systems to do more than look impressive. The work is about clarity, adoption, evidence, and tools that remain useful after launch day."
            />
            <p className="mt-6 text-base leading-8 text-white/64">
              The older NelviusGrey presence carried the right instinct: technology for
              change, social impact, data innovation and a green, organic feeling. This
              current expression takes that foundation and gives it a more mature,
              cinematic and technically precise form.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="relative min-h-[32rem] overflow-hidden border border-white/10 bg-[#060806]">
            <Image
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=1600&q=82"
              alt="Black professionals in a technology and strategy meeting"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              unoptimized
              priority
              className="object-cover opacity-[0.66]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" />
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-5 lg:grid-cols-2">
          <Reveal className="border border-white/10 bg-white/[0.025] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Mission
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              To design practical, intelligent and scalable technology that helps
              organisations operate smarter, understand their data and create meaningful
              real-world outcomes.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="border border-white/10 bg-white/[0.025] p-7">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-[color:var(--brand-green)]">
              Vision
            </p>
            <p className="mt-5 text-xl leading-9 text-white/78">
              To become a trusted African technology and innovation partner for
              organisations building stronger businesses, communities and institutions.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal className="relative min-h-[38rem] overflow-hidden border border-[color:var(--brand-green)]/20 bg-[#060806]">
            <Image
              src={siteConfig.brand.founderPhoto}
              alt="Ighere G. Nelson, Founder and Chief Innovation Technologist"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-bottom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030504] via-transparent to-transparent" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[color:var(--brand-green)]">
              Founder story
            </p>
            <h2 className="mt-5 font-display text-5xl font-light tracking-[-0.07em] text-white sm:text-7xl">
              {siteConfig.founder.name}
            </h2>
            <p className="mt-3 text-white/54">{siteConfig.founder.title}</p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66">
              Ighere G. Nelson is a Computer Science graduate and technology builder
              whose work cuts across digital product development, data systems,
              climate technology, social-impact systems, dashboards and business
              automation.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/60">
              His approach is practical: understand the real problem, respect the
              users, shape the data, design the workflow and build systems that can
              be improved over time.
            </p>
            <Link href={siteConfig.links.founderLinkedIn} target="_blank" rel="noreferrer" className="mt-8 inline-flex text-sm font-semibold text-[color:var(--brand-green)]">
              View founder profile
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Operating principles"
            title="Responsible innovation is not a slogan. It is a way of making decisions."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Reveal key={value} delay={index * 0.035} className="border border-white/10 bg-white/[0.025] p-5 text-lg text-white/78">
                {value}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="How we work"
            title="A calm path from messy problem to working system."
          />
          <div className="mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.035} className="border border-white/10 bg-[#060806] p-6">
                <p className="font-mono text-xs text-[color:var(--brand-green)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-6 font-display text-3xl font-light tracking-[-0.06em] text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/58">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
