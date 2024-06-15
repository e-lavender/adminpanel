import { SIGN_IN_ADMIN } from '@/features/auth/login/api/signIn.api'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { NextApiRequest, NextApiResponse } from 'next'
const cache = new InMemoryCache()

export const client = new ApolloClient({
  cache,
  connectToDevTools: true,
  link: createHttpLink({
    uri: 'https://inctagram.work/api/v1/graphql',
  }),
})
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { email, password } = req.body

    await client
      .mutate({
        mutation: SIGN_IN_ADMIN,
        variables: { email, password },
      })
      .then(response => {
        if (response.data.loginAdmin.logged) {
          res.status(200).json({ data: response.data, message: 'Login successful' })
        } else {
          res.status(401).json({ message: 'Unauthorized' })
        }
      })
      .catch(err => {
        res.status(500).json({ message: 'Internal server error' })
      })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler
