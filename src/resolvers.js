
import userModel from './models/Users'
module.exports = {
    Query: {
      hello: () => {
        return "hello world"
      }, 
      getCharacters: (_, __, { dataSources }) =>  dataSources.rickAndMortyAPI.getCharacters(),
      users: () => {
        return userModel.list()
      }
    } 
  }