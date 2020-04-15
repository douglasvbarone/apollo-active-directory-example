import { ApolloServer } from 'apollo-server'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'

import { ad } from './ad'

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => {
    return {
      ad
    }
  }
})

export { server }
