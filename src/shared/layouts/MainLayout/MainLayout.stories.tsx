import { AppFlex } from "../../ui/AppStack/appFlex/AppFlex";
import { AppCard } from "../../ui/redesigned/AppCard";
import { MainLayout } from "./MainLayout";
import { AppText as AppTextDeprecated } from "../../ui/deprecated/AppText";
import { AppText } from "../../ui/redesigned/AppText";

import type { Meta, StoryFn, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainLayout> = {
  title: "shared/layouts/MainLayout",
  component: MainLayout,
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: {
    content: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
    sidebar: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
    toolbar: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
    header: (
      <AppFlex maxW maxH style={{ background: "var(--card-bg)" }}>
        <AppTextDeprecated text={"Text"} />
      </AppFlex>
    ),
  },
};

export const Redesigned: Story = {
  args: {
    content: (
      <AppCard maxW maxH>
        <AppText text={"Text"} />
      </AppCard>
    ),
    sidebar: (
      <AppCard maxW maxH>
        <AppText text={"Text"} />
      </AppCard>
    ),
    toolbar: (
      <AppCard maxW maxH>
        <AppText text={"Text"} />
      </AppCard>
    ),
    header: (
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
