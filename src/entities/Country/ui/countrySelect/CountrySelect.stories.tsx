import { CountrySelect } from "./CountrySelect";
import { Country } from "../..";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CountrySelect> = {
  title: "entities/CountrySelect",
  component: CountrySelect,
};

export default meta;

type Story = StoryObj<typeof CountrySelect>;

export const Default: Story = {
  args: {
    value: Country.Russia,
  },
};

export const Redesigned: Story = {
  args: {
    value: Country.Russia,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
