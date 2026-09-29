"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { codeInput } from "@sanity/code-input";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "ken-portfolio-studio",
  title: "Ken Portfolio Studio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
});


