import { memo, useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { AppVStack } from "@/shared/ui/AppStack";
import {
  AppButton,
  AppButtonSize,
  AppButtonTheme,
} from "@/shared/ui/AppButton";
import { classNames } from "@/shared/utils/classNames";
import { LangSwitcher } from "@/shared/ui/LangSwitcher";
import { ToggleFeatures } from "@/shared/utils/features";
import { AppLogo } from "@/shared/ui/AppLogo";

import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = useSelector(getSidebarItems);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <ToggleFeatures
      name={`isAppRedesigned`}
      on={
        <aside
          aria-label={t(`Main navigation`)}
          role={`navigation`}
          id={`sidebar`}
          className={classNames(
            cls.sidebarRedesigned,
            { [cls.collapsed]: collapsed },
            [className],
          )}
        >
          <AppLogo className={cls.appLogo} />
        </aside>
      }
      off={
        <aside
          aria-label={t(`Main navigation`)}
          role={`navigation`}
          id={`sidebar`}
          className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
            className,
          ])}
        >
          <AppButton
            aria-label={collapsed ? t(`OpenSidebar`) : t(`CloseSidebar`)}
            aria-controls={`sidebar`}
            aria-expanded={!collapsed}
            onClick={toggleCollapsed}
            className={cls.collapseBtn}
            theme={AppButtonTheme.BACKGROUND_INVERTED}
            square
            size={AppButtonSize.L}
          >
            {collapsed ? `>` : `<`}
          </AppButton>
          <AppVStack role={`navigation`} gap={`8`} className={cls.items}>
            {sidebarItems.map((item) => (
              <SidebarItem item={item} key={item.path} collapsed={collapsed} />
            ))}
          </AppVStack>
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher
              className={cls.lang}
              short={!collapsed}
              theme={AppButtonTheme.CLEAR_INVERTED}
            />
          </div>
        </aside>
      }
    />
  );
});

Sidebar.displayName = `Sidebar`;
