import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, BookOpen, Share2 } from "lucide-react";
import { client, POST_BY_SLUG_QUERY } from "@/lib/sanity/client";

// Mock Blog Article Database
const blogPosts: Record<string, any> = {};

export const revalidate = 0;

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let post: any = null;

  try {
    post = await client.fetch(POST_BY_SLUG_QUERY, { slug });
  } catch (err) {
    console.error("Failed to fetch blog post detail from Sanity:", err);
  }

  if (!post) {
    post = blogPosts[slug];
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-4xl mx-auto space-y-12">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Articles</span>
      </Link>

      {/* Header */}
      <div className="space-y-6 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="flex flex-wrap items-center gap-2">
          {(post.tags || []).map((t: string) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold"
            >
              {t}
            </span>
          ))}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            {post.publishedAt}
          </span>
          {post.readTime && (
            <>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                {post.readTime}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Article Body */}
      <article className="space-y-6 text-zinc-800 dark:text-zinc-200 text-base leading-relaxed font-sans">
        {(post.summary || post.excerpt) && (
          <div className="p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/80 bg-indigo-50/60 dark:bg-indigo-950/30 text-xs font-mono text-zinc-600 dark:text-zinc-400">
            <strong className="text-indigo-600 dark:text-indigo-400 font-bold">ABSTRACT:</strong> {post.summary || post.excerpt}
          </div>
        )}

        <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
          {post.content}
        </div>
      </article>
    </div>
  );
}
