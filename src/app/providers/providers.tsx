import { ReactNode } from 'react'

import { client } from '@/shared/appolo-client/appolo-client'
import { AuthProvider } from '@/ui/templates/layouts/auth-context-layout/auth-context-layout'
import { ApolloProvider } from '@apollo/client'

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </AuthProvider>
  )
}
