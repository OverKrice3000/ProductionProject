import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppModal } from "./AppModal";

const meta: ComponentMeta<typeof AppModal> = {
  title: `shared/AppModal`,
  component: AppModal,
};

export default meta;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: `Text`,
  isOpen: true,
};
