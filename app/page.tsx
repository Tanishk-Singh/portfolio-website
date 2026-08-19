import Link from "next/link";
import { ArrowRight, FolderGit2, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { StatStrip } from "@/components/stat-strip";
import { ProjectCard } from "@/components/project-card";
import { ToolkitGrid } from "@/components/toolkit-grid";
import { getFeaturedProjects } from "@/data/projects";
import { heroStats } from "@/data/stats";
import { skills } from "@/data/skills";

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      {/* Hero */}
      <section className="border-b border-hairline">
        <Container className="flex flex-col items-start gap-6 py-24 md:py-32">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              MS Data Science · University of Arizona
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <h1 className="max-w-2xl font-display text-4xl font-medium leading-[1.1] text-ink md:text-6xl">
              I build ML systems that run where compute is scarce.
            </h1>
          </FadeIn>
          <FadeIn delay={0.16}>
            <p className="max-w-xl text-lg leading-relaxed text-muted">
              Focused on neural network compression, hardware-software
              co-design, and efficient inference — turning research into
              things that actually fit on the edge.
            </p>
          </FadeIn>
          <FadeIn delay={0.24}>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
              >
                See the work
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Get in touch
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16">
        <Container>
          <FadeIn>
            <StatStrip stats={heroStats} />
          </FadeIn>
        </Container>
      </section>

      {/* Featured projects */}
      <section className="border-t border-hairline py-20">
        <Container className="flex flex-col gap-10">
          <FadeIn>
            <SectionHeading
              icon={FolderGit2}
              title="Featured Projects"
              subtitle="Research and applied work across Edge AI, ML compression, and data systems."
            />
          </FadeIn>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.slug} delay={i * 0.08}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Toolkit */}
      <section className="border-t border-hairline py-20">
        <Container className="flex flex-col gap-10">
          <FadeIn>
            <SectionHeading
              icon={Wrench}
              title="Toolkit"
              subtitle="What I reach for when building and researching."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <ToolkitGrid categories={skills} />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
