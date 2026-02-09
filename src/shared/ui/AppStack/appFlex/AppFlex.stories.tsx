import { AppFlex } from './AppFlex';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AppFlex> = {
  title: 'shared/AppFlex',
  component: AppFlex,
};

export default meta;

type Story = StoryObj<typeof AppFlex>;

const text = 'Text';
export const Row: Story = {
  args: {
    children: (
      <>
          <div>{text}</div>
          <div>{text}</div>
          <div>{text}</div>
      </>
    ),
  },
};

export const RowGap: Story = {
  args: {
    gap: '4',
    children: (
      <>
          <div>{text}</div>
          <div>{text}</div>
          <div>{text}</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
          <div>{text}</div>
          <div>{text}</div>
          <div>{text}</div>
      </>
    ),
  },
};

export const ColumnGap: Story = {
  args: {
    gap: '4',
    direction: 'column',
    children: (
        <>
            <div>{text}</div>
            <div>{text}</div>
            <div>{text}</div>
        </>
    ),
  },
};
