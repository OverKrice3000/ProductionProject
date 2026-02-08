import cls from "./AppDrawer.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ReactNode } from "react";
import { memo } from "react";
import { AppPortal } from "../appPortal/AppPortal";
import { AppOverlay } from "../appOverlay/AppOverlay";

interface AppDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const AppDrawer = memo(({ className, children, isOpen, onClose }: AppDrawerProps) => {
  return (
        <AppPortal>
          <div className={classNames(cls.AppDrawer, { [cls.opened]: !!isOpen }, [className])}>
            <AppOverlay onClick={onClose} />
            <div className={cls.content}>
              {children}
            </div>
          </div>
        </AppPortal>
  );
});

AppDrawer.displayName = `AppDrawer`;
