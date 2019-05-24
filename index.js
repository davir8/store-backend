import { ApolloServer } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import * as ProductType from "./src/modules/product/ProductType";
import * as UserType from "./src/modules/user/UserType";
import * as UserAuthenticatorType from "./src/modules/auth/UserAuthenticatorType";

import mongoose from "mongoose";
import jwt from "express-jwt";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
require("dotenv").config();

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
    me: User
    users: [User]
    products(filter: String, page: Int, limit: Int): ProductPaginate
    product(id: ID): Product
  }
  type Mutation {
    signup(name: String!, email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createProduct(name: String!, description: String!, url: String, userId: ID): Product
  }
`;

const typeDefs = [
  UserAuthenticatorType.typeDefs,
  ProductType.typeDefs,
  UserType.typeDefs
];

const resolvers = {
  Query: {
    ...UserAuthenticatorType.resolvers.queries,
    ...ProductType.resolvers.queries,
    ...UserType.resolvers.queries
  },
  Mutation: {
    ...UserAuthenticatorType.resolvers.mutations,
    ...ProductType.resolvers.mutations,
    ...UserType.resolvers.mutations
  }
};

const app = express();
app.use(bodyParser.json());
app.use(cors());

const auth = jwt({
  secret: process.env.SECRET_KEY,
  credentialsRequired: false
});

const path = "/graphql";

app.use(path, auth);

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...typeDefs],
  resolvers
});

const server = new ApolloServer({
  schema,
  context: ({ req }) => {
    return { user: req.user, token: req.token };
  }
});

server.applyMiddleware({ app, path });

app.listen({ port: 4000 }, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
});
