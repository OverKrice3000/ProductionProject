import { memo } from "react";

import cls from "./AppIcon.module.scss";
import { classNames } from "../../../utils/classNames";

import type { SVGProps, VFC } from "react";

interface BaseAppIconProps extends Omit<SVGProps<SVGSVGElement>, `onClick`> {
  className?: string;
  color?: AppIconColor;
  Svg: VFC<SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends BaseAppIconProps {
  clickable?: false;
  onClick?: undefined;
}

interface ClickableIconProps extends BaseAppIconProps {
  clickable: true;
  onClick?: () => void;
}

type AppIconProps = NonClickableIconProps | ClickableIconProps;

export type AppIconColor = `primary` | `accent` | `light` | `none`;

export const AppIcon = memo(
  ({
    className,
    Svg,
    color = `primary`,
    clickable,
    onClick,
    ...other
  }: AppIconProps) => {
    if (clickable) {
      return (
        <button
          type={`button`}
          style={{ width: other.width, height: other.height }}
          className={classNames(cls.button, {}, [className, cls[color]])}
          onClick={onClick}
        >
          <Svg
            {...other}
            className={classNames(cls.AppIcon, {}, [cls[color]])}
          />
        </button>
      );
    }

    return (
      <Svg
        {...other}
        className={classNames(cls.AppIcon, {}, [className, cls[color]])}
      />
    );
  },
);

AppIcon.displayName = `AppIcon`;
