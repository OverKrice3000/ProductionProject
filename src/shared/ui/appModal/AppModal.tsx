import cls from "./AppModal.module.scss";
import { classNames } from "shared/utils/classNames";
import { ReactNode, useCallback, useRef, useState } from "react";
import { useClearTimeoutEffect } from "shared/utils/hooks/useClearTimeout";
import { useEventListener } from "shared/utils/hooks/useEventListener";
import { AppPortal } from "shared/ui/Portal/AppPortal";

interface AppModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const MODAL_CLOSING_MS = 250;

export const AppModal = ({ className, children, isOpen = false, onClose }: AppModalProps) => {
  const [isClosing, setIsClosing] = useState(false);

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

  useEventListener(`keydown`, onKeyDown);
  useClearTimeoutEffect(timerRef);

  return (
    <AppPortal>
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
