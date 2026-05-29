import { MessagesSquare } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function QASection() {
  return (
    <Section id="qa" eyebrow="09">
      <SectionHeading icon={MessagesSquare} title="Thank You, Any Questions?" kicker="Open Floor" size="xl" />
      <p className="font-serif italic text-2xl md:text-3xl text-muted-foreground"></p>
    </Section>
  );
}