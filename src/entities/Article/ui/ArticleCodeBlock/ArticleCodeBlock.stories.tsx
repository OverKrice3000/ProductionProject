
import { ArticleCodeBlock } from './ArticleCodeBlock';
import { testCodeBlock } from '../../model/testData/article';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ArticleCodeBlock> = {
  title: 'entities/Article/ArticleCodeBlock',
  component: ArticleCodeBlock,
};

export default meta;

type Story = StoryObj<typeof ArticleCodeBlock>;

export const Default: Story = {
  args: {
    block: testCodeBlock,
  },
};
