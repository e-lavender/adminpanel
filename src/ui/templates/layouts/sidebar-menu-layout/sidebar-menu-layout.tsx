import { PropsWithChildren, useEffect, useState } from 'react'

import { SidebarMenuWithItems } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items'
import { HeaderLayout } from '@/ui/templates/layouts/header-layout'
import { SidebarMenuLayoutStyled } from '@/ui/templates/layouts/sidebar-menu-layout/sidebar-menu-layout.styled'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({ children }: PropsWithChildren<SidebarMenuLayoutProps>) => {
  const { Container, Wrapper } = SidebarMenuLayoutStyled
  const [isAuthed, setIsAuthed] = useState<boolean>(false)

  useEffect(() => {
    const token = sessionStorage.getItem('isLoggedIn')

    if (!token) {
      return
    }
    if (token) {
      setIsAuthed(true)
    }
  }, [isAuthed])

  return (
    <>
      <HeaderLayout />

      <Container>
        {isAuthed && <SidebarMenuWithItems />}

        <Wrapper>{children}</Wrapper>
      </Container>
    </>
  )
}
