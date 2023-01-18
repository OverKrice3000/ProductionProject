import { RouteProps } from "react-router";
import React from "react";
import { MainPage } from "pages/mainPage";
import { AboutPage } from "pages/aboutPage";
import { NotFoundPage } from "pages/notFoundPage";

// TODO move to shared layer
export enum AppRoutes {
  MAIN = `main`,
  ABOUT = `about`,
  NOT_FOUND = `notFound`
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: `/`,
  [AppRoutes.ABOUT]: `/about`,
  [AppRoutes.NOT_FOUND]: `*`,
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />,
  },
};
