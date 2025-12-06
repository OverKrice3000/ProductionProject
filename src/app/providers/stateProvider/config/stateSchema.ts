import type { CounterRootSchema } from "entities/counter";
import type { UserRootSchema } from "entities/user";

export interface StateSchema extends CounterRootSchema, UserRootSchema {}
