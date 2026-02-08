import { TestAsyncThunk } from "@/shared/config/tests/testAsyncThunk/testAsyncThunk";
import { fetchCommentsByArticleId } from "./fetchCommentsByArticleId";
import { getTestCommentsList } from "@/entities/Comment/model/testData/comment";

describe(`fetchCommentsByArticleId`, () => {
  test(`successful comments fetch`, async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    const testComments = getTestCommentsList(3);
    thunk.api.get.mockReturnValue(Promise.resolve({ data: testComments }));

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`fulfilled`);
    expect(result.payload).toEqual(testComments);
  });

  test(`fetch error`, async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk(`1`);

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe(`rejected`);
  });
});
