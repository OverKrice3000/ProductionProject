import type { Meta, StoryObj } from '@storybook/react';

import AdminPanelPageSync from './AdminPanelPage';

const meta: Meta<typeof AdminPanelPageSync> = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPageSync,
};

export default meta;

type Story = StoryObj<typeof AdminPanelPageSync>;

export const Default: Story = {};
