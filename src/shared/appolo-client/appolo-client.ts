import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://your-graphql-endpoint.com/graphql', // Укажите здесь URL вашего сервера GraphQL
  }),
})

export default client
