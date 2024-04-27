import { PropsWithChildren } from 'react'

import { Header } from '@/widgets/Header/Header'

export const HeaderLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}
