import type { ComponentMeta, ComponentStory } from '@storybook/react';

import CommentForm from "./CommentForm";
import { action } from "@storybook/addon-actions";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";

const meta: ComponentMeta<typeof CommentForm> = {
  title: `features/AddCommentForm`,
  component: CommentForm,
  args: {
    onTextChange: action(`onTextChange`),
    onSendComment: action(`onSendComment`),
  },
};

export default meta;

const Template: ComponentStory<typeof CommentForm> = (args) => <CommentForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StateDecorator({
    articleCommentsForm: {
      text: `Test comment`,
    },
  }),
];
