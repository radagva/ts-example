import type { Pet } from "./exported/return-type.js";

const updatePet = (pet: Partial<Omit<Pet, "id">>) => {};

updatePet({ name: "Name" });

type Config = {
  host: string;
  port: number;
  dns: string;
};

const configure = (config: Partial<Config> & Pick<Config, "port">) => {};

configure({ host: "localhost", dns: "asd", port: 5432 });
