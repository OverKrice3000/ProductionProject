import { AppButton } from "shared/ui/appButton/AppButton";
import { useDispatch } from "react-redux";
import { counterActions } from "entities/counter/model/slice/counterSlice";
import { useCounterValue } from "entities/counter/model/selectors/getCounterValue/getCounterValue";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useCounterValue();

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1>{counterValue}</h1>
      <AppButton onClick={increment}>Increment</AppButton>
      <AppButton onClick={decrement}>Decrement</AppButton>
    </div>
  );
};
