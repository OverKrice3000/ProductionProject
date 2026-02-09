import { bindActionCreators, createSlice } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { useAppDispatch } from '../hooks/useAppDispatch';

import type { ActionCreatorsMapObject } from "@reduxjs/toolkit";
import type { SliceCaseReducers, CreateSliceOptions } from "@reduxjs/toolkit/dist";

export const buildSlice = <
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string
> (options: CreateSliceOptions<State, CaseReducers, Name>) => {
  const slice = createSlice(options);

  const useActions = () => {
    const dispatch = useAppDispatch();

    return useMemo(() => bindActionCreators(slice.actions as ActionCreatorsMapObject, dispatch), [dispatch]) as typeof slice.actions;
  };

  return {
    ...slice,
    useActions,
  };
};
