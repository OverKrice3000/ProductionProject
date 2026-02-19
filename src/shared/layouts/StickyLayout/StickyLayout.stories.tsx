import { AppCard as AppCardDeprecated } from "../../ui/deprecated/AppCard";
import { AppText as AppTextDeprecated } from "../../ui/deprecated/AppText";
import { AppCard } from "../../ui/redesigned/AppCard";
import { AppText } from "../../ui/redesigned/AppText";
import { StickyLayout } from "./StickyLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StickyLayout> = {
  title: "shared/layouts/StickyLayout",
  component: StickyLayout,
};

export default meta;

type Story = StoryObj<typeof StickyLayout>;

export const Default: Story = {
  args: {
    left: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
    content: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
    right: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
  },
};

export const Redesigned: Story = {
  args: {
    left: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
    content: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
    right: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
