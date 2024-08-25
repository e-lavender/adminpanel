import { ApolloClient, InMemoryCache, createHttpLink, split } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { Kind, OperationTypeNode } from 'graphql/language'
const wsLink = new WebSocketLink({
  options: {
    reconnect: true,
  },
  uri: `ws://inctagram.work/api/v1/graphql`,
})
const httpLink = createHttpLink({
  uri: 'https://inctagram.work/api/v1/graphql',
})
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query)

    return (
      definition.kind === Kind.OPERATION_DEFINITION &&
      definition.operation === OperationTypeNode.SUBSCRIPTION
    )
  },
  wsLink,
  httpLink
)
const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('authToken')

  return {
    headers: {
      ...headers,
      authorization: token ? `Basic ${token}` : '',
    },
  }
})
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  devtools: { enabled: true },
  link: authLink.concat(link),
})
