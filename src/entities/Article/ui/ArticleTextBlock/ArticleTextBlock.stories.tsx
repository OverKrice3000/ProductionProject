import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTextBlock } from './ArticleTextBlock';
import { testTextBlock } from '../../model/testData/article';

const meta: Meta<typeof ArticleTextBlock> = {
  title: 'entities/Article/ArticleTextBlock',
  component: ArticleTextBlock,
};

export default meta;

type Story = StoryObj<typeof ArticleTextBlock>;

export const Default: Story = {
  args: {
    block: testTextBlock,
  },
};
