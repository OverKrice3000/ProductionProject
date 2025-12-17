import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppSelect } from "shared/ui/appSelect/AppSelect";

const meta: ComponentMeta<typeof AppSelect> = {
  title: `shared/AppSelect`,
  component: AppSelect,
};

export default meta;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Select = Template.bind({});
Select.args = {
  label: `Text`,
  options: [
    { value: `1`, content: `First` },
    { value: `2`, content: `Second` },
    { value: `3`, content: `Third` },
  ],
};
