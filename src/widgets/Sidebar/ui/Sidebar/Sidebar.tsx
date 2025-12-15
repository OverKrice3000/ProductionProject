import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames";
import { memo, useCallback, useState } from "react";
import { ThemeSwitcher } from "shared/ui/themeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/langSwitcher/LangSwitcher";
import { AppButton, AppButtonSize, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { SidebarItems } from "widgets/Sidebar/model/items";
import { SidebarItem } from "widgets/Sidebar/ui/SidebarItem/SidebarItem";

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => { setCollapsed(!collapsed); }, [collapsed]);

  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <AppButton onClick={toggleCollapsed} className={cls.collapseBtn} theme={AppButtonTheme.BACKGROUND_INVERTED} square size={AppButtonSize.L}>{collapsed ? `>` : `<`}</AppButton>
        <div className={cls.items}>
          {SidebarItems.map((item) => (
            <SidebarItem item={item} key={item.path} collapsed={collapsed} />
          ))}
        </div>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} short={!collapsed} theme={AppButtonTheme.CLEAR_INVERTED} />
        </div>
      </div>
  );
});

Sidebar.displayName = `Sidebar`;
