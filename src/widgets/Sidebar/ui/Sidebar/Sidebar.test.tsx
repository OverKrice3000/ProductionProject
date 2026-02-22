import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

import { componentRender } from "@/shared/config/tests/render/componentRender";

import cls from "./Sidebar.module.scss";
import { Sidebar } from "../..";

test(`Sidebar collapse test`, async () => {
  const { container } = componentRender(<Sidebar />);

  const collapseBtn = await screen.findByRole(`button`, {
    name: /collapse sidebar/i,
  });
  const sidebar = container.firstChild;

  expect(sidebar).not.toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).not.toHaveClass(cls.collapsed);
});
