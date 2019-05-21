import User from "./UserModel";

export const createUser = (root, args, context) => {
  const { name, email, password } = args;
  return User.create({ name, email, password });
};
