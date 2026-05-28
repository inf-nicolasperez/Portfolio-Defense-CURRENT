import { HelpCircle } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function EssentialQuestionSection() {
  return (
    <Section id="essential-question" eyebrow="01">
      <SectionHeading icon={HelpCircle} title="Essential Question" kicker="The Prompt" />
      <ol className="space-y-6 border-l-2 border-accent pl-8">
        {[
          "What are my future college and/or career plans?",
          "How have I used and grown in two different competencies and their skills during my time in school?",
          "How do I plan to apply those competencies and skills to my future goals and actions?",
        ].map((q, i) => (
          <li key={i} className="flex gap-4 items-baseline">
            <span className="font-mono text-xs tracking-[0.2em] text-accent shrink-0 pt-2">
              0{i + 1}
            </span>
            <p className="font-serif italic text-xl md:text-3xl leading-snug text-foreground/95">
              “{q}”
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}