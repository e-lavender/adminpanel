import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import React, { ReactElement, ReactNode } from 'react'

import { Providers } from '@/app/providers/providers'
import { WithHomePageLayout } from '@/ui/templates/layouts/temp-layout/template-layout'

import '@/styles/index.css'
import '@flyingtornado06/ui-kit/dist/style.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  //const { isLoading, message } = useLoadingSpinner()

  return (
    <Providers>
      <WithHomePageLayout>{getLayout(<Component {...pageProps} />)}</WithHomePageLayout>
    </Providers>
  )
}

export default App
