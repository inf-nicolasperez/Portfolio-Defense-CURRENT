import { Compass } from "lucide-react";
import { Section } from "../Section";
import { EvidenceCard } from "./EvidenceCard";
import image from "@/assets/evidence-sd-1.jpg";

export function SelfDeterminationEvidence1Section() {
  return (
    <Section id="self-determination-1" eyebrow="05 · SELF DETERMINATION">
      <h2 className="font-serif text-4xl md:text-5xl mb-4">Evidence I</h2>
      <p className="text-foreground/75 max-w-3xl mb-10 leading-relaxed text-[15px]">
        Self determination to me, is not giving up on yourself or work, even if it seems like theres nothing else you can do. 
      </p>
      <EvidenceCard
        tag="EVIDENCE 01"
        title="My Portfolio Defense"
        numeral="01"
        Icon={Compass}
        image={image}
        intro="A few days ago, I made a crucial mistake while making this very presentation. I had forgotten to link my presentation to a backup folder, or Github. This made me loose 80% of my 3 week long progress I had."
        blocks={[
          {
            label: "MORE DETAILS",
            body: "The crucial mistake I made while creating this presentation was not create somewhere I can go back to fix small code changes. Website Development isn't simply writing lines of code, but also knowing your enviorment. This isn't a google slide presentation where I could 'revert changes', I accidently deleted the folder I was working in, causing the loss in my progress.",
          },
          {
            label: "CONNECTION TO COMPETENCY",
            body: "The fact that Im here presenting this to you all is a prime example of the self determination I had to finish this project. This example connects to Self Determination by Illustrating my passion for my own cause, and my dedication to creating things I like doing.",
          },
          {
            label: "REFLECTION",
            body: "This experience pushed me to better prepare myself, but most importanly to not leave a unfinished project, even if its from school, unfinished.",
          },
        ]}
      />
    </Section>
  );
}
