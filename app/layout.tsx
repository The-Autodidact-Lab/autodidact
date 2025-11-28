import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Autodidact Research',
  description: 'Advancing AI research through innovative approaches',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <footer className="border-t border-white/10 bg-black/40 px-4 py-10 text-sm text-text/60 backdrop-blur-glass">
            <div className="mx-auto flex max-w-[var(--container)] flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <div className="text-xs uppercase tracking-[0.2em] text-text/40">
                Autodidact Labs
              </div>
              <p className="text-xs text-text/40">
                © {new Date().getFullYear()} Autodidact Labs. All rights
                reserved.
              </p>
              <div className="flex gap-6 text-xs text-text/50">
                <Link href="#" className="transition hover:text-text/80">
                  Terms of Service
                </Link>
                <Link href="#" className="transition hover:text-text/80">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
