import { useEffect, useState } from "react";
import { Target, Layers, Sparkles, X, type LucideIcon } from "lucide-react";

interface Block {
  label: string;
  body: string;
}

interface Props {
  tag: string;
  title: string;
  intro?: string;
  blocks: Block[];
  image: string;
  Icon: LucideIcon;
  numeral?: string;
}

const BLOCK_ICONS: Record<string, LucideIcon> = {
  "CONNECTION TO COMPETENCY": Target,
  "MORE DETAILS": Layers,
  REFLECTION: Sparkles,
};

export function EvidenceCard({ tag, title, intro, blocks, image, Icon, numeral }: Props) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (!zoomed) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoomed(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoomed]);

  return (
    <>
    <div className="group relative rounded-3xl border border-border bg-card/80 overflow-hidden shadow-2xl shadow-black/40 hover:-translate-y-1 transition-transform duration-500">
      {/* Decorative numeral */}
      {numeral && (
        <div className="absolute top-4 right-6 font-serif italic text-[7rem] leading-none text-accent/10 pointer-events-none select-none">
          {numeral}
        </div>
      )}

      <div className="grid md:grid-cols-[42%_1fr]">
        {/* Visual panel */}
        <div className="relative h-56 md:h-auto md:min-h-[28rem] overflow-hidden border-b md:border-b-0 md:border-r border-border">
          <button
            type="button"
            onClick={() => setZoomed(true)}
            aria-label="Enlarge image"
            className="absolute inset-0 w-full h-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-accent"
          >
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            width={1024}
            height={1024}
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
          />
          </button>
          <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-background/10 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 md:via-card/20 pointer-events-none" />

          {/* Floating icon badge */}
          <div className="absolute bottom-5 left-5 h-14 w-14 rounded-2xl bg-background/90 border border-accent/40 grid place-items-center shadow-lg pointer-events-none">
            <Icon className="h-6 w-6 text-accent" strokeWidth={1.6} />
          </div>

          {/* Tag chip */}
          <div className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-background/90 border border-border px-3 py-1.5 font-mono text-[10px] tracking-[0.2em] text-accent pointer-events-none">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            {tag}
          </div>
        </div>

        {/* Content */}
        <div className="relative p-7 md:p-10">
          <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-3">{title}</h3>
          <div className="h-0.5 w-12 bg-accent rounded-full mb-5" />

          {intro && (
            <p className="text-foreground/85 leading-relaxed mb-7 text-[15px]">{intro}</p>
          )}

          <div className="space-y-3">
            {blocks.map((b) => {
              const I = BLOCK_ICONS[b.label] ?? Sparkles;
              return (
                <div
                  key={b.label}
                  className="rounded-xl border border-border/70 bg-background/40 p-4 hover:border-accent/40 transition-colors"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <I className="h-3.5 w-3.5 text-accent" strokeWidth={2} />
                    <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                      {b.label}
                    </div>
                  </div>
                  <p className="text-foreground/85 leading-relaxed text-sm">{b.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>

    {zoomed && (
      <div
        role="dialog"
        aria-modal="true"
        onClick={() => setZoomed(false)}
        className="fixed inset-0 z-50 bg-background/90 backdrop-blur-sm grid place-items-center p-6 animate-in fade-in duration-200 cursor-zoom-out"
      >
        <button
          type="button"
          onClick={() => setZoomed(false)}
          aria-label="Close enlarged image"
          className="absolute top-5 right-5 h-11 w-11 rounded-full bg-card border border-border grid place-items-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={image}
          alt={title}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[90vh] max-w-[90vw] rounded-2xl border border-border shadow-2xl object-contain cursor-default"
        />
      </div>
    )}
    </>
  );
}