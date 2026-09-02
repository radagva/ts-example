// simple type assertion
const element = document.getElementById("someId") as HTMLInputElement;

const response = "42";

// type assertion "double assertion"
const data = response as unknown as number;

// type assertion "as const"
const user = {
  id: 1,
  name: "Angel",
  email: "angel@gmail.com",
} as const;

type User = typeof user;
type Pet = {
  id: number;
  name: string;
};

const users: (User | Pet | null)[] = [];

const isValidUser = (value: unknown): value is User => {
  return (
    typeof value === "object" &&
    value !== null &&
    "email" in value &&
    typeof value.email === "string"
  );
};

const validUsers = users.filter(isValidUser);

const user2: unknown = { id: 2 };

const validUser = isValidUser(null);
