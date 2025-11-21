import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative isolate before:absolute before:inset-0 before:bg-brand-radial">
        <div className="relative mx-auto max-w-[var(--container)] px-4 py-32 sm:py-48">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-6xl font-semibold tracking-tighter sm:text-7xl lg:text-8xl">
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                Frontier research
              </span>
            </h1>

            <p className="mt-8 text-lg text-text/70">
              Lorem ipsum dolor sit amet.
            </p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white shadow-glow transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
              >
                Explore
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
