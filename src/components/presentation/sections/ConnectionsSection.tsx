import { Link2 } from "lucide-react";
import { Section } from "../Section";
import { SectionHeading } from "../SectionHeading";

export function ConnectionsSection() {
  return (
    <Section id="connections" eyebrow="05">
      <SectionHeading icon={Link2} title="Making Connections" kicker="The Bridge" />
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-border bg-card/40 p-7">
          <h3 className="font-serif text-2xl mb-3 text-accent">Outside school</h3>
          <p className="text-foreground/85 leading-relaxed">
            I see my self using this learning in my job, where critical thinking and self determination are a must.
          </p>
        </div>
        <div className="rounded-2xl border border-border bg-card/40 p-7">
          <h3 className="font-serif text-2xl mb-3 text-accent">In my future</h3>
          <p className="text-foreground/85 leading-relaxed">
            This learning will matter for my future career, and also the person I want to become. A more centralized
            idea of myself.
          </p>
        </div>
      </div>
    </Section>
  );
}
