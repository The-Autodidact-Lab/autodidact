import { Mail, Github, MessageSquare, Users } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <section className="relative mx-auto max-w-[var(--container)] px-4 py-24">
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-pill border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-wide text-text/70 backdrop-blur-glass">
            Get in Touch
          </div>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Let&apos;s Collaborate
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text/80">
            Interested in our research or looking to collaborate? We&apos;d love
            to hear from you.
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <a
              href="mailto:jack.fan.dev@gmail.com"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-brand-md backdrop-blur-glass transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Email Us</h3>
              <p className="mb-4 text-text/70">
                Send us an email for inquiries, collaborations, or general
                questions.
              </p>
              <span className="text-sm font-medium text-teal">
                jack.fan.dev@gmail.com
              </span>
            </a>

            <a
              href="https://github.com/The-Autodidact-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-brand-md backdrop-blur-glass transition hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition group-hover:bg-primary/20">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">GitHub</h3>
              <p className="mb-4 text-text/70">
                Check out our open-source projects and contribute to our
                research.
              </p>
              <span className="text-sm font-medium text-teal">
                @The-Autodidact-Lab
              </span>
            </a>
          </div>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-glass">
            <div className="mb-6 flex items-center gap-3">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                <Users className="h-5 w-5 text-teal" />
              </div>
              <h2 className="text-2xl font-semibold">
                We&apos;re Looking For
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4 text-teal" />
                  Research Collaborators
                </h3>
                <p className="text-sm text-text/70">
                  Researchers and academics interested in exploring novel AI
                  approaches and methodologies.
                </p>
              </div>

              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4 text-teal" />
                  Open Source Contributors
                </h3>
                <p className="text-sm text-text/70">
                  Developers passionate about building tools that advance AI
                  research and accessibility.
                </p>
              </div>

              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4 text-teal" />
                  Industry Partners
                </h3>
                <p className="text-sm text-text/70">
                  Organizations looking to apply cutting-edge AI research to
                  real-world problems.
                </p>
              </div>

              <div>
                <h3 className="mb-2 flex items-center gap-2 font-semibold">
                  <MessageSquare className="h-4 w-4 text-teal" />
                  Students & Learners
                </h3>
                <p className="text-sm text-text/70">
                  Aspiring researchers eager to learn and contribute to
                  meaningful AI projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
