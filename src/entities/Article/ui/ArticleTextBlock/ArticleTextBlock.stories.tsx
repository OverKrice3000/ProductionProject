import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleTextBlock } from "./ArticleTextBlock";
import { testTextBlock } from "../../constants/tests/article";

const meta: ComponentMeta<typeof ArticleTextBlock> = {
  title: `entities/ArticleTextBlock`,
  component: ArticleTextBlock,
};

export default meta;

const Template: ComponentStory<typeof ArticleTextBlock> = (args) => <ArticleTextBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: testTextBlock,
};
