type User = {
  name: string;
  age: number;
  job: string;
  isMale: boolean;
};

type NameAndAgeOnlyUser = Pick<User, "name" | "age"> & {
  hobbies?: string[];
};

// interface User {
//   name: string;
//   age: number;
//   job: string;
//   isMale: boolean;
// }
//
// interface NameAndAgeOnlyUser extends Pick<User, "name" | "age"> {}

const user: NameAndAgeOnlyUser = {
  name: "Angel",
  age: 30,
  hobbies: [],
};
