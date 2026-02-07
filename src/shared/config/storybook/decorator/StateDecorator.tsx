import type { Story } from "@storybook/react";
import { StateProvider } from "app/providers/stateProvider";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import type { DeepPartial } from "shared/types/types";
import { scrollReducer } from "shared/ui/appPage";
import { articleCommentFormReducer, commentsReducer } from "features/ArticleComments";
import { profileReducer } from "features/EditableProfile";
import { articlesListReducer } from "features/ArticleInfiniteList";
import { articleReducer } from "features/EditableArticleDetails";

const asyncReducers = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articlesList: articlesListReducer,
  comments: commentsReducer,
  addCommentForm: articleCommentFormReducer,
  scroll: scrollReducer,
} as DeepPartial<ReducersMapObject<StateSchema>>;

export const StateDecorator = (state?: DeepPartial<StateSchema>) => {
  const StateDecorator = (StoryComponent: Story) => (
    <StateProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent/>
    </StateProvider>
  );

  return StateDecorator;
};
