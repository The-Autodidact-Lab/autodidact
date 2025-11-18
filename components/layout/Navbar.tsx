'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Brain } from 'lucide-react';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <div className="sticky top-0 z-[var(--z-nav)] px-4 pt-4">
      <nav className="mx-auto max-w-[var(--container)] flex h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-glass px-6 shadow-brand-sm">
        <Link
          href="/"
          className="flex items-center gap-2 font-heading font-semibold text-text transition hover:text-white"
        >
          <Brain className="h-6 w-6 text-teal" />
          <span>Autodidact</span>
        </Link>

        <div className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-pill px-4 py-2 text-sm transition ${
                pathname === link.href
                  ? 'bg-surface/60 text-text'
                  : 'text-text/80 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
