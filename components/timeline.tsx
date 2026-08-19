import { CalendarDays, MapPin } from "lucide-react";
import { ExperienceEntry } from "@/types/content";
import { TagPill } from "@/components/ui/tag";
import { FadeIn } from "@/components/ui/fade-in";

export function Timeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="relative">
      <div className="absolute left-3 top-2 bottom-2 w-px bg-hairline md:left-1/2" />
      <div className="flex flex-col gap-8">
        {entries.map((entry, i) => (
          <FadeIn key={entry.id} delay={i * 0.05}>
            <div
              className={`relative flex flex-col gap-4 pl-10 md:flex-row md:pl-0 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <span className="absolute left-[7px] top-2 h-2.5 w-2.5 rounded-full bg-accent md:left-1/2 md:-translate-x-1/2" />

              <div className="md:w-1/2" />
              <div
                className={`rounded-2xl border border-hairline bg-surface p-5 md:w-1/2 ${
                  i % 2 === 1 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <TagPill label={entry.category} category={entry.category} />
                <h3 className="mt-3 font-display text-lg font-medium text-ink">
                  {entry.title}
                </h3>
                {entry.org && (
                  <p className="text-sm text-muted">{entry.org}</p>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays size={14} /> {entry.date}
                  </span>
                  {entry.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin size={14} /> {entry.location}
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {entry.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
