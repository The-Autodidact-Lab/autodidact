import { Mail, Github } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-7xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg text-text/70">
            Lorem ipsum.
          </p>
        </div>

        <div className="space-y-6">
          <a
            href="mailto:jack.fan.dev@gmail.com"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-brand-md backdrop-blur-glass transition hover:bg-white/[0.05]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-teal transition">
                jack.fan.dev@gmail.com
              </h3>
            </div>
          </a>

          <a
            href="https://github.com/The-Autodidact-Lab"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 shadow-brand-md backdrop-blur-glass transition hover:bg-white/[0.05]"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Github className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold group-hover:text-teal transition">
                @The-Autodidact-Lab
              </h3>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
