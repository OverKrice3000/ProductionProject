import { memo } from "react";

import { AppHStack } from "../../AppStack";
import AppIcon from "../../../assets/icons/eye.svg";
import { classNames } from "../../../utils/classNames";
import cls from "./AppLogo.module.scss";

interface AppLogoProps {
  className?: string;
  size?: number;
}

export const AppLogo = memo(({ className, size }: AppLogoProps) => {
  return (
    <AppHStack
      maxW
      justifyContent={`center`}
      className={classNames(cls.AppLogo, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppIcon width={size} height={size} className={cls.appIcon} />
    </AppHStack>
  );
});

AppLogo.displayName = `AppLogo`;
