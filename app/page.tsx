import { ArrowRight, Sparkles, Cpu, Network } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: Sparkles,
      title: 'Novel Approaches',
      description:
        'Exploring unconventional methods in machine learning and AI research',
    },
    {
      icon: Cpu,
      title: 'Cutting-Edge Tools',
      description:
        'Building practical tools that bridge theory and real-world applications',
    },
    {
      icon: Network,
      title: 'Open Research',
      description:
        'Sharing insights and tools with the broader AI research community',
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative isolate before:absolute before:inset-0 before:bg-brand-radial">
        <div className="relative mx-auto max-w-[var(--container)] px-4 py-24 sm:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-text/80 backdrop-blur-glass">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
              </span>
              Advancing AI Research
            </div>

            <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Building the Future of{' '}
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                AI Research
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-text/80 sm:text-xl">
              We explore innovative approaches to machine learning and
              artificial intelligence, creating tools and insights that push the
              boundaries of what&apos;s possible.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Explore Projects
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-glass px-6 py-3 text-sm font-medium text-text backdrop-blur-glass transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-brand-md backdrop-blur-glass transition hover:-translate-y-1 hover:bg-white/[0.05]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-text/70">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-12 text-center backdrop-blur-glass shadow-brand-lg">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to Collaborate?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text/80">
            We&apos;re always interested in connecting with researchers,
            developers, and innovators in the AI space.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
            >
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
