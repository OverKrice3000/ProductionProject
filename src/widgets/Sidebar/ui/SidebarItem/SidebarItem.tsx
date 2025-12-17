import cls from "./SidebarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import { useTranslation } from "react-i18next";
import type { SidebarItemData } from "widgets/Sidebar/model/items";
import { memo } from "react";
import { classNames } from "shared/utils/classNames";
import { useSelector } from "react-redux";
import { getAuthData } from "entities/user";

interface SidebarItemProps {
  item: SidebarItemData;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();

  const isAuth = useSelector(getAuthData);

  if (!isAuth && item.authOnly) return null;

  return (
    <AppLink className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])} theme={AppLinkTheme.INVERTED} to={item.path}>
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});

SidebarItem.displayName = `SidebarItem`;
