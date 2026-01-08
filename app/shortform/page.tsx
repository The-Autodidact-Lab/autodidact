import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ShortformPage() {
  return (
    <div className="min-h-screen bg-white px-6 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl py-24">
        <Link
          href="/"
          className="group mb-12 inline-flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-gray-900"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
          <span>Back to home</span>
        </Link>

        <div className="mb-16 max-w-3xl">
          <h1 className="text-3xl font-normal text-gray-900 tracking-tighter sm:text-4xl lg:text-5xl">
            Clippings
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Shorter form thoughts and ideas that are worth sharing, but are one-off or aren't enough to form a whole post.
          </p>
        </div>

        <div className="text-gray-600">
          <p className="text-base leading-relaxed">
            This page is currently under construction. Check back soon for shorter form thoughts and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

