import { AppCard } from "../../ui/redesigned/AppCard";
import { AppCard as AppCardDeprecated } from "../../ui/deprecated/AppCard";
import { MainLayout } from "./MainLayout";
import { AppText as AppTextDeprecated } from "../../ui/deprecated/AppText";
import { AppText } from "../../ui/redesigned/AppText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MainLayout> = {
  title: "shared/layouts/MainLayout",
  component: MainLayout,
};

export default meta;

type Story = StoryObj<typeof MainLayout>;

export const Default: Story = {
  args: {
    content: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
    sidebar: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
    toolbar: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
    header: (
      <AppCardDeprecated>
        <AppTextDeprecated text={"Text"} />
      </AppCardDeprecated>
    ),
  },
};

export const Redesigned: Story = {
  args: {
    content: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
    sidebar: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
    toolbar: (
      <AppCard>
        <AppText text={"Text"} />
      </AppCard>
    ),
    header: (
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
