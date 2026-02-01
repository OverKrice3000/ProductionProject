import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppTabs } from "./AppTabs";
import { action } from "@storybook/addon-actions";

const meta: ComponentMeta<typeof AppTabs> = {
  title: `shared/AppTabs`,
  component: AppTabs,
};

export default meta;

const Template: ComponentStory<typeof AppTabs> = (args) => <AppTabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      value: `tab 1`,
      content: `tab 1`,
    },
    {
      value: `tab 2`,
      content: `tab 2`,
    },
    {
      value: `tab 3`,
      content: `tab 3`,
    },
  ],
  value: `tab 1`,
  onTabClick: action(`onTabClick`),
};
