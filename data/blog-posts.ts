export type BlogPost = {
  id: string;
  category: string;
  title: string;
  description: string;
  wordCount?: string;
  date: string; // Format: "Nov 7", "Oct 29", etc.
  author?: string; // Optional author name
  slug?: string;
  link?: string; // Optional link (can be internal like "/blog/post-1" or external like "https://example.com")
};

export const BLOG_POSTS: BlogPost[] = [];

// Get recent posts (for homepage)
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, limit);
}

// Get all posts (for blog page)
export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

