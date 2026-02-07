import { TestAsyncThunk } from "shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchArticleById } from "./fetchArticleById";
import { testArticle } from "../../../../../entities/Article";

describe(`fetchArticleById`, () => {
  test(`successful article fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: testArticle }));

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual(testArticle);
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
