import Link from 'next/link';
import { getAllPosts } from '@/data/blog-posts';
import type { BlogPost } from '@/data/blog-posts';

type BlogPostItemProps = {
  post: BlogPost;
  isLast: boolean;
};

function BlogPostItem({ post, isLast }: BlogPostItemProps) {
  // Determine if link is internal (starts with /) or external
  const isInternalLink = post.link?.startsWith('/');
  
  // Title component - clickable if link exists
  const TitleComponent = post.link ? (
    isInternalLink ? (
      <Link
        href={post.link}
        className="text-lg font-semibold transition hover:text-teal sm:text-lg"
      >
        {post.title}
      </Link>
    ) : (
      <a
        href={post.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-semibold transition hover:text-teal sm:text-lg"
      >
        {post.title}
      </a>
    )
  ) : (
    <h2 className="text-lg font-semibold sm:text-lg">{post.title}</h2>
  );

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Date */}
      <div className="w-16 shrink-0 pt-1 text-sm text-text/60 sm:w-20">
        {post.date}
      </div>

      {/* Timeline dot and line */}
      <div className="flex flex-col items-center pt-2">
        <div className="h-3 w-3 rounded-full border-2 border-text/30 bg-text/20" />
        {!isLast && (
          <div className="mt-1 h-32 w-0.5 bg-text/10 sm:h-40" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 pb-6 last:pb-0">
        <div className="space-y-2">
          {TitleComponent}
          <p className="text-sm text-text/70 sm:text-base">
            {post.description}
          </p>
          {post.author ? (
            <div className="text-sm text-text/50">
              {post.author}
            </div>
          ) : (
            <div className="text-sm text-text/50">
              Autodidact Labs
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-5xl px-4 py-24">
        <div className="mb-16 max-w-3xl">
          <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl">
            Research & Notes
          </h1>
          <p className="mt-6 text-lg text-text/70">
            Updates on the latest projects and research from the lab
          </p>
        </div>

        <div className="relative">
          <div className="space-y-0">
            {posts.map((post, index) => (
              <BlogPostItem
                key={post.id}
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
