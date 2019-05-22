import User from "./UserModel";

export const loadAllUsers = (root, args, context) => {
  return User.find();
};
