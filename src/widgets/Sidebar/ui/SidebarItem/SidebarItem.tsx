import { useTranslation } from "react-i18next";
import { memo } from "react";
import { useSelector } from "react-redux";

import {
  AppLink as AppLinkDeprecated,
  AppLinkTheme,
} from "@/shared/ui/deprecated/AppLink";
import { AppLink } from "@/shared/ui/redesigned/AppLink";
import { classNames } from "@/shared/utils/classNames";
import { getAuthData } from "@/entities/User";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";

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
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <AppLink
          className={classNames(
            cls.itemRedesigned,
            { [cls.collapsedRedesigned]: collapsed },
            [],
          )}
          to={item.path}
          activeClassName={cls.active}
        >
          <AppIcon width={32} height={32} Svg={item.Icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
      }
      off={
        <AppLinkDeprecated
          className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
          theme={AppLinkTheme.INVERTED}
          to={item.path}
        >
          <item.Icon className={cls.icon} />
          <span className={cls.link}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
    />
  );
});

SidebarItem.displayName = `SidebarItem`;
