import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchArticlesList } from "./fetchArticlesList";
import { testArticle } from "entities/Article";

describe(`fetchArticlesList`, () => {
  test(`successful articles fetch, has more articles`, async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 1,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data: [testArticle] }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual({
      articles: [testArticle],
      hasMore: true,
    });
  });

  test(`successful articles fetch, has no more articles`, async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesList: {
        entities: {},
        ids: [],
        limit: 2,
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ data: [testArticle] }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual({
      articles: [testArticle],
      hasMore: false,
    });
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesList: {
        entities: {},
        ids: [],
      },
    });
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({});

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
