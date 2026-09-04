export type Pet = {
  id: number;
  name: string;
  owner?: string;
};

export type StoredPet = Pet & {
  createdAt: Date;
};

export const savePet = (pet: Omit<Pet, "id">, years: number): StoredPet => {
  return {
    id: 1,
    ...pet,
    createdAt: new Date(),
  };
};
