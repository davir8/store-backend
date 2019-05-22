import * as UserLoader from "./UserLoader";
import * as UserUpdater from "./UserUpdater";

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: Date
  }
`;

export const resolvers = {
  queries: {
    users: () => UserLoader.loadAllUsers(),
    user: UserLoader.loadUserById
  },
  mutations: {
    createUser: UserUpdater.createUser
  }
};
