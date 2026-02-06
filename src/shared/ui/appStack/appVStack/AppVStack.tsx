import type { AppFlexProps } from "../appFlex/AppFlex";
import { AppFlex } from "../appFlex/AppFlex";
import { forwardRef } from "react";

type AppVStackProps = Omit<AppFlexProps, `direction`>;

export const AppVStack = forwardRef<HTMLDivElement, AppVStackProps>(({ children, align = `start`, ...props }, ref) => {
  return (
        <AppFlex direction={`column`} align={align} {...props} ref={ref}>
            {children}
        </AppFlex>
  );
});

AppVStack.displayName = `AppVStack`;
