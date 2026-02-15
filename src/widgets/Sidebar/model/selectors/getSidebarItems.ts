import { createSelector } from "@reduxjs/toolkit";

import { getAuthData } from "@/entities/User";
import HomeIconDeprecated from "@/shared/assets/icons/home.svg";
import AboutIconDeprecated from "@/shared/assets/icons/about.svg";
import ProfileIconDeprecated from "@/shared/assets/icons/profile.svg";
import ArticlesIconDeprecated from "@/shared/assets/icons/articles.svg";
import HomeIcon from "@/shared/assets/icons/redesigned/home.svg";
import AboutIcon from "@/shared/assets/icons/redesigned/about.svg";
import AvatarIcon from "@/shared/assets/icons/redesigned/avatar.svg";
import ArticlesIcon from "@/shared/assets/icons/redesigned/article.svg";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { toggleFeatures } from "@/shared/utils/features";

import type { SidebarItemData } from "../types/items";

export const getSidebarItems = createSelector(getAuthData, (user) => {
  const sidebarItems: SidebarItemData[] = [
    {
      path: GetRoutePath[AppRoutes.MAIN](),
      text: `MainPageLink`,
      Icon: toggleFeatures({
        name: `isAppRedesigned`,
        on: () => HomeIcon,
        off: () => HomeIconDeprecated,
      }),
    },
    {
      path: GetRoutePath[AppRoutes.ABOUT](),
      text: `AboutPageLink`,
      Icon: toggleFeatures({
        name: `isAppRedesigned`,
        on: () => AboutIcon,
        off: () => AboutIconDeprecated,
      }),
    },
  ];

  if (user) {
    sidebarItems.push(
      {
        path: GetRoutePath[AppRoutes.PROFILE](user.id),
        text: `ProfilePageLink`,
        authOnly: true,
        Icon: toggleFeatures({
          name: `isAppRedesigned`,
          on: () => AvatarIcon,
          off: () => ProfileIconDeprecated,
        }),
      },
      {
        path: GetRoutePath[AppRoutes.ARTICLES](),
        text: `ArticlesPageLink`,
        authOnly: true,
        Icon: toggleFeatures({
          name: `isAppRedesigned`,
          on: () => ArticlesIcon,
          off: () => ArticlesIconDeprecated,
        }),
      },
    );
  }

  return sidebarItems;
});
