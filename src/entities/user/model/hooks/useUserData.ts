import { useDispatch } from "react-redux";
import { userActions } from "entities/user";
import { useEffect } from "react";

export const useUserData = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);
};
