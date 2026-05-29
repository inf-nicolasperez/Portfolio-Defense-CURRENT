import { Hammer } from "lucide-react";
import { Section } from "../Section";
import { EvidenceCard } from "./EvidenceCard";
import image from "@/assets/evidence-ct-1.jpg";

export function CriticalThinkingEvidence1Section() {
  return (
    <Section id="critical-thinking-1" eyebrow="03 · CRITICAL THINKING">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">Evidence I — Personal</h2>
      <p className="text-foreground/75 max-w-3xl mb-10 leading-relaxed text-[15px]">
        Critical thinking to me is understanding what and how to assess a situation when under constant pressure. Its
        also knowing how to adapt to certain situations when needed.
      </p>
      <EvidenceCard
        tag="EVIDENCE 01 · PERSONAL"
        title="Construction Admin"
        numeral="01"
        Icon={Hammer}
        image={image}
        intro="I'm currently employed under a construction company, as the buisness administrator and source gatherer."
        blocks={[
          {
            label: "CONNECTION TO COMPETENCY",
            body: "This evidence relates and to Critical Thinking by showing how quick and efficient I had to be when it came to deadlines. I had to manage my time carefully in order to meet requierments. (.tag SPEAKER NOTES: Add an example here right after last sentence)",
          },
          {
            label: "MORE DETAILS",
            body: "I've been in the construction industry behind the scenes for as long as I can remember, due to my Father working under it for years. He introduced me to the current company I'm working under, and because of the practice I've had with my dad's buisness, I was able to maintain a stable workflow throughout my time working here.",
          },
          {
            label: "REFLECTION",
            body: "I've learned many valuable things throughout my current time working for the company, and also for my father, Including how to manage my time and organize my own work. Because at the end of the day, your supervisors wont keep tabs on where your work is.",
          },
        ]}
      />
    </Section>
  );
}
