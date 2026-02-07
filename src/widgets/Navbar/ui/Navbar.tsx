import cls from "./Navbar.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { LoginModal } from "features/AuthByUsername";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData, userActions } from "entities/User";
import { AppText, TextTheme } from "shared/ui/appText/AppText";
import { AppLink } from "shared/ui/appLink/AppLink";
import type { DropdownItem } from "shared/ui/appDropdown/AppDropdown";
import { AppDropdown } from "shared/ui/appDropdown/AppDropdown";
import { AppAvatar } from "shared/ui/appAvatar/AppAvatar";

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
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

  const avatarDropdownItems = useMemo<DropdownItem[]>(() => [{
    content: t(`UserProfile`),
    href: `/profile/${authData?.id ?? 1}`,
  }, {
    content: t(`Logout`),
    onClick: onLogout,
  }], [authData, onLogout, t]);

  if (authData) {
    return (
      <header className={classNames(cls.navbar, {}, [className])}>
        <AppText className={cls.appName} theme={TextTheme.INVERTED} title={`Personal blog`} />
          <div className={cls.links}>
              <AppLink className={cls.newArticleLink} to={`articles/new`}>
                  <AppText theme={TextTheme.INVERTED} text={t(`CreateArticle`)} />
              </AppLink>
              <AppDropdown direction={`bottomRight`} items={avatarDropdownItems} trigger={<AppAvatar aria-hidden={true} alt={t(`UserAvatar`)} size={30} src={authData.avatar} />} />
          </div>
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
