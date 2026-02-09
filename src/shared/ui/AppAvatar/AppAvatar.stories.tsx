import { AppAvatar } from "./AppAvatar";
import avatarImage from "../../assets/tests/avatar.jpeg";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppAvatar> = {
  title: "shared/AppAvatar",
  component: AppAvatar,
};

export default meta;

type Story = StoryObj<typeof AppAvatar>;

export const Avatar: Story = {
  args: {
    size: 128,
    src: avatarImage,
  },
};

export const AvatarSmall: Story = {
  args: {
    size: 64,
    src: avatarImage,
  },
};
