import type { Story } from "@storybook/react";
import { StateProvider } from "app/providers/stateProvider";
import type { DeepPartial } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";

export const StateDecorator = (state?: DeepPartial<StateSchema>) => {
  const StateDecorator = (StoryComponent: Story) => (
    <StateProvider initialState={state}>
      <StoryComponent/>
    </StateProvider>
  );

  return StateDecorator;
};
