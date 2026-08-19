import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  icon: Icon,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {Icon && (
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
          <Icon size={20} strokeWidth={1.75} />
        </span>
      )}
      <h2 className="font-display text-3xl font-medium text-ink md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className={cn("max-w-2xl text-muted", align === "center" && "mx-auto")}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
