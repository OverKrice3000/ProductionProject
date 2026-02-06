import type { CounterRootSchema } from "../../..";
import { getCounterValue } from "./getCounterValue";

describe(`getCounterValue`, () => {
  test(`Should return correct value`, () => {
    const value = 2;
    const state: CounterRootSchema = {
      counter: {
        value,
      },
    };

    expect(getCounterValue(state)).toEqual(value);
  });
});
