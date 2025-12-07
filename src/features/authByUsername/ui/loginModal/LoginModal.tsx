import { classNames } from "shared/utils/classNames";
import { AppModal } from "shared/ui/appModal/AppModal";
import { LoginForm } from "features/authByUsername/ui/loginForm/LoginForm";

interface LoginModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
  return (
    <AppModal className={classNames(``, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
      <LoginForm />
    </AppModal>
  );
};
