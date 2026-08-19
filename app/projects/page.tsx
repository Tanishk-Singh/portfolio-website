import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Work" };

export default function ProjectsPage() {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-10">
        <FadeIn>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              Work
            </p>
            <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
              Projects
            </h1>
            <p className="max-w-xl text-muted">
              Research and applied builds, in various states of finished.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
