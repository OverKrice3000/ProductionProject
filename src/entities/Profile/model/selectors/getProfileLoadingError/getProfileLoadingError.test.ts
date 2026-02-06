import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "../../..";
import { getProfileLoadingError } from "../../..";

describe(`getProfileLoadingError`, () => {
  test(`should return loading error`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        loadingError: `error`,
      },
    };

    expect(getProfileLoadingError(state as ProfileRootSchema)).toBe(`error`);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileLoadingError(state as ProfileRootSchema)).toEqual(undefined);
  });
});
