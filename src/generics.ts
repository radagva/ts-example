import type { Pet } from "./exported/return-type.js";

export type Box<Content = string, Meta = null> = {
  content: Content;
  meta?: Meta;
};

export const boxOfNumber: Box<number> = { content: 123 };
export const boxOfNumbers: Box<number[]> = { content: [1, 2, 3] };
export const boxOfStrings: Box<string, string> = {
  content: "",
};

export const boxOfPets: Box<Pet[]> = {
  content: [
    {
      id: 1,
      name: "Milo",
      owner: "Angel",
    },
  ],
};

const envVariables = {
  API_KEY: "",
  PORT: 0,
  DSN: "",
  IS_DEV: true,
};

export const env = <T extends keyof typeof envVariables>(key: T) => {
  return envVariables[key];
};

export const API_KEY = env("IS_DEV");

const setOfPets = new Set<string>();
const mapOfPets = new Map<string, Pet>();

setOfPets.add("Milo");

mapOfPets.set("milo", { id: 1, name: "Milo", owner: "Angel" });
