import { render } from "@testing-library/react";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";

test(`themed button test`, () => {
  const { container } = render(<AppButton theme={AppButtonTheme.CLEAR}>Hello</AppButton>);
  const button = container.firstChild;

  expect(button).toHaveClass(`clear`);
});
