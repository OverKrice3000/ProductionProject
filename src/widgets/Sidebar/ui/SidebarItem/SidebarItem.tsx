import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";

import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { classNames } from "@/shared/utils/classNames";
import { getAuthData } from "@/entities/User";

import cls from "./SidebarItem.module.scss";

import type { SidebarItemData } from "../../model/types/items";

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
