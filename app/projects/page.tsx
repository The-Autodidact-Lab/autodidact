import { ExternalLink, Github, Map, Lock } from 'lucide-react';
import Link from 'next/link';

export default function ProjectsPage() {
  const projects = [
    {
      title: 'Space Mapper',
      description:
        'A sophisticated tool for mapping and visualizing high-dimensional spaces, enabling researchers to better understand complex data structures and relationships.',
      icon: Map,
      github: 'https://github.com/The-Autodidact-Lab/space-mapper',
      tags: ['Visualization', 'ML', 'Python'],
    },
    {
      title: 'Crypto Contextualizer',
      description:
        'An advanced framework for analyzing and contextualizing cryptocurrency data, providing deep insights into market patterns and trends.',
      icon: Lock,
      github: 'https://github.com/The-Autodidact-Lab/crypto-contextualizer',
      tags: ['Analysis', 'Crypto', 'Data Science'],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-wide text-text/70 backdrop-blur-glass">
            Open Source
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text/80">
            Explore our open-source tools and research projects that are
            advancing the field of AI and machine learning.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-brand-md backdrop-blur-glass transition hover:bg-white/[0.05]"
              >
                <div className="p-8">
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  <h3 className="mb-3 text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="mb-6 text-text/70">{project.description}</p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 rounded-pill bg-blue/15 px-3 py-1 text-xs font-medium text-blue"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-teal transition hover:text-teal/80"
                  >
                    <Github className="h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/5 blur-3xl transition group-hover:bg-primary/10"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-text/70">
            More projects coming soon. Follow us on GitHub to stay updated.
          </p>
        </div>
      </section>
    </div>
  );
}
