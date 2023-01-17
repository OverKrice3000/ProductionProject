import cls from "./Sidebar.module.scss";
import { classNames } from "shared/utils/classNames";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import { useCallback, useState } from "react";
import { LangSwitcher } from "widgets/langSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = (props: SidebarProps) => {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = useCallback(() => { setCollapsed(!collapsed); }, [collapsed]);
  return (
      <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
        <button onClick={toggleCollapsed}>Collapse</button>
        <div className={cls.switchers}>
          <ThemeSwitcher />
          <LangSwitcher className={cls.lang} />
        </div>
      </div>
  );
};
