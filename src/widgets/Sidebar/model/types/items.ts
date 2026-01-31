import type { SVGProps, VFC } from "react";

export interface SidebarItemData {
  path: string;
  text: string;
  authOnly?: boolean;
  Icon: VFC<SVGProps<SVGSVGElement>>;
}
