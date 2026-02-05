import cls from "./AppModal.module.scss";
import { classNames } from "shared/utils/classNames";
import type { ReactNode } from "react";
import { useEffect, useCallback, useRef, useState } from "react";
import { useClearTimeoutEffect } from "shared/utils/hooks/useClearTimeout";
import { useEventListener } from "shared/utils/hooks/useEventListener";
import { AppPortal } from "../Portal/AppPortal";

interface AppModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  lazy?: boolean;
  onClose?: () => void;
  targetContainer?: HTMLElement;
}

const MODAL_CLOSING_MS = 250;

export const AppModal = ({ className, children, lazy, isOpen = false, onClose, targetContainer }: AppModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setisMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const closeHandler = useCallback(() => {
    if (!onClose) {
      return;
    }

    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, MODAL_CLOSING_MS);
  }, [onClose]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (isOpen && e.key === `Escape`) {
      closeHandler();
    }
  }, [closeHandler, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setisMounted(true);
    }
  }, [isOpen]);

  useEventListener(`keydown`, onKeyDown);
  useClearTimeoutEffect(timerRef);

  return lazy && !isMounted
    ? null
    : (
    <AppPortal container={targetContainer}>
      <div className={classNames(cls.Modal, { [cls.open]: isOpen, [cls.closing]: isClosing }, [className])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      </div>
    </AppPortal>
      );
};
