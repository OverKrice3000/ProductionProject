import type { Meta, StoryObj } from '@storybook/react';

import { AppCard } from './AppCard';
import { AppText } from '../AppText/AppText';

const meta: Meta<typeof AppCard> = {
  title: 'shared/AppCard',
  component: AppCard,
};

export default meta;

type Story = StoryObj<typeof AppCard>;

export const Default: Story = {
  args: {
    children: <AppText title={'Title'} text={'Text'} />,
  },
};
