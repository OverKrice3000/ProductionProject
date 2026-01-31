import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchArticlesList } from "pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList";
import { fetchNextArticlesPage } from "pages/ArticlesPage/model/service/fetchNextArticlesPage/fetchNextArticlesPage";

jest.mock(`pages/ArticlesPage/model/service/fetchArticlesList/fetchArticlesList`);

describe(`fetchNextArticlesPage`, () => {
  test(`successful next page fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalledWith({ page: 3 });
  });

  test(`no fetch when has more false`, async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test(`no fetch when already loading`, async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesList: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
