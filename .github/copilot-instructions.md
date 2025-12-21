# Plant Ecommerce Website - AI Coding Agent Instructions

## Project Overview

A React-based e-commerce plant storefront built with Vite, featuring a modular component architecture and feature-based directory structure. The app uses React Router for client-side navigation and CSS modules for scoped styling.

**Tech Stack:** React 19.2, React Router 7.9, Vite 7.2, ESLint 9

## Architecture & Key Patterns

### Directory Structure
- **`src/pages/`** - Route-mapped pages (LandingPage, Products, Contact, NotFound). Each page imports reusable components.
- **`src/components/`** - Reusable UI components with CSS modules (Nav_Bar, Buttons, Cards1-4, Footer variants, Inputs, Review_Card, Text1)
- **`src/routes/`** - Single `Approuter.jsx` file defining all routes via `createBrowserRouter` from react-router-dom
- **`src/context/`** - React Context setup (`CreateContext.js`), currently minimal but ready for state management
- **`src/features/`** - Empty placeholder for future feature-based modules
- **`src/styles/`** - Global CSS: `variable.css` (CSS custom properties), `global.css` (utility classes)
- **`src/assets/`** - Images, icons, fonts (web fonts imported via `fonts.css`)

### Component Pattern
Components use **CSS Modules** with scoped styling:
```jsx
// Component imports its module CSS
import Style from "./ComponentName.module.css"
import { NavLink } from "react-router-dom"

// Renders with Style.className syntax
<div className={Style.Nav_outer}>
```

**CSS Variable Usage:** All colors/fonts defined in `styles/variable.css` via `:root` custom properties:
```css
--primary-color, --secondary-color, --Aldrich, --Popins, --Jaro fonts
--black color
```

### Routing Configuration
All routes centralized in `src/routes/Approuter.jsx`:
- Routes: `/` (LandingPage), `/products` (Products), `/contact` (Contact), `*` (NotFound)
- Uses `createBrowserRouter` + `RouterProvider`
- To add routes: modify the `router` array and create corresponding page component

### Navigation Pattern
`Nav_Bar` component uses `NavLink` with conditional styling:
```jsx
className={({ isActive }) => isActive ? "Active" : "InActive"}
```
CSS utility classes in `global.css` handle opacity for active/inactive states (1 and 0.5).

## Development Workflow

### Commands
- **`npm run dev`** - Start Vite dev server (hot reload)
- **`npm run build`** - Production build to `dist/`
- **`npm run lint`** - Run ESLint on all `.js`/`.jsx` files
- **`npm run preview`** - Preview production build locally

### Build & Deploy
- **Vite alias:** `@` maps to `/src` (enables imports like `import Button from '@/components/Buttons'`)
- **Output:** Build artifacts in `dist/` directory (gitignored)
- **No backend integration:** This is a frontend-only SPA; real backend APIs would be called via a services layer (not yet implemented)

## Critical Implementation Patterns

### Creating New Pages
1. Create folder in `src/pages/PageName/` with `PageName.jsx`
2. Import components (e.g., `Nav_Bar`)
3. Export default component
4. Add route to `src/routes/Approuter.jsx`

### Creating New Components
1. Create folder in `src/components/ComponentName/`
2. Create `ComponentName.jsx` and `ComponentName.module.css`
3. Use CSS Modules: `import Style from "./ComponentName.module.css"`
4. Reference custom variables from `styles/variable.css`
5. For dynamic styles, use inline `style={}` (as seen in Buttons component)

### Styling Conventions
- **CSS Modules** (not inline styles or global classes) for component-scoped styles
- **Custom properties** from `variable.css` for colors/fonts (e.g., `color: var(--black)`, `font-family: var(--Popins)`)
- **Class naming:** PascalCase in JS, snake_case in CSS (e.g., `className={Style.Nav_outer}`)
- **Font families:** Aldrich (headings), Popins (body), Jaro (accent) loaded from `assets/fonts/fonts.css`

### Props Pattern
Components accept props but typing is minimal. Example (Buttons component):
```jsx
const Buttons = ({ value, color }) => {
  return <button style={{backgroundColor: {color}}} className={Style.Buttons_1}>{value}</button>
}
```
No PropTypes or TypeScript; rely on JSDoc comments for documentation if needed.

## Integration Points & Missing Pieces

### Context API (Ready, Unused)
`src/context/CreateContext.js` exports `MyContext` but unused. Will be needed for global cart/auth state.

### Features Folder
`src/features/` is empty; intended for future feature modules (auth, cart, product-detail) following Redux/feature-slice pattern.

### Backend Integration
No API layer exists yet. When needed:
1. Create `src/services/` directory with API client (axios/fetch)
2. Use context/state management for async cart/product data
3. Follow component pattern: fetch in pages/features, pass data to reusable components

### Assets & Fonts
Custom web fonts in `assets/fonts/` imported via `fonts.css`. Icons use Font Awesome (`fa-solid` classes in Nav_Bar).

## ESLint Configuration
- Extends: ESLint recommended + React Hooks rules + React Refresh rules
- Target: ES2020+, browser globals
- No type checking (no TypeScript)
- Ignores: `dist/` directory

## Common Pitfalls
- **Styling scoping:** Use CSS Modules to avoid class name collisions (avoid global classes in `index.css`)
- **Route typo:** Routes are case-sensitive; NavLink `to="/contact"` matches route `/Contact` only with exact casing
- **Missing context provider:** If adding Context usage, wrap App with provider in `main.jsx`
- **Component reuse:** Avoid hardcoding content in reusable components; use props instead
