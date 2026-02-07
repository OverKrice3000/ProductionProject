import type { Meta, StoryObj } from '@storybook/react';

import MainPageSync from './MainPage';

const meta: Meta<typeof MainPageSync> = {
  title: 'pages/MainPage',
  component: MainPageSync,
};

export default meta;

type Story = StoryObj<typeof MainPageSync>;

export const Default: Story = {};
