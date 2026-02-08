import { useCallback, useEffect, useRef, useState } from "react";
import { useEventListener } from "./useEventListener";
import { useClearTimeoutEffect } from "./useClearTimeout";

interface UseModalProps {
  onClose?: () => void;
  isOpen?: boolean;
  animationDelay: number;
}

export const useModal = ({ onClose, isOpen, animationDelay }: UseModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const close = useCallback(() => {
    if (!onClose) {
      return;
    }

    setIsClosing(true);
    timerRef.current = setTimeout(() => {
      onClose?.();
      setIsClosing(false);
    }, animationDelay);
  }, [animationDelay, onClose]);

  useClearTimeoutEffect(timerRef);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (isOpen && e.key === `Escape`) {
      close();
    }
  }, [close, isOpen]);

  useEventListener(`keydown`, onKeyDown);

  return {
    isClosing,
    close,
    isMounted,
  };
};
