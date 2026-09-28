// Environment configuration for Sanity CMS

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01",
  /**
   * Enable `useCdn` for production reads (faster, cached).
   * Disable for authenticated / preview requests.
   */
  useCdn: process.env.NODE_ENV === "production",
};
