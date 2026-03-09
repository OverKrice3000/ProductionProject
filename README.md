## Project Setup

```
npm install - install dependencies
npm run dev - start server and frontend project in dev mode
```

----

## Scripts

- `npm run dev:frontend` - Start frontend project on webpack dev server
- `npm run dev` - Start frontend project on webpack dev server + backend
- `npm run dev:server` - Start backend server
- `npm run build:dev` - Build in dev mode
- `npm run build:prod` - Build in prod mode
- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter using auto-fix
- `npm run lint:scss` - Check SCSS style files with linter
- `npm run lint:scss:fix` - Fix SCSS style files with linter using auto-fix
- `npm run lint` - Run all linters simultaneously
- `npm run lint:fix` - Run all linters simultaneously with auto-fix
- `npm run test:unit` - Run unit tests with Jest
- `npm run test:ui` - Run screenshot tests with Loki
- `npm run test:ui:ok` - Approve new screenshots
- `npm run test:ui:ci` - Run screenshot tests in CI
- `npm run test:ui:report` - Generate full report for screenshot tests
- `npm run test:ui:json` - Generate JSON report for screenshot tests
- `npm run test:ui:html` - Generate HTML report for screenshot tests
- `npm run storybook:dev` - Start Storybook
- `npm run storybook:build` - Build Storybook production bundle
- `npm run prepare` - Initialize Husky
- `npm run generate:slice` - Script for generating FSD slices

----

## Project Architecture

The project is built following the Feature-Sliced Design methodology.

Documentation link - [Feature Sliced Design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Working with Translations

The project uses the `i18next` library for handling translations.
Translation files are stored in `public/locales`.

For a better development experience, we recommend installing a plugin for WebStorm/VSCode.

i18next documentation - [https://react.i18next.com/](https://react.i18next.com/)

----

## Testing

The project uses 4 types of tests:
1) Standard unit tests with Jest - `npm run test:unit`
2) Component tests with React Testing Library - `npm run test:unit`
3) Screenshot testing with Loki - `npm run test:ui`
4) E2E testing with Cypress - `npm run test:e2e`

More about testing - [testing documentation](./docs/tests.md)

----

## Linting

The project uses ESLint for checking TypeScript code and Stylelint for checking style files.

Additionally, to strictly enforce key architectural principles, a custom ESLint plugin `eslint-plugin-fsd-paths-check` is used, which includes 3 rules:
1) `enforce-relative-path-within-slice` - prohibits absolute imports within the same module. Has auto-fix.
2) `forbid-imports-from-upper-slices` - validates correct layer usage according to FSD (e.g., prohibits imports from higher-level layers).
3) `enforce-public-api-imports` - allows imports from other modules only via their public API. Has auto-fix.

##### Running Linters
- `npm run lint:ts` - Check TypeScript files with linter
- `npm run lint:ts:fix` - Fix TypeScript files with linter using auto-fix
- `npm run lint:scss` - Check SCSS style files with linter
- `npm run lint:scss:fix` - Fix SCSS style files with linter using auto-fix
- `npm run lint` - Run all linters simultaneously
- `npm run lint:fix` - Run all linters simultaneously with auto-fix

----
## Storybook

Story case files are created alongside the component with the `.stories.tsx` extension.

Start Storybook with the command:
- `npm run storybook:dev`

More about [Storybook](./docs/storybook.md)

----

## Project Configuration

All configuration is stored in /config
- /config/babel - babel
- /config/build - webpack configuration
- /config/jest - test environment configuration
- /config/storybook - storybook configuration

The `scripts` folder contains various scripts for refactoring\code simplification\report generation, etc.

----

## CI pipeline and pre-commit hooks

GitHub Actions configuration is located in /.github/workflows.
In CI, all types of tests, project and storybook builds, and linting are run.

In pre-commit hooks, we check the project with linters, config in /.husky

----

### Working with Data

Interaction with data is handled using Redux Toolkit.
Reusable entities should be normalized using EntityAdapter whenever possible

Requests to the server are sent using [RTK query](./src/shared/api/rtkApi/rtkApi.ts)

For asynchronous loading of reducers (to avoid pulling them into the main bundle), the hook is used
[useReducer](./src/shared/utils/hooks/useReducer.ts)

----

### Working with feature-flags

Feature flags are allowed to be used only via the `toggleFeatures` helper

An object with options is passed to it

{
    name: feature flag name,
    on: function that will execute after Enabling the feature
    off: function that will execute after Disabling the feature
}

To automatically remove a feature, use the `remove-feature.ts` script,
which accepts 2 arguments
1. Name of the feature flag to remove
2. State (on\off)

----

## Entities

- [Article](./src/entities/Article/README.md)
- [Comment](./src/entities/Comment/README.md)
- [Country](./src/entities/Country/README.md)
- [Currency](./src/entities/Currency/README.md)
- [Notification](./src/entities/Notification/README.md)
- [Profile](./src/entities/Profile/README.md)
- [Rating](./src/entities/Rating/README.md)
- [User](./src/entities/User/README.md)

## Features

- [ArticleComments](./src/features/ArticleComments/README.md)
- [ArticleInfiniteList](./src/features/ArticleInfiniteList/README.md)
- [ArticleRating](./src/features/ArticleRating/README.md)
- [ArticleRecommendations](./src/features/ArticleRecommendations/README.md)
- [AuthByUsername](./src/features/AuthByUsername/README.md)
- [AvatarDropdown](./src/features/AvatarDropdown/README.md)
- [EditableArticleDetails](./src/features/EditableArticleDetails/README.md)
- [EditableProfile](./src/features/EditableProfile/README.md)
- [LangSwitcher](./src/features/LangSwitcher/README.md)
- [ScrollToTopButton](./src/features/ScrollToTopButton/README.md)
- [ThemeSwitcher](./src/features/ThemeSwitcher/README.md)
- [UiDesignSwitcher](./src/features/UiDesignSwitcher/README.md)
- [UserNotifications](./src/features/UserNotifications/README.md)
