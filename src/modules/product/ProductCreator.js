import Product from "./ProductModel";

export const createProduct = async (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }

  const { name, description, url, userId } = args;

  const product = await Product.create({
    name,
    description,
    url,
    owner: userId
  });

  return await product.populate("owner").execPopulate();
};
