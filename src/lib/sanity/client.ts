import { createClient } from "@sanity/client";
import createImageUrlBuilder from "@sanity/image-url";
import { sanityConfig } from "./env";

export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: false, // Ensure live updates published in Sanity Studio are fetched immediately
});

const builder = createImageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// GROQ Queries
export const PROJECTS_QUERY = `*[_type == "project"] | order(coalesce(publishedAt, _createdAt) desc) {
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
  publishedAt,
  _createdAt
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
  publishedAt,
  _createdAt
}`;

export const POSTS_QUERY = `*[_type == "post"] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  mainImage,
  _createdAt
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  mainImage,
  body,
  _createdAt
}`;
