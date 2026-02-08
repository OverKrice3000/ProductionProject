import type { Profile } from "../../index";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatarImage from "@/shared/assets/tests/avatar.jpeg";

export const testDefaultProfile: Profile = {
  id: `1`,
  username: `admin`,
  age: 22,
  country: Country.Russia,
  lastname: `Klimiuk`,
  first: `Igor`,
  city: `Novosibirsk`,
  currency: Currency.RUB,
  avatar: avatarImage,
};

export const testEmptyFirstLastNameProfile: Profile = {
  id: `1`,
  username: `admin`,
  age: 22,
  country: Country.Russia,
  lastname: ``,
  first: ``,
  city: `Novosibirsk`,
  currency: Currency.RUB,
  avatar: avatarImage,
};

export const testInvalidAgeProfile: Profile = {
  id: `1`,
  username: `admin`,
  age: 0,
  country: Country.Russia,
  lastname: `Klimiuk`,
  first: `Igor`,
  city: `Novosibirsk`,
  currency: Currency.RUB,
  avatar: avatarImage,
};

export const testEmptyCountryProfile: Profile = {
  id: `1`,
  username: `admin`,
  age: 22,
  lastname: `Klimiuk`,
  first: `Igor`,
  city: `Novosibirsk`,
  currency: Currency.RUB,
  avatar: avatarImage,
};

export const testMultipleErrorsProfile: Profile = {
  id: `1`,
  username: `admin`,
  age: 0,
  lastname: ``,
  first: ``,
  city: `Novosibirsk`,
  currency: Currency.RUB,
  avatar: avatarImage,
};
