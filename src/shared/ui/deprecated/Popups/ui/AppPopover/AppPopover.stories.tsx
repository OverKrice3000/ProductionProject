import { AppButton } from "../../../AppButton/AppButton";
import { AppPopover } from "./AppPopover";
import { AppCard } from "../../../AppCard/AppCard";
import { AppCode } from "../../../AppCode/AppCode";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppPopover> = {
  title: "shared/Popups/AppPopover",
  component: AppPopover,
  decorators: [
    (Story) => (
      <div style={{ padding: "200px" }}>
        <Story />
      </div>
    ),
  ],
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
