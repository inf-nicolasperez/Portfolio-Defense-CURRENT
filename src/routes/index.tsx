import { createFileRoute } from "@tanstack/react-router";
import { PresentationShell } from "@/components/presentation/PresentationShell";
import { HomeSection } from "@/components/presentation/sections/HomeSection";
import { EssentialQuestionSection } from "@/components/presentation/sections/EssentialQuestionSection";
import { ThesisSection } from "@/components/presentation/sections/ThesisSection";
import { CriticalThinkingEvidence1Section } from "@/components/presentation/sections/CriticalThinkingEvidence1Section";
import { CriticalThinkingEvidence2Section } from "@/components/presentation/sections/CriticalThinkingEvidence2Section";
import { SelfDeterminationEvidence1Section } from "@/components/presentation/sections/SelfDeterminationEvidence1Section";
import { SelfDeterminationEvidence2Section } from "@/components/presentation/sections/SelfDeterminationEvidence2Section";
import { ConnectionsSection } from "@/components/presentation/sections/ConnectionsSection";
import { GrowthSection } from "@/components/presentation/sections/GrowthSection";
import { ConclusionSection } from "@/components/presentation/sections/ConclusionSection";
import { NextStepsSection } from "@/components/presentation/sections/NextStepsSection";
import { QASection } from "@/components/presentation/sections/QASection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PresentationShell>
      <HomeSection />
      <EssentialQuestionSection />
      <ThesisSection />
      <CriticalThinkingEvidence1Section />
      <CriticalThinkingEvidence2Section />
      <SelfDeterminationEvidence1Section />
      <SelfDeterminationEvidence2Section />
      <ConnectionsSection />
      <GrowthSection />
      <ConclusionSection />
      <NextStepsSection />
      <QASection />
    </PresentationShell>
  );
}
