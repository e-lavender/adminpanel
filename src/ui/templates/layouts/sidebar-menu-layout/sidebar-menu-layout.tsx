import { PropsWithChildren, useEffect, useState } from 'react'

import { SidebarMenuWithItems } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items'
import { useAuth } from '@/ui/templates/layouts/auth-context-layout/auth-context-layout'
import { HeaderLayout } from '@/ui/templates/layouts/header-layout'
import { SidebarMenuLayoutStyled } from '@/ui/templates/layouts/sidebar-menu-layout/sidebar-menu-layout.styled'

type SidebarMenuLayoutProps = {}

export const SidebarMenuLayout = ({ children }: PropsWithChildren<SidebarMenuLayoutProps>) => {
  const { Container, Wrapper } = SidebarMenuLayoutStyled
  const { isAuthed } = useAuth()

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
