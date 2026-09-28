# PROJECT_CONTEXT.md

## [PROJECT_META]
- **Project Name**: Ken's IoT & Electrical Engineering Portfolio
- **Target Audience**: 
  - Technical Recruiters & Hiring Managers (Hardware / Embedded Systems / IoT)
  - Potential Clients (Freelance / Firmware & PCB Design Consulting)
  - Hardware & Maker Community (Open-source contributors & embedded developers)
- **Primary Objectives**:
  - Showcase real-world IoT systems, microcontrollers (MCU), real-time operating systems (RTOS), and PCB layout design capabilities.
  - Present technical tutorials and deep dives with syntax-highlighted embedded code snippet support and mathematical derivation formulas.
  - Deliver a high-performance, fast-loading, dynamic modern web interface with Sanity CMS for seamless content updates.

---

## [TECH_STACK]
- **Framework**: Next.js (App Router, React 19 / Server Components)
- **CMS**: Sanity.io (Sanity Studio embedded / v3)
- **Styling**: Tailwind CSS
- **Design System & Visual Identity (Inspired by sofiyanzau.com)**:
  - **Color Palette & Theme**: Deep dark mode (`#050505` page background, `#0a0a0a` / `#121212` elevated card surfaces, subtle glowing borders `#1e293b` / subtle neon accents).
  - **Typography**: Editorial typography hierarchy with high-contrast, bold display headlines paired with clean sans-serif body text and refined monospace accents (`JetBrains Mono` / `Fira Code`) for technical specs, BOM tables, register maps, and code snippets.
  - **Showcases & Media**: Cinematic, full-width project hero sections, macro PCB photography containers, high-resolution CAD embeds, and smooth video clips of hardware bring-up / logic analyzer traces.
  - **Navigation & Micro-interactions**: Minimalist floating/glassmorphism navbar with subtle hover micro-interactions, soft radial gradients, and glowing accents.
- **Icons**: Lucide Icons (`lucide-react`)
- **Code Syntax Highlighting**: Shiki / Prism
- **Math Rendering**: KaTeX (`rehype-katex`, `remark-math`)
- **Deployment & Hosting**: Vercel / Cloudflare

---

## [DATA_SCHEMAS]

### Sanity Schema: `project`
```javascript
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 3,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'MCU', value: 'MCU' },
          { title: 'RTOS', value: 'RTOS' },
          { title: 'PCB', value: 'PCB' },
          { title: 'BLE', value: 'BLE' },
          { title: 'Zigbee', value: 'Zigbee' },
          { title: 'FPGA', value: 'FPGA' },
          { title: 'Analog Design', value: 'Analog Design' },
          { title: 'Firmware', value: 'Firmware' },
        ],
      },
    },
    {
      name: 'specs',
      title: 'Specifications Table',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'specItem',
          title: 'Spec Item',
          fields: [
            { name: 'key', title: 'Key/Feature', type: 'string' },
            { name: 'value', title: 'Value/Description', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'bom',
      title: 'Bill of Materials (BOM)',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'bomItem',
          title: 'BOM Item',
          fields: [
            { name: 'component', title: 'Component Name', type: 'string' },
            { name: 'designator', title: 'Designator (e.g. C1, R3)', type: 'string' },
            { name: 'partNumber', title: 'MPN / Part Number', type: 'string' },
            { name: 'quantity', title: 'Quantity', type: 'number' },
            { name: 'link', title: 'Datasheet / Supplier Link', type: 'url' },
          ],
        },
      ],
    },
    {
      name: 'githubRepo',
      title: 'GitHub Repository URL',
      type: 'url',
    },
    {
      name: 'schematicUrl',
      title: 'Schematic / CAD Link',
      type: 'url',
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            { name: 'caption', title: 'Caption', type: 'string' },
            { name: 'alt', title: 'Alt Text', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'body',
      title: 'MDX Body',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        {
          type: 'code',
          title: 'Code Snippet',
          options: {
            withFilename: true,
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}
```

### Sanity Schema: `post` (Blog / Tutorials)
```javascript
export default {
  name: 'post',
  title: 'Blog / Tutorial',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alt Text', type: 'string' }],
    },
    {
      name: 'body',
      title: 'MDX Body (Code & Math Support)',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
        {
          type: 'code',
          title: 'Code Block',
          options: { withFilename: true },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    },
  ],
}
```

