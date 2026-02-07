import type { Meta, StoryObj } from '@storybook/react';

import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import LoginFormSync from './LoginForm';

const meta: Meta<typeof LoginFormSync> = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginFormSync,
};

export default meta;

type Story = StoryObj<typeof LoginFormSync>;

export const Default: Story = {};

export const WithError: Story = {
  decorators: [
    StateDecorator({
      login: {
        error: 'Incorrect username or password',
      },
    }),
  ],
};
