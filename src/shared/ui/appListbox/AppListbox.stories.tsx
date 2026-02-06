import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppListbox } from "./AppListbox";
import { action } from "@storybook/addon-actions";

const meta: ComponentMeta<typeof AppListbox> = {
  title: `shared/AppListbox`,
  component: AppListbox,
  args: {
    defaultValue: `Select value`,
    onChange: action(`onChangeListboxItem`),
    items: [{
      value: `First`,
      content: `FirstFirstFirstFirst`,
    },
    {
      value: `Second`,
      content: `SecondSecondSecondSecond`,
      disabled: true,
    },
    {
      value: `Third`,
      content: `ThirdThirdThirdThird`,
    }],
    value: `ThirdThirdThirdThird`,
  },
};

export default meta;

const Template: ComponentStory<typeof AppListbox> = (args) => <AppListbox {...args} />;

export const Bottom = Template.bind({});
Bottom.args = {};

export const Right = Template.bind({});
Right.args = {
  direction: `right`,
};

export const Readonly = Template.bind({});
Readonly.args = {
  readonly: true,
};
