import * as UserLoader from "./UserLoader";
import * as UserUpdater from "./UserUpdater";

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    products: [Product]
    createdAt: Date
  }
`;

export const resolvers = {
  Query: {
    users: () => UserLoader.loadAllUsers(),
    user: UserLoader.loadUserById
  },
  Mutation: {
    createUser: UserUpdater.createUser
  }
};
