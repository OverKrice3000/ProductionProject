import type { SVGProps, VFC } from "react";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import { RoutePath } from "app/Router/config/routeConfig/routerConfig";

export interface SidebarItemData {
  path: string;
  text: string;
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
    Icon: ProfileIcon,
  },
];
