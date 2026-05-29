import { ArrowRight } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

const STEPS = [
  { n: "01", t: "Pronto, I'll have my personal portfolio finished, and will grow my network by attending Hackathons and attending events." },
  { n: "02", t: "By next school year, I hope to be in a stable position, education and job wise. Maybe under the same company with an increase in income" },
  { n: "03", t: "My long term goal is to have my own Technology related company, specifically in Local AI Development or in Cybersecurity, working in preventing fraud and national threat level issues." },
];

export function NextStepsSection() {
  return (
    <Section id="next-steps" eyebrow="08">
      <SectionHeading icon={ArrowRight} title="Next Steps" kicker="What's Next" />
      <div className="space-y-4 max-w-3xl">
        {STEPS.map((s) => (
          <div key={s.n} className="flex gap-6 items-start rounded-xl border border-border bg-card/40 p-6">
            <span className="font-mono text-accent text-lg">{s.n}</span>
            <span className="text-foreground/85 leading-relaxed">{s.t}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}