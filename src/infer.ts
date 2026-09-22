const resolve = async () => ({
  id: 1,
  name: "Angel",
});

type Awaiting<T> = T extends Promise<infer U> ? U : T;

type Resolved = Awaiting<ReturnType<typeof resolve>>;

type SnakeToCamelCase<T extends string> =
  T extends `${infer Head}_${infer Tail}`
    ? `${Head}${Capitalize<SnakeToCamelCase<Tail>>}`
    : T;

type ObjectToCamelCase<T> = {
  [P in keyof T as P extends string ? SnakeToCamelCase<P> : never]: T[P];
};

type OldConfig = {
  user_id: number;
  database_connetion_string: string;
  port: number;
};

const config: ObjectToCamelCase<OldConfig> = {
  userId: 1,
  databaseConnetionString: "",
  port: 1,
};
