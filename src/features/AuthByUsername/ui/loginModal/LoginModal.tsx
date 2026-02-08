import { classNames } from "@/shared/utils/classNames";
import { AppModal } from "@/shared/ui/appModal/AppModal";
import { memo, Suspense } from "react";
import { Loader } from "@/widgets/Loader";
import LoginForm from "../loginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = memo(({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <AppModal className={classNames(``, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginForm onSuccess={onClose} />
      </Suspense>
    </AppModal>
  );
});

LoginModal.displayName = `LoginModal`;
