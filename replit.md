# CraftedWeb Studio

## Overview
CraftedWeb Studio is a premium website template marketplace built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components. It showcases and sells website templates with features like browsing, filtering, template details, and demo viewing.

## Recent Changes
- 2026-02-24: Initial Replit setup. Replaced `@vitejs/plugin-react-swc` with `@vitejs/plugin-react` to fix bus error. Configured Vite to use port 5000 with `allowedHosts: true` for Replit proxy compatibility.

## Project Architecture
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS + shadcn/ui component library
- **Routing**: React Router v6
- **State/Data**: TanStack React Query, Supabase client
- **UI**: Radix UI primitives, Lucide icons, Recharts, Embla Carousel

### Directory Structure
- `src/` - Application source code
  - `components/marketplace/` - Main marketplace page components (Hero, Templates, About, Contact, etc.)
  - `components/ui/` - shadcn/ui component library
  - `App.tsx` - Root component with routing
- `public/images/` - Template screenshot images
- `index.html` - Entry point

### Key Configuration
- `vite.config.ts` - Vite dev server on port 5000, host 0.0.0.0
- `tailwind.config.ts` - Tailwind with custom theme
- `components.json` - shadcn/ui configuration
- `tsconfig.json` - TypeScript configuration

## Deployment
- Static site deployment using `npm run build` with output in `dist/`
