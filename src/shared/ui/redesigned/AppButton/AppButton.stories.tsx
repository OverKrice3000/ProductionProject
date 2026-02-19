import { AppButton } from "./AppButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppButton> = {
  title: "shared/redesigned/AppButton",
  component: AppButton,
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Clear: Story = {
  args: {
    children: "Text",
    variant: "clear",
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    variant: "outline",
  },
};

export const OutlineL: Story = {
  args: {
    children: "Text",
    size: "size_l",
    variant: "outline",
  },
};

export const OutlineXL: Story = {
  args: {
    children: "Text",
    size: "size_xl",
    variant: "outline",
  },
};

export const Square: Story = {
  args: {
    children: ">",
    square: true,
  },
};

export const SquareL: Story = {
  args: {
    children: ">",
    square: true,
    size: "size_l",
  },
};

export const SquareXL: Story = {
  args: {
    children: ">",
    square: true,
    size: "size_xl",
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    disabled: true,
    variant: "outline",
  },
};
