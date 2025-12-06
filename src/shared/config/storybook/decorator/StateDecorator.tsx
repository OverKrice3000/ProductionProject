import { Story } from "@storybook/react";
import { StateProvider } from "app/providers/stateProvider";

export const StateDecorator = (StoryComponent: Story) => (
  <StateProvider>
    <StoryComponent />
  </StateProvider>
);
