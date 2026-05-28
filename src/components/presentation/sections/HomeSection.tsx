import { Section } from "../Section";
import photo1 from "@/assets/photo-1.jpg";
import photo2 from "@/assets/photo-2.jpg";
import photo3 from "@/assets/photo-3.jpg";

const HOBBIES = ["Single Player Games", "Music Production", "Coding", "Panda Express", "Going out with friends"];

export function HomeSection() {
  return (
    <Section id="home" eyebrow="PORTFOLIO DEFENSE · 2026">
      <h1 className="font-serif text-[7rem] md:text-[10rem] leading-none text-foreground/95 tracking-tight">
        Nicolas Perez
      </h1>
      <p className="mt-6 font-serif italic text-2xl md:text-3xl text-muted-foreground">
        Self Determination &amp; Critical Thinking
      </p>
      <p className="mt-8 max-w-2xl text-foreground/85 leading-relaxed">
        As you may know, my names Nicolas Perez, born and raised in SF, My goal is to implement safety in technology, as
        well as create solutions for you, the day to day consumer. Today, I'll show you what this defense means to me.
      </p>

      <div className="mt-10">
        <div className="font-mono text-xs tracking-[0.2em] text-accent mb-3">HOBBIES &amp; INTERESTS</div>
        <div className="flex flex-wrap gap-2">
          {HOBBIES.map((h) => (
            <span
              key={h}
              className="px-4 py-1.5 rounded-full border border-border bg-card/40 text-sm text-foreground/85"
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
        {[photo1, photo2, photo3].map((src, i) => (
          <div key={i} className="aspect-square rounded-xl overflow-hidden border border-border bg-card/40">
            <img src={src} alt="Personal photo" className="w-full h-full object-cover opacity-90" />
          </div>
        ))}
      </div>
    </Section>
  );
}
