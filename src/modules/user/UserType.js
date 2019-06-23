import * as UserLoader from "./UserLoader";

export const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
    createdAt: Date
  }
  type AuthPayload {
    token: String
    user: User
  }
`;

export const resolvers = {
  queries: {
    users: UserLoader.loadAllUsers,
    me: UserLoader.me
  },
  mutations: {
    signup: UserLoader.signup,
    login: UserLoader.login
  }
};
