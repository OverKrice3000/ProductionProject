import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CountrySelect } from "./CountrySelect";
import { Country } from "../..";

const meta: ComponentMeta<typeof CountrySelect> = {
  title: `entities/CountrySelect`,
  component: CountrySelect,
};

export default meta;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: Country.Russia,
};
