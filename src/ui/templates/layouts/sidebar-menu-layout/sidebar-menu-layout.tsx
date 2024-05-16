import { PropsWithChildren } from 'react'

import { SidebarMenuWithItems } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items'
import { HeaderLayout } from '@/ui/templates/layouts/header-layout'
import { SidebarMenuLayoutStyled } from '@/ui/templates/layouts/sidebar-menu-layout/sidebar-menu-layout.styled'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({
  children,
  isAuthed = false,
}: PropsWithChildren<SidebarMenuLayoutProps>) => {
  const { Container, Wrapper } = SidebarMenuLayoutStyled

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