---

## [ARCHITECTURE]
Next.js App Router Structure & Visual Guidelines:
```
├── app/
│   ├── layout.tsx                # Deep dark root layout (#050505) with minimalist navbar & glowing footer
│   ├── page.tsx                  # Home page (High-impact Hero, Cinematic Full-Width Featured Projects, Skills Matrix)
│   ├── projects/
│   │   ├── page.tsx              # Projects grid/list with macro media cards & tech tag filtering
│   │   └── [slug]/
│   │       └── page.tsx          # Single Project page (Cinematic Hero, BOM table, SpecsCard, CAD embeds)
│   ├── blog/
│   │   ├── page.tsx              # Editorial Blog / Tutorials list page
│   │   └── [slug]/
│   │       └── page.tsx          # Single Blog post page (High-contrast typography, Shiki code & KaTeX math)
│   ├── about/
│   │   └── page.tsx              # About Ken, Interactive Lab Gear / Workstation showcase & Timeline
│   └── api/
│       └── draft/                # Sanity preview/draft API routes
├── components/
│   ├── ui/                       # Modern dark-mode Buttons, GlowCards, Badges, MonospaceAccents
│   ├── layout/                   # Floating Navbar with micro-interactions, Footer
│   ├── mdx/                      # Custom MDX components (ShikiCodeBlock, KaTeXFormula, SpecTable)
│   └── project/                  # BomTable, SpecsCard, GalleryViewer, CinematicMediaCard
├── lib/
│   ├── sanity/                   # Sanity client, queries, image builder
│   └── utils/                    # Helper functions
└── sanity/                       # Sanity Studio config and schemas
```

---

## [PHASED_IMPLEMENTATION_PLAN]

- [x] **Phase 1: Project Foundation & CMS Schema Setup** ✅
  - Deliverable: Next.js App Router workspace initialized with Tailwind CSS, Lucide Icons, and Sanity Studio configured with `project` and `post` schemas.
  - Completed: 2026-09-28 — Build verified clean (Next.js 16.3.6 / Turbopack).
- [x] **Phase 2: Core Design System & Global Layout** ✅
  - Deliverable: Deep dark-themed high-tech UI components (`#050505` / `#0a0a0a`), floating navigation with micro-interactions, glowing accents, responsive footer, and global layout structure.
  - Completed: 2026-09-28 — Clean build verified.
- [ ] **Phase 3: Projects Module (Index & Dynamic Detail Pages)**
  - Deliverable: Dynamic `/projects` catalog page with filterable tags and cinematic full-width project cards, plus `/projects/[slug]` detail page with BOM table, technical specs, macro gallery, and CAD/GitHub CTA buttons.
- [ ] **Phase 4: Blog & Tutorials Module with MDX, Code & Math**
  - Deliverable: Dynamic `/blog` index and `/blog/[slug]` view with editorial high-contrast typography, Shiki code highlighting, and KaTeX rendering for math equations.
- [ ] **Phase 5: About Page, SEO Optimization & Final Polish**
  - Deliverable: `/about` interactive timeline & hardware lab layout, dynamic metadata generation, OpenGraph images, performance auditing, and deployment setup.

---

## [AI_INSTRUCTIONS]
1. **Preserve Tech Stack**: Do NOT introduce alternative frameworks, styling frameworks, or CMS alternatives. Maintain Next.js App Router, Tailwind CSS, Sanity CMS, Lucide Icons, Shiki, and KaTeX.
2. **Schema Integrity**: Always cross-reference `PROJECT_CONTEXT.md` schema definitions before formulating GROQ queries or building UI components.
3. **No Breaking Changes**: Ensure all component edits maintain non-breaking prop interfaces and strict TypeScript types.
4. **Code Syntax & Math Formatting**: All code blocks rendered from Sanity/MDX must utilize Shiki for syntax highlighting, and inline/block LaTeX formulas must be processed via KaTeX.
5. **Modern Visual Identity (sofiyanzau.com Inspired)**: 
   - Enforce a deep dark background (`#050505` to `#0a0a0a`).
   - Use high-contrast, editorial typography with large bold titles paired with monospace technical accents (`JetBrains Mono` / `Fira Code`).
   - Present projects using cinematic full-width media cards (macro PCB photography, board bring-up clips).
   - Implement floating minimalist navigation with micro-interactions and subtle glowing borders/accents.
