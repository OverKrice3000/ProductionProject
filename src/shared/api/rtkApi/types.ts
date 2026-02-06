import type { rtkApi } from "./rtkApi";

export interface RtkApiRootSchema {
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}
