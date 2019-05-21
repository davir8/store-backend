import User from "./UserModel";

export const loadAllUsers = (root, args, context) => {
  return User.find();
};
export const loadUserById = (root, args, context) => {
  const { id } = args;
  return User.findById(id);
};
