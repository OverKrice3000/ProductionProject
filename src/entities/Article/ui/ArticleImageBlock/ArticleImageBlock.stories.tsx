import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleImageBlock } from "./ArticleImageBlock";
import { testImageBlock } from "../../constants/tests/article";

const meta: ComponentMeta<typeof ArticleImageBlock> = {
  title: `entities/ArticleImageBlock`,
  component: ArticleImageBlock,
};

export default meta;

const Template: ComponentStory<typeof ArticleImageBlock> = (args) => <ArticleImageBlock {...args} />;

export const Default = Template.bind({});
Default.args = {
  block: testImageBlock,
};
