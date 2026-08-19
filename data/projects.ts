import { ProjectMeta } from "@/types/content";

// Placeholder content. Replace summaries, tags, and links with real details
// before publishing — statuses are honest placeholders, not real results.
export const projects: ProjectMeta[] = [
  {
    slug: "edge-ai-knowledge-graph",
    title: "Edge AI Research Storyline",
    status: "In Progress",
    summary:
      "A citation-driven knowledge graph tracing 20 years of Edge AI research — key players, topic traction, and dead ends — built on Neo4j from a Semantic Scholar corpus.",
    tags: [
      { label: "Neo4j", category: "research" },
      { label: "Cypher", category: "research" },
      { label: "Semantic Scholar API", category: "research" },
      { label: "Python", category: "industry" },
    ],
    year: "2026",
    featured: true,
  },
  {
    slug: "notion-study-logger",
    title: "Notion Study Logger",
    status: "Completed",
    summary:
      "A lightweight desktop app that auto-logs study session start/stop times directly to a Notion database via the Notion API — replacing manual time tracking.",
    tags: [
      { label: "Python", category: "industry" },
      { label: "tkinter", category: "industry" },
      { label: "Notion API", category: "industry" },
    ],
    year: "2025",
    featured: true,
  },
  {
    slug: "awq-implementation",
    title: "AWQ: Activation-Aware Weight Quantization",
    status: "In Progress",
    summary:
      "A from-scratch implementation of activation-aware weight quantization for transformer inference, exploring the accuracy/compression tradeoff on constrained hardware.",
    tags: [
      { label: "PyTorch", category: "research" },
      { label: "Quantization", category: "research" },
      { label: "Edge AI", category: "research" },
    ],
    year: "2025",
    featured: true,
  },
  {
    slug: "napoleons-march",
    title: "Napoleon's March, Revisited",
    status: "In Progress",
    summary:
      "A modern data visualization portfolio piece reconstructing Minard's 1869 chart of Napoleon's Russian campaign — attrition, geography, and temperature as one composite view.",
    tags: [
      { label: "Data Visualization", category: "industry" },
      { label: "Plotly", category: "industry" },
    ],
    year: "2025",
  },
  {
    slug: "sail-project",
    title: "Sail: Sustainability Monitoring System",
    status: "In Progress",
    summary:
      "Volunteer research supporting Prof. Kevin Lanssey's sustainability monitoring initiative — building out data collection and reporting for environmental metrics.",
    tags: [
      { label: "Sustainability", category: "research" },
      { label: "Python", category: "industry" },
    ],
    year: "2025",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
