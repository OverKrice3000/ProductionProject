import { getError } from "./getError";
import type { DeepPartial } from "@/shared/types/types";
import type { LoginRootSchema } from "../../..";

describe(`getError`, () => {
  test(`should return error`, () => {
    const state: DeepPartial<LoginRootSchema> = {
      login: {
        error: `error`,
      },
    };

    expect(getError(state)).toEqual(`error`);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<LoginRootSchema> = {};

    expect(getError(state)).toEqual(undefined);
  });
});
