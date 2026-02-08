import type { Meta, StoryObj } from '@storybook/react';

import { AppStarRating } from './AppStarRating';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof AppStarRating> = {
  title: 'shared/AppStarRating',
  component: AppStarRating,
  args: {
    onRate: action('onRate'),
  },
};

export default meta;

type Story = StoryObj<typeof AppStarRating>;

export const Default: Story = {
  args: {
    starsCount: 5,
  },
};

export const Big: Story = {
  args: {
    size: 50,
  },
};

export const Selected: Story = {
  args: {
    selectedRating: 3,
  },
};

export const TenStars: Story = {
  args: {
    starsCount: 10,
  },
};

export const TenStarsSelected: Story = {
  args: {
    starsCount: 10,
    selectedRating: 7,
  },
};
