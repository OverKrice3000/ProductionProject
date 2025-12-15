import { Sidebar } from "widgets/Sidebar";
import cls from "./Sidebar.module.scss";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/render/componentRender";

test(`Sidebar collapse test`, async () => {
  const { container } = componentRender(<Sidebar/>);

  const sidebar = container.firstChild;
  const collapseBtn = screen.getByRole(`button`, { name: /</i });

  expect(sidebar).not.toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).not.toHaveClass(cls.collapsed);
});
