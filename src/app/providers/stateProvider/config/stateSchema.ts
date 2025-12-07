import type { CounterRootSchema } from "entities/counter";
import type { UserRootSchema } from "entities/user";
import type { LoginRootSchema } from "features/authByUsername/model/types/loginSchema";

export interface StateSchema extends CounterRootSchema, UserRootSchema, LoginRootSchema {}
