import { loginReducer } from '@/features/AuthByUsername';
import { articleCommentFormReducer, commentsReducer } from "@/features/ArticleComments";
import { profileReducer } from "@/features/EditableProfile";
import { articlesListReducer } from "@/features/ArticleInfiniteList";
import { articleReducer } from "@/features/EditableArticleDetails";

import { scrollReducer } from '../../../../shared/ui/AppPage';
import { StateProvider } from "../ui/StateProvider";

import type { DeepPartial } from '../../../../shared/types/types';
import type { StateSchema } from '../config/stateSchema';
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { StoryFn } from "@storybook/react";

const asyncReducers = {
  login: loginReducer,
  profile: profileReducer,
  article: articleReducer,
  articlesList: articlesListReducer,
  comments: commentsReducer,
  articleCommentsForm: articleCommentFormReducer,
  scroll: scrollReducer,
} as DeepPartial<ReducersMapObject<StateSchema>>;

export const StateDecorator = (state?: DeepPartial<StateSchema>) => {
  const StateDecorator = (StoryComponent: StoryFn) => (
    <StateProvider initialState={state} asyncReducers={asyncReducers}>
      <StoryComponent/>
    </StateProvider>
  );

  return StateDecorator;
};
