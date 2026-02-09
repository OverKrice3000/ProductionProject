import { StateDecorator } from "@/app/providers/StateProvider";
import { testUser } from "@/entities/User";

import { Sidebar } from "../..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Sidebar> = {
  title: "widgets/Sidebar",
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
};
