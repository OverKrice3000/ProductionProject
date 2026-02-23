import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../../model/types/currency";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CurrencySelect> = {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
};

export default meta;

type Story = StoryObj<typeof CurrencySelect>;

export const Default: Story = {
  args: {
    value: Currency.RUB,
  },
};

export const Redesigned: Story = {
  args: {
    value: Currency.RUB,
  },
  parameters: {
    featureFlags: {
      isAppRedesigned: true,
    },
  },
};
