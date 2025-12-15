import type { Story } from "@storybook/react";
import { StateProvider } from "app/providers/stateProvider";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { loginReducer } from "features/authByUsername/model/slice/loginSlice";
import type { DeepPartial } from "shared/types/types";
import { profileReducer } from "entities/profile";

const asyncReducers = {
  login: loginReducer,
  profile: profileReducer,
} as DeepPartial<ReducersMapObject<StateSchema>>;

export const StateDecorator = (state?: DeepPartial<StateSchema>) => {
  const StateDecorator = (StoryComponent: Story) => (
    <StateProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent/>
    </StateProvider>
  );

  return StateDecorator;
};
