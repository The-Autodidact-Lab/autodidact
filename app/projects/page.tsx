'use client';

import { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  x: number; // 0–100
  y: number; // 0–100
  label?: string;
  type: 'root' | 'project' | 'placeholder';
  tooltip: string;
  revealAt: number; // 0–1 scroll progress
}

interface Edge {
  from: string;
  to: string;
  revealAt: number; // 0–1 scroll progress
}

const NODES: Node[] = [
  {
    id: 'root',
    x: 50,
    y: 30,
    type: 'root',
    tooltip: 'Origin of the lab — a single question about autonomous research.',
    revealAt: 0,
  },
  {
    id: 'space-mapper',
    x: 25,
    y: 55,
    type: 'project',
    label: 'Space Mapper',
    tooltip: 'Map capability regimes and research spaces.',
    revealAt: 0.15,
  },
  {
    id: 'crypto-contextualizer',
    x: 75,
    y: 55,
    type: 'project',
    label: 'Crypto Contextualizer',
    tooltip: 'Contextualize crypto artifacts and ecosystems.',
    revealAt: 0.15,
  },
  {
    id: 'future-1',
    x: 15,
    y: 78,
    type: 'placeholder',
    label: '?',
    tooltip: 'New mode — coming soon.',
    revealAt: 0.35,
  },
  {
    id: 'future-2',
    x: 35,
    y: 82,
    type: 'placeholder',
    label: '?',
    tooltip: 'New mode — coming soon.',
    revealAt: 0.4,
  },
  {
    id: 'future-3',
    x: 65,
    y: 80,
    type: 'placeholder',
    label: '?',
    tooltip: 'New mode — coming soon.',
    revealAt: 0.45,
  },
  {
    id: 'future-4',
    x: 85,
    y: 76,
    type: 'placeholder',
    label: '?',
    tooltip: 'New mode — coming soon.',
    revealAt: 0.5,
  },
];

const EDGES: Edge[] = [
  { from: 'root', to: 'space-mapper', revealAt: 0.15 },
  { from: 'root', to: 'crypto-contextualizer', revealAt: 0.15 },
  { from: 'space-mapper', to: 'future-1', revealAt: 0.35 },
  { from: 'space-mapper', to: 'future-2', revealAt: 0.4 },
  { from: 'crypto-contextualizer', to: 'future-3', revealAt: 0.45 },
  { from: 'crypto-contextualizer', to: 'future-4', revealAt: 0.5 },
];

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const maxScrollable = scrollHeight - clientHeight;
      if (maxScrollable <= 0) {
        setProgress(0);
        return;
      }
      const raw = scrollTop / maxScrollable;
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}

function ProjectsCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const progress = useScrollProgress();

  const visibleNodes = NODES.filter((n) => progress >= n.revealAt);
  const visibleEdges = EDGES.filter((e) => progress >= e.revealAt);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-bg via-[#12052b] to-bg"
    >
      {/* Subtle grid / starfield */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(47,198,201,0.12),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(106,58,240,0.18),_transparent_55%)]" />

      {/* Edges as SVG lines */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {visibleEdges.map((edge) => {
          const from = NODES.find((n) => n.id === edge.from);
          const to = NODES.find((n) => n.id === edge.to);
          if (!from || !to) return null;
          return (
            <path
              key={`${edge.from}-${edge.to}`}
              d={`M ${from.x} ${from.y} C ${(from.x + to.x) / 2} ${
                from.y - 12
              }, ${(from.x + to.x) / 2} ${to.y + 10}, ${to.x} ${to.y}`}
              className="stroke-primary/35"
              strokeWidth={0.3}
              fill="none"
            />
          );
        })}
      </svg>

      {/* Nodes as small hoverable dots */}
      {visibleNodes.map((node) => (
        <div
          key={node.id}
          className="group absolute -translate-x-1/2 -translate-y-1/2 transform"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
          }}
        >
          <div
            className={`relative flex h-3 w-3 items-center justify-center rounded-full ${
              node.type === 'root'
                ? 'bg-teal shadow-[0_0_30px_rgba(47,198,201,0.65)]'
                : node.type === 'project'
                  ? 'bg-primary shadow-[0_0_18px_rgba(106,58,240,0.75)]'
                  : 'bg-text/40 shadow-[0_0_12px_rgba(242,241,243,0.5)]'
            } transition-transform duration-300 group-hover:scale-125`}
          >
            <div className="h-1.5 w-1.5 rounded-full bg-white/90" />
          </div>

          {/* Tooltip */}
          <div className="pointer-events-none absolute left-1/2 top-5 z-10 w-max -translate-x-1/2 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <div className="rounded-2xl border border-white/12 bg-black/70 px-3 py-2 text-xs text-text/85 shadow-brand-md backdrop-blur-frost">
              {node.label ? (
                <div className="mb-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-text/60">
                  {node.label}
                </div>
              ) : (
                <div className="mb-1 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-text/60">
                  Origin
                </div>
              )}
              <div className="max-w-xs text-[0.7rem] text-text/80">
                {node.type === 'placeholder' ? 'Coming soon.' : node.tooltip}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Intro copy at the top-left */}
      <div className="pointer-events-none absolute left-6 top-6 max-w-xs text-xs text-text/70 sm:left-12 sm:top-10 sm:max-w-sm sm:text-sm">
        <div className="mb-2 text-[0.65rem] uppercase tracking-[0.25em] text-text/45">
          Project graph
        </div>
        <p>
          Start with a single point. As you scroll, the tree of current modes
          and speculative branches fades into view.
        </p>
      </div>

      {/* Foggy, unknown bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-[#160833]/80 to-[#050111] blur-3xl" />
      <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-[0.7rem] uppercase tracking-[0.25em] text-text/40">
        Beyond this point is mist — we&apos;re still figuring it out.
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="min-h-[220vh] bg-bg">
      <div className="sticky top-0 h-screen">
        <ProjectsCanvas />
      </div>
    </div>
  );
}
