/**
 * Un sistema de roles usando Record
 */
type Role = "boss" | "admin" | "employee" | "guest" | "maintenance";
type Action = "manage" | "sign_contract" | "work" | "walk_around";

type Permission = Record<Role, Action[]>;

const permissions: Permission = {
  admin: ["manage"],
  boss: ["manage", "sign_contract"],
  employee: ["work"],
  guest: ["walk_around"],
  maintenance: ["work"],
};

/**
 * Un sistema de cache de usuarios usando Record
 */

type User = {
  id: number;
  name: string;
  email: string;
};

const users: User[] = [];

const user1 = users.find((user) => user.id === 1);

type CachedUsers = Record<number, User>;

const cachedUsers: CachedUsers = {
  1: {
    id: 1,
    name: "Angel",
    email: "uncorreo@gmail.com",
  },
};
