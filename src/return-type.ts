import { savePet } from "./exported/return-type.js";

const pet = savePet({ name: "Milo", owner: "Angel" }, 2);

type StoredPet = ReturnType<typeof savePet>;

const mutateStoredPet = (mutatedPet: StoredPet): void => {};
