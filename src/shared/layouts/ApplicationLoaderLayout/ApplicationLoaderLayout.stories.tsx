import { ApplicationLoaderLayout } from "./ApplicationLoaderLayout";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ApplicationLoaderLayout> = {
  title: "shared/layouts/AppLoaderLayout",
  component: ApplicationLoaderLayout,
};

export default meta;

type Story = StoryObj<typeof ApplicationLoaderLayout>;

export const Default: Story = {};
