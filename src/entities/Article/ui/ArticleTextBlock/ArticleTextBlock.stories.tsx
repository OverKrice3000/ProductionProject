import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTextBlock } from "./ArticleTextBlock";
import { testTextBlock } from "../../model/testData/article";

const meta: ComponentMeta<typeof ArticleTextBlock> = {
  title: `entities/Article/ArticleTextBlock`,
  component: ArticleTextBlock,
};

export default meta;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: testTextBlock,
};
