# GitHub Copilot Instructions

## Project Overview
This is a Recipe Sharing Platform that allows visitors to discover, search, filter, create, view, edit, publish, and delete recipes.

Follow the approved project specification in `specs/recipe-sharing-platform/spec.md`. Do not introduce features outside the agreed MVP scope.

## Technology Stack
- Next.js 16.4.5 using the App Router.
- React 19.3.0.
- TypeScript.
- Tailwind CSS 4.
- ESLint 9.
- Prettier 3.
- PostgreSQL is the planned database.

Do not assume that database integration, authentication, or other infrastructure has been implemented unless it exists in the current codebase.

## Project Structure
- `app/`: Next.js App Router pages, layouts, and global styles.
- `app/page.tsx`: Homepage.
- `app/layout.tsx`: Root layout and application metadata.
- `app/globals.css`: Global styling.
- `public/`: Static assets.
- `specs/recipe-sharing-platform/`: Project specification and planning documents.
- `components/`: Place reusable UI components here as the application grows.
- `.github/`: Repository-wide GitHub configuration and Copilot instructions.

Keep route-specific pages in the App Router and reusable interface components in the shared components directory.

## Recipe Data Model
Follow the approved Recipe entity in the project specification.

A recipe contains:
- Author name.
- Recipe name.
- Description.
- Category.
- Ordered ingredient entries.
- Ordered instruction entries.
- Positive whole-number cooking time in minutes.
- Publication status: `draft` or `published`.

Use TypeScript types or interfaces for structured recipe data.

Draft recipes must not appear in public browsing, search, category filtering, or public detail pages.

## Naming Conventions
- Use PascalCase for React components and component files.
- Use camelCase for variables, functions, and object properties.
- Use descriptive names that clearly communicate purpose.
- Use TypeScript interfaces or types for component props and data structures.
- Use kebab-case for route segments where appropriate.

## Coding Standards
- Prefer functional React components.
- Use Server Components by default.
- Add `"use client"` only when client-side interactivity is required.
- Use semantic HTML and accessible form labels.
- Use Tailwind CSS for styling.
- Keep components focused and reusable.
- Handle loading, empty, invalid, and error states clearly.
- Do not use `any` unless absolutely necessary.
- Preserve existing project conventions.

## Formatting
Follow the repository's Prettier configuration:
- Semicolons enabled.
- Double quotes.
- Two-space indentation.
- Trailing commas.
- Print width of 80 characters.

Run the available checks before committing:
- `npm run lint`
- `npm run build`

There is currently no dedicated test script in `package.json`. Do not claim tests have passed unless an actual test suite has been run.

## MVP Boundaries
Do not add the following unless the team explicitly approves a future enhancement:
- Authentication or user accounts.
- Identity-based recipe ownership enforcement.
- Ratings or comments.
- Saved recipes.

Anyone can manage recipes in the shared collection in the MVP. An author name is descriptive information, not proof of identity.

## Important Development Guidance
- Inspect the existing code before making changes.
- Follow the approved project specification.
- Do not duplicate existing components or functionality.
- Do not introduce new dependencies without a clear reason.
- Avoid changing files unrelated to the assigned task.
- Keep implementations consistent with the current project architecture.
