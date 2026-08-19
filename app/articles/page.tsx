import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { FadeIn } from "@/components/ui/fade-in";
import { ArticleCard } from "@/components/article-card";
import { articles } from "@/data/articles";

export const metadata: Metadata = { title: "Articles" };

export default function ArticlesPage() {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-10">
        <FadeIn>
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-wide text-accent">
              Articles
            </p>
            <h1 className="font-display text-4xl font-medium text-ink md:text-5xl">
              Writing
            </h1>
            <p className="max-w-xl text-muted">
              Methodology-first breakdowns and project retrospectives.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {articles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.06}>
              <ArticleCard article={article} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
