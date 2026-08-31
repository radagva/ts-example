const myName: string = "Angel";
const myAge: number = 30;
const myJob: string = "Developer";
const isMale: boolean = true;

interface User {
  name: string;
  age: number;
  job: string;
  isMale: boolean;
}

interface UserWithHobby extends User {
  hobbies: string[];
}

type UserType = {
  name: string;
  age: number;
  job: string;
  isMale: boolean;
};

type UserWithHobbyType = UserType & {
  hobbies: string[];
};

type MayHaveHobbiesUser = UserType | UserWithHobbyType;

const user: UserWithHobby = {
  name: "Angel",
  age: 30,
  job: "developer",
  isMale: true,
  hobbies: [],
};

const user2: MayHaveHobbiesUser = {
  name: "Rada",
  age: 30,
  job: "developer",
  isMale: false,
};

console.log(user2.name);
