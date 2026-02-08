import type { DeepPartial } from "@/shared/types/types";
import type { ArticlesListRootSchema } from "../../../../pages/ArticlesPage";
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListOrder,
  getArticlesListPageHasMore,
  getArticlesListPageLimit,
  getArticlesListPageNumber,
  getArticlesListSearch,
  getArticlesListSortField, getArticlesListType,
  getArticlesListView,
} from "./articlesListSelectors";
import { ArticleType, ArticleView, ArticleSortField } from "@/entities/Article";
import {
  defaultOrder,
  defaultSortField,
  defaultType,
  defaultView,
} from "../../lib/articlesList";

describe(`articlesListSelectors`, () => {
  test(`should return isLoading`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        isLoading: true,
      },
    };

    expect(getArticlesListIsLoading(state as ArticlesListRootSchema)).toEqual(true);
  });

  test(`should return no isLoading with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListIsLoading(state as ArticlesListRootSchema)).toEqual(undefined);
  });

  test(`should return error`, () => {
    const error = `Unexpected error occurred.`;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        error,
      },
    };

    expect(getArticlesListError(state as ArticlesListRootSchema)).toEqual(error);
  });

  test(`should return no error with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListError(state as ArticlesListRootSchema)).toEqual(undefined);
  });

  test(`should return view`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        view: ArticleView.LIST,
      },
    };

    expect(getArticlesListView(state as ArticlesListRootSchema)).toEqual(ArticleView.LIST);
  });

  test(`should return default view with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListView(state as ArticlesListRootSchema)).toEqual(defaultView);
  });

  test(`should return page number`, () => {
    const page = 2;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        page,
      },
    };

    expect(getArticlesListPageNumber(state as ArticlesListRootSchema)).toEqual(page);
  });

  test(`should return default page number with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListPageNumber(state as ArticlesListRootSchema)).toEqual(1);
  });

  test(`should return page limit`, () => {
    const limit = 3;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        limit,
      },
    };

    expect(getArticlesListPageLimit(state as ArticlesListRootSchema)).toEqual(limit);
  });

  test(`should return no page limit with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListPageLimit(state as ArticlesListRootSchema)).toEqual(undefined);
  });

  test(`should return has more pages`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        hasMore: false,
      },
    };

    expect(getArticlesListPageHasMore(state as ArticlesListRootSchema)).toEqual(false);
  });

  test(`should return nothing with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListPageHasMore(state as ArticlesListRootSchema)).toEqual(undefined);
  });

  test(`should return order`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        order: `desc`,
      },
    };

    expect(getArticlesListOrder(state as ArticlesListRootSchema)).toEqual(`desc`);
  });

  test(`should return default order with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListOrder(state as ArticlesListRootSchema)).toEqual(defaultOrder);
  });

  test(`should return sort field`, () => {
    const sortField = ArticleSortField.VIEWS;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        sortField,
      },
    };

    expect(getArticlesListSortField(state as ArticlesListRootSchema)).toEqual(sortField);
  });

  test(`should return default sort field with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListSortField(state as ArticlesListRootSchema)).toEqual(defaultSortField);
  });

  test(`should return search string`, () => {
    const search = `page`;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        search,
      },
    };

    expect(getArticlesListSearch(state as ArticlesListRootSchema)).toEqual(search);
  });

  test(`should return empty string with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListSearch(state as ArticlesListRootSchema)).toEqual(``);
  });

  test(`should return article type`, () => {
    const type = ArticleType.IT;
    const state: DeepPartial<ArticlesListRootSchema> = {
      articlesList: {
        type,
      },
    };

    expect(getArticlesListType(state as ArticlesListRootSchema)).toEqual(type);
  });

  test(`should return default type with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListType(state as ArticlesListRootSchema)).toEqual(defaultType);
  });
});
