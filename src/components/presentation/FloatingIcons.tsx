import { CodeXml, Terminal, Cpu, Braces, Binary, GitBranch, Sparkles, Hash } from "lucide-react";

const ICONS = [
  { Icon: CodeXml, top: "6%", left: "6%", delay: "0s", dur: "7s", rot: "-8deg", size: 40, color: "text-accent/15" },
  { Icon: Terminal, top: "20%", left: "78%", delay: "1.2s", dur: "8s", rot: "6deg", size: 36, color: "text-primary/15" },
  { Icon: Cpu, top: "42%", left: "8%", delay: "0.6s", dur: "7.5s", rot: "-10deg", size: 38, color: "text-primary/15" },
  { Icon: Braces, top: "58%", left: "82%", delay: "1.8s", dur: "9s", rot: "8deg", size: 34, color: "text-accent/15" },
  { Icon: Binary, top: "74%", left: "12%", delay: "0.4s", dur: "7s", rot: "-4deg", size: 36, color: "text-primary/12" },
  { Icon: GitBranch, top: "30%", left: "45%", delay: "2.2s", dur: "8.5s", rot: "12deg", size: 32, color: "text-accent/12" },
  { Icon: Sparkles, top: "85%", left: "72%", delay: "1s", dur: "7.5s", rot: "-6deg", size: 30, color: "text-primary/15" },
  { Icon: Hash, top: "12%", left: "38%", delay: "1.5s", dur: "8s", rot: "10deg", size: 28, color: "text-accent/10" },
];

export function FloatingIcons() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 radial-warm" />
      {ICONS.map(({ Icon, top, left, delay, dur, rot, size, color }, i) => (
        <div
          key={i}
          className="absolute float-icon"
          style={
            { top, left, ["--delay" as string]: delay, ["--dur" as string]: dur, ["--rot" as string]: rot } as React.CSSProperties
          }
        >
          <Icon size={size} strokeWidth={1.5} className={color} />
        </div>
      ))}
    </div>
  );
}