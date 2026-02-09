import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import isomorphicFetch from "isomorphic-fetch";

import { USER_LOCAL_STORAGE_KEY } from "../../constants/localStorage";

const fetchFn = __PROJECT__ === `frontend` ? fetch : isomorphicFetch;

export const rtkApi = createApi({
  reducerPath: `api`,
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    fetchFn,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem(USER_LOCAL_STORAGE_KEY) ?? ``;
      token && headers.set(`Authorization`, token);

      return headers;
    },
  }),
  endpoints: () => ({}),
});
