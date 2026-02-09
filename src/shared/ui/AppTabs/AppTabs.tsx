import cls from "./AppTabs.module.scss";
import { classNames } from '../../utils/classNames';
import type { ReactNode } from "react";
import { useCallback } from "react";
import { typedMemo } from '../../utils/react/appMemo';
import { AppCard, CardTheme } from '../AppCard/AppCard';

export interface TabItem<Value extends string = string> {
  value: Value;
  content: ReactNode;
}

interface AppTabsProps<Value extends string = string> {
  className?: string;
  tabs: Array<TabItem<Value>>;
  value: Value;
  onTabClick?: (tab: Value) => void;
}

export const AppTabs = typedMemo(<Value extends string>({ className, tabs, value, onTabClick }: AppTabsProps<Value>) => {
  const onClickHandler = useCallback((tab: Value) => () => {
    onTabClick?.(tab);
  }, [onTabClick]);

  return (
        <div role="tablist" className={classNames(cls.AppTabs, {}, [className])}>
          {tabs.map((tab) => (
              <AppCard
                  role="tab"
                  key={tab.value}
                  theme={tab.value === value ? CardTheme.OUTLINE : CardTheme.NORMAL}
                  onClick={onClickHandler(tab.value)}
              >
                {tab.content}
              </AppCard>
          ))}
        </div>
  );
});

AppTabs.displayName = `AppTabs`;
