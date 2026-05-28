import { Sprout } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const ITEMS = [
  "Being more attentive with my personal work.",
  "Prioritizing turning in my work over personal projects",
  "Remembering Mr. Jimenez's words from Freshman Year: Time management is one of the most importat things in your day to day life.",
];

export function GrowthSection() {
  return (
    <Section id="growth" eyebrow="06">
      <SectionHeading icon={Sprout} title="I still need to work on…" kicker="Growth" />
      <ul className="space-y-5 max-w-3xl">
        {ITEMS.map((t) => (
          <li key={t} className="flex gap-4 text-lg text-foreground/85 border-b border-border/60 pb-4">
            <span className="text-accent">→</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
