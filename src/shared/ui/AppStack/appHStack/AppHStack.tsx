import { forwardRef, type ReactElement } from "react";

import { AppFlex } from "../appFlex/AppFlex";

import type { PolymorphicRef, PolymorphicTag } from "../../AppBlock/AppBlock";
import type { AppFlexProps } from "../appFlex/AppFlex";

type AppHStackProps<Tag extends PolymorphicTag = PolymorphicTag> = Omit<
  AppFlexProps<Tag>,
  `direction`
>;

const AppHStackInternal = forwardRef(
  <Tag extends PolymorphicTag>(
    { children, ...props }: AppHStackProps<Tag>,
    ref: PolymorphicRef<Tag>,
  ) => {
    return (
      <AppFlex direction={`row`} {...props} ref={ref}>
        {children}
      </AppFlex>
    );
  },
);

AppHStackInternal.displayName = `AppHStack`;

export const AppHStack = AppHStackInternal as <
  Tag extends PolymorphicTag = PolymorphicTag,
>(
  props: AppHStackProps<Tag> & { ref?: PolymorphicRef<Tag> },
) => ReactElement | null;
