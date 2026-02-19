import { AppCard } from "../../../AppCard";
import { AppButton } from "../../../AppButton/AppButton";
import { AppPopover } from "./AppPopover";
import { AppCode } from "../../../AppCode";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppPopover> = {
  title: "shared/redesigned/Popups/AppPopover",
  component: AppPopover,
  decorators: [
    (Story) => (
      <div style={{ padding: "200px" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppPopover>;

export const Default: Story = {
  args: {
    trigger: <AppButton>{"Open"}</AppButton>,
    children: (
      <AppCard>
        <AppCode text={"print('Hello World!')"} />
      </AppCard>
    ),
  },
};
