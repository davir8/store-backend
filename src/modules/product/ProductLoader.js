import Product from "./ProductModel";

export const loadAllProducts = async (root, args, { user }) => {
  // make sure user is logged in
  if (!user) {
    throw new Error("You are not authenticated!");
  }

  const { filter } = args;
  let query = {}
  
  if (filter) {
    query = {'name' : new RegExp(filter, 'i')}
  }
  
  return await Product.find(query).populate("owner");
};
