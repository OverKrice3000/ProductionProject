import { lazy } from "react";
import type MainPageSync from "./MainPage";

const MainPage = lazy<typeof MainPageSync>(async () => {
  await new Promise((resolve) => setTimeout(() => resolve(undefined), 1500));

  return await import(`./MainPage`);
});

export default MainPage;
