import User from "./UserModel";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
require("dotenv").config();

export const login = async (root, { email, password }, context) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("No user with that email");
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    throw new Error("Incorrect password");
  }

  const token = jsonwebtoken.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d"
    }
  );

  return { user, token };
};

export const signup = async (root, { name, email, password }, context) => {
  const user = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 10)
  });

  const token = jsonwebtoken.sign(
    { id: user.id, email: user.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d"
    }
  );

  return { user, token };
};

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
