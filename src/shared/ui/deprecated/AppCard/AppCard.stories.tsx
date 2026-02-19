import { AppCard } from "./AppCard";
import { AppText } from "../AppText/AppText";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AppCard> = {
  title: "shared/deprecated/AppCard",
  component: AppCard,
};

export default meta;

type Story = StoryObj<typeof AppCard>;

export const Default: Story = {
  args: {
    children: <AppText title={"Title"} text={"Text"} />,
  },
};
