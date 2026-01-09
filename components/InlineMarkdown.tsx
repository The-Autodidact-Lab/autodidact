import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import type { ReactNode } from "react";

interface InlineMarkdownProps {
  content: string;
}

const components = {
  p: ({ children }: { children?: ReactNode }) => (
    <p className="text-sm text-gray-600 sm:text-base leading-relaxed mb-0">
      {children}
    </p>
  ),
  strong: ({ children }: { children?: ReactNode }) => (
    <strong className="font-semibold">{children}</strong>
  ),
  em: ({ children }: { children?: ReactNode }) => (
    <em className="italic">{children}</em>
  ),
  code: ({ children }: { children?: ReactNode }) => (
    <code className="px-1 py-0.5 bg-gray-100 rounded text-xs font-mono">
      {children}
    </code>
  ),
  a: ({ href, children }: { href?: string; children?: ReactNode }) => {
    if (!href) {
      return <span className="underline hover:text-blue-700 transition-colors">{children}</span>;
    }
    
    const isExternal = href.startsWith("http");
    const isEmail = href.startsWith("mailto:");
    
    if (isExternal || isEmail) {
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="underline hover:text-blue-700 transition-colors"
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link
        href={href}
        className="underline hover:text-blue-700 transition-colors"
      >
        {children}
      </Link>
    );
  },
};

export function InlineMarkdown({ content }: InlineMarkdownProps) {
  return (
    <MDXRemote
      source={content}
      options={{
        parseFrontmatter: false,
        mdxOptions: {
          format: 'mdx',
        },
      }}
      components={components}
    />
  );
}

