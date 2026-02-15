import { useCallback } from "react";

import { AppFlex } from "../../AppStack/appFlex/AppFlex";
import cls from "./AppTabs.module.scss";
import { classNames } from "../../../utils/classNames";
import { typedMemo } from "../../../utils/react/appMemo";
import { AppCard } from "../AppCard/AppCard";

import type { AppFlexProps } from "../../AppStack/appFlex/AppFlex";
import type { ReactNode } from "react";

export interface TabItem<Value extends string = string> {
  value: Value;
  content: ReactNode;
}

interface AppTabsProps<Value extends string = string> extends AppFlexProps {
  className?: string;
  tabs: Array<TabItem<Value>>;
  value: Value;
  onTabClick?: (tab: Value) => void;
}

export const AppTabs = typedMemo(
  <Value extends string>({
    className,
    tabs,
    value,
    onTabClick,
    ...other
  }: AppTabsProps<Value>) => {
    const onClickHandler = useCallback(
      (tab: Value) => () => {
        onTabClick?.(tab);
      },
      [onTabClick],
    );

    return (
      <AppFlex
        {...other}
        role="tablist"
        className={classNames(cls.AppTabs, {}, [className])}
      >
        {tabs.map((tab) => (
          <AppCard
            role="tab"
            key={tab.value}
            variant={tab.value === value ? `light` : `normal`}
            onClick={onClickHandler(tab.value)}
            border={`borderRound`}
            className={classNames(
              ``,
              { [cls.selected]: tab.value === value },
              [],
            )}
          >
            {tab.content}
          </AppCard>
        ))}
      </AppFlex>
    );
  },
);

AppTabs.displayName = `AppTabs`;
