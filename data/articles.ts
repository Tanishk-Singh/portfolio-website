import { ArticleMeta } from "@/types/content";

// Placeholder content — swap in real breakdowns and retrospectives later.
export const articles: ArticleMeta[] = [
  {
    slug: "reading-q-diffusion",
    title: "What Q-Diffusion Actually Changes at Inference Time",
    dek: "A methodology-first breakdown of post-training quantization for diffusion models — why the design choices were made, not just what they are.",
    date: "2026",
    readingTime: "6 min read",
    tags: [{ label: "Quantization", category: "research" }],
    featured: true,
  },
  {
    slug: "building-a-citation-graph",
    title: "Building a Citation Graph Without Losing the Plot",
    dek: "Four design decisions inside a citation crawl — direction, stopping rule, dedup structure, dangling edges — and how each one shapes the resulting graph.",
    date: "2026",
    readingTime: "8 min read",
    tags: [{ label: "Neo4j", category: "research" }],
    featured: true,
  },
];

export function getFeaturedArticles() {
  return articles.filter((a) => a.featured);
}

export function getArticleBySlug(slug: string) {
  return articles.find((a) => a.slug === slug);
}
