import type { DeepPartial } from "shared/types/types";
import { getIsLoading } from "features/authByUsername/model/selectors/getIsLoading/getIsLoading";
import type { LoginRootSchema } from "features/authByUsername";

describe(`getIsLoading`, () => {
  test(``, () => {
    const state: DeepPartial<LoginRootSchema> = {
      login: {
        isLoading: true,
      },
    };

    expect(getIsLoading(state)).toEqual(true);
  });

  test(`should return false with empty state`, () => {
    const state: DeepPartial<LoginRootSchema> = {};

    expect(getIsLoading(state)).toEqual(false);
  });
});
