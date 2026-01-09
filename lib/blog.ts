import { readdirSync, readFileSync, existsSync } from "fs";
import { join } from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  content: string;
  isDraft: boolean;
}

const blogDirectory = join(process.cwd(), "content", "blog");
const draftsDirectory = join(blogDirectory, "drafts");

const isMarkdownFile = (name: string) => name.endsWith(".mdx");
const getSlug = (name: string) => name.replace(/\.mdx$/, "");

export function getBlogPosts(): BlogPost[] {
  try {
    // Only read from the main blog directory, not drafts
    const fileNames = readdirSync(blogDirectory, { withFileTypes: true });
    const posts = fileNames
      .filter((dirent) => dirent.isFile() && isMarkdownFile(dirent.name))
      .map((dirent) => {
        const fileName = dirent.name;
        const slug = getSlug(fileName);
        const fullPath = join(blogDirectory, fileName);
        const fileContents = readFileSync(fullPath, "utf-8");
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || "Untitled",
          date: data.date || "",
          author: data.author || "",
          content,
          isDraft: false,
        };
      })
      .sort((a, b) => {
        // Sort by date, newest first
        // Handle date format like "Jan 09, 2026"
        const dateA = a.date ? new Date(a.date).getTime() : 0;
        const dateB = b.date ? new Date(b.date).getTime() : 0;
        return dateB - dateA;
      });

    return posts;
  } catch (error) {
    // Directory doesn't exist yet, return empty array
    return [];
  }
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    // First check published posts
    const publishedPath = join(blogDirectory, `${slug}.mdx`);
    if (existsSync(publishedPath)) {
      const fileContents = readFileSync(publishedPath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        author: data.author || "",
        content,
        isDraft: false,
      };
    }

    // Then check drafts
    const draftPath = join(draftsDirectory, `${slug}.mdx`);
    if (existsSync(draftPath)) {
      const fileContents = readFileSync(draftPath, "utf-8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Untitled",
        date: data.date || "",
        author: data.author || "",
        content,
        isDraft: true,
      };
    }

    return null;
  } catch (error) {
    return null;
  }
}

