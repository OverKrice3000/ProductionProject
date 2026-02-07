export { isUserAdmin, isUserManager, getUserRoles } from "entities/User/model/selector/roles/rolesSelectors";

export { getAuthData } from "entities/User/model/selector/getAuthData/getAuthData";
export { userActions, userReducer } from "entities/User/model/slice/userSlice";
export type { User, UserRole } from "entities/User/model/types/user";
export type { UserRootSchema } from "entities/User/model/types/userSchema";
