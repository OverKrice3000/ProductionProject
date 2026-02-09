import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../..";

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
