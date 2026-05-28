## Goal
Add a small decorative accent next to/under the H2 title on the text-heavy sections so they feel less bare, while keeping the minimal editorial tone of the deck.

## Sections affected
Only the "plain" sections (no evidence card / no big imagery):
- Essential Question
- Thesis
- Connections
- Growth
- Conclusion
- Next Steps
- Q&A

Evidence sections and Home stay untouched.

## What to add
A reusable `SectionHeading` component that renders:

1. A small **Lucide icon badge** to the left of the title (rounded square, `border-border`, `bg-card/40`, accent-colored icon — matches the visual language of `EvidenceCard`'s floating icon badge).
2. The H2 title (keeps existing font/size per section).
3. A thin **animated underline rule** below the title (`h-px w-16 bg-accent`, using the existing `shimmer-line` keyframe already in `styles.css`) so it ties into the on-load animation system.

Optional third bit per section: a tiny muted **kicker word** to the right of the title in mono (e.g. "PROMPT", "CLAIM", "BRIDGE", "GROWTH", "CLOSE", "NEXT", "OPEN") — small uppercase tracking, `text-muted-foreground`. Keeps the headers visually balanced without adding noise.

Icons per section:
- Essential Question → `HelpCircle`
- Thesis → `Quote`
- Connections → `Link2`
- Growth → `Sprout`
- Conclusion → `Flag`
- Next Steps → `ArrowRight`
- Q&A → `MessagesSquare`

## Implementation
1. Create `src/components/presentation/SectionHeading.tsx` — props: `icon`, `title`, `kicker?`, `size?` ("lg" default, "xl" for Q&A). Renders icon badge + title row + shimmer rule.
2. Update the 7 section files above to use `SectionHeading` instead of the bare `<h2>`. No other content changes.
3. No changes to styles.css (reuses existing tokens + `shimmer-line` keyframe).

## Out of scope
- Evidence sections, Home section
- Body copy, layouts, colors, or spacing beyond the heading block
