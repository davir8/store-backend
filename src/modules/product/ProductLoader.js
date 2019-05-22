import Product from "./ProductModel";

export const loadAllProducts = (root, args, context) => {
  return Product.find().populate("owner");
};
