import { createSelector } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";
import HomeIcon from "@/shared/assets/icons/home.svg";
import AboutIcon from "@/shared/assets/icons/about.svg";
import ProfileIcon from "@/shared/assets/icons/profile.svg";
import ArticlesIcon from "@/shared/assets/icons/articles.svg";
import { RoutePath } from "@/shared/constants/router";

import type { SidebarItemData } from "../types/items";

export const getSidebarItems = createSelector(getAuthData, (user) => {
  const sidebarItems: SidebarItemData[] = [
    {
      path: RoutePath.main,
      text: `MainPageLink`,
      Icon: HomeIcon,
    },
    {
      path: RoutePath.about,
      text: `AboutPageLink`,
      Icon: AboutIcon,
    },
  ];

  if (user) {
    sidebarItems.push(
      {
        path: `${RoutePath.profile}${user.id}`,
        text: `ProfilePageLink`,
        authOnly: true,
        Icon: ProfileIcon,
      },
      {
        path: RoutePath.articles,
        text: `ArticlesPageLink`,
        authOnly: true,
        Icon: ArticlesIcon,
      },
    );
  }

  return sidebarItems;
});
