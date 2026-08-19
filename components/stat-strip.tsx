import { StatItem } from "@/types/content";
import { FadeIn } from "@/components/ui/fade-in";

export function StatStrip({ stats }: { stats: StatItem[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <FadeIn key={stat.label} delay={i * 0.08}>
          <div className="rounded-2xl border border-hairline bg-surface p-6 text-center">
            <p className="font-display text-3xl font-medium text-accent">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}
