import MockedFn = jest.MockedFn;
import type { StateSchema } from "app/providers/stateProvider";
import type { AsyncThunkAction } from "@reduxjs/toolkit";
import MockedFunctionDeep = jest.MockedFunctionDeep;
import type { AxiosStatic } from "axios";
import axios from "axios";

type ActionCreator<Return, Argument, RejectedValue> = (argument: Argument) => AsyncThunkAction<Return, Argument, { rejectValue: RejectedValue; }>;

jest.mock(`axios`);
const mockedAxios = jest.mocked(axios, true);

export class TestAsyncThunk<Return, Argument, RejectedValue> {
  dispatch: MockedFn<any>;
  getState: () => StateSchema;

  api: MockedFunctionDeep<AxiosStatic>;
  navigate: MockedFn<any>;

  actionCreator: ActionCreator<Return, Argument, RejectedValue>;

  constructor (actionCreator: ActionCreator<Return, Argument, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();
    this.navigate = jest.fn();
    this.api = mockedAxios;

    this.actionCreator = actionCreator;
  }

  async callThunk (argument: Argument) {
    const action = this.actionCreator(argument);

    return await action(this.dispatch, this.getState, {
      api: this.api,
      navigate: this.navigate,
    });
  }
}
