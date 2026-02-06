import type { CounterRootSchema } from "../../..";
import { useSelector } from "react-redux";

export const getCounter = (state: CounterRootSchema) => state.counter;

export const useCounter = () => useSelector(getCounter);
