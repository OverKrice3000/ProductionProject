import { lazy } from "react";
import type MainPageSync from "./MainPage";

const MainPage = lazy<typeof MainPageSync>(async () => await import(`./MainPage`));

export default MainPage;
