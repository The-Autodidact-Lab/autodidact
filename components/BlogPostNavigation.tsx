"use client";

import Link from "next/link";
import { BackToTop } from "./BackToTop";

interface BlogPostNavigationProps {
  prevPost?: {
    slug: string;
    title: string;
  } | null;
  nextPost?: {
    slug: string;
    title: string;
  } | null;
}

export function BlogPostNavigation({
  prevPost,
  nextPost,
}: BlogPostNavigationProps) {
  return (
    <nav className="grid grid-cols-3 items-center gap-2 mt-16 pt-8 border-t border-gray-200">
      <div className="flex justify-start">
        {prevPost ? (
          <Link
            href={`/blog/${prevPost.slug}`}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Previous
          </Link>
        ) : null}
      </div>
      <div className="flex justify-center">
        <BackToTop />
      </div>
      <div className="flex justify-end">
        {nextPost ? (
          <Link
            href={`/blog/${nextPost.slug}`}
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            Next →
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

