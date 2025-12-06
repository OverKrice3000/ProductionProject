import type { ValOf } from "shared/types/types";

export const isSomeEnum = <EnumType extends object>(e: EnumType) => (token: unknown): token is ValOf<EnumType> => Object.values(e).includes(token);
