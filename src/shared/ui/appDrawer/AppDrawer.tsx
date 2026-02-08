import cls from "./AppDrawer.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ReactNode } from "react";
import { memo } from "react";
import { AppPortal } from "../appPortal/AppPortal";
import { AppOverlay } from "../appOverlay/AppOverlay";
import { useModal } from "shared/utils/hooks/useModal";

interface AppDrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const AppDrawer = memo(({ className, children, isOpen, onClose, lazy }: AppDrawerProps) => {
  const { isMounted, isClosing, close } = useModal({ onClose, isOpen, animationDelay: 300 });

  if (lazy && !isMounted) {
    return null;
  }

  return (
        <AppPortal>
          <div className={classNames(cls.AppDrawer, { [cls.opened]: !!isOpen, [cls.closing]: isClosing }, [className])}>
            <AppOverlay onClick={close} />
            <div className={cls.content}>
              {children}
            </div>
          </div>
        </AppPortal>
  );
});

AppDrawer.displayName = `AppDrawer`;
