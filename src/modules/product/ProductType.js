import * as ProductLoader from "./ProductLoader";
import * as ProductCreator from "./ProductCreator";

export const typeDefs = `
  type Product {
    id: ID!
    name: String!
    description: String!
    url: String
    owner: User
    createdAt: Date
  }
  type ProductPaginate {
    docs: [Product]
    total: Int
    limit: Int
    page: Int
    pages: Int
  }
`;

export const resolvers = {
  queries: {
    products: ProductLoader.loadAllProducts
  },
  mutations: {
    createProduct: ProductCreator.createProduct
  }
};
