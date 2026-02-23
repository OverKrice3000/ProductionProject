import { AppFlex } from "../../ui/AppStack/appFlex/AppFlex";
import { AppText as AppTextDeprecated } from "../../ui/deprecated/AppText";
import { AppCard } from "../../ui/redesigned/AppCard";
import { AppText } from "../../ui/redesigned/AppText";
import { StickyLayout } from "./StickyLayout";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta: Meta<typeof StickyLayout> = {
  title: "shared/layouts/StickyLayout",
  component: StickyLayout,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: "100%", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof StickyLayout>;

export const Default: Story = {
  args: {
    left: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
    content: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
    right: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
  },
};

export const Redesigned: Story = {
  args: {
    left: (
      <AppCard maxW maxH>
        <AppText text={"Text"} />
      </AppCard>
    ),
    content: (
      <AppCard maxW maxH>
        <AppText text={"Text"} />
      </AppCard>
    ),
    right: (
      <AppCard maxW maxH>
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
