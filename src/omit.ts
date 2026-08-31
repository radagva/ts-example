type User = {
  name: string;
  age: number;
  job: string;
  isMale: boolean;
};

type GenderlessUser = Omit<User, "isMale" | "job"> & {
  hobbies?: string[];
};

// interface User {
//   name: string;
//   age: number;
//   job: string;
//   isMale: boolean;
// }
//
// interface GenderlessUser extends Omit<User, "isMale" | "job"> {}

const user: GenderlessUser = {
  name: "Angel",
  age: 30,
  hobbies: [],
};

console.log(user.hobbies?.push(""));
