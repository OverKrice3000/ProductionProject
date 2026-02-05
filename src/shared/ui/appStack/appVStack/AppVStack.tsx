import type { AppFlexProps } from "../appFlex/AppFlex";
import { AppFlex } from "../appFlex/AppFlex";

type AppVStackProps = Omit<AppFlexProps, `direction`>;

export const AppVStack = ({ children, align = `start`, ...props }: AppVStackProps) => {
  return (
        <AppFlex direction={`column`} align={align} {...props}>
            {children}
        </AppFlex>
  );
};
