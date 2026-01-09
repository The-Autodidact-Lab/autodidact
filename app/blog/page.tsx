import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getBlogPosts } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

type BlogPostItemProps = {
  post: BlogPost;
  isLast: boolean;
};

function BlogPostItem({ post, isLast }: BlogPostItemProps) {
  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Date */}
      <div className="w-16 shrink-0 pt-1 text-sm text-gray-500 sm:w-20">
        {post.date}
      </div>

      {/* Timeline dot and line */}
      <div className="flex flex-col items-center pt-2">
        <div className="h-3 w-3 rounded-full border-2 border-gray-300 bg-gray-200" />
        {!isLast && (
          <div className="mt-1 h-32 w-0.5 bg-gray-200 sm:h-40" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6 last:pb-0">
        <Link
          href={`/blog/${post.slug}`}
          className="block hover:opacity-70 transition-opacity"
        >
          <div className="space-y-2">
            <h2 className="text-lg font-normal text-gray-900 transition-colors hover:text-gray-700 sm:text-lg">
              {post.title}
            </h2>
            {post.author ? (
              <div className="text-sm text-gray-500">
                {post.author}
              </div>
            ) : (
              <div className="text-sm text-gray-500">
                Autodidact Labs
              </div>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = getBlogPosts();

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
            The Main Planter
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The more long-form, polished version of my blog; expect both technical and life-related content (it'll be tagged).
          </p>
        </div>

        <div className="relative">
          <div className="space-y-0">
            {posts.map((post, index) => (
              <BlogPostItem
                key={post.slug}
                post={post}
                isLast={index === posts.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
