import type { Meta, StoryObj } from '@storybook/react';

import { RatingCard } from './RatingCard';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof RatingCard> = {
  title: 'entities/RatingCard',
  component: RatingCard,
  args: {
    onAccept: action('onAccept'),
    onCancel: action('onCancel'),
  },
};

export default meta;

type Story = StoryObj<typeof RatingCard>;

export const Default: Story = {
  args: {
    title: 'Please rate',
    hasRatingTitle: 'Thank you for your rating!',
  },
};

export const Selected: Story = {
  args: {
    selectedRating: 4,
    hasRatingTitle: 'Thank you for your rating!',
  },
};

export const WithFeedback: Story = {
  args: {
    title: 'Please rate',
    hasRatingTitle: 'Thank you for your rating!',
    feedbackTitle: 'Please leave your feedback',
    hasFeedback: true,
  },
};
