import { classNames } from "@/shared/utils/classNames";
import { AppModal } from "@/shared/ui/AppModal";
import { memo, Suspense } from "react";
import LoginForm from "../loginForm/LoginForm.async";
import { AppLoader } from "@/shared/ui/AppLoader";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <AppModal className={classNames(``, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<AppLoader />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </AppModal>
  );
});

LoginModal.displayName = `LoginModal`;
