import Product from "./ProductModel";

export const createProduct = (root, args, context) => {
  const { name, description, userId } = args;
  return Product.create({ name, description, userId });
};
