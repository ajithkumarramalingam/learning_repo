# Repository Guidelines

## Project Structure & Module Organization
This repository is a practice workspace organized by topic rather than a single deployable app.

- `typescript/`: TypeScript exercises and notes (`sandbox.ts`, `fundamentals/`, `patterns/`).
- `javascript/`: JavaScript practice code (`sandbox.js`, `fundamentals/`, `patterns/`).
- `dsa/`: Data structure and algorithm drills (`arrays/`, `sorting/`, `trees/`, `dynamic-programming/`).
- `sql/`, `nodejs/`, `snippets/`, `notes/`: topic-specific scratch work and reference material.
- Root config: `package.json`, `tsconfig.json`.

Keep practice files near the relevant topic folder. Prefer small, focused files over large mixed notebooks.

## Build, Test, and Development Commands
- `npm install`: install local tooling (`typescript`, `ts-node`, `nodemon`).
- `npx tsc --noEmit`: run TypeScript type-checking without generating output.
- `npx ts-node typescript/sandbox.ts`: run the TypeScript sandbox directly.
- `npx nodemon --watch typescript --exec "npx ts-node typescript/sandbox.ts"`: rerun sandbox on file changes.

Note: `npm test` is currently a placeholder and fails by design.

## Coding Style & Naming Conventions
- Use 2 spaces for indentation in `.ts`, `.js`, `.sql`, and Markdown examples.
- Keep TypeScript in `strict` mode compatible (see `tsconfig.json`).
- File naming: use `kebab-case` for topic files (for example, `two-sum.ts`) and descriptive folder names.
- Prefer pure functions for algorithm practice; avoid hidden global state in sandboxes.

## Testing Guidelines
There is no formal test framework configured yet.

- Validate TypeScript changes with `npx tsc --noEmit` before opening a PR.
- For algorithm exercises, include inline sample cases at the bottom of the file or add a small `*.spec.ts` alongside the solution.
- If you add a test runner (Jest/Vitest), also add an `npm test` script in `package.json`.

## Commit & Pull Request Guidelines
Git history is not available in this directory, so follow a conventional format:

- Commit messages: `type(scope): summary` (for example, `feat(dsa): add merge sort implementation`).
- Keep commits focused to one topic or exercise.
- PRs should include: purpose, changed paths, how you validated (`npx tsc --noEmit`, manual run), and screenshots only when documenting rendered output.
