import type { Meta, StoryObj } from '@storybook/react';
import { AppLoader } from './AppLoader';

const meta: Meta<typeof AppLoader> = {
  title: 'widgets/Loader',
  component: AppLoader,
};

export default meta;

type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {};
