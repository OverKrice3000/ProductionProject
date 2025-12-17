import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect } from "./CountrySelect";

const meta: ComponentMeta<typeof CountrySelect> = {
  title: `entities/CurrencySelect`,
  component: CountrySelect,
};

export default meta;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const DefaultCurrencySelect = Template.bind({});
DefaultCurrencySelect.args = {};
