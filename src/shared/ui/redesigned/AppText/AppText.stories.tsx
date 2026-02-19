import { AppText } from "./AppText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppText> = {
  title: "shared/redesigned/AppText",
  component: AppText,
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
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

export const Accent: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    variant: "accent",
  },
};

export const Error: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    variant: "error",
  },
};

export const SizeS: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: "size_s",
  },
};

export const SizeM: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: "size_m",
  },
};

export const SizeL: Story = {
  args: {
    title: "Title Title Title Title",
    text: "Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text",
    size: "size_l",
  },
};
