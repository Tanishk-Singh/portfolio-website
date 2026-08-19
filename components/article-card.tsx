import Link from "next/link";
import { ArticleMeta } from "@/types/content";
import { TagPill } from "@/components/ui/tag";

export function ArticleCard({ article }: { article: ArticleMeta }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group block rounded-2xl border border-hairline bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {article.tags.map((tag) => (
          <TagPill key={tag.label} label={tag.label} category={tag.category} />
        ))}
      </div>
      <h3 className="font-display text-xl font-medium text-ink group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{article.dek}</p>
      <p className="mt-4 text-xs text-muted">
        {article.date} · {article.readingTime}
      </p>
    </Link>
  );
}
