import { render } from "@testing-library/react";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";

test(`themed button test`, () => {
  const element = render(<AppButton theme={AppButtonTheme.CLEAR}>Hello</AppButton>);
  const button = element.getByTestId(`btn`);
  expect(button).toHaveClass(`clear`);
});
