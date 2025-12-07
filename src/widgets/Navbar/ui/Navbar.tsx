import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import React, { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { LoginModal } from "features/authByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, userActions } from "entities/user";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthOpen((isAuthOpen) => !isAuthOpen);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const authData = useSelector(getAuthData);

  if (authData) {
    return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <AppButton onClick={onLogout} theme={AppButtonTheme.CLEAR_INVERTED}>{t(`Logout`)}</AppButton>
      </div>
    );
  }

  return (
      <div className={classNames(cls.navbar, {}, [className])}>
        <LoginModal isOpen={isAuthOpen} onClose={onToggleAuthModal} />
        <AppButton onClick={onToggleAuthModal} theme={AppButtonTheme.CLEAR_INVERTED}>{t(`Login`)}</AppButton>
      </div>
  );
};
