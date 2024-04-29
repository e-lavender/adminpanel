import { PropsWithChildren } from 'react'
import { SidebarMenuStyles } from '@/ui/common/sidebar-menu/sidebar-menu.styled'

export const SidebarMenu = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const { Menu, Container } = SidebarMenuStyles

  return (
    <aside className={className}>
      <Container>
        <Menu>{children}</Menu>
      </Container>
    </aside>
  )
}
