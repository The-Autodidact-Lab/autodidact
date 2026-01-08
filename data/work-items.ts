export type WorkItem = {
  id: string;
  title: string;
  description: string;
  date: string; // Format: "10 Dec 2025", etc.
  author?: string; // Optional author name
  link?: string; // Optional link (can be internal like "/work/item-1" or external like "https://example.com")
};

export const WORK_ITEMS: WorkItem[] = [
  {
    id: '1',
    title: 'Basis -- towards effective context management in multi-agent systems',
    description:
      'Improving multi-agent context management by leveraging encoding concepts and clean-context ideas.',
    date: '10 Dec 2025',
    author: 'Jack Fan',
    link: '/basis.pdf',
  },
];

// Get all work items
export function getAllWorkItems(): WorkItem[] {
  return WORK_ITEMS;
}

