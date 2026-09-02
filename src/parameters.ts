import { savePet } from "./exported/return-type.js";

const pet = savePet({ name: "Milo", owner: "Angel" }, 2);

type MyFunction = typeof savePet;

type SavePetParameters = Parameters<MyFunction>;

const deletePet = (...[pet, years]: SavePetParameters): void => {};
