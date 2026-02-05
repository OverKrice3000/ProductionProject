import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleCodeBlock } from "./ArticleCodeBlock";
import { testCodeBlock } from "../../constants/tests/article";

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
