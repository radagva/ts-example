function traditional(value: number): string {
  return "";
}

const arrow = (value: number): string => "";

const expandedArrowFunction = (value: number): string => {
  return "";
};

const multipleArguments = (value: number, value1: boolean) => {};

const unknownNumberOfmultipleArguments = (...values: string[]) => {};

const functionThatDoesNotReturn = (): void => {};

const closured = (outside: string): ((inside: boolean) => void) => {
  return (insider) => {};
};

let randomFunction!: Function;

const a = randomFunction?.("", 1);

const t = traditional(1);
const b = arrow(2);

type ReturningFunction = () => string;

const signedFunction: ReturningFunction = () => "";

type ReturningFunctionWithParameters = (a: string[], b: boolean) => void;

const returningFuntionWithParametersExample: ReturningFunctionWithParameters = (
  a,
  b,
) => {};

type FuntionWithReturningFunction = () => () => () => number;

const nestedClosure: FuntionWithReturningFunction = () => {
  return () => {
    return () => 1;
  };
};

const myFunction = (obj: () => void) => {};
