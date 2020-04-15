const { gql } = require('apollo-server')

const typeDefs = gql`
  "You can add the LDAP attributes that you want."
  type User {
    displayName: String!
    dn: String!
    cn: String!
    title: String
    description: String
    givenName: String
    distinguishedName: String
    sAMAccountName: String!
  }

  type Query {
    user: User
  }

  type Mutation {
    login(data: LoginInput): LoginResponse!
  }

  type LoginResponse {
    user: User!
    token: String!
    tokenExp: String!
  }

  input LoginInput {
    user: String!
    password: String!
  }
`

export { typeDefs }
