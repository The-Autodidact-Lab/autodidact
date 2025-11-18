import { Sparkles } from 'lucide-react';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <section className="relative mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
            <Sparkles className="h-10 w-10 text-primary animate-float" />
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Blog Coming Soon
          </h1>
          <p className="mt-6 text-lg text-text/80">
            We&apos;re crafting insightful articles about AI research,
            machine learning breakthroughs, and our latest findings. Stay tuned
            for updates.
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-glass">
            <h2 className="mb-4 text-xl font-semibold">
              What to Expect
            </h2>
            <ul className="space-y-3 text-left text-text/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal"></span>
                <span>
                  Deep dives into cutting-edge AI research and methodologies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal"></span>
                <span>
                  Technical tutorials and implementation guides for our tools
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal"></span>
                <span>
                  Insights from our experiments and research findings
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-1.5 w-1.5 shrink-0 rounded-full bg-teal"></span>
                <span>
                  Community contributions and collaborative research updates
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
