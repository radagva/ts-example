import type { Pet } from "./exported/return-type.js";

type EmailStr = string | null | undefined;

type NonNullableEmailStr = NonNullable<EmailStr>;

type AnimalSpecies =
  | "mammals"
  | "amphibians"
  | "repitles"
  | undefined
  | "birds"
  | "fishes"
  | null;

type ValidAnimalSpecies = NonNullable<AnimalSpecies>;

type MyOwnPetType = Omit<Pet, "owner"> & {
  owner: NonNullable<Pet["owner"]>;
};
