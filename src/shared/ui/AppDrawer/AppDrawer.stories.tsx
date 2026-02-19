import { AppDrawer } from "./AppDrawer";
import { AppCard as AppCardRedesigned } from "../deprecated/AppCard/AppCard";
import { AppCode as AppCodeRedesigned } from "../deprecated/AppCode/AppCode";
import { AppCard } from "../redesigned/AppCard";
import { AppCode } from "../redesigned/AppCode";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppDrawer> = {
  title: "shared/AppDrawer",
  component: AppDrawer,
};

export default meta;

type Story = StoryObj<typeof AppDrawer>;

export const Default: Story = {
  args: {
    children: (
      <AppCardRedesigned>
        <AppCodeRedesigned text={"print('Hello world!')"} />
      </AppCardRedesigned>
    ),
    isOpen: true,
  },
};

export const Redesigned: Story = {
  args: {
    children: (
      <AppCard>
        <AppCode text={"print('Hello world!')"} />
      </AppCard>
    ),
    isOpen: true,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
