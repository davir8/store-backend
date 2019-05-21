import * as ProductLoader from "./ProductLoader";
import * as ProductUpdater from "./ProductUpdater";

export const typeDefs = `
  type Product {
    name: String!
    description: String!
    owner: User!
    createdAt: Date
  }
`;

export const resolvers = {
  Query: {
    products: () => ProductLoader.loadAllProducts()
  },
  Mutation: {
    createProduct: ProductUpdater.createProduct
  }
};
