import { lazy } from "react";
import type AboutPage from "pages/AboutPage/ui/AboutPage";

export const AboutPageAsync = lazy<typeof AboutPage>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./AboutPage`);
});
