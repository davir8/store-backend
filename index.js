import { ApolloServer } from "apollo-server";
import { makeExecutableSchema } from "graphql-tools";

import * as ProductType from "./src/modules/product/ProductType";
import * as UserType from "./src/modules/user/UserType";

import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/store", {
  useNewUrlParser: true
});

const SchemaDefinition = `
  scalar Date

  schema {
    query: Query
    mutation: Mutation
  }
  type Query {
    products: [Product]
    users: [User]
    user(id: ID!): User
  }
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User
    createProduct(name: String!, description: String!, url: String, userId: ID): Product
  }
`;

const typeDefs = [ProductType.typeDefs, UserType.typeDefs];

const resolvers = {
  Query: {
    ...ProductType.resolvers.queries,
    ...UserType.resolvers.queries
  },
  Mutation: {
    ...ProductType.resolvers.mutations,
    ...UserType.resolvers.mutations
  }
};

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
