import type { Meta, StoryObj } from '@storybook/react';

import { AppInput } from './AppInput';

const meta: Meta<typeof AppInput> = {
  title: 'shared/AppInput',
  component: AppInput,
};

export default meta;

type Story = StoryObj<typeof AppInput>;

export const Default: Story = {
  args: {
    value: 'Text',
    placeholder: 'Enter text',
  },
};
