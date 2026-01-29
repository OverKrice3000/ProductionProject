import type { ComponentMeta, ComponentStory } from '@storybook/react';

import AddCommentForm from "./AddCommentForm";
import { action } from "@storybook/addon-actions";
import { StateDecorator } from "shared/config/storybook/decorator/StateDecorator";

const meta: ComponentMeta<typeof AddCommentForm> = {
  title: `features/AddCommentForm`,
  component: AddCommentForm,
};

export default meta;

const Template: ComponentStory<typeof AddCommentForm> = () => <AddCommentForm onSendComment={action(`onSendComment`)} />;

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
  StateDecorator({
    addCommentForm: {
      text: `Test comment`,
    },
  }),
];
