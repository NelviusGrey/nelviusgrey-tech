import type { Metadata } from "next";

import { ProjectCard } from "@/components/cards/project-card";
import { PageHeader } from "@/components/ui/page-header";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work and solution concepts from NelviusGrey Tech across climate-tech, NGO systems, business automation, analytics, and web development.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects and portfolio"
        title="Selected Work & Solution Concepts"
        description="A premium snapshot of the kinds of systems NelviusGrey Tech designs, supports, and can adapt for clients. Some entries are solution concepts, named clearly to avoid overclaiming."
      />

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Portfolio"
            title="Practical systems across business, data, climate, web, and social impact."
            description="Each project direction reflects the company's focus on usefulness, clear reporting, and systems that support real teams."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
