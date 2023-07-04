import { Sidebar } from "widgets/Sidebar";
import cls from "./Sidebar.module.scss";
import { renderWithTranslation } from "shared/config/i18n/renderUtils/renderWithTranslation";
import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";

test(`Sidebar collapse test`, async () => {
  renderWithTranslation(<Sidebar/>);
  const sidebar = screen.getByTestId(`sidebar`);
  const collapseBtn = screen.getByRole(`button`, { name: /collapse/i });

  expect(sidebar).not.toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).toHaveClass(cls.collapsed);
  await userEvent.click(collapseBtn);
  expect(sidebar).not.toHaveClass(cls.collapsed);
});
