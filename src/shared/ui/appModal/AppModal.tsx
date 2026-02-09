import cls from "./AppModal.module.scss";
import { classNames } from '../../utils/classNames';
import type { ReactNode } from "react";
import { AppPortal } from "../appPortal/AppPortal";
import { AppOverlay } from "../appOverlay/AppOverlay";
import { useModal } from '../../utils/hooks/useModal';

interface AppModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  targetContainer?: HTMLElement;
}

export const AppModal = ({ className, children, lazy, isOpen = false, onClose, targetContainer }: AppModalProps) => {
  const { isMounted, isClosing, close } = useModal({ onClose, isOpen, animationDelay: 250 });

  return lazy && !isMounted
    ? null
    : (
    <AppPortal container={targetContainer}>
      <div className={classNames(cls.Modal, { [cls.open]: isOpen, [cls.closing]: isClosing }, [className])}>
        <AppOverlay onClick={close} />
        <div role="dialog" aria-modal="true" className={cls.content}>
          {children}
        </div>
      </div>
    </AppPortal>
      );
};
