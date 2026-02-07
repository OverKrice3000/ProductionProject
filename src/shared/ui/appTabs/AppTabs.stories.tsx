import type { Meta, StoryObj } from '@storybook/react';

import { AppTabs } from './AppTabs';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof AppTabs> = {
  title: 'shared/AppTabs',
  component: AppTabs,
};

export default meta;

type Story = StoryObj<typeof AppTabs>;

export const Default: Story = {
  args: {
    tabs: [
      {
        value: 'tab 1',
        content: 'tab 1',
      },
      {
        value: 'tab 2',
        content: 'tab 2',
      },
      {
        value: 'tab 3',
        content: 'tab 3',
      },
    ],
    value: 'tab 1',
    onTabClick: action('onTabClick'),
  },
};
