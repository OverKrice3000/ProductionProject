import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  AppButton,
  AppButtonSize,
  AppButtonTheme,
} from "@/shared/ui/deprecated/AppButton";
import { AppVStack } from "@/shared/ui/AppStack";
import { LangSwitcher } from "@/shared/ui/deprecated/LangSwitcher";
import { AppLogo } from "@/shared/ui/redesigned/AppLogo";
import { classNames } from "@/shared/utils/classNames";
import { ToggleFeatures } from "@/shared/utils/features";
import { ThemeSwitcher } from "@/features/ThemeSwitcher";
import { AppIcon } from "@/shared/ui/redesigned/AppIcon";
import ArrowBottomIcon from "@/shared/assets/icons/redesigned/arrowBottom.svg";

import { useSidebarItems } from "../../model/selectors/getSidebarItems";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import cls from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = useSidebarItems();

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
            { [cls.collapsedRedesigned]: collapsed },
            [className],
          )}
        >
          <AppLogo size={collapsed ? 30 : 50} className={cls.appLogo} />
          <AppVStack role={`navigation`} gap={`8`} className={cls.items}>
            {sidebarItems.map((item) => (
              <SidebarItem item={item} key={item.path} collapsed={collapsed} />
            ))}
          </AppVStack>
          <AppIcon
            aria-label={collapsed ? t(`OpenSidebar`) : t(`CloseSidebar`)}
            aria-controls={`sidebar`}
            aria-expanded={!collapsed}
            onClick={toggleCollapsed}
            className={cls.collapseBtn}
            Svg={ArrowBottomIcon}
            width={32}
            height={32}
            clickable
          />
          <div className={cls.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={cls.lang} short={!collapsed} />
          </div>
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
            <LangSwitcher className={cls.lang} short={!collapsed} />
          </div>
        </aside>
      }
    />
  );
});

Sidebar.displayName = `Sidebar`;
