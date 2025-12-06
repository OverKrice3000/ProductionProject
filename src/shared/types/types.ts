export type ValOf<Object> = Object[keyof Object];

export type Write<OriginalT extends object, ExtendT extends object> = Omit<OriginalT, keyof ExtendT> & ExtendT;
