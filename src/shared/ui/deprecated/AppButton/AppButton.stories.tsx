import { AppButton, AppButtonSize, AppButtonTheme } from "./AppButton";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppButton> = {
  title: "shared/AppButton",
  component: AppButton,
};

export default meta;

type Story = StoryObj<typeof AppButton>;

export const Clear: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.CLEAR,
  },
};

export const ClearInverted: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.CLEAR_INVERTED,
  },
};

export const Outline: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.OUTLINE,
  },
};

export const OutlineL: Story = {
  args: {
    children: "Text",
    size: AppButtonSize.L,
    theme: AppButtonTheme.OUTLINE,
  },
};

export const OutlineXL: Story = {
  args: {
    children: "Text",
    size: AppButtonSize.XL,
    theme: AppButtonTheme.OUTLINE,
  },
};

export const OutlineRed: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.OUTLINE_RED,
  },
};

export const Background: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.BACKGROUND,
  },
};

export const BackgroundInverted: Story = {
  args: {
    children: "Text",
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Square: Story = {
  args: {
    children: ">",
    square: true,
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareL: Story = {
  args: {
    children: ">",
    square: true,
    size: AppButtonSize.L,
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};

export const SquareXL: Story = {
  args: {
    children: ">",
    square: true,
    size: AppButtonSize.XL,
    theme: AppButtonTheme.BACKGROUND_INVERTED,
  },
};

export const Disabled: Story = {
  args: {
    children: "Text",
    disabled: true,
    theme: AppButtonTheme.OUTLINE,
  },
};
