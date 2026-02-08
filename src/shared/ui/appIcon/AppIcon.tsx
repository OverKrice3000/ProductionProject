import cls from "./AppIcon.module.scss";
import { classNames } from "@/shared/utils/classNames";
import type { SVGProps, VFC } from "react";
import { memo } from "react";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  color?: AppIconColor;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export enum AppIconColor {
  NONE = `none`,
  PRIMARY = `primary`,
  INVERTED_PRIMARY = `inverted_primary`
}

export const AppIcon = memo(({ className, Svg, color = AppIconColor.PRIMARY, ...other }: AppIconProps) => {
  return (
        <Svg {...other} className={classNames(``, {}, [className, cls[color]])} />
  );
});

AppIcon.displayName = `AppIcon`;
