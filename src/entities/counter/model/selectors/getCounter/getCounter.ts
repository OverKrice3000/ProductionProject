import { CounterRootSchema } from "entities/counter";
import { useSelector } from "react-redux";

export const getCounter = (state: CounterRootSchema) => state.counter;

export const useCounter = () => useSelector(getCounter);
