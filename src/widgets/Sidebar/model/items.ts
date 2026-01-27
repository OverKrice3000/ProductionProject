import type { SVGProps, VFC } from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";
import { RoutePath } from "app/Router/config/routeConfig/routerConfig";

export interface SidebarItemData {
  path: string;
  text: string;
  authOnly?: boolean;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}

export const SidebarItems: SidebarItemData[] = [
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
  {
    path: RoutePath.profile,
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
];
