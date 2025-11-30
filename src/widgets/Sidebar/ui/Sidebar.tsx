import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "shared/ui/themeSwitcher/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/langSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = useCallback(() => { setCollapsed(!collapsed); }, [collapsed]);

  const { t } = useTranslation();
  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <button onClick={toggleCollapsed}>{t(`Collapse`)}</button>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} />
        </div>
      </div>
  );
};
