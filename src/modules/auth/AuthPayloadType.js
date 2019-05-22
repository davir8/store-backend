import * as UserAuthenticator from "./UserAuthenticator";

export const typeDefs = `
  type AuthPayload {
    token: String
    user: User
  }
`;

export const resolvers = {
  queries: {
    me: UserAuthenticator.me
  },
  mutations: {
    signup: UserAuthenticator.signup,
    login: UserAuthenticator.login
  }
};
