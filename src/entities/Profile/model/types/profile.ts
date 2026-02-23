import type { Currency } from "@/entities/Currency";
import type { Country } from "@/entities/Country";

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export enum ValidateProfileError {
  INCORRECT_USER_DATA = `Profile.Error.IncorrectUserData`,
  INCORRECT_AGE = `Profile.Error.IncorrectAge`,
  INCORRECT_COUNTRY = `Profile.Error.IncorrectCountry`,
  NO_DATA = `Profile.Error.NoData`,
  SERVER_ERROR = `Profile.Error.ServerError`,
}
