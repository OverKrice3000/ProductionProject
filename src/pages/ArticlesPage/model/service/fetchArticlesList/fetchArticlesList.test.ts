import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { testArticle } from "entities/article";

describe(`fetchArticlesList`, () => {
  test(`successful articles fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesList: {
        entities: {},
        ids: [],
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data: [testArticle] }));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual([testArticle]);
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesList: {
        entities: {},
        ids: [],
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
