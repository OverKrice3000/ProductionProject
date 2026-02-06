import type { Story } from "@storybook/react";
import { StateProvider } from "app/providers/stateProvider";
import type { ReducersMapObject } from "@reduxjs/toolkit";
import type { StateSchema } from "app/providers/stateProvider/config/stateSchema";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import type { DeepPartial } from "shared/types/types";
import { profileReducer } from "entities/Profile";
import { articleReducer } from "entities/Article/model/slice/articleSlice";
import { articleCommentFormReducer } from "features/ArticleComments/model/slice/commentFormSlice/articleCommentFormSlice";
import { scrollReducer } from "shared/ui/appPage";
import { articlesListReducer } from "pages/ArticlesPage/model/slice/articlesListSlice/articlesListSlice";
import { commentsReducer } from "features/ArticleComments";

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
