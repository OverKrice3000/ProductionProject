export type ValOf<Object> = Object[keyof Object];

export type Write<OriginalT extends object, ExtendT extends object> = Omit<OriginalT, keyof ExtendT> & ExtendT;

export type Optional<T extends object> = {
  [K in keyof T]?: T[K];
};

export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

export type ValuesOf<T> =
    T extends Record<ObjectKey, unknown> ? T[keyof T] : T extends unknown[] ? T[number] : never;

export type ObjectKey = string | number | symbol;
