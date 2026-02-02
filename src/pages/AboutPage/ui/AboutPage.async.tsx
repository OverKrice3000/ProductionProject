import { lazy } from "react";
import type AboutPageSync from "pages/AboutPage/ui/AboutPage";

const AboutPage = lazy<typeof AboutPageSync>(async () => await import(`./AboutPage`));

export default AboutPage;
