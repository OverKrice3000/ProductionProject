import { memo, Suspense, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppModal } from "@/shared/ui/AppModal";
import { AppLoader } from "@/shared/ui/deprecated/AppLoader";
import { classNames } from "@/shared/utils/classNames";
import { AppBlock } from "@/shared/ui/AppBlock/AppBlock";
import { ToggleFeatures } from "@/shared/utils/features";
import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

import LoginForm from "../loginForm/LoginForm.async";

interface LoginModalProps {
  className?: string;
}

export const LoginModal = memo(({ className }: LoginModalProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthOpen((isAuthOpen) => !isAuthOpen);
  }, []);

  return (
    <AppBlock className={classNames(``, {}, [className])}>
      <ToggleFeatures
        name={`isAppRedesigned`}
        on={
          <AppButton onClick={onToggleAuthModal} variant={`clear`}>
            {t(`Login`)}
          </AppButton>
        }
        off={
          <AppButtonDeprecated
            onClick={onToggleAuthModal}
            theme={AppButtonTheme.CLEAR_INVERTED}
          >
            {t(`Login`)}
          </AppButtonDeprecated>
        }
      />
      <AppModal isOpen={isAuthOpen} onClose={onToggleAuthModal} lazy>
        <Suspense fallback={<AppLoader />}>
          <LoginForm onSuccess={onToggleAuthModal} />
        </Suspense>
      </AppModal>
    </AppBlock>
  );
});

LoginModal.displayName = `LoginModal`;
