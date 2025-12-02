import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { componentRender } from "shared/config/tests/render/componentRender";

test(`themed button test`, () => {
  const { container } = componentRender(<AppButton theme={AppButtonTheme.CLEAR}>Hello</AppButton>);
  const button = container.firstChild;

  expect(button).toHaveClass(`clear`);
});
