# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Commands
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the production site
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

### No Testing/Linting Commands
This project currently does not have configured testing or linting scripts. When making changes, ensure code follows TypeScript strict mode rules as defined in tsconfig.json.

## Project Architecture

This is an **Astro-based academic course website** for "Programación Concurrente y Paralela" (Concurrent and Parallel Programming) at UNMSM. The site serves course materials, schedules, and lab assignments.

### Key Architecture Patterns

**Content-Driven Structure**: Uses Astro's content collections to manage course materials:
- Lab assignments are stored as MDX files in `src/content/labs/` organized by units
- Content schema defined in `src/content/config.ts` enforces structure for lab metadata
- Course configuration centralized in `src/config/course.ts` with instructor info, course details, and semester data

**Component Organization**:
- `src/components/home/` - Homepage-specific components (Hero, CourseOverview, etc.)
- `src/components/schedule/` - Schedule and calendar components
- `src/components/common/` - Shared components (Footer, Sidebar)
- `src/layouts/` - Page layouts (BaseLayout.astro, GuideLayout.astro)

**Page Structure**:
- Static pages in `src/pages/` for major course sections (syllabus, resources, staff, etc.)
- Dynamic lab pages generated from content collections via `src/pages/labs/[...slug].astro`

### Content Management

**Lab Content**: Each lab is an MDX file with frontmatter containing:
- `title`, `description`, `dueDate`
- `files` array for downloadable resources
- `path` for file location
- `author` and publication metadata

**Course Configuration**: Single source of truth in `src/config/course.ts` containing:
- Course metadata (code, name, semester, credits)
- Instructor information with social media links
- Academic calendar and important dates
- Evaluation criteria and grading structure

### Styling and Theming

**TailwindCSS v4**: Uses the new @tailwindcss/vite plugin (not traditional config file)
- Typography plugin for rich text content
- Custom font stack: Heebo (body), Geist Mono (code)
- Configured in astro.config.mjs vite plugins

**Code Highlighting**: Custom Shiki configuration with:
- Vesper light/dark themes (JSON files in public/theme/)
- Line number transformers for code blocks
- Math rendering via remark-math and rehype-katex

### Development Patterns

**TypeScript Strict Mode**: Project uses Astro's strict TypeScript configuration
**Imports**: Relative imports used throughout, main config imported as `{ COURSE_CONFIG }`
**Astro Features**: Leverages content collections, MDX integration, and static site generation
**Analytics**: Vercel Analytics integration for usage tracking

### File Organization

```
src/
├── config/course.ts      # Central course configuration
├── content/
│   ├── config.ts         # Content collection schemas
│   └── labs/            # Lab assignments by unit
├── components/          # Reusable UI components
├── layouts/            # Page layout templates
├── pages/              # Route pages and dynamic content
└── styles/global.css   # Global styles
```

When working with this codebase:
- Add new lab content as MDX files following the existing schema
- Update course information in `src/config/course.ts`
- Follow the existing component patterns for UI consistency
- Ensure MDX content includes proper frontmatter metadata