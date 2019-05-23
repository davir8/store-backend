import * as UserLoader from "./UserLoader";

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
    users: UserLoader.loadAllUsers
  }
};
