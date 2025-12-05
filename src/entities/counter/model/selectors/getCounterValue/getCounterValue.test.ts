import { CounterRootSchema } from "entities/counter";
import { getCounterValue } from "entities/counter/model/selectors/getCounterValue/getCounterValue";

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
