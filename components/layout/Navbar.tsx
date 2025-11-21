'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <div className="sticky top-0 z-[var(--z-nav)] px-4 pt-4">
      <nav className="mx-auto max-w-[var(--container)] flex h-16 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-glass px-6 shadow-brand-sm">
        <Link
          href="/"
          className="flex items-center gap-3 transition hover:opacity-80"
        >
          <Image
            src="/Autodidact_Logo.png"
            alt="Autodidact"
            width={32}
            height={32}
            className="h-8 w-8"
          />
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
          <Link
            href="/contact"
            className="ml-2 rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
