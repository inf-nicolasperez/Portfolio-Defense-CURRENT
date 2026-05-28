import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  eyebrow?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, eyebrow, className, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      id={`section-${id}`}
      className={cn(
        "section-cv min-h-screen snap-start flex items-center justify-center px-6 lg:px-10 pt-40 pb-16",
        className
      )}
    >
      <div
        ref={ref}
        className={cn("w-full max-w-5xl mx-auto reveal", visible && "is-visible")}
      >
        {eyebrow && (
          <div className="font-mono text-xs tracking-[0.2em] text-accent mb-6">{eyebrow}</div>
        )}
        {children}
      </div>
    </section>
  );
}