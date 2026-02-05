import { getQueryParams } from "./addQueryParams";

describe(`getQueryParams`, () => {
  test(`test with one parameter`, async () => {
    const params = getQueryParams({
      test: `value`,
    });

    expect(params).toEqual(`?test=value`);
  });

  test(`test with multiple parameter`, async () => {
    const params = getQueryParams({
      test: `value`,
      second: `2`,
    });

    expect(params).toEqual(`?test=value&second=2`);
  });
});
