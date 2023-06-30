import { Sidebar } from "widgets/Sidebar";
import cls from "./Sidebar.module.scss";
import { fireEvent, render, screen } from "@testing-library/react";

test(`Sidebar collapse test`, async () => {
  render(<Sidebar/>);
  const sidebar = await screen.findByTestId(`sidebar`);
  const collapseBtn = await screen.findByTestId(`collapseBtn`);

  expect(sidebar).not.toHaveClass(cls.collapsed);
  fireEvent.click(collapseBtn);
  expect(sidebar).toHaveClass(cls.collapsed);
  fireEvent.click(collapseBtn);
  expect(sidebar).not.toHaveClass(cls.collapsed);
});
