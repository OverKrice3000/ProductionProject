import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { ArticleComments } from "./ArticleComments";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";
import { emptyNormalizedData, normalizeData } from "shared/utils/redux/normalizeData";
import { getTestCommentsList } from "entities/Comment/model/testData/comment";

const meta: ComponentMeta<typeof ArticleComments> = {
  title: `features/ArticleComments`,
  component: ArticleComments,
};

export default meta;

const Template: ComponentStory<typeof ArticleComments> = (args) => <ArticleComments {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StateDecorator({
  comments: {
    ...normalizeData(getTestCommentsList(3), (data) => data.id),
  },
})];

export const IsLoading = Template.bind({});
IsLoading.args = {};
IsLoading.decorators = [StateDecorator({
  comments: {
    ...emptyNormalizedData,
    isLoading: true,
  },
})];
