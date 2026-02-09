import { ProfileCard } from './ProfileCard';
import { testDefaultProfile } from '../../model/testData/profile';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
};

export default meta;

type Story = StoryObj<typeof ProfileCard>;

export const Default: Story = {
  args: {
    data: testDefaultProfile,
  },
};

export const WithLoadingError: Story = {
  args: {
    loadingError: 'ProfileLoadingError',
  },
};

export const IsLoading: Story = {
  args: {
    isLoading: true,
  },
};
