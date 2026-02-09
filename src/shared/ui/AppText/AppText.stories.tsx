import { AppText, TextSize, TextTheme } from "./AppText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppText> = {
  title: "shared/AppText",
  component: AppText,
};

export default meta;

type Story = StoryObj<typeof AppText>;

export const Default: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
  },
};

export const OnlyTitle: Story = {
  args: {
    title: "Title Title Title Title",
  },
};

export const OnlyText: Story = {
  args: {
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
  },
};

export const Inverted: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    theme: TextTheme.INVERTED,
  },
};

export const Error: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    theme: TextTheme.ERROR,
  },
};

export const SizeS: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: TextSize.S,
  },
};

export const SizeM: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: TextSize.M,
  },
};

export const SizeL: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: TextSize.L,
  },
};
