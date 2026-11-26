# Recipe Sharing Platform
## Architecture and Design Decisions

**Project:** Recipe Sharing Platform  
**Status:** Team implementation baseline  
**Version:** 1.0

---

## 1. Project Overview

The Recipe Sharing Platform is a web application that allows visitors to discover, browse, search, filter, create, edit and delete recipes.

The application will prioritize simplicity, accessibility, maintainability and a consistent user experience.

The MVP will be developed using Next.js, TypeScript, Tailwind CSS and PostgreSQL.

## 2. Technology Stack

| Technology | Purpose |
|---|---|
| Next.js App Router | Application framework and routing |
| TypeScript | Type safety |
| Tailwind CSS | Styling and responsive layouts |
| PostgreSQL | Relational database |
| ESLint | Code quality and linting |
| Prettier | Consistent code formatting |

Server Components will be used by default. Client Components will only be introduced when browser-side interactivity is necessary.

## 3. Database Architecture

The database will use four core entities.

### 3.1 Category

Stores recipe categories.

Fields:
- `id`: UUID, primary key
- `name`: Category name
- `slug`: URL-friendly category identifier

### 3.2 Recipe

Stores the main recipe information.

Fields:
- `id`: UUID, primary key
- `title`: Recipe title
- `description`: Recipe description
- `author_name`: Contributor's displayed name
- `category_id`: Foreign key referencing Category
- `cooking_time_minutes`: Estimated preparation and cooking time
- `status`: Draft or published
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### 3.3 RecipeIngredient

Stores ingredients associated with each recipe.

Fields:
- `id`: UUID, primary key
- `recipe_id`: Foreign key referencing Recipe
- `ingredient_text`: Ingredient name and quantity
- `position`: Display order

### 3.4 RecipeInstruction

Stores preparation instructions associated with each recipe.

Fields:
- `id`: UUID, primary key
- `recipe_id`: Foreign key referencing Recipe
- `instruction_text`: Preparation instruction
- `position`: Display order

### 3.5 Entity Relationships

- One Category can contain multiple Recipes.
- Each Recipe belongs to one Category.
- One Recipe can contain multiple RecipeIngredients.
- One Recipe can contain multiple RecipeInstructions.

Deleting a recipe should also remove its associated ingredients and instructions.

## 4. Application Routes

| Route | Description |
|---|---|
| `/` | Homepage |
| `/recipes` | Recipe collection with search and category filtering |
| `/recipes/[id]` | Recipe details |
| `/recipes/create` | Create a recipe |
| `/recipes/manage` | Manage existing recipes |
| `/recipes/[id]/edit` | Edit an existing recipe |

## 5. Component Architecture

Reusable components will include:

- `Header` — Application branding and navigation.
- `Footer` — Shared footer.
- `RecipeCard` — Displays an individual recipe preview.
- `RecipeGrid` — Displays a responsive collection of recipes.
- `SearchBar` — Searches recipes.
- `CategoryFilter` — Filters recipes by category.
- `RecipeForm` — Shared form for creating and editing recipes.
- `IngredientList` — Displays recipe ingredients.
- `InstructionList` — Displays preparation instructions.
- `DeleteConfirmation` — Confirms recipe deletion.
- `EmptyState` — Displays helpful messages when no recipes are available.

Components should be reusable and have clearly defined TypeScript props.

## 6. Visual Design System

### 6.1 Colour Palette

The application will use a warm, modern, food-inspired visual identity.

| Colour | Hex Code | Usage |
|---|---|---|
| Forest Green | `#263D32` | Primary colour, navigation and buttons |
| Cream | `#F5F0E6` | Main background |
| Terracotta | `#D98B52` | Accent colour and highlights |
| White | `#FFFFFF` | Cards and content surfaces |
| Charcoal | `#333333` | Primary text |

### 6.2 Typography

- **Headings:** Playfair Display
- **Body text:** Inter
- **Buttons and controls:** Inter, medium weight

Typography should maintain readability and a clear visual hierarchy.

### 6.3 Layout and Spacing

- Use a centered content container with a consistent maximum width.
- Use responsive CSS grids for recipe cards.
- Maintain consistent spacing between sections and components.
- Use rounded cards and buttons.
- Ensure layouts adapt to mobile, tablet and desktop screens.
- Maintain accessible colour contrast and keyboard navigation.

### 6.4 Interface Direction

The design should feel warm, welcoming, clean and easy to navigate.

Recipe photography should be an important part of the browsing experience. Avoid unnecessary visual clutter and prioritize the recipe information.

## 7. MVP Scope

The first release will include:

1. Displaying the recipe collection.
2. Viewing individual recipe details.
3. Creating recipes.
4. Validating recipe forms.
5. Searching recipes.
6. Filtering recipes by category.
7. Editing existing recipes.
8. Deleting recipes.
9. Shared navigation and responsive layouts.

The following features are outside the initial MVP:

- User registration and authentication.
- Ratings and reviews.
- Comments.
- Saved or bookmarked recipes.

These can be considered for future development.

## 8. Development Conventions

All team members should follow these conventions:

- Use TypeScript strict mode.
- Avoid the `any` type.
- Follow the Next.js App Router architecture.
- Prefer Server Components.
- Use Tailwind CSS for styling.
- Use reusable components instead of unnecessary duplication.
- Follow the established ESLint and Prettier configuration.
- Use meaningful names for files, components and variables.
- Keep the interface accessible and responsive.
- Test changes before submitting pull requests.

## 9. Collaboration and Code Review

- Development work should be organized through GitHub Issues.
- Each significant feature should be developed on an appropriate feature branch.
- Changes should be submitted through pull requests.
- At least one other contributor should review and approve changes before merging into `main`.
- Team members should communicate progress, blockers and proposed changes.
- Important architectural or design changes should be communicated to the team.

---

**Document owner:** Project Team  
**Project:** Recipe Sharing Platform
