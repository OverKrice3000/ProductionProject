import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginModal } from './LoginModal';

const meta: ComponentMeta<typeof LoginModal> = {
  title: `features/AuthByUsername/LoginModal`,
  component: LoginModal,
};

export default meta;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
};
