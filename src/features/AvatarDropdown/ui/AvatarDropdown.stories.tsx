import { StateDecorator } from "@/app/providers/StateProvider";
import { testUser } from "@/entities/User";

import { AvatarDropdown } from "./AvatarDropdown";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AvatarDropdown> = {
  title: "features/AvatarDropdown",
  component: AvatarDropdown,
};

export default meta;

type Story = StoryObj<typeof AvatarDropdown>;

export const Default: Story = {
  args: {
    direction: "bottomLeft",
  },
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
};

export const Redesigned: Story = {
  args: {
    direction: "bottomLeft",
  },
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
