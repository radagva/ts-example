import type { Pet } from "./exported/return-type.js";

export type ExtendedPet = Pet & {
  makeSound: () => void;
  getSound: () => string;
  previousOwner: string | null;
};

export type FunctionSignature = (..._: unknown[]) => unknown;

export type FunctionsOnly<T> = {
  [P in keyof T as T[P] extends FunctionSignature ? P : never]: T[P];
};

type NonFunctionsOnly<T> = {
  [P in keyof T as T[P] extends FunctionSignature ? never : P]: T[P];
};

export type PetMethods = NonFunctionsOnly<ExtendedPet>;

type EventsGenerator<T> = {
  [P in keyof T as `onChange${Capitalize<string & P>}`]: (
    newValue: NonNullable<T[P]>,
  ) => void;
};

export type PetHandlers = EventsGenerator<Pet>;
