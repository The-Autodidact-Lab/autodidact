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
    id: '2',
    title: 'Custom autodiff + backprop',
    description:
      'Toy vectorised autodiff engine implemented in Numpy, inspired by autograd; manual backprop and gradient descent computations supported. Optimised 2-layer MLP on MNIST to PyTorch equivalent performance.',
    date: '26 Dec 2025',
    author: 'Jack Fan',
    link: 'https://github.com/itsjackfan/fpu/blob/main/ml/backprop_pytorch.ipynb',
  },
  {
    id: '1',
    title: 'Basis -- towards effective context management in multi-agent systems',
    description:
      'Compositional AI systems final research project: bulding a decentralised memory architecture to promote decentralisation and scalability of multi-agent systems.',
    date: '10 Dec 2025',
    author: 'Jack Fan',
    link: '/basis.pdf',
  },
  {
    id: '4',
    title: 'Graphene',
    description:
      'Software engineering w/ Generative AI final project: graph-based AI research framework for information extraction and divergence from Arxiv, OpenAlex, CORE, etc.',
    date: '09 Dec 2025',
    author: 'Jack Fan, in collaboration with CS1060 Project Team',
    link: 'https://github.com/cs1060-f25/graphene'
  },
  {
    id: '3',
    title: 'Sero',
    description:
      'Biologically-focussed productivity tool prototype focussed on kairos productivity (see Tiny Experiments).',
    date: '04 Dec 2025',
    author: 'Jack Fan, in collaboration with ES239 Project Team',
    link: 'https://github.com/itsjackfan/sero'
  },
  {
    id: '5',
    title: 'Knowledger',
    description:
      'Graph-based knowledge management system focussed on quick capture and efficient retrieval of information. What started my obsession with personal knowledge management, graphs, context/the search problem, and AI agents (lwk everything I work on nowadays).',
    date: '18 Oct 2024',
    author: 'Jack Fan and Jaden Zhang',
    link: 'https://github.com/knowledger-dev/knowledger'
  }
];

// Get all work items
export function getAllWorkItems(): WorkItem[] {
  return WORK_ITEMS;
}

