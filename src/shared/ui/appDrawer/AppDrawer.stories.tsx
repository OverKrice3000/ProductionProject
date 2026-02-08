import type { Meta, StoryObj } from '@storybook/react';

import { AppDrawer } from './AppDrawer';

const meta: Meta<typeof AppDrawer> = {
  title: 'entities/AppDrawer',
  component: AppDrawer,
};

export default meta;

type Story = StoryObj<typeof AppDrawer>;

export const Default: Story = {};
