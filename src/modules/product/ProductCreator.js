import Product from "./ProductModel";

export const createProduct = async (root, args, context) => {
  const { name, description, url, userId } = args;

  const product = await Product.create({ name, description, url, owner: userId })
  
  return await product.populate("owner").execPopulate();
};
