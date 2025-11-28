export type BlogPost = {
  id: string;
  category: string;
  title: string;
  description: string;
  wordCount?: string;
  date: string; // Format: "Nov 7", "Oct 29", etc.
  author?: string; // Optional author name
  slug?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    category: '',
    title: '???',
    description:
      'Improving multi-agent context management by leveraging encoding concepts and clean-context ideas.',
    date: 'Soon',
    author: 'Jack Fan, Samara Baksh, Maitri Shah',
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

