import { createSelector } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";
import HomeIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/articles.svg";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import type { SidebarItemData } from "../types/items";

export const getSidebarItems = createSelector(getAuthData, (user) => {
  const sidebarItems: SidebarItemData[] = [
    {
      path: GetRoutePath[AppRoutes.MAIN](),
      text: `MainPageLink`,
      Icon: HomeIcon,
    },
    {
      path: GetRoutePath[AppRoutes.ABOUT](),
      text: `AboutPageLink`,
      Icon: AboutIcon,
    },
  ];

  if (user) {
    sidebarItems.push(
      {
        path: GetRoutePath[AppRoutes.PROFILE](user.id),
        text: `ProfilePageLink`,
        authOnly: true,
        Icon: ProfileIcon,
      },
      {
        path: GetRoutePath[AppRoutes.ARTICLES](),
        text: `ArticlesPageLink`,
        authOnly: true,
        Icon: ArticlesIcon,
      },
    );
  }

  return sidebarItems;
});
