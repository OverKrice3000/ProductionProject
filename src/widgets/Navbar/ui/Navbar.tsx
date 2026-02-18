import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import {
  AppButton as AppButtonDeprecated,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import {
  AppText as AppTextDeprecated,
  TextTheme,
} from "@/shared/ui/deprecated/AppText";
import { AppLink as AppLinkDeprecated } from "@/shared/ui/deprecated/AppLink";
import { AppHStack } from "@/shared/ui/AppStack";
import { getAuthData } from "@/entities/User";
import { LoginModal } from "@/features/AuthByUsername";
import { classNames } from "@/shared/utils/classNames";
import { UserNotificationsPopover } from "@/features/UserNotifications";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { AppRoutes, GetRoutePath } from "@/shared/constants/router";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppButton } from "@/shared/ui/redesigned/AppButton";

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
      <ToggleFeatures
        name="isAppRedesigned"
        on={
          <header className={classNames(cls.navbarRedesigned, {}, [className])}>
            <AppHStack gap={`16`} className={cls.links}>
              <UserNotificationsPopover />
              <AvatarDropdown />
            </AppHStack>
          </header>
        }
        off={
          <header className={classNames(cls.navbar, {}, [className])}>
            <AppTextDeprecated
              className={cls.appName}
              theme={TextTheme.INVERTED}
              title={`Personal blog`}
            />
            <AppHStack gap={`16`} className={cls.links}>
              <AppLinkDeprecated
                className={cls.newArticleLink}
                to={GetRoutePath[AppRoutes.ARTICLE_CREATE]()}
              >
                <AppTextDeprecated
                  theme={TextTheme.INVERTED}
                  text={t(`CreateArticle`)}
                />
              </AppLinkDeprecated>
              <UserNotificationsPopover />
              <AvatarDropdown />
            </AppHStack>
          </header>
        }
      />
    );
  }

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <header className={classNames(cls.navbarRedesigned, {}, [className])}>
          <LoginModal isOpen={isAuthOpen} onClose={onToggleAuthModal} />
          <div className={cls.links}>
            <AppButton onClick={onToggleAuthModal} variant={`clear`}>
              {t(`Login`)}
            </AppButton>
          </div>
        </header>
      }
      off={
        <header className={classNames(cls.navbar, {}, [className])}>
          <AppTextDeprecated
            className={cls.appName}
            theme={TextTheme.INVERTED}
            title={`Personal blog`}
          />
          <LoginModal isOpen={isAuthOpen} onClose={onToggleAuthModal} />
          <div className={cls.links}>
            <AppButtonDeprecated
              onClick={onToggleAuthModal}
              theme={AppButtonTheme.CLEAR_INVERTED}
            >
              {t(`Login`)}
            </AppButtonDeprecated>
          </div>
        </header>
      }
    />
  );
});

Navbar.displayName = `Navbar`;
