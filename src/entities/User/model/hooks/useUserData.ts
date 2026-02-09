import { useDispatch, useSelector } from "react-redux";

import { getAuthData } from "../selector/getAuthData/getAuthData";
import { userActions } from "../slice/userSlice";

export const useUserData = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);

  if (!authData) {
    dispatch(userActions.initAuthData());
  }
};
