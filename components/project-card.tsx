import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectMeta } from "@/types/content";
import { TagPill } from "@/components/ui/tag";

export function ProjectCard({ project }: { project: ProjectMeta }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-hairline bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
    >
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wide text-muted">
            {project.status}
          </span>
          <span className="text-xs text-muted">{project.year}</span>
        </div>
        <h3 className="font-display text-xl font-medium text-ink">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <TagPill key={tag.label} label={tag.label} category={tag.category} />
        ))}
      </div>

      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Read more
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </span>
    </Link>
  );
}
