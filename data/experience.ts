import { ExperienceEntry } from "@/types/content";

// Placeholder timeline — replace dates/orgs/descriptions with the real record.
// Keep entries factual; this section is public-facing.
export const experience: ExperienceEntry[] = [
  {
    id: "ms-data-science",
    category: "research",
    title: "MS in Data Science",
    org: "University of Arizona",
    date: "2025 — Present",
    location: "Tucson, AZ",
    description:
      "Focused on ML systems, with a research interest in neural network compression and hardware-aware inference for constrained devices.",
    tags: ["Data Science", "Edge AI"],
  },
  {
    id: "sail-project",
    category: "research",
    title: "Research Volunteer, Sail Project",
    org: "Prof. Kevin Lanssey",
    date: "2025 — Present",
    location: "Tucson, AZ",
    description:
      "Supporting a sustainability monitoring system — data collection and reporting for environmental metrics, ~4 hrs/week.",
    tags: ["Sustainability", "Research"],
  },
  {
    id: "edge-ai-storyline",
    category: "research",
    title: "Edge AI Research Storyline",
    date: "2026 — Present",
    description:
      "Independent project mapping 20 years of Edge AI research as a citation-based knowledge graph — key players, topic traction, and dead ends.",
    tags: ["Neo4j", "Semantic Scholar API"],
  },
];
