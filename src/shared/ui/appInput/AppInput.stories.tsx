import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppInput } from './AppInput';

const meta: ComponentMeta<typeof AppInput> = {
  title: `shared/AppInput`,
  component: AppInput,
};

export default meta;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: `Text`,
  placeholder: `Enter text`,
};
