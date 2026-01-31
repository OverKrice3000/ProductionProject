import { getAuthData } from "entities/user";
import { createSelector } from "@reduxjs/toolkit";
import { RoutePath } from "app/Router/config/routeConfig/routerConfig";
import HomeIcon from "shared/assets/icons/home.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import type { SidebarItemData } from "widgets/Sidebar/model/types/items";

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
