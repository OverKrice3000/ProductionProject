import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CurrencySelect } from "./CurrencySelect";
import { Currency } from "../..";

const meta: ComponentMeta<typeof CurrencySelect> = {
  title: `entities/CurrencySelect`,
  component: CurrencySelect,
};

export default meta;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: Currency.RUB,
};
