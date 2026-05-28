import { Flag } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function ConclusionSection() {
  return (
    <Section id="conclusion" eyebrow="07">
      <SectionHeading icon={Flag} title="Conclusion" kicker="The Close" />
      <p className="text-xl md:text-2xl text-foreground/85 max-w-3xl leading-relaxed font-serif italic">
        The main take away from my presentation is that I've became a more centralized version of my self over the past
        3 years. If we were to compare myself from then and now, the change in presentation, work ethics, and how I
        manage my time. I know now that i have the help and reassurance from people I can call freinds and also some
        staff.
      </p>
    </Section>
  );
}
