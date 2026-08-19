import { SkillCategory } from "@/types/content";
import { FadeIn } from "@/components/ui/fade-in";

export function ToolkitGrid({ categories }: { categories: SkillCategory[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {categories.map((cat, i) => (
        <FadeIn key={cat.category} delay={i * 0.06}>
          <div className="rounded-2xl border border-hairline bg-surface p-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted">
              {cat.category}
            </p>
            <ul className="mt-3 flex flex-col gap-1.5">
              {cat.skills.map((skill) => (
                <li key={skill} className="text-sm text-ink">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
