import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { TagPill } from "@/components/ui/tag";
import { articles, getArticleBySlug } from "@/data/articles";
import { articleContentRegistry } from "@/content/articles";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return { title: article.title, description: article.dek };
}

export default function ArticleDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const Content = articleContentRegistry[article.slug];

  return (
    <article className="py-20">
      <Container className="flex max-w-3xl flex-col gap-8">
        <Link
          href="/articles"
          className="inline-flex w-fit items-center gap-1.5 text-sm text-muted transition-colors hover:text-ink"
        >
          <ArrowLeft size={15} /> Back to articles
        </Link>

        <header className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <TagPill key={tag.label} label={tag.label} category={tag.category} />
            ))}
          </div>
          <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
            {article.title}
          </h1>
          <p className="text-lg text-muted">{article.dek}</p>
          <p className="text-xs text-muted">
            {article.date} · {article.readingTime}
          </p>
        </header>

        <div className="prose-content flex flex-col gap-4 text-ink">
          {Content ? <Content /> : <p>Coming soon.</p>}
        </div>
      </Container>
    </article>
  );
}
