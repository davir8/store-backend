import User from "./UserModel";

export const loadAllUsers = (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }
  return User.find();
};
