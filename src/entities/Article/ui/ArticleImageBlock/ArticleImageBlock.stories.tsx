import type { Meta, StoryObj } from '@storybook/react';

import { ArticleImageBlock } from './ArticleImageBlock';
import { testImageBlock } from '../../model/testData/article';

const meta: Meta<typeof ArticleImageBlock> = {
  title: 'entities/Article/ArticleImageBlock',
  component: ArticleImageBlock,
};

export default meta;

type Story = StoryObj<typeof ArticleImageBlock>;

export const Default: Story = {
  args: {
    block: testImageBlock,
  },
};
