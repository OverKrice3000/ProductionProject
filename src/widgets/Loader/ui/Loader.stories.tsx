import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from '..';

const meta: Meta<typeof Loader> = {
  title: 'widgets/Loader',
  component: Loader,
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {};
