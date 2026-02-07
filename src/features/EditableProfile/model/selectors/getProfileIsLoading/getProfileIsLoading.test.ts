import type { DeepPartial } from "shared/types/types";
import type { ProfileRootSchema } from "../../types/editableProfile";
import { getProfileReadonly } from "../getProfileReadonly/getProfileReadonly";

describe(`getProfileReadonly`, () => {
  test(`should return readonly`, () => {
    const state: DeepPartial<ProfileRootSchema> = {
      profile: {
        readonly: true,
      },
    };

    expect(getProfileReadonly(state as ProfileRootSchema)).toBe(true);
  });

  test(`should return undefined with empty state`, () => {
    const state: DeepPartial<ProfileRootSchema> = {};

    expect(getProfileReadonly(state as ProfileRootSchema)).toBe(undefined);
  });
});
