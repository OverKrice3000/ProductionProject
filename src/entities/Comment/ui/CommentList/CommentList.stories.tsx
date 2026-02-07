import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { CommentList } from "./CommentList";
import { getTestCommentsList } from "../../model/testData/comment";

const meta: ComponentMeta<typeof CommentList> = {
  title: `entities/Comment/CommentList`,
  component: CommentList,
};

export default meta;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: getTestCommentsList(3),
};

export const Empty = Template.bind({});
Empty.args = {
  comments: [],
};

export const Loading = Template.bind({});
Loading.args = {
  comments: [],
  isLoading: true,
};
