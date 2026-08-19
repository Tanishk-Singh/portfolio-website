export type TagCategory = "research" | "industry" | "personal";

export interface Tag {
  label: string;
  category: TagCategory;
}

export interface ProjectMeta {
  slug: string;
  title: string;
  status: "In Progress" | "Completed" | "Early Results";
  summary: string;
  tags: Tag[];
  year: string;
  links?: {
    github?: string;
    demo?: string;
  };
  featured?: boolean;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  dek: string;
  date: string;
  readingTime: string;
  tags: Tag[];
  featured?: boolean;
}

export interface ExperienceEntry {
  id: string;
  category: TagCategory;
  title: string;
  org?: string;
  date: string;
  location?: string;
  description: string;
  tags?: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface StatItem {
  value: string;
  label: string;
}
