import { loginReducer } from "@/features/AuthByUsername";
import {
  articleCommentFormReducer,
  commentsReducer,
} from "@/features/ArticleComments";
import { profileReducer } from "@/features/EditableProfile";
import { articlesListReducer } from "@/features/ArticleInfiniteList";
import { articleReducer } from "@/features/EditableArticleDetails";

import { scrollReducer } from "../../../../widgets/AppPage";
import { StateProvider } from "../ui/StateProvider";

import type { StateSchema } from "../config/stateSchema";
import type { DeepPartial } from "../../../../shared/types/types";
import type { StoryFn } from "@storybook/react";
import type { Reducer } from "@reduxjs/toolkit";

type ReducersList = {
  [name in keyof StateSchema]?: Reducer<NonNullable<StateSchema[name]>>;
};

const asyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articlesList: articlesListReducer,
  comments: commentsReducer,
  articleCommentsForm: articleCommentFormReducer,
  scroll: scrollReducer,
};

export const StateDecorator = (state?: DeepPartial<StateSchema>) => {
  const StateDecorator = (StoryComponent: StoryFn) => (
    <StateProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent />
    </StateProvider>
  );

  return StateDecorator;
};
