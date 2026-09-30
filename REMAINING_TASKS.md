# Remaining Tasks & Action Plan

This document lists all remaining tasks to finalize the **Ken Portfolio** web application. Any new session starting after computer restart can read this file and immediately pick up where we left off.

---

## Task Checklist Overview

- [x] **Task 1:** Connect `/projects` page to fetch live data from Sanity CMS (with fallback)
- [x] **Task 2:** Connect `/projects/[slug]` detail page to Sanity CMS
- [x] **Task 3:** Add Blog GROQ queries & connect `/blog` and `/blog/[slug]` to Sanity CMS
- [x] **Task 4:** Update generic GitHub link (`https://github.com`) to Ken's actual GitHub profile link (`https://github.com/Reggan44`)
- [ ] **Task 5:** Add first 3 projects into Sanity Studio at `/studio`
- [ ] **Task 6:** (Optional) Set up contact form or custom domain

---

## Detailed Task Implementation Steps

### Task 1: Connect `/projects` Page to Sanity CMS

**File:** `src/app/projects/page.tsx`  
**Goal:** Query published projects from Sanity Studio using `PROJECTS_QUERY`. If Sanity returns projects, display them; otherwise fallback to existing `pdfProjects` array.

#### Code Changes Needed:
1. Import `client` and `PROJECTS_QUERY` from `@/lib/sanity/client`:
   ```typescript
   import { client, PROJECTS_QUERY } from "@/lib/sanity/client";
   ```
2. Make the page component an async Server Component:
   ```typescript
   export default async function ProjectsPage() {
     const sanityProjects = await client.fetch(PROJECTS_QUERY).catch(() => []);
     const displayProjects = sanityProjects && sanityProjects.length > 0 ? sanityProjects : pdfProjects;
     ...
   }
   ```
3. Use `urlFor(project.mainImage).url()` for project thumbnail rendering if image comes from Sanity.

---

### Task 2: Connect `/projects/[slug]` Detail Page to Sanity CMS

**File:** `src/app/projects/[slug]/page.tsx`  
**Goal:** Retrieve a single project by slug from Sanity using `PROJECT_BY_SLUG_QUERY`.

#### Code Changes Needed:
1. Import `client` and `PROJECT_BY_SLUG_QUERY` from `@/lib/sanity/client`.
2. Fetch project by params slug:
   ```typescript
   const project = await client.fetch(PROJECT_BY_SLUG_QUERY, { slug: params.slug });
   ```
3. Fallback to finding in `pdfProjects` array if Sanity query returns null.

---

### Task 3: Add Blog Queries & Connect Blog Pages

**File 1:** `src/lib/sanity/client.ts`  
Add GROQ queries for blog posts:
```typescript
export const POSTS_QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  mainImage
}`;

export const POST_BY_SLUG_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  tags,
  mainImage,
  body
}`;
```

**File 2:** `src/app/blog/page.tsx`  
Fetch posts from Sanity and render.

---

### Task 4: Update Ken's GitHub URL

**Files to update:**
- `src/components/Footer.tsx` (Update `href="https://github.com"` to Ken's actual GitHub profile)
- `src/app/about/page.tsx` (Update contact section GitHub link)
- `src/app/page.tsx` (Update social link if present)

---

### Task 5: Content Entry via Sanity Studio

1. Open `https://ken-portfolio-mocha.vercel.app/studio` (or `http://localhost:3000/studio`).
2. Log in using your Sanity account (Google/GitHub/Email).
3. Click **"Project"** -> **"Create new Project"**.
4. Fill in:
   - **Title:** e.g. *Smart Solar IoT Edge Gateway*
   - **Slug:** Click *Generate*
   - **Summary:** *ESP32-based telemetry node with Modbus RTU interface...*
   - **Tags:** `IoT`, `ESP32`, `FreeRTOS`, `MQTT`
   - **Hardware Specs:** Add rows (MCU, Wireless, Sensors, Power)
   - **Firmware Code:** Paste C/C++ snippet
5. Click **Publish**. The website will auto-update!

---

## How to Test and Deploy Changes

1. **Run Dev Server Locally:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` to verify everything works.

2. **Commit and Push to Vercel:**
   ```bash
   git add .
   git commit -m "feat: connected Sanity CMS queries to projects and blog pages"
   git push origin main
   ```
   Vercel will automatically build and deploy the changes within ~45 seconds.
