import { lazy } from "react";

import type AboutPageSync from "./AboutPage";

const AboutPage = lazy<typeof AboutPageSync>(async () => await import(`./AboutPage`));

export default AboutPage;
