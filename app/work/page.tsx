import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getAllWorkItems } from '@/data/work-items';
import type { WorkItem } from '@/data/work-items';

type WorkItemProps = {
  item: WorkItem;
  isLast: boolean;
};

function WorkItemComponent({ item, isLast }: WorkItemProps) {
  // Determine if link is internal (starts with /) or external
  const isInternalLink = item.link?.startsWith('/');
  
  // Title component - clickable if link exists
  const TitleComponent = item.link ? (
    isInternalLink ? (
      <Link
        href={item.link}
        className="text-lg font-normal text-gray-900 transition-colors hover:text-gray-700 sm:text-lg"
      >
        {item.title}
      </Link>
    ) : (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-normal text-gray-900 transition-colors hover:text-gray-700 sm:text-lg"
      >
        {item.title}
      </a>
    )
  ) : (
    <h2 className="text-lg font-normal text-gray-900 sm:text-lg">{item.title}</h2>
  );

  return (
    <div className="relative flex gap-4 sm:gap-6">
      {/* Date */}
      <div className="w-16 shrink-0 pt-1 text-sm text-gray-500 sm:w-20">
        {item.date}
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
        <div className="space-y-2">
          {TitleComponent}
          <p className="text-sm text-gray-600 sm:text-base leading-relaxed">
            {item.description}
          </p>
          {item.author ? (
            <div className="text-sm text-gray-500">
              {item.author}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  const workItems = getAllWorkItems();

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
            My Work
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            The most important roles, projects, and ideas that I put my time into.
          </p>
        </div>

        <div className="relative">
          {workItems.length > 0 ? (
            <div className="space-y-0">
              {workItems.map((item, index) => (
                <WorkItemComponent
                  key={item.id}
                  item={item}
                  isLast={index === workItems.length - 1}
                />
              ))}
            </div>
          ) : (
            <div className="text-gray-600">
              <p className="text-base leading-relaxed">
                This page is currently under construction. Check back soon for updates on my work and projects.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

