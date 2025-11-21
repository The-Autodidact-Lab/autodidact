import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
            Research & Notes
          </h1>
          <p className="mt-6 text-lg text-text/70">
            Lorem ipsum.
          </p>
        </div>

        <div className="space-y-12">
          <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-brand-md backdrop-blur-glass transition hover:bg-white/[0.05]">
            <div className="mb-4 text-sm text-text/50">
              Lorem ipsum dolor sit
            </div>
            <h2 className="mb-3 text-2xl font-semibold group-hover:text-teal transition">
              Dolor sit amet consectetur adipiscing elit
            </h2>
            <p className="mb-6 text-text/70">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-sm text-text/50">
              ~2500 words
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
