'use client';

import { useState } from 'react';
import { useHasScrolled } from '@/components/hooks/useHasScrolled';
import { TypewriterText } from '@/components/TypewriterText';
import { Github, Linkedin, Mail } from 'lucide-react';
import { NeuralBackground } from '@/components/background/NeuralBackground';

export default function Home() {
  const hasScrolled = useHasScrolled(10);
  const [heroDetailsVisible, setHeroDetailsVisible] = useState(false);

  return (
    <div className="min-h-screen">
      <section className="relative isolate h-screen overflow-hidden">
        <NeuralBackground />

        <div className="relative mx-auto flex h-full max-w-[var(--container)] flex-col px-4 pb-16 pt-12 sm:pb-20 sm:pt-12">
          <div className="mt-auto mb-auto text-center">
            <h1 className="font-mono text-[3.6rem] font-semibold tracking-tighter sm:text-[4rem] lg:text-[4.5rem]">
              <TypewriterText
                text="Autodidact Labs"
                speedMsPerChar={130}
                className="bg-text/50 bg-clip-text text-transparent"
                onComplete={() => setHeroDetailsVisible(true)}
              />
            </h1>
            <div
              className={`text-[1rem] font-mono uppercase tracking-[0.3em] text-text/50 transition-all duration-700 ${
                heroDetailsVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-2 opacity-0'
              }`}
            >
              Teaching models to push their own frontiers
            </div>
          </div>
        </div>

        {/* Subtle primary links, bottom-right */}
        <div
          className={`pointer-events-auto absolute bottom-6 right-6 flex items-center gap-3 text-text/50 transition-all duration-700 sm:bottom-8 sm:right-8 ${
            heroDetailsVisible
              ? 'translate-y-0 opacity-100'
              : 'translate-y-2 opacity-0'
          }`}
        >
          <a
            href="https://github.com/The-Autodidact-Lab"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-text/50 transition hover:text-text/90"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/jack-fan-dev"
            target="_blank"
            rel="noreferrer"
            className="rounded-full p-2 text-text/50 transition hover:text-text/90"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:jack.fan.dev@gmail.com"
            className="rounded-full p-2 text-text/50 transition hover:text-text/90"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Thesis and Mission Statement */}
      <section className="relative border-t border-white/10 bg-black/30 overflow-hidden">
        {/* Nebula-like color gradients similar to NeuralBackground */}
        <div className="absolute -top-1/4 -left-1/4 h-[40vh] w-[40vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.15),transparent_60%)] blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 right-[-5%] h-[45vh] w-[45vw] rounded-full bg-[radial-gradient(circle_at_center,rgba(94,92,255,0.12),transparent_65%)] blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 h-[35vh] w-[35vw] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(192,132,252,0.18),transparent_60%)] blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-3xl px-4 py-24 sm:py-32">
          <div className="space-y-6 text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-text/50">
              Our thesis and mission
            </p>
            <p className="text-base text-text/70 sm:text-lg">
              Autodidact Labs is an applied ML and agentic minilab built out of Harvard University that seeks to push the needle forward on continual learning and adaptation through context management, composition, and foundational research.
            </p>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">
              The foundational policy of any agent is to become an extension of
              its user.
            </h2>
            <p className="text-base text-text/70 sm:text-lg">
              We believe that any agent can be reduced to how well it interprets
              and performs its user's intentions. In order to do that, the
              system must first understand its user, continually learning and
              adapting to their preferences.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
