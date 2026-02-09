import type { DeepPartial } from "@/shared/types/types";

import { getProfileLoadingError } from "./getProfileLoadingError";

import type { ProfileRootSchema } from "../../types/editableProfile";

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
