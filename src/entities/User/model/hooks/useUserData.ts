import { useDispatch, useSelector } from "react-redux";

import { getAuthData } from "../selector/user/userSelectors";
import { initAuthData } from "../service/initAuthData";

export const useUserData = () => {
  const dispatch = useDispatch();
  const authData = useSelector(getAuthData);

  if (!authData) {
    dispatch(initAuthData());
  }
};
