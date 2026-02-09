import { ThemeSwitcher } from './ThemeSwitcher';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'shared/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

type Story = StoryObj<typeof ThemeSwitcher>;

export const Default: Story = {};
