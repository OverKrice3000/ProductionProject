import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { getCounter } from "../getCounter/getCounter";

export const getCounterValue = createSelector(getCounter, (counter) => counter.value);

export const useCounterValue = () => useSelector(getCounterValue);
