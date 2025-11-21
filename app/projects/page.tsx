'use client';

import { useEffect, useRef, useState } from 'react';
import { Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  github: string;
  x: number;
  y: number;
  children?: string[];
  isPlaceholder?: boolean;
}

const projects: Record<string, Project> = {
  'space-mapper': {
    id: 'space-mapper',
    title: 'Space Mapper',
    github: 'https://github.com/The-Autodidact-Lab/space-mapper',
    x: 25,
    y: 20,
    children: ['project-1', 'project-2'],
  },
  'crypto-contextualizer': {
    id: 'crypto-contextualizer',
    title: 'Crypto Contextualizer',
    github: 'https://github.com/The-Autodidact-Lab/crypto-contextualizer',
    x: 75,
    y: 20,
    children: ['project-3', 'project-4'],
  },
  'project-1': {
    id: 'project-1',
    title: '?',
    github: '',
    x: 15,
    y: 50,
    isPlaceholder: true,
  },
  'project-2': {
    id: 'project-2',
    title: '?',
    github: '',
    x: 35,
    y: 50,
    isPlaceholder: true,
  },
  'project-3': {
    id: 'project-3',
    title: '?',
    github: '',
    x: 65,
    y: 50,
    isPlaceholder: true,
  },
  'project-4': {
    id: 'project-4',
    title: '?',
    github: '',
    x: 85,
    y: 50,
    isPlaceholder: true,
  },
};

function TreeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [visibleProjects, setVisibleProjects] = useState(new Set(['space-mapper', 'crypto-contextualizer']));

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(new Set(Object.keys(projects)));
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.strokeStyle = 'rgba(106, 58, 240, 0.2)';
    ctx.lineWidth = 1.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    const drawCurvedLine = (x1: number, y1: number, x2: number, y2: number) => {
      const cpX = (x1 + x2) / 2;
      const cpY = (y1 + y2) / 2 - 40;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.quadraticCurveTo(cpX, cpY, x2, y2);
      ctx.stroke();
    };

    Object.entries(projects).forEach(([, project]) => {
      if (project.children && visibleProjects.has(project.id)) {
        project.children.forEach((childId) => {
          if (visibleProjects.has(childId)) {
            const child = projects[childId];
            const x1 = (project.x / 100) * canvas.width;
            const y1 = (project.y / 100) * canvas.height;
            const x2 = (child.x / 100) * canvas.width;
            const y2 = (child.y / 100) * canvas.height;
            drawCurvedLine(x1, y1, x2, y2);
          }
        });
      }
    });
  }, [visibleProjects]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full pointer-events-none"
    />
  );
}

function ProjectNode({
  project,
  isVisible,
}: {
  project: Project;
  isVisible: boolean;
}) {
  return (
    <div
      className={`absolute transform transition-all duration-700 ${
        isVisible
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}
      style={{
        left: `${project.x}%`,
        top: `${project.y}%`,
        transform: isVisible ? 'translate(-50%, -50%)' : 'translate(-50%, -50%) scale(0.75)',
      }}
    >
      {project.isPlaceholder ? (
        <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 backdrop-blur-glass shadow-brand-md">
          <div className="text-center text-2xl font-semibold text-text/40">
            {project.title}
          </div>
        </div>
      ) : (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-xl border border-white/10 bg-white/[0.03] px-6 py-4 shadow-brand-md backdrop-blur-glass transition hover:bg-white/[0.05] hover:border-primary/20"
        >
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-text group-hover:text-teal transition">
              {project.title}
            </h3>
            <Github className="h-4 w-4 text-text/50 group-hover:text-teal/70 transition" />
          </div>
        </a>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  const [visibleProjects, setVisibleProjects] = useState(
    new Set(['space-mapper', 'crypto-contextualizer'])
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(new Set(Object.keys(projects)));
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[var(--container)] px-4 py-16">
        <div className="mb-12">
          <p className="text-lg text-text/70">
            Lorem ipsum.
          </p>
        </div>

        <div className="relative h-[600px] rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-glass overflow-hidden">
          <TreeCanvas />

          {Object.entries(projects).map(([, project]) => (
            <ProjectNode
              key={project.id}
              project={project}
              isVisible={visibleProjects.has(project.id)}
            />
          ))}

          <div className="absolute bottom-6 left-6 text-sm text-text/50">
            Coming soon
          </div>
        </div>
      </div>
    </div>
  );
}
