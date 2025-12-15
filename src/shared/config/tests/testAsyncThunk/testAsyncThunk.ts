import MockedFn = jest.MockedFn;
import type { StateSchema } from "app/providers/stateProvider";
import type { AsyncThunkAction } from "@reduxjs/toolkit";

type ActionCreator<Return, Argument, RejectedValue> = (argument: Argument) => AsyncThunkAction<Return, Argument, { rejectValue: RejectedValue; }>;

export class TestAsyncThunk<Return, Argument, RejectedValue> {
  dispatch: MockedFn<any>;
  getState: () => StateSchema;

  actionCreator: ActionCreator<Return, Argument, RejectedValue>;

  constructor (actionCreator: ActionCreator<Return, Argument, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn();

    this.actionCreator = actionCreator;
  }

  async callThunk (argument: Argument) {
    const action = this.actionCreator(argument);
    return await action(this.dispatch, this.getState, undefined);
  }
}
