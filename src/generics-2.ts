// caso 1: estandarizar un formato de respuesta de nuestros backends
export interface APIResponse<T, U> {
  result: T;
  metadata: U;
}

type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

// export class UserResponseDTO implements APIResponse<User, null> {
//   // result: User;
//   // metadata: null;
//   //
//   // constructor(user: User) {
//   //   this.result = user;
//   //   this.metadata = null;
//   // }
//
//   constructor(
//     public result: User,
//     public metadata: null,
//   ) {}
// }

// const user = new UserResponseDTO(
//   {
//     id: 1,
//     name: "Angel",
//     email: "angel@gmail.com",
//     password: "password",
//   },
//   null,
// );

// caso 2: funcion para generar un nuevo objeto con atributos especificos
export const pick = <T extends Record<string, unknown>, U extends keyof T>(
  origin: T,
  keys: U[],
): Pick<T, U> => {
  const result = {} as Pick<T, U>;

  keys.forEach((key) => {
    result[key] = origin[key];
  });

  return result;
};

const user2: User = {
  id: 1,
  name: "Angel",
  email: "angel@gmail.com",
  password: "password",
};

export const publicUser = pick(user2, ["id", "name", "email"]);

// console.log({ user2, publicUser });

export type EventsMap = {
  "user:created": { id: number; email: string };
  "user:updated": { id: number; name?: string; email?: string };
};

export class CustomEventEmitter<T extends Record<string, unknown>> {
  public emit<K extends keyof T, Input extends T[K]>(
    event: K,
    input: Input,
  ): void {
    console.log(`[Event ${String(event)}]: ${JSON.stringify(input, null, 4)}`);
  }
}

const emitter = new CustomEventEmitter<EventsMap>();

emitter.emit("user:created", { id: 1, email: "angel@gmail.com" });
emitter.emit("user:updated", {
  id: 2,
  name: "Angel 2",
  email: "angel2@gmail.com",
});
