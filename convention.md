# Project Conventions & Rules

This document outlines the contribution standards for this project, including commit conventions, branch structure, and code style.

---

# Code Convention

- Filenames should be written in `kebab-case` (`-`) separating words for consistency and readability (e.g., `user-profile.tsx`, `user-details.tsx`).
- Variables should be named using `camelCase`, and they should be descriptive to convey their purpose clearly. Avoid using single-letter variable names.
- Page and Component Functions use traditional function declarations for defining pages and components. This ensures consistency across the codebase and aligns with React conventions (e.g., `function MyComponent() { ... }`).
- Logical Functions use arrow functions for defining logical functions or utility functions that perform a specific task or calculation. This is often preferred for concise syntax and binding behavior (e.g., `const calculateTotal = (items: Item[]) => items.reduce((sum, item) => sum + item.price, 0);`).
- Functions should be named using `camelCase`, starting with a verb to describe what the function does (e.g., `fetchData`, `submitForm`).
- Component names should be written in PascalCase to distinguish them from regular functions and variables (e.g., `UserProfile`, `ButtonComponent`).
- Use `type` for Props and Parameters when specifying the type of props or parameters, use the `type` keyword instead of `interface`. This helps maintain consistency across the codebase and allows for simpler type declarations (e.g., `type ButtonProps = { label: string; onClick: () => void; }`).
- Domain Types are shared across features (e.g., `User`, `News`, etc.) should be declared in the `shared` directory to provide consistent types throughout the project. These types are generally more abstract and reusable across different parts of the application.
- Feature-Specific Types are specific to a particular feature should reside within the `features/<feature-name>/types` directory. These types are meant to serve only the functionality within that feature and should not be shared across other features unless necessary.
- Use named exports for logical functions or variables to improve clarity and ensure easy identification when importing (e.g., `export const dateFormatter = () => { ... };`).
- Use default exports for the component in a file. This is typically reserved for the primary export of a module (e.g., `export default HomeComponent;`).
- Use barrel exports for group exports in an `index.ts` file within each `components` module to make imports cleaner and easier. For example, export all components from the `components/index.ts` file, allowing imports like `import { Button, Header } from './components';` instead of deep imports.
- Single-letter variable names should be avoided, as they provide little context for their purpose. Instead, use descriptive names to make the code more readable and maintainable (e.g., use `userId` instead of `u`, `itemCount` instead of `i`).

## Commit Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard.

### Format
```
<type>(<scope>): <message>
```

### Example
```
feat(auth): add login feature with JWT
fix(api): handle 500 error on user creation
chore: update dependencies
docs(readme): update setup instruction
```

### Commit Types

| Type       | Description                                |
|------------|--------------------------------------------|
| `feat`     | New feature                                 |
| `fix`      | Bug fix                                     |
| `chore`    | Minor changes not affecting production code |
| `docs`     | Documentation changes                       |
| `style`    | Code style changes (not CSS)                |
| `refactor` | Code refactoring without changing behavior  |
| `test`     | Add or fix tests                            |
| `perf`     | Performance improvements                    |
| `ci`       | CI/CD configuration changes                 |
| `build`    | Build system or dependency changes          |

---

## Branch Structure

Use the following structure:

- `main`: production branch, always stable.
- `dev`: main development branch.
- `feat/<feature-name>`: for new features.
- `fix/<fix-name>`: for bug fixes.
- `chore/<task>`: updates for deps, docs, etc.

### Branch name examples:
- `feat/login-page`
- `fix/404-error-home`
- `chore/update-readme`

---

## Biome Code Style

This project uses [Biome](https://biomejs.dev/) for code formatting and linting.

### Commands:
```bash
npm run lint       # Check code issues
npm run lint:fix   # Auto-fix issues if possible
```

Your code should:
- Avoid unused variables.
- Use 2 spaces instead of tabs.
- Follow consistent style: use single quotes (`'`) except in JSX.

---

## Commit Testing & Validation

### On commit:
- Validation is done using Husky + CommitLint.
- Do not commit directly to `main`.

---

## Pull Request Checklist
- [ ] Commit messages follow the proper format
- [ ] Ran `npm run lint` and `npm run lint:fix`
- [ ] Updated documentation if needed
- [ ] Tested locally (for new features)

---

Thank you for following these standards 🙏