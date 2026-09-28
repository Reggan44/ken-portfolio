import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./env";

export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const PROJECTS_QUERY = `*[_type == "project"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  tags,
  summary,
  mainImage,
  specs,
  githubRepo,
  schematicUrl,
  cadUrl,
  publishedAt
}`;

export const PROJECT_BY_SLUG_QUERY = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  tags,
  summary,
  mainImage,
  gallery,
  specs,
  bom,
  githubRepo,
  schematicUrl,
  cadUrl,
  body,
  publishedAt
}`;
