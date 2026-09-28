import { createClient } from "@sanity/client";
import { sanityConfig } from "./env";

/**
 * Sanity client for fetching published content on the server side.
 */
export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
});
