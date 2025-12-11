import type { CounterRootSchema } from "entities/counter";
import type { UserRootSchema } from "entities/user";
import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";
import type { EnhancedStore } from "@reduxjs/toolkit";
import type { ReducerManager } from "app/providers/stateProvider/config/reducerManager";

export interface StateSchema extends CounterRootSchema, UserRootSchema, LoginRootSchema {}

export type SliceName = keyof StateSchema;

export interface StoreWithReducerManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
