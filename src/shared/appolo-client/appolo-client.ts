import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://inctagram.work/api/v1/graphql',
})

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
  connectToDevTools: true,
  link: authLink.concat(httpLink),
})
