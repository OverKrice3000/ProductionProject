import type { Meta, StoryObj } from '@storybook/react';

import { Sidebar } from '../..';
import { StateDecorator } from 'shared/config/storybook/decorator/StateDecorator';
import { testUser } from 'entities/User/model/constants/tests/user';

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
};

export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {};

export const LoggedIn: Story = {
  decorators: [
    StateDecorator({
      user: {
        authData: testUser,
      },
    }),
  ],
};
