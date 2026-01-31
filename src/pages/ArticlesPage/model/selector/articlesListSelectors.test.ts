import type { DeepPartial } from "shared/types/types";
import type { ArticlesListRootSchema } from "pages/ArticlesPage";
import {
  getArticlesListError,
  getArticlesListIsLoading,
  getArticlesListView,
} from "pages/ArticlesPage/model/selector/articlesListSelectors";
import { ArticleView } from "entities/article";

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

  test(`should return no view with empty state`, () => {
    const state: DeepPartial<ArticlesListRootSchema> = {};

    expect(getArticlesListView(state as ArticlesListRootSchema)).toEqual(undefined);
  });
});
