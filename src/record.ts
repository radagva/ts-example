const pet = {
  name: "Milo",
  owner: "Angel",
  years: 3,
  isAlive: true,
};

type Pet = typeof pet;
type PetAttributes = keyof Pet;

type PetType = Record<PetAttributes, unknown>;
