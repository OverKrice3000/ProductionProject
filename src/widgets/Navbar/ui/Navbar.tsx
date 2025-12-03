import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import { AppModal } from "shared/ui/appModal/AppModal";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthOpen((isAuthOpen) => !isAuthOpen);
  }, []);

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
          /
        </div>
        <AppModal isOpen={isAuthOpen} onClose={onToggleAuthModal}>
          /
        </AppModal>
        <AppButton onClick={onToggleAuthModal} theme={AppButtonTheme.CLEAR}>{t(`Enter`)}</AppButton>
      </div>
  );
};
