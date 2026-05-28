import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  icon: LucideIcon;
  title: string;
  kicker?: string;
  size?: "lg" | "xl";
  className?: string;
}

export function SectionHeading({ icon: Icon, title, kicker, size = "lg", className }: Props) {
  const titleSize =
    size === "xl"
      ? "text-6xl md:text-8xl"
      : "text-5xl md:text-6xl";
  return (
    <div className={cn("mb-10", className)}>
      <div className="flex items-center gap-4 flex-wrap">
        <span
          aria-hidden
          className="inline-flex items-center justify-center h-11 w-11 rounded-xl border border-border bg-card/40 text-accent shrink-0"
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <h2 className={cn("font-serif leading-[1.05]", titleSize)}>{title}</h2>
        {kicker && (
          <span className="ml-auto font-mono text-[10px] tracking-[0.28em] text-muted-foreground uppercase">
            {kicker}
          </span>
        )}
      </div>
      <div
        className="mt-5 h-px w-16 bg-accent origin-left"
        style={{ animation: "shimmer-line 0.9s cubic-bezier(0.22, 1, 0.36, 1) both", animationDelay: "0.2s" }}
      />
    </div>
  );
}