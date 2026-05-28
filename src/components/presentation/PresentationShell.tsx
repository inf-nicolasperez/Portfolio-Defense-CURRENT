import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "./sections-data";
import { FloatingIcons } from "./FloatingIcons";
import { cn } from "@/lib/utils";

const NAV_ITEMS: { label: string; targetId: string; matchIds: string[] }[] = [
  { label: "Home", targetId: "home", matchIds: ["home"] },
  { label: "Essential Question", targetId: "essential-question", matchIds: ["essential-question"] },
  { label: "Thesis", targetId: "thesis", matchIds: ["thesis"] },
  { label: "Critical Thinking", targetId: "critical-thinking-1", matchIds: ["critical-thinking-1", "critical-thinking-2"] },
  { label: "Self-Determination", targetId: "self-determination-1", matchIds: ["self-determination-1", "self-determination-2"] },
  { label: "Connections", targetId: "connections", matchIds: ["connections"] },
  { label: "Growth", targetId: "growth", matchIds: ["growth"] },
  { label: "Conclusion", targetId: "conclusion", matchIds: ["conclusion"] },
  { label: "Next Steps", targetId: "next-steps", matchIds: ["next-steps"] },
  { label: "Q & A", targetId: "qa", matchIds: ["qa"] },
];

interface Props {
  children: React.ReactNode;
}

export function PresentationShell({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const sectionEls = SECTIONS.map((s) => root.querySelector<HTMLElement>(`#section-${s.id}`)).filter(Boolean) as HTMLElement[];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.55) {
            const idx = sectionEls.indexOf(e.target as HTMLElement);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { root, threshold: [0.55, 0.75] }
    );
    sectionEls.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (id: string) => {
    const root = containerRef.current;
    if (!root) return;
    root.querySelector(`#section-${id}`)?.scrollIntoView({ behavior: "smooth" });
  };

  const progress = ((active + 1) / SECTIONS.length) * 100;
  const counter = `${String(active + 1).padStart(2, "0")} / ${String(SECTIONS.length).padStart(2, "0")} — ${SECTIONS[active].label}`;

  return (
    <div className="relative min-h-screen text-foreground">
      <FloatingIcons />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 lg:px-10 pt-5 pb-3 bg-background/85 border-b border-border/40 animate-drop-in">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-full bg-primary/20 border border-primary/40 grid place-items-center font-serif text-primary text-lg">
              NP
            </div>
            <div className="leading-tight">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground">2026 DEFENSE</div>
              <div className="font-mono text-xs text-foreground/90">Portfolio</div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = item.matchIds.includes(SECTIONS[active].id);
              return (
                <button
                  key={item.targetId}
                  onClick={() => goTo(item.targetId)}
                  className={cn(
                    "relative text-sm transition-colors pb-1.5",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive && <span className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-accent rounded-full" />}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Progress segments */}
        <div
          className="mt-4 grid gap-1"
          style={{ gridTemplateColumns: `repeat(${SECTIONS.length}, minmax(0, 1fr))` }}
        >
          {SECTIONS.map((_, i) => (
            <div key={i} className={cn("h-0.5 rounded-full transition-colors", i <= active ? "bg-accent/80" : "bg-border")} />
          ))}
        </div>

        <div className="mt-2 flex justify-between font-mono text-[10px] tracking-widest text-muted-foreground">
          <span>{counter}</span>
          <span>{Math.round(progress)}%</span>
        </div>
      </header>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {children}
      </div>
    </div>
  );
}