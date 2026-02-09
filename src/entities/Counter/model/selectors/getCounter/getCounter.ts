import { useSelector } from "react-redux";

import type { CounterRootSchema } from "../../..";

export const getCounter = (state: CounterRootSchema) => state.counter;

export const useCounter = () => useSelector(getCounter);
