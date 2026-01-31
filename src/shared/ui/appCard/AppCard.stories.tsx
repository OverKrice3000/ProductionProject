import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { AppCard } from "./AppCard";
import { AppText } from "shared/ui/appText/AppText";

const meta: ComponentMeta<typeof AppCard> = {
  title: `shared/AppCard`,
  component: AppCard,
};

export default meta;

const Template: ComponentStory<typeof AppCard> = (args) => <AppCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <AppText title={`Title`} text={`Text`} />,
};
