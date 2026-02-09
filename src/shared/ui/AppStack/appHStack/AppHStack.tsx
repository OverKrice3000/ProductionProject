import { forwardRef } from "react";

import { AppFlex } from "../appFlex/AppFlex";

import type { AppFlexProps } from "../appFlex/AppFlex";

type AppHStackProps = Omit<AppFlexProps, `direction`>;

export const AppHStack = forwardRef<HTMLDivElement, AppHStackProps>(
  ({ children, ...props }, ref) => {
    return (
      <AppFlex direction={`row`} {...props} ref={ref}>
        {children}
      </AppFlex>
    );
  },
);

AppHStack.displayName = `AppHStack`;
