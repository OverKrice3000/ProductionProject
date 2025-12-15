import { lazy } from "react";
import type AboutPageSync from "pages/AboutPage/ui/AboutPage";

const AboutPage = lazy<typeof AboutPageSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./AboutPage`);
});

export default AboutPage;
