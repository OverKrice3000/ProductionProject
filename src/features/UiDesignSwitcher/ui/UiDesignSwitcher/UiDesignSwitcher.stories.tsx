import { UiDesignSwitcher } from "./UiDesignSwitcher";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiDesignSwitcher> = {
  title: "features/UiDesignSwitcher",
  component: UiDesignSwitcher,
};

export default meta;

type Story = StoryObj<typeof UiDesignSwitcher>;

export const Default: Story = {
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
