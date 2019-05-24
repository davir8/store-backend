import User from "./UserModel";

export const loadAllUsers = (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }
  return User.find();
};

export const me = async (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }

  // user is authenticated
  return await User.findById(user.id);
};
