
const { gql } = require("apollo-server")
const typeDefs = gql`


type User {
  id: ID
  name: String
  age: Int
  email: String
  friends: [User]
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

  type Query {
    hello: String
    getCharacters: AllCharacters
    users: [User]
  }

 

`
module.exports = typeDefs