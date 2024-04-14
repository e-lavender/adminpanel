import { AppProps } from 'next/app'

import '@/styles/index.css'
import '@flyingtornado06/ui-kit/dist/style.css'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
