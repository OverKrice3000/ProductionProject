import type { Meta, StoryObj } from '@storybook/react';
import { AppSelect } from './AppSelect';

const meta: Meta<typeof AppSelect> = {
  title: 'shared/AppSelect',
  component: AppSelect,
};

export default meta;

type Story = StoryObj<typeof AppSelect>;

export const Select: Story = {
  args: {
    label: 'Text',
    options: [
      { value: '1', content: 'First' },
      { value: '2', content: 'Second' },
      { value: '3', content: 'Third' },
    ],
  },
};
