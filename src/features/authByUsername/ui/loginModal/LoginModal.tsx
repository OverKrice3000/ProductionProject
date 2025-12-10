import { classNames } from "shared/utils/classNames";
import { AppModal } from "shared/ui/appModal/AppModal";
import { Suspense } from "react";
import { LoginForm } from "../loginForm/LoginForm.async";
import { Loader } from "widgets/Loader";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <AppModal className={classNames(``, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <LoginForm />
      </Suspense>
    </AppModal>
  );
};
