import React from "react";

import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { ArticlesPage } from "@/pages/ArticlesPage";
import { ArticleDetailsPage } from "@/pages/ArticleDetailsPage";
import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { AdminPanelPage } from "@/pages/AdminPanelPage";
import { UserRole } from "@/entities/User";
import { ForbiddenPage } from "@/pages/ForbiddenPage";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { SettingsPage } from "@/pages/SettingsPage";

import type { RouteProps } from "react-router";

type AppRouteProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRole[];
};

export const RouteConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: GetRoutePath[AppRoutes.MAIN](),
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: GetRoutePath[AppRoutes.ABOUT](),
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: GetRoutePath[AppRoutes.PROFILE](`:id`),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: GetRoutePath[AppRoutes.ARTICLES](),
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: GetRoutePath[AppRoutes.ARTICLE_DETAILS](`:id`),
    element: <ArticleDetailsPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: GetRoutePath[AppRoutes.ARTICLE_CREATE](),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: GetRoutePath[AppRoutes.ARTICLE_EDIT](`:id`),
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN_PANEL]: {
    path: GetRoutePath[AppRoutes.ADMIN_PANEL](),
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRole.MANAGER, UserRole.ADMIN],
  },
  [AppRoutes.FORBIDDEN_PAGE]: {
    path: GetRoutePath[AppRoutes.FORBIDDEN_PAGE](),
    element: <ForbiddenPage />,
  },
  [AppRoutes.SETTINGS]: {
    path: GetRoutePath[AppRoutes.SETTINGS](),
    element: <SettingsPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: GetRoutePath[AppRoutes.NOT_FOUND](),
    element: <NotFoundPage />,
  },
};
