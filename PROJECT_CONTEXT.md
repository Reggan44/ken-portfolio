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
Next.js App Router Structure:
```
├── app/
│   ├── layout.tsx                # Root layout with navbar, footer, global providers & styles
│   ├── page.tsx                  # Home page (Hero, Featured Projects, Core Skills, Recent Articles)
│   ├── projects/
│   │   ├── page.tsx              # Projects index page (Filter by tag: MCU, RTOS, PCB, etc.)
│   │   └── [slug]/
│   │       └── page.tsx          # Single Project page (Specs, BOM table, CAD links, MDX content)
│   ├── blog/
│   │   ├── page.tsx              # Blog / Tutorials list page
│   │   └── [slug]/
│   │       └── page.tsx          # Single Blog post page (Syntax highlighted code & KaTeX math)
│   ├── about/
│   │   └── page.tsx              # About Ken, Experience timeline, Hardware Lab setup, Contact
│   └── api/
│       └── draft/                # Sanity preview/draft API routes
├── components/
│   ├── ui/                       # Buttons, Cards, Badges, Modals
│   ├── layout/                   # Navbar, Footer, Container
│   ├── mdx/                      # Custom MDX components (CodeBlock, MathFormula, SpecTable)
│   └── project/                  # BomTable, SpecsCard, GalleryViewer
├── lib/
│   ├── sanity/                   # Sanity client, queries, image builder
│   └── utils/                    # Helper functions
└── sanity/                       # Sanity Studio config and schemas
```

---

## [PHASED_IMPLEMENTATION_PLAN]

- [ ] **Phase 1: Project Foundation & CMS Schema Setup**
  - Deliverable: Next.js App Router workspace initialized with Tailwind CSS, Lucide Icons, and Sanity Studio configured with `project` and `post` schemas.
- [ ] **Phase 2: Core Design System & Global Layout**
  - Deliverable: Dark-themed high-tech UI components, navigation, responsive footer, and global layout structure.
- [ ] **Phase 3: Projects Module (Index & Dynamic Detail Pages)**
  - Deliverable: Dynamic `/projects` catalog page with filterable tags, and `/projects/[slug]` detail page with BOM table, technical specs, and CAD/GitHub CTA buttons.
- [ ] **Phase 4: Blog & Tutorials Module with MDX, Code & Math**
  - Deliverable: Dynamic `/blog` index and `/blog/[slug]` view with Shiki code highlighting and KaTeX rendering for math equations.
- [ ] **Phase 5: About Page, SEO Optimization & Final Polish**
  - Deliverable: `/about` interactive timeline & hardware lab layout, dynamic metadata generation, OpenGraph images, performance auditing, and deployment setup.

---

## [AI_INSTRUCTIONS]
1. **Preserve Tech Stack**: Do NOT introduce alternative frameworks, styling frameworks, or CMS alternatives. Maintain Next.js App Router, Tailwind CSS, Sanity CMS, Lucide Icons, Shiki, and KaTeX.
2. **Schema Integrity**: Always cross-reference `PROJECT_CONTEXT.md` schema definitions before formulating GROQ queries or building UI components.
3. **No Breaking Changes**: Ensure all component edits maintain non-breaking prop interfaces and strict TypeScript types.
4. **Code Syntax & Math Formatting**: All code blocks rendered from Sanity/MDX must utilize Shiki for syntax highlighting, and inline/block LaTeX formulas must be processed via KaTeX.
5. **Modern Engineering Aesthetics**: Maintain a clean, high-contrast, dark-mode-first aesthetic suitable for an advanced Embedded Systems & IoT Engineering portfolio.
