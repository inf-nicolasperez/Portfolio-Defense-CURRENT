import { Quote } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function ThesisSection() {
  return (
    <Section id="thesis" eyebrow="02">
      <SectionHeading icon={Quote} title="Thesis" kicker="The Claim" />
      <ol className="space-y-5 border-l-2 border-accent pl-8 max-w-3xl">
        {[
          {
            q: "My future college and/or career plans",
            a: "After Leadership Highschool, I will attend SFSU. I will pursue my long live dream of majoring in cybersecurity and computer information. When everything goes accordingly, I'll own and start my own Artifitial intelegence safety network and open source project for the people.",
          },
          {
            q: "Two competencies I've used and grown in",
            a: "The two competencies I've used and grown into are Self Determination, and Crtical thinking. I believe I've grown into a better person not just this year but over the history of my High school career. These two competencies are a CORE in my student life, but also my personal and work life.",
          },
          {
            q: "How I'll apply them to my future",
            a: "These competencies and skills will aid my future life by providing a standing baseline and understandment prior to entering the real world.",
          },
        ].map((item, i) => (
          <li key={i} className="flex gap-4 items-baseline">
            <span className="font-mono text-xs tracking-[0.2em] text-accent shrink-0 pt-1.5">0{i + 1}</span>
            <div className="space-y-1">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted-foreground">{item.q}</p>
              <p className="font-serif italic text-lg md:text-2xl leading-snug text-foreground/95">{item.a}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
