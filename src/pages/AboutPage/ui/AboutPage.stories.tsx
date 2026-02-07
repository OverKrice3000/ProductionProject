import type { Meta, StoryObj } from '@storybook/react';

import AboutPageSync from './AboutPage';

const meta: Meta<typeof AboutPageSync> = {
  title: 'pages/AboutPage',
  component: AboutPageSync,
};

export default meta;

type Story = StoryObj<typeof AboutPageSync>;

export const Default: Story = {};
