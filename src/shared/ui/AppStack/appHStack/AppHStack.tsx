import type { AppFlexProps } from "../appFlex/AppFlex";
import { AppFlex } from "../appFlex/AppFlex";
import { forwardRef } from "react";

type AppHStackProps = Omit<AppFlexProps, `direction`>;

export const AppHStack = forwardRef<HTMLDivElement, AppHStackProps>(({ children, ...props }, ref) => {
  return (
        <AppFlex direction={`row`} {...props} ref={ref}>
            {children}
        </AppFlex>
  );
});

AppHStack.displayName = `AppHStack`;
