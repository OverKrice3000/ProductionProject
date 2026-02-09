import { forwardRef } from "react";

import { AppFlex } from "../appFlex/AppFlex";

import type { AppFlexProps } from "../appFlex/AppFlex";

type AppVStackProps = Omit<AppFlexProps, `direction`>;

export const AppVStack = forwardRef<HTMLDivElement, AppVStackProps>(
  ({ children, align = `start`, ...props }, ref) => {
    return (
      <AppFlex direction={`column`} align={align} {...props} ref={ref}>
        {children}
      </AppFlex>
    );
  },
);

AppVStack.displayName = `AppVStack`;
