import Link from "next/link";
import Image from "next/image";
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
      <section className="relative overflow-hidden border-b border-hairline">
        {/* Full-bleed photo, fading into the page background on its left edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[45%] md:block"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 35%)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 35%)",
          }}
        >
          <Image
            src="/portfolio.jpg"
            alt=""
            fill
            priority
            sizes="45vw"
            className="object-cover object-top"
          />
        </div>

        <Container className="relative flex min-h-[560px] flex-col justify-center py-24 md:min-h-[640px] md:py-32">
          <div className="flex max-w-sm flex-col items-start gap-5 md:max-w-md">
            <FadeIn>
              <p className="text-sm font-medium uppercase tracking-wide text-accent">
                MS Data Science · University of Arizona
              </p>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="font-display text-5xl font-medium leading-[1.05] text-ink md:text-6xl">
                Tanishk Singh
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p className="text-xl leading-snug text-ink md:text-2xl">
                <span className="font-medium">Data Scientist &amp; ML Engineer</span>
                <span className="text-muted">
                  {" "}
                  — efficient systems, from CUDA kernels to production RAG
                  pipelines.
                </span>
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-base leading-relaxed text-muted">
                Focused on ML systems efficiency, federated learning, and
                hardware-aware inference — turning research into things that
                actually run.
              </p>
            </FadeIn>
            <FadeIn delay={0.26}>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
                >
                  Résumé
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Get in touch
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 px-1 text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  Or see the work first
                  <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>

        {/* Contained photo on small screens, where the full-bleed treatment doesn't fit */}
        <FadeIn delay={0.2}>
          <div className="relative mx-6 mb-10 aspect-[4/5] overflow-hidden rounded-3xl border border-hairline bg-surface shadow-lg shadow-ink/5 md:hidden">
            <Image
              src="/portfolio.jpg"
              alt="Tanishk Singh"
              fill
              sizes="90vw"
              className="object-cover object-top"
            />
          </div>
        </FadeIn>
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
