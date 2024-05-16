import { ReactNode } from 'react'

import { client } from '@/shared/appolo-client/appolo-client'
import { ApolloProvider } from '@apollo/client'

export const Providers = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
