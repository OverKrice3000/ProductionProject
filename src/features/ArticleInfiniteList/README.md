## ArticlesList feature

This feature provides tools for managing the article list page, including infinite scrolling, filtering and various view modes.

### Public api

#### Components

- `ArticleInfiniteList` - A component that renders a list of articles with automatic loading of new data upon scrolling.

- `ArticlesFilters` - A redesigned component providing a UI for filtering and searching through the articles list.

- `ArticlesPageFilters` - A deprecated component providing a UI for filtering and searching through the articles list.

- `ViewSelectorContainer` - A container component that manages the logic for switching between different list display modes.

#### Hooks

- `useFetchNextArticlesPage` - A hook for handling the logic of loading the next set of articles for infinite pagination.

#### Slice

- `articlesListReducer` - The reducer responsible for managing the state of the article list, including pagination, filters, and view modes.

#### Types

- `ArticlesListRootSchema` - A type defining the structure of the article list slice in the state.

