import cls from "./AppIcon.module.scss";
import { classNames } from "shared/utils/classNames";
import type { SVGProps, VFC } from "react";
import { memo } from "react";

interface AppIconProps {
  className?: string;
  color?: AppIconColor;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

export enum AppIconColor {
  PRIMARY = `primary`,
  INVERTED_PRIMARY = `inverted_primary`
}

export const AppIcon = memo(({ className, Svg, color = AppIconColor.PRIMARY }: AppIconProps) => {
  return (
        <Svg className={classNames(``, {}, [className, cls[color]])} />
  );
});

AppIcon.displayName = `AppIcon`;
