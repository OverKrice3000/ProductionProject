import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback, useState } from "react";
import { AppButton, AppButtonSize, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { getSidebarItems } from "../../model/selectors/getSidebarItems";
import { useSelector } from "react-redux";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarItems = useSelector(getSidebarItems);

  const toggleCollapsed = useCallback(() => { setCollapsed(!collapsed); }, [collapsed]);

  return (
      <menu className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <AppButton onClick={toggleCollapsed} className={cls.collapseBtn} theme={AppButtonTheme.BACKGROUND_INVERTED} square size={AppButtonSize.L}>{collapsed ? `>` : `<`}</AppButton>
        <div className={cls.items}>
          {sidebarItems.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
          ))}
        </div>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} short={!collapsed} theme={AppButtonTheme.CLEAR_INVERTED} />
        </div>
      </menu>
  );
});

Sidebar.displayName = `Sidebar`;
