import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/utils/classNames";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "@/shared/ui/appButton/AppButton";
import { LoginModal } from "@/features/AuthByUsername";
import { useSelector } from "react-redux";
import { getAuthData } from "@/entities/User";
import { AppText, TextTheme } from "@/shared/ui/appText/AppText";
import { AppLink } from "@/shared/ui/appLink/AppLink";
import { AppHStack } from "@/shared/ui/appStack";
import { UserNotificationsPopover } from "@/features/UserNotifications";
import { AvatarDropdown } from "@/features/AvatarDropdown";

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
              <AppLink className={cls.newArticleLink} to={`articles/new`}>
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
