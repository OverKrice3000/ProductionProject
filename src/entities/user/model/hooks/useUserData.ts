import { useDispatch, useSelector } from "react-redux";
import { getAuthData, userActions } from "entities/user";

export const useUserData = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);

  if (!authData) {
    dispatch(userActions.initAuthData());
  }
};
