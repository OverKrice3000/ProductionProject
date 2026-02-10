import { forwardRef, type ReactElement } from "react";

import { AppFlex } from "../appFlex/AppFlex";

import type { PolymorphicRef, PolymorphicTag } from "../../AppBlock/AppBlock";
import type { AppFlexProps } from "../appFlex/AppFlex";

type AppVStackProps<Tag extends PolymorphicTag = PolymorphicTag> = Omit<
  AppFlexProps<Tag>,
  `direction`
>;

const AppVStackInternal = forwardRef(
  <Tag extends PolymorphicTag>(
    { children, align = `start`, ...props }: AppVStackProps<Tag>,
    ref: PolymorphicRef<Tag>,
  ) => {
    return (
      <AppFlex direction={`column`} align={align} {...props} ref={ref}>
        {children}
      </AppFlex>
    );
  },
);

AppVStackInternal.displayName = `AppVStack`;

export const AppVStack = AppVStackInternal as <
  Tag extends PolymorphicTag = PolymorphicTag,
>(
  props: AppVStackProps<Tag> & { ref?: PolymorphicRef<Tag> },
) => ReactElement | null;
