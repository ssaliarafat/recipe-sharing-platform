<!--
Sync Impact Report
- Version change: unratified template → 1.0.0 (initial adoption; ratified 2026-11-07).
- Modified principles: none; the unratified template contained principle
  placeholders only.
- Added principles: I. Strict TypeScript; II. App Router and Component Boundaries;
  III. Utility-First Styling; IV. Tested Quality; V. Consistent Naming.
- Added sections: Technology & Architecture Constraints; Delivery & Collaboration.
- Removed sections: none; the template's unnamed section placeholders were defined.
- Templates: ✅ .specify/templates/plan-template.md updated with constitution gates;
  ✅ .specify/templates/tasks-template.md updated for required tests;
  ✅ .github/agents/speckit.tasks.agent.md updated to require test tasks;
  ✅ .specify/templates/spec-template.md reviewed; no changes needed.
- Workflow files: .specify/templates/commands/ is absent; the existing constitution
  agent/prompt were reviewed and need no changes.
- Follow-up TODOs: none.
-->

# Recipe Sharing Platform Constitution

## Core Principles

### I. Strict TypeScript
The project `tsconfig.json` MUST enable `strict: true`, and all project TypeScript
files MUST compile under strict type checking. Developers MUST NOT use `any`; use
`unknown` with explicit narrowing or define an accurate type. Types at external-data
boundaries MUST be validated before the data is relied on. This keeps shared
application code predictable and catches invalid assumptions early.

### II. App Router and Component Boundaries
The application MUST use Next.js App Router file-based routing, with route segments,
layouts, pages, and route handlers organized under the `app` directory. Components
MUST remain Server Components by default. A component MUST be marked with the
`use client` directive only when it needs client-side state, effects, event handling,
or browser APIs; client boundaries MUST be kept as narrow as practical. Database
access and server-only operations MUST remain on the server. These boundaries
preserve the framework's rendering model and limit unnecessary client-side code.

### III. Utility-First Styling
Tailwind CSS utility classes MUST be the default styling method. Custom CSS MUST be
added only when the required presentation cannot reasonably be expressed with
Tailwind utilities or when a reusable custom rule materially improves clarity.
Styling MUST remain responsive and accessible; local exceptions MUST be scoped and
maintainable rather than duplicating utility styles without cause.

### IV. Tested Quality
Every change that alters behavior MUST include or update automated tests that
exercise the affected behavior at an appropriate level. Tests MUST be derived from
requirements and acceptance criteria; unit, component, integration, or end-to-end
tests MUST be selected according to the behavior and boundaries under test. Before
submitting a change, contributors MUST run the relevant tests and available
TypeScript, lint, and build checks, and MUST resolve failures caused by their change.
This makes quality verifiable without imposing an arbitrary coverage percentage.

### V. Consistent Naming
Names MUST follow consistent TypeScript and React conventions: components and types
use PascalCase; variables, functions, and hooks use camelCase, with hooks prefixed
by `use`; constants use UPPER_SNAKE_CASE only when they are true module-level
constants. Component files use PascalCase, hook files use the `use` plus
PascalCase pattern, and App Router route-segment directories use lowercase names
with hyphens where multiple words are needed. Existing local conventions MUST be
followed when extending a module.

## Technology & Architecture Constraints

The application MUST use Next.js App Router, React, TypeScript, and Tailwind CSS.
TypeScript strict mode and the prohibition on `any` apply throughout application
code. PostgreSQL is the default database; a feature plan may select another
suitable database only when it records the need and the trade-offs. Data access
MUST use server-side boundaries and typed interfaces. Feature plans MUST identify
the chosen database and test approach without introducing infrastructure that is
not required by the feature.

## Delivery & Collaboration

Contributors MUST keep changes focused, follow established repository structure and
naming, and include relevant tests and documentation updates. Changes MUST be
reviewed by at least one other team member before integration; the author MUST
describe the intent, noteworthy trade-offs, and checks performed. Review feedback
that affects correctness, accessibility, maintainability, or these principles
MUST be resolved or explicitly discussed before approval. Technical decisions that
depart from this constitution MUST be documented in the feature plan with a reason
and reviewed before implementation.

## Governance

This constitution is the governing project standard. Amendments MUST be proposed
as a reviewed change that explains the reason and impact, updates the version and
amendment date, and synchronizes affected Spec Kit templates and guidance in the
same change. The team MUST review and approve amendments before they take effect.

Versioning follows semantic versioning: MAJOR for backward-incompatible removal or
redefinition of principles, MINOR for added principles or materially expanded
requirements, and PATCH for clarifications and non-semantic wording changes. The
ratification date remains the original adoption date; the last-amended date changes
whenever an approved amendment is made.

Feature plans MUST include a Constitution Check before design and repeat it after
design. Reviewers MUST verify compliance in every change review. Any exception
MUST be recorded with its justification in the plan and approved by the reviewers;
an exception does not amend the constitution.

**Version**: 1.0.0 | **Ratified**: 2026-11-07 | **Last Amended**: 2026-11-07
