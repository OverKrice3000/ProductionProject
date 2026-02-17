import { memo, Suspense } from "react";

import { AppModal } from "@/shared/ui/redesigned/AppModal";
import { AppLoader } from "@/shared/ui/deprecated/AppLoader";
import { classNames } from "@/shared/utils/classNames";

import LoginForm from "../loginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = memo(
  ({ className, isOpen, onClose }: LoginModalProps) => {
    return (
      <AppModal
        className={classNames(``, {}, [className])}
        isOpen={isOpen}
        onClose={onClose}
        lazy
      >
        <Suspense fallback={<AppLoader />}>
          <LoginForm onSuccess={onClose} />
        </Suspense>
      </AppModal>
    );
  },
);

LoginModal.displayName = `LoginModal`;
