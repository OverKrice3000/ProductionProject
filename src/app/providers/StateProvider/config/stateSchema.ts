import type { UserRootSchema } from "@/entities/User";
import type { LoginRootSchema } from "@/features/AuthByUsername";
import type {
  ArticleCommentFormRootSchema,
  ArticleCommentsRootSchema,
} from "@/features/ArticleComments";
import type { ArticlesListRootSchema } from "@/pages/ArticlesPage";
import type { RtkApiRootSchema } from "@/shared/api/rtkApi/types";
import type { ProfileRootSchema } from "@/features/EditableProfile";
import type { ArticleRootSchema } from "@/features/EditableArticleDetails";
import type { ScrollRootSchema } from "@/widgets/AppPage";

import type { NavigateOptions, To } from "react-router";
import type { AxiosInstance } from "axios";
import type { ReducerManager } from "./reducerManager";
import type { CombinedState, EnhancedStore } from "@reduxjs/toolkit";

export interface StateSchema
  extends
    UserRootSchema,
    LoginRootSchema,
    ProfileRootSchema,
    ArticleRootSchema,
    ArticleCommentsRootSchema,
    ArticlesListRootSchema,
    ArticleCommentFormRootSchema,
    ScrollRootSchema,
    RtkApiRootSchema {}

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
