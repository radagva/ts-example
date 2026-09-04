import type { Pet } from "./exported/return-type.js";

type MandatoryPetAttributes = Required<Pet>;

type Config = {
  host?: string;
  port?: number;
  dns?: string;
};

const setupSDK = (config: Config) => {
  const configure = (options: Required<Config>): Required<Config> => ({
    ...options,
    ...config,
  });

  return configure({ dns: "mydns", host: "localhost", port: 5432 });
};

const configuredData = setupSDK({ host: "192.186.1.1" });

console.log({ configuredData });
