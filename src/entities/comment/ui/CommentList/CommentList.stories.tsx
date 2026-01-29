import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from "./CommentList";
import { testComments } from "pages/ArticleDetailsPage/model/constants/tests/comment";

const meta: ComponentMeta<typeof CommentList> = {
  title: `entities/CommentList`,
  component: CommentList,
};

export default meta;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: testComments,
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};
