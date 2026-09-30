import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/client";

const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <div className="relative w-full h-auto my-8 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={urlFor(value).url()}
            alt={value.alt || " " }
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          {value.caption && (
            <div className="p-3 text-xs font-mono text-center text-zinc-500 dark:text-zinc-400">
              {value.caption}
            </div>
          )}
        </div>
      );
    },
    code: ({ value }: any) => {
      if (!value?.code) return null;
      return (
        <div className="my-6 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 shadow-sm">
          {value.filename && (
            <div className="px-4 py-2 bg-zinc-900 text-zinc-400 text-xs font-mono border-b border-zinc-800">
              {value.filename}
            </div>
          )}
          <pre className="p-4 overflow-x-auto text-sm font-mono text-zinc-300">
            <code>{value.code}</code>
          </pre>
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl md:text-4xl font-extrabold mt-12 mb-6 text-zinc-900 dark:text-zinc-50">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-bold mt-10 mb-5 text-zinc-900 dark:text-zinc-50">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-zinc-900 dark:text-zinc-100">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold mt-6 mb-3 text-zinc-900 dark:text-zinc-100">{children}</h4>,
    normal: ({ children }: any) => <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-300 my-4">{children}</p>,
    blockquote: ({ children }: any) => <blockquote className="border-l-4 border-indigo-500 pl-4 py-1 my-6 italic text-zinc-600 dark:text-zinc-400 bg-indigo-50/50 dark:bg-indigo-950/20">{children}</blockquote>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 my-5 text-zinc-700 dark:text-zinc-300 ml-4">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 my-5 text-zinc-700 dark:text-zinc-300 ml-4">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }: any) => <li className="leading-relaxed text-zinc-700 dark:text-zinc-300">{children}</li>,
    number: ({ children }: any) => <li className="leading-relaxed text-zinc-700 dark:text-zinc-300">{children}</li>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-bold text-zinc-900 dark:text-zinc-100">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    code: ({ children }: any) => <code className="px-1.5 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 font-mono text-sm">{children}</code>,
    link: ({ value, children }: any) => {
      const target = (value?.href || "").startsWith("http") ? "_blank" : undefined;
      return (
        <a href={value?.href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium">
          {children}
        </a>
      );
    },
  },
};

export function CustomPortableText({ value }: { value: any }) {
  if (!value) return null;
  return <PortableText value={value} components={components} />;
}
