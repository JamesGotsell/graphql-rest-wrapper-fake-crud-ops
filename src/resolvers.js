

module.exports = {
    Query: {
      hello: () => {
        return "hello world"
      }, 
      getCharacters: (_, params, { dataSources }) =>  dataSources.rickAndMortyAPI.getCharacters(),
      users:  (_, params, { dataSources })=> {
        console.log(params)
        return dataSources.user.list()
      },
      user: (_, params, { dataSources })=> {
        console.log(params.id, "********************** id ", _, "******* _")
        return dataSources.user.find(params.id)
      }
      
    }, 
    Mutation: {
      createUser:  (_, params, { dataSources })  => {
        console.log(params, "********************** input ")
        return dataSources.user.create(params.input)
      },
      updateUser: (_, params, { dataSources })  => {
        return dataSources.user.update(params.id, params.input)
      },
      deleteUser: (_, params, { dataSources })  => {
        console.log(params, "********************** id ")
        return  dataSources.user.delete(params.id)
      }
    }
  }