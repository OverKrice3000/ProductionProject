import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { componentRender } from "@/shared/config/tests/render/componentRender";

import { Counter } from "..";

describe(`Counter`, () => {
  test(`Display value`, async () => {
    const value = 2;
    componentRender(<Counter />, { initialState: { counter: { value } } });

    const valueTitle = screen.getByRole(`heading`);
    expect(valueTitle).toHaveTextContent(value.toString());
  });

  test(`Increment`, async () => {
    const value = 2;
    componentRender(<Counter />, { initialState: { counter: { value } } });

    const valueTitle = screen.getByRole(`heading`);
    const increment = screen.getByRole(`button`, { name: /increment/i });

    await userEvent.click(increment);
    expect(valueTitle).toHaveTextContent((value + 1).toString());
  });

  test(`Decrement`, async () => {
    const value = 2;
    componentRender(<Counter />, { initialState: { counter: { value } } });

    const valueTitle = screen.getByRole(`heading`);
    const decrement = screen.getByRole(`button`, { name: /decrement/i });

    await userEvent.click(decrement);
    expect(valueTitle).toHaveTextContent((value - 1).toString());
  });
});
