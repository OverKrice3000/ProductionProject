import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { LoginModal } from "features/authByUsername";

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
        <LoginModal isOpen={isAuthOpen} onClose={onToggleAuthModal} />
        <AppButton onClick={onToggleAuthModal} theme={AppButtonTheme.CLEAR_INVERTED}>{t(`Enter`)}</AppButton>
      </div>
  );
};
