import { memo } from "react";

import cls from "./AppOverlay.module.scss";
import { classNames } from '../../utils/classNames';

interface AppOverlayProps {
  className?: string;
  onClick?: () => void;
}

export const AppOverlay = memo(({ className, onClick }: AppOverlayProps) => {
  return (
        <div onClick={onClick} className={classNames(cls.AppOverlay, {}, [className])} />
  );
});

AppOverlay.displayName = `AppOverlay`;
