import { Sidebar } from "widgets/Sidebar";
import cls from "./Sidebar.module.scss";
import { fireEvent, render } from "@testing-library/react";

test(`Sidebar collapse test`, () => {
  const container = render(<Sidebar/>);
  const sidebar = container.getByTestId(`sidebar`);
  const collapseBtn = container.getByTestId(`collapseBtn`);

  expect(sidebar).not.toHaveClass(cls.collapsed);
  fireEvent.click(collapseBtn);
  expect(sidebar).toHaveClass(cls.collapsed);
  fireEvent.click(collapseBtn);
  expect(sidebar).not.toHaveClass(cls.collapsed);
});
