import { TrendingUp } from "lucide-react";
import { Section } from "../Section";
import { EvidenceCard } from "./EvidenceCard";
import image from "@/assets/evidence-sd-2.jpg";

export function SelfDeterminationEvidence2Section() {
  return (
    <Section id="self-determination-2" eyebrow="06 · SELF DETERMINATION">
      <h2 className="font-serif text-4xl md:text-5xl mb-10">Evidence II</h2>
      <EvidenceCard
        tag="EVIDENCE 02"
        title="Placeholder Text"
        numeral="02"
        Icon={TrendingUp}
        image={image}
        intro="PLaceholder description for evidence II of self determination"
        blocks={[
          {
            label: "CONNECTION TO COMPETENCY",
            body: "[Explain how this evidence demonstrates the competency. Be specific about the skills or thinking it shows.]",
          },
          {
            label: "MORE DETAILS",
            body: "[Add more context here — the backstory, your role, and what made this evidence of self determination.]",
          },
          {
            label: "REFLECTION",
            body: "[How did this experience push you to take ownership of your own learning or goals?]",
          },
        ]}
      />
    </Section>
  );
}
