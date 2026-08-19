import type { Metadata } from "next";
import { Compass, History, Wrench } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { FadeIn } from "@/components/ui/fade-in";
import { ToolkitGrid } from "@/components/toolkit-grid";
import { Timeline } from "@/components/timeline";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-hairline py-20">
        <Container className="flex flex-col gap-6">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              About
            </p>
          </FadeIn>
          <FadeIn delay={0.06}>
            <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
              The Story
            </h1>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="flex max-w-2xl flex-col gap-4 text-muted">
              <p>
                Placeholder bio — replace with the real narrative. I'm a
                Master's student in Data Science at the University of
                Arizona, working at the intersection of Edge AI and
                hardware-aware optimization: pruning, quantization, and
                making models small enough to run where it counts.
              </p>
              <p>
                Most of what I build starts with a question I can't answer
                yet — then a research storyline, a corpus, and a graph to
                make the answer legible.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-hairline py-20">
        <Container className="flex flex-col gap-10">
          <FadeIn>
            <SectionHeading
              icon={Wrench}
              title="Toolkit"
              subtitle="Grouped by what it's for, not just what it is."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <ToolkitGrid categories={skills} />
          </FadeIn>
        </Container>
      </section>

      <section className="border-b border-hairline py-20">
        <Container className="flex flex-col gap-10">
          <FadeIn>
            <SectionHeading
              icon={History}
              title="Timeline"
              subtitle="Research, coursework, and volunteer work — tagged by kind."
            />
          </FadeIn>
          <Timeline entries={experience} />
        </Container>
      </section>

      <section className="py-20">
        <Container className="flex flex-col gap-6 text-center">
          <FadeIn>
            <SectionHeading
              icon={Compass}
              title="What's Next"
              subtitle="Finishing the Edge AI research storyline, then layering RAG over full-text papers in phase two. Open to research collaboration or a thesis advisor conversation at UA."
            />
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
