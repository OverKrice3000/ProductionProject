import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleCodeBlock } from "entities/article/ui/ArticleCodeBlock/ArticleCodeBlock";
import { testCodeBlock } from "entities/article/constants/tests/article";

const meta: ComponentMeta<typeof ArticleCodeBlock> = {
  title: `entities/ArticleCodeBlock`,
  component: ArticleCodeBlock,
};

export default meta;

const Template: ComponentStory<typeof ArticleCodeBlock> = (args) => <ArticleCodeBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: testCodeBlock,
};
