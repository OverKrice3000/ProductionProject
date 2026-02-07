import type { Meta, StoryObj } from '@storybook/react';

import { ArticleTypeTabs } from '../..';

const meta: Meta<typeof ArticleTypeTabs> = {
  title: 'entities/Article/ArticleTypeTabs',
  component: ArticleTypeTabs,
};

export default meta;

type Story = StoryObj<typeof ArticleTypeTabs>;

export const Default: Story = {};
