import type { ValOf, ValuesOf } from "../types/types";

export const isSomeEnum =
  <EnumType extends object>(e: EnumType) =>
  (token: unknown): token is ValOf<EnumType> =>
    Object.values(e).includes(token);

export const ObjectTyped = {
  keys: <T extends object>(obj: T): Array<keyof T> =>
    Object.keys(obj) as Array<keyof T>,
  values: <T extends object>(obj: T): Array<T[keyof T]> =>
    Object.values(obj) as Array<T[keyof T]>,
  entries: <T extends object>(obj: T): Array<[keyof T, ValuesOf<T>]> =>
    Object.entries(obj) as Array<[keyof T, ValuesOf<T>]>,
};
