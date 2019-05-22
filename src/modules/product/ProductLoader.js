import Product from "./ProductModel";

export const loadAllProducts = async (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }

  return await Product.find().populate("owner");
};
