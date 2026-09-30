import Link from "next/link";
import { FileText, Clock, ArrowRight, Tag, BookOpen } from "lucide-react";
import { client, POSTS_QUERY } from "@/lib/sanity/client";

const samplePosts: any[] = [];

export const metadata = {
  title: "Articles & Insights | Ken Portfolio",
  description:
    "Technical articles, field notes, and insights on embedded firmware, IoT, cellular tech, and hardware bring-up.",
};

export const revalidate = 0;

export default async function BlogIndexPage() {
  let sanityPosts: any[] = [];
  try {
    sanityPosts = await client.fetch(POSTS_QUERY);
  } catch (err) {
    console.error("Failed to fetch blog posts from Sanity:", err);
  }

  const postsToDisplay =
    sanityPosts && sanityPosts.length > 0 ? sanityPosts : samplePosts;

  return (
    <div className="pt-24 pb-16 px-6 md:px-12 max-w-5xl mx-auto space-y-12">
      {/* Header */}
      <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/80 text-indigo-700 dark:text-indigo-300 text-xs font-mono font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          TECHNICAL PAPERS &amp; INSIGHTS
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Articles &amp; Insights
        </h1>
        <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          In-depth technical guides, field notes from hardware deployments, and insights from scaling IoT systems in real-world environments.
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-8">
        {postsToDisplay.map((post: any) => (
          <article
            key={post._id}
            className="card-elevated p-8 space-y-4 group hover:border-indigo-600 dark:hover:border-indigo-500"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-indigo-600 dark:text-indigo-400">
              <div className="flex items-center gap-2">
                {(post.tags || []).map((tag: string) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200 dark:border-indigo-800/60 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-3 text-zinc-400 dark:text-zinc-500">
                <span>{post.publishedAt}</span>
                {post.readTime && (
                  <>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </>
                )}
              </div>
            </div>

            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-snug">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {post.summary || post.excerpt}
            </p>

            <div className="pt-2 flex justify-end">
              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:underline"
              >
                <span>Read Full Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

