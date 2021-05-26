
const { gql } = require("apollo-server")
const typeDefs = gql`


type User {
  id: ID
  name: String
  age: Int
  email: String

}

type Info {
        count: Int,
        pages: Int,
        next: String
        prev: String
}

type Chararters {
    id: ID
    name: String
    status: String
    species: String
    type: String
    gender: String
    image: String
    url: String
    created: String
}

type AllCharacters {
    info: Info
    characters: [Chararters]
}

input CreateUserInput {
  id: Int
  name: String
  age: Int
  email: String
}

  type Query {
    hello: String
    getCharacters: AllCharacters
    users: [User]
    user(id: Int!): User
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(id: Int!, input: CreateUserInput!): User
    deleteUser(id: Int!): User
  }


`
module.exports = typeDefs