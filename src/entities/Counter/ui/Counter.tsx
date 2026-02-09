import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { AppButton } from "@/shared/ui/AppButton";

import { counterActions } from "../model/slice/counterSlice";
import { useCounterValue } from "../model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();

  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <AppButton onClick={increment}>{t(`Increment`)}</AppButton>
      <AppButton onClick={decrement}>{t(`Decrement`)}</AppButton>
    </div>
  );
};
