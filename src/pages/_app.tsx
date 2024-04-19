import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import React, { ReactElement, ReactNode } from 'react'

import { store, wrapper } from '@/app/store/store'

import '@/app/styles/index.scss'
import '@flyingtornado06/ui-kit/dist/style.css'
import { WithHomePageLayout } from '@/ui/templates/temp-layout/template-layout'

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
      <WithHomePageLayout>{getLayout(<Component {...pageProps} />)}</WithHomePageLayout>
      {/*  <Toaster />*/}
      {/* <LoadingSpinner isLoading={isLoading} label={message} />*/}

  )
}

export default wrapper.withRedux(App)
