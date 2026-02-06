import { createSelector } from "@reduxjs/toolkit";
import { getCounter } from "../getCounter/getCounter";
import { useSelector } from "react-redux";

export const getCounterValue = createSelector(getCounter, (counter) => counter.value);

export const useCounterValue = () => useSelector(getCounterValue);
