import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

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
import { ToggleFeatures } from "@/shared/utils/featureFlags";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();

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
              title={t(`Title`)}
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
          <LoginModal className={cls.links} />
        </header>
      }
      off={
        <header className={classNames(cls.navbar, {}, [className])}>
          <AppTextDeprecated
            className={cls.appName}
            theme={TextTheme.INVERTED}
            title={t(`Title`)}
          />
          <LoginModal className={cls.links} />
        </header>
      }
    />
  );
});

Navbar.displayName = `Navbar`;
