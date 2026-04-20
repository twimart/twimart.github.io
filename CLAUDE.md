# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # dev server (Vite HMR)
npm run build     # production build → dist/
npm run preview   # preview production build locally
npm run lint      # ESLint
```

No test suite is configured.

## Stack

- **React 19** + **Vite 8** — no TypeScript, pure JSX/JS
- **Tailwind CSS 4** loaded via `@tailwindcss/vite` plugin (not PostCSS)
- **Framer Motion 12** for scroll and entrance animations

## Architecture

Single-page portfolio — one long scrolling page with anchor sections.

### Content & i18n

All copy lives in two files:

- `src/data.js` — structured content (personal info, experiences, education, skills, certifications, articles, projects). Edit this file to update portfolio content.
- `src/translations.js` — UI string translations (FR/EN). Language defaults to French; toggled via `LangContext`.

### State / Context

- `src/LangContext.jsx` — provides `{ lang, t, toggleLang }` to the whole tree via `useLang()`. `t` is the active translation object.
- `src/hooks/useTheme.js` — manages dark/light mode. Default is dark. Persists to `localStorage`. Adds/removes `.dark` class on `<html>`.

### Theming

CSS custom properties defined in `src/index.css` under `:root` (light) and `.dark` (dark). Tailwind utility classes like `bg-main`, `text-main`, `text-muted`, `border-accent` map to these variables — check `index.css` for the full token set before adding new color classes.

### Scroll animations

`src/hooks/useInView.js` wraps `IntersectionObserver`. Components use it to trigger Framer Motion entrance animations when scrolled into view.

### Component layout (top → bottom)

`Navbar → Hero → About → Experience → Skills → Projects → Articles → Contact → Footer`

`SectionTitle` is a shared heading component used by all sections.
