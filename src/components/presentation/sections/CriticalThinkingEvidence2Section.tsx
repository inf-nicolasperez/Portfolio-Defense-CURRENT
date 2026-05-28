import { LineChart } from "lucide-react";
import { Section } from "../Section";
import { EvidenceCard } from "./EvidenceCard";
import image from "@/assets/evidence-ct-2.jpg";

export function CriticalThinkingEvidence2Section() {
  return (
    <Section id="critical-thinking-2" eyebrow="04 · CRITICAL THINKING">
      <h2 className="font-serif text-4xl md:text-5xl mb-10">Evidence II — School</h2>
      <EvidenceCard
        tag="EVIDENCE 02 · SCHOOL"
        title="Stock Investment"
        numeral="02"
        Icon={LineChart}
        image={image}
        intro="Recently, in my favorite class, which is AP US Government, we were assigned an end of the year investment project. Where we had to search and determine whether or not to invest in certain stocks."
        blocks={[
          {
            label: "CONNECTION TO COMPETENCY",
            body: "Stock investment is something I've been practicing for since 8th grade. I've always been interested in the trade market, so doing it in school has given me a headstart. This further proves my efficiency and the correlation to Critical thinking by showing you all my active mindset and decision making.",
          },
          {
            label: "MORE DETAILS",
            body: "The stock market fluctuates constantly, meaning theres never an anticipated profit or ROI. I did some research regarding real world problems like wars, AI, Teacher Income, and health care. Those are all examples of things that can make the stock market change depending on the news or how it affects us, the consumers.",
          },
          {
            label: "REFLECTION",
            body: "This project taught me that even though I had that past knowledge on the stock market, theres alaways room for improvement, as I still had some losses during the simulator. At the same time, I could also skim past the vocab, and the starting point during the project due to the past experience. This past experience is what really shapes my outcome, I like to think of what I do as a rivalary within myself, Quality over Quantity. ",
          },
        ]}
      />
    </Section>
  );
}
