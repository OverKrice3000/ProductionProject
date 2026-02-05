import type { AppFlexProps } from "../appFlex/AppFlex";
import { AppFlex } from "../appFlex/AppFlex";

type AppHStackProps = Omit<AppFlexProps, `direction`>;

export const AppHStack = ({ children, ...props }: AppHStackProps) => {
  return (
        <AppFlex direction={`row`} {...props}>
            {children}
        </AppFlex>
  );
};
