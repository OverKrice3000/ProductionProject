import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppPage } from "./AppPage";

const meta: ComponentMeta<typeof AppPage> = {
  title: `widgets/AppPage`,
  component: AppPage,
};

export default meta;

const Template: ComponentStory<typeof AppPage> = (args) => <AppPage {...args} />;

export const Default = Template.bind({});
Default.args = {};
