import type { Profile } from "@/entities/Profile";

export interface ProfileRootSchema {
  profile?: ProfileSchema;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  readonly: boolean;
  loadingError?: string;
  validateErrors?: ValidateProfileError[];
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = `Profile.Error.IncorrectUserData`,
  INCORRECT_AGE = `Profile.Error.IncorrectAge`,
  INCORRECT_COUNTRY = `Profile.Error.IncorrectCountry`,
  NO_DATA = `Profile.Error.NoData`,
  SERVER_ERROR = `Profile.Error.ServerError`,
}
