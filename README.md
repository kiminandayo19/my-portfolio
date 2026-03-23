# Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Material UI. Features a clean aesthetic with dark mode support, smooth animations, and dynamic content served from a backend API.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 + Material UI v7 |
| Animations | Framer Motion |
| Styling | Emotion (CSS-in-JS) |
| Font | Inter (Google Fonts) |
| Language | TypeScript 5 |
| Testing | Jest + React Testing Library |

## Features

- **Dynamic Content** — Profile, experience, projects, and skills are fetched from the backend API via Server Actions
- **Dark / Light Mode** — Automatically detects system preference with smooth transitions
- **Scroll Animations** — Framer Motion `FadeIn` components for polished page reveals
- **Atomic Design** — Components organized as Atoms → Molecules → Organisms
- **Responsive Layout** — Mobile-first design that adapts to all screen sizes
- **Glassmorphism UI** — Frosted-glass card effects throughout the interface
- **Scroll-to-Top** — Floating action button that appears on scroll

## Sections

| Section | Description |
|---|---|
| `HeroSection` | Introduction with name, title, and call-to-action |
| `ExperienceSection` | Work history with timeline |
| `ProjectsSection` | Featured projects with links and tech tags |
| `SkillsSection` | Categorized technical skills |
| `ContactSection` | Contact form / links |
| `Navbar` | Sticky navigation with theme toggle |
| `Footer` | Social links and copyright |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
cd portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### Development

```bash
npm run dev
# Starts on http://localhost:4000
```

### Production Build

```bash
npm run build
npm start
```

## Testing

```bash
# Run all tests
npm test

# Run in watch mode
npm run test:watch
```

Tests use Jest with `jest-environment-jsdom` and React Testing Library. Test files live alongside components in `__tests__/` subdirectories.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with ThemeRegistry
│   ├── page.tsx            # Home page (Server Component)
│   └── actions/
│       └── portfolio-actions.ts  # Server Actions for API calls
├── components/
│   ├── atoms/              # Base UI elements (Button, Typography, etc.)
│   ├── molecules/          # Composite components (ProjectCard, ExperienceItem)
│   ├── organisms/          # Full page sections (HeroSection, Navbar, etc.)
│   └── animations/         # Framer Motion wrappers (FadeIn)
├── hooks/                  # Custom React hooks
├── lib/
│   ├── theme.ts            # MUI theme configuration (light & dark)
│   └── content.ts          # Static content / fallback data
├── services/
│   ├── api-service.ts      # HTTP client for backend API
│   └── portfolio-service.ts # Domain-level data fetching
└── types/
    └── backend.ts          # TypeScript types matching backend API contracts
```