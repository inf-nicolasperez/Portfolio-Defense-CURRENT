export const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "essential-question", label: "Essential Question" },
  { id: "thesis", label: "Thesis" },
  { id: "critical-thinking-1", label: "Critical Thinking · I" },
  { id: "critical-thinking-2", label: "Critical Thinking · II" },
  { id: "self-determination-1", label: "Self-Determination · I" },
  { id: "self-determination-2", label: "Self-Determination · II" },
  { id: "connections", label: "Connections" },
  { id: "growth", label: "Growth" },
  { id: "conclusion", label: "Conclusion" },
  { id: "next-steps", label: "Next Steps" },
  { id: "qa", label: "Q & A" },
] as const;

export type SectionId = (typeof SECTIONS)[number]["id"];