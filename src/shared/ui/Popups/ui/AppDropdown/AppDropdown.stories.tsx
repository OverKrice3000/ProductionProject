import type { Meta, StoryObj } from '@storybook/react';

import { AppDropdown } from './AppDropdown';
import { AppButton } from '../../../AppButton/AppButton';

const meta: Meta<typeof AppDropdown> = {
  title: 'shared/Popups/AppDropdown',
  component: AppDropdown,
  decorators: [
    (Story) => (
      <div style={{ padding: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    trigger: <AppButton>{'Open'}</AppButton>,
    items: [
      {
        content: 'First',
      },
      {
        content: 'Second',
      },
      {
        content: 'Third',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof AppDropdown>;

export const BottomLeft: Story = {
  args: {
    direction: 'bottomLeft',
  },
};

export const BottomRight: Story = {
  args: {
    direction: 'bottomRight',
  },
};

export const TopLeft: Story = {
  args: {
    direction: 'topLeft',
  },
};

export const TopRight: Story = {
  args: {
    direction: 'topRight',
  },
};

export const RightTop: Story = {
  args: {
    direction: 'rightTop',
  },
};

export const RightBottom: Story = {
  args: {
    direction: 'rightBottom',
  },
};

export const LeftTop: Story = {
  args: {
    direction: 'leftTop',
  },
};

export const LeftBottom: Story = {
  args: {
    direction: 'leftBottom',
  },
};
