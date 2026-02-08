import type { Meta, StoryObj } from '@storybook/react';

import { ErrorLayout } from '@/app/layouts/ErrorLayout';

const meta: Meta<typeof ErrorLayout> = {
  title: 'app/ErrorLayout',
  component: ErrorLayout,
};

export default meta;

type Story = StoryObj<typeof ErrorLayout>;

export const Default: Story = {};
