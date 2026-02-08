import type { Meta, StoryObj } from '@storybook/react';

import { AppDrawer } from './AppDrawer';
import { AppCard } from '../appCard/AppCard';
import { AppCode } from '../appCode/AppCode';

const meta: Meta<typeof AppDrawer> = {
  title: 'shared/AppDrawer',
  component: AppDrawer,
};

export default meta;

type Story = StoryObj<typeof AppDrawer>;

export const Default: Story = {
  args: {
    children: (
        <AppCard>
          <AppCode text={'print(\'Hello world!\')'} />
        </AppCard>
    ),
    isOpen: true,
  },
};
