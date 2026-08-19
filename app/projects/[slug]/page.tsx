import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TagPill } from "@/components/ui/tag";
import { projects, getProjectBySlug } from "@/data/projects";
import { projectContentRegistry } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const Content = projectContentRegistry[project.slug];

  return (
    <article className="py-20">
      <Container className="flex max-w-3xl flex-col gap-8">
        <Link
          href="/projects"
          className="inline-flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to work
        </Link>

        <header className="flex flex-col gap-4">
          <div className="flex items-center gap-3 text-xs text-muted">
            <span className="font-medium uppercase tracking-wide">
              {project.status}
            </span>
            <span>·</span>
            <span>{project.year}</span>
          </div>
          <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg text-muted">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag.label} label={tag.label} category={tag.category} />
            ))}
          </div>
        </header>

        <div className="prose-content flex flex-col gap-4 text-ink">
          {Content ? <Content /> : <p>Write-up coming soon.</p>}
        </div>
      </Container>
    </article>
  );
}
