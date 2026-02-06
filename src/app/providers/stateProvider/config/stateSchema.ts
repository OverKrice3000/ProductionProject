import type { CounterRootSchema } from "entities/counter";
import type { UserRootSchema } from "entities/user";
import type { LoginRootSchema } from "features/AuthByUsername/model/types/loginSchema";
import type { CombinedState, EnhancedStore } from "@reduxjs/toolkit";
import type { ReducerManager } from "app/providers/stateProvider/config/reducerManager";
import type { ProfileRootSchema } from "entities/profile";
import type { AxiosInstance } from "axios";
import type { NavigateOptions, To } from "react-router";
import type { ArticleRootSchema } from "entities/article";
import type { ArticleCommentFormRootSchema, ArticleCommentsRootSchema } from "features/ArticleComments";
import type { ArticlesListRootSchema } from "pages/ArticlesPage";
import type { ScrollRootSchema } from "shared/ui/appPage";
import type { RtkApiRootSchema } from "shared/api/rtkApi/types";

export interface StateSchema extends CounterRootSchema,
  UserRootSchema,
  LoginRootSchema,
  ProfileRootSchema,
  ArticleRootSchema,
  ArticleCommentsRootSchema,
  ArticlesListRootSchema,
  ArticleCommentFormRootSchema,
  ScrollRootSchema,
  RtkApiRootSchema
{}

export type CombinedStateSchema = CombinedState<StateSchema>;

export type SliceName = keyof StateSchema;

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArgument {
  api: AxiosInstance;
  navigate: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<RejectValue> {
  rejectValue: RejectValue;
  extra: ThunkExtraArgument;
  state: StateSchema;
}
