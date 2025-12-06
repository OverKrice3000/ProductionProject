import type { CounterRootSchema } from "entities/counter";
import { getCounter } from "entities/counter/model/selectors/getCounter/getCounter";

describe(`getCounter`, () => {
  test(`Should return counter value`, () => {
    const value = 2;

    const state: CounterRootSchema = {
      counter: {
        value,
      },
    };

    expect(getCounter(state)).toEqual({ value });
  });
});
