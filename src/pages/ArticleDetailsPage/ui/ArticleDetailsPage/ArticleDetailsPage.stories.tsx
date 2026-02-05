import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleDetailsPage from "./ArticleDetailsPage";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { testArticle } from "entities/article";

const meta: ComponentMeta<typeof ArticleDetailsPage> = {
  title: `pages/ArticleDetailsPage`,
  component: ArticleDetailsPage,
};

export default meta;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  article: {
    data: testArticle,
  },
})];
