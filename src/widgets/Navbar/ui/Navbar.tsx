import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { classNames } from "@/shared/utils/classNames";
import { AppButton, AppButtonTheme } from "@/shared/ui/AppButton";
import { LoginModal } from "@/features/AuthByUsername";
import { getAuthData } from "@/entities/User";
import { AppText, TextTheme } from "@/shared/ui/AppText";
import { AppLink } from "@/shared/ui/AppLink";
import { AppHStack } from "@/shared/ui/AppStack";
import { UserNotificationsPopover } from "@/features/UserNotifications";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const onToggleAuthModal = useCallback(() => {
    setIsAuthOpen((isAuthOpen) => !isAuthOpen);
  }, []);

  const authData = useSelector(getAuthData);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <AppText className={cls.appName} theme={TextTheme.INVERTED} title={`Personal blog`} />
          <AppHStack gap={`16`} className={cls.links}>
              <AppLink className={cls.newArticleLink} to={GetRoutePath[AppRoutes.ARTICLE_CREATE]()}>
                  <AppText theme={TextTheme.INVERTED} text={t(`CreateArticle`)} />
              </AppLink>
              <UserNotificationsPopover />
              <AvatarDropdown />
          </AppHStack>
      </header>
    );
  }

  return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <AppText className={cls.appName} theme={TextTheme.INVERTED} title={`Personal blog`} />
        <LoginModal isOpen={isAuthOpen} onClose={onToggleAuthModal} />
        <div className={cls.links}>
          <AppButton onClick={onToggleAuthModal} theme={AppButtonTheme.CLEAR_INVERTED}>{t(`Login`)}</AppButton>
        </div>
      </header>
  );
});

Navbar.displayName = `Navbar`;
