import Product from "./ProductModel";

export const createProduct = (root, args, context) => {
  const { name, description, url, userId } = args;
  return Product.create({ name, description, url, owner: userId });
};
