import { cn } from "@/lib/utils";
import { TagCategory } from "@/types/content";

const categoryStyles: Record<TagCategory, string> = {
  research: "bg-tag-research-bg text-tag-research-text",
  industry: "bg-tag-industry-bg text-tag-industry-text",
  personal: "bg-tag-personal-bg text-tag-personal-text",
};

interface TagPillProps {
  label: string;
  category?: TagCategory;
  className?: string;
}

export function TagPill({ label, category = "industry", className }: TagPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        categoryStyles[category],
        className
      )}
    >
      {label}
    </span>
  );
}
