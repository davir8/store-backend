import * as UserAuthenticator from "./UserAuthenticator";
import * as UserLoader from "../user/UserLoader";

export const typeDefs = `
  type AuthPayload {
    token: String
    user: User
  }
`;

export const resolvers = {
  queries: {
    me: UserLoader.me
  },
  mutations: {
    signup: UserAuthenticator.signup,
    login: UserAuthenticator.login
  }
};
