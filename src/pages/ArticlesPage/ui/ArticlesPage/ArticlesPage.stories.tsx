import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticlesPage from "pages/ArticlesPage/ui/ArticlesPage/ArticlesPage";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { articlesTestState } from "entities/article/constants/tests/article";

const meta: ComponentMeta<typeof ArticlesPage> = {
  title: `pages/ArticlesPage`,
  component: ArticlesPage,
};

export default meta;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage/>;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  articlesList: {
    ...articlesTestState,
  },
})];

export const Empty = Template.bind({});
Empty.args = {};
