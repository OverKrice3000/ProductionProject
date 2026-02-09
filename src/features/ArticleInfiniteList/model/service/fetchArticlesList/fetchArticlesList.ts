import { createAsyncThunk } from "@reduxjs/toolkit";

import type { ThunkConfig } from "@/app/providers/StateProvider";
import type { Article } from "@/entities/Article";
import { ArticleType } from "@/entities/Article";
import { addQueryParams } from "@/shared/utils/web/addQueryParams";

import {
  getArticlesListOrder,
  getArticlesListPageLimit, getArticlesListPageNumber, getArticlesListSearch,
  getArticlesListSortField, getArticlesListType,
} from "../../selector/articlesListSelectors";

import type { AxiosResponse } from "axios";

export interface FetchArticlesListProps {
  replace?: boolean;
}

export interface FetchArticlesListResult {
  articles: Article[];
  hasMore: boolean;
}

export const fetchArticlesList = createAsyncThunk<FetchArticlesListResult, FetchArticlesListProps, ThunkConfig<string>>(
    `articlesPage/fetchArticlesList`,
    async (_,
      { extra, rejectWithValue, getState },
    ) => {
      try {
        const limit = getArticlesListPageLimit(getState());
        const order = getArticlesListOrder(getState());
        const field = getArticlesListSortField(getState());
        const search = getArticlesListSearch(getState());
        const page = getArticlesListPageNumber(getState());
        const type = getArticlesListType(getState());

        addQueryParams({ order, field, search, type });

        const response = await extra.api.get<Article[], AxiosResponse<Article[]>>(`/articles`, {
          params: {
            _expand: `user`,
            _page: page,
            _limit: limit,
            _sort: field,
            _order: order,
            q: search,
            type: type === ArticleType.ALL ? undefined : type,
          },
        });

        if (!response.data) {
          throw new Error();
        }

        return { articles: response.data, hasMore: response.data.length === limit };
      } catch (e) {
        console.log(e);

        return rejectWithValue(`UnexpectedError`);
      }
    });
