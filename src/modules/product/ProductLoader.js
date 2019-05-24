import Product from "./ProductModel";

export const loadAllProducts = async (root, args, { user }) => {
  // make sure user is logged in
  // if (!user) {
  //   throw new Error("You are not authenticated!");
  // }

  const { filter, limit, page } = args;
  let query = {};

  if (filter) {
    query = { name: new RegExp(filter, "i") };
  }

  const options = {
    sort: { createdAt: -1 },
    populate: "owner",
    page: page || 1,
    limit: limit || 10
  };

  return await Product.paginate(query, options);
};
