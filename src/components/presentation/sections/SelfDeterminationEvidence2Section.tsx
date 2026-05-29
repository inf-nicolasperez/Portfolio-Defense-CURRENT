import { TrendingUp } from "lucide-react";
import { Section } from "../Section";
import { EvidenceCard } from "./EvidenceCard";
import image from "@/assets/evidence-sd-2.jpg";

export function SelfDeterminationEvidence2Section() {
  return (
    <Section id="self-determination-2" eyebrow="06 · SELF DETERMINATION">
      <h2 className="font-serif text-4xl md:text-5xl mb-10">Evidence II</h2>
      <EvidenceCard
        tag="EVIDENCE 02 - SCHOOL"
        title="Track 'N Field"
        numeral="02"
        Icon={TrendingUp}
        image={image}
        intro="I challanged myself in Track and Field after school each week. I didn't have any experience prior to joining, but I told my self I'd try something new before I graduate."
        blocks={[
          {
            label: "CONNECTION TO COMPETENCY",
            body: "Track and Field was a challenging first time experience. I never thought of joining Track and Field beforehand, not in my middle school career or highschool career, but my friends and my coach pushed me to try it out. My ultimate decision was to join and stay, I did so because I wanted to prove myself that I could commit to long term activites. I even scheduled to get my physical form immediately after deciding to join Track. ",
          },
          {
            label: "MORE DETAILS",
            body: "The first time I ran the 100 Meeter dash, I realized that running made me feel more free, I didn't hold back when I ran, and it led me to making my Personal Best(PB), 14.67. I'm determined to do more and improve myself because of the Interal feeling of self fullilment I get when I see myself improve.",
          },
          {
            label: "REFLECTION",
            body: "I never told anyone I wanted to start working on my health/body before graduating high school, because I wasn't sure if I would ever keep my word. Doing track, and finding this new passion to run and work out, I wanted to establish good habits before summer because I wouldn't want to in summer, I'd be less inclined. I found myself to be more athletic, and way more dedicated than I pictured throughout the whole experience.",
          },
        ]}
      />
    </Section>
  );
}
