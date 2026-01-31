import type { DeepPartial } from "shared/types/types";
import { articlesListActions, articlesListReducer } from "pages/ArticlesPage/model/slice/articlesListSlice";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import type { ArticlesListSchema } from "pages/ArticlesPage/model/types/articlesList";
import { ArticleView, testArticle } from "entities/article";
import { articlesTestState } from "entities/article/constants/tests/article";

describe(`articlesListSlice`, () => {
  test(`setView`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      view: ArticleView.LIST,
    };

    expect(articlesListReducer(state as ArticlesListSchema, articlesListActions.setView(ArticleView.PLATE))).toEqual({
      view: ArticleView.PLATE,
    });
  });

  test(`fetchArticlesList pending state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: false,
      error: `Unexpected error`,
    };

    expect(articlesListReducer(state as ArticlesListSchema, fetchArticlesList.pending)).toEqual({
      isLoading: true,
    });
  });

  test(`fetchArticlesList fulfilled state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: true,
    };

    expect(articlesListReducer(state as ArticlesListSchema, fetchArticlesList.fulfilled([testArticle], `requestId`, undefined))).toEqual({
      ...articlesTestState,
      isLoading: false,
    });
  });

  test(`fetchArticlesList rejected state`, () => {
    const state: DeepPartial<ArticlesListSchema> = {
      isLoading: true,
    };
    const error = `Unexpected error`;

    expect(articlesListReducer(state as ArticlesListSchema, fetchArticlesList.rejected(new Error(`Failed`), `requestId`, undefined, error))).toEqual({
      isLoading: false,
      error,
    });
  });
});
