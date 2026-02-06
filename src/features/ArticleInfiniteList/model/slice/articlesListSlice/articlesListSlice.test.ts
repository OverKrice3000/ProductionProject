import type { DeepPartial } from "shared/types/types";
import { articlesListActions, articlesListReducer } from "./articlesListSlice";
import type { FetchArticlesListResult } from "../../service/fetchArticlesList/fetchArticlesList";
import { fetchArticlesList } from "../../service/fetchArticlesList/fetchArticlesList";
import type { ArticlesListSchema } from "../../types/articlesList";
import { ArticleSortField } from "../../types/articlesList";
import { ArticleType, ArticleView, testArticle } from "entities/Article";
import { articlesTestState } from "entities/Article/constants/tests/article";
import { articlesFetchNumberByView } from "../../constants/articlesList";

describe(`articlesListSlice`, () => {
  test(`setView`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      view: ArticleView.LIST,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setView(ArticleView.PLATE))).toEqual({
      view: ArticleView.PLATE,
      limit: articlesFetchNumberByView[ArticleView.PLATE],
    });
  });

  test(`setPage`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      page: 2,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setPage(3))).toEqual({
      page: 3,
    });
  });

  test(`setOrder`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      order: `asc`,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setOrder(`desc`))).toEqual({
      order: `desc`,
    });
  });

  test(`setSortField`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      sortField: ArticleSortField.TITLE,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setSortField(ArticleSortField.VIEWS))).toEqual({
      sortField: ArticleSortField.VIEWS,
    });
  });

  test(`setSearch`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      search: ``,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setSearch(`java`))).toEqual({
      search: `java`,
    });
  });

  test(`setType`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      type: ArticleType.ALL,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setType(ArticleType.IT))).toEqual({
      type: ArticleType.IT,
    });
  });

  test(`fetchArticlesList pending state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: false,
      error: `Unexpected error`,
    };

    const mockPendingAction = {
      type: fetchArticlesList.pending.type,
      meta: {
        requestId: `1`,
        arg: { replace: false },
      },
    };

    expect(articlesListReducer(state as ArticlesListSchema, mockPendingAction)).toEqual({
      isLoading: true,
    });
  });

  test(`fetchArticlesList pending with replace`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: false,
      error: `Unexpected error`,
      ...articlesTestState,
    };

    const mockPendingAction = {
      type: fetchArticlesList.pending.type,
      meta: {
        requestId: `1`,
        arg: { replace: true },
      },
    };

    expect(articlesListReducer(state as ArticlesListSchema, mockPendingAction)).toEqual({
      isLoading: true,
      ids: [],
      entities: {},
    });
  });

  test(`fetchArticlesList fulfilled state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: true,
      entities: {},
      ids: [],
    };
    const fetchArticlesListResult: FetchArticlesListResult = {
      articles: [testArticle],
      hasMore: true,
    };

    expect(articlesListReducer(state as ArticlesListSchema, fetchArticlesList.fulfilled(fetchArticlesListResult, `requestId`, {}))).toEqual({
      ...articlesTestState,
      isLoading: false,
      hasMore: true,
    });
  });

  test(`fetchArticlesList rejected state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: true,
    };
    const error = `Unexpected error`;

    expect(articlesListReducer(state as ArticlesListSchema, fetchArticlesList.rejected(new Error(`Failed`), `requestId`, {}, error))).toEqual({
      isLoading: false,
      error,
    });
  });
});
