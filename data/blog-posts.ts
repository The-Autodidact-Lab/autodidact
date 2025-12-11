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

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: 'Research',
    title: 'Basis -- towards effective context management in multi-agent systems',
    description:
      'Improving multi-agent context management by leveraging encoding concepts and clean-context ideas.',
    date: '10 Dec 2025',
    author: 'Jack Fan',
    link: '/basis.pdf',
  },
];

// Get recent posts (for homepage)
export function getRecentPosts(limit: number = 3): BlogPost[] {
  return BLOG_POSTS.slice(0, limit);
}

// Get all posts (for blog page)
export function getAllPosts(): BlogPost[] {
  return BLOG_POSTS;
}

