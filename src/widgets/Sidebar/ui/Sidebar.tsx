import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames";
import { useCallback, useState } from "react";
import { ThemeSwitcher } from "shared/ui/themeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/langSwitcher/LangSwitcher";
import { AppButton, AppButtonSize, AppButtonTheme } from "shared/ui/appButton/AppButton";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "app/Router/config/routeConfig/routerConfig";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => { setCollapsed(!collapsed); }, [collapsed]);

  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <AppButton onClick={toggleCollapsed} className={cls.collapseBtn} theme={AppButtonTheme.BACKGROUND_INVERTED} square size={AppButtonSize.L}>{collapsed ? `>` : `<`}</AppButton>
        <div className={cls.items}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>{t(`Main Page Link`)}</AppLink>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>{t(`About Page Link`)}</AppLink>
        </div>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} short={!collapsed} />
        </div>
      </div>
  );
};
