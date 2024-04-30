import { PropsWithChildren } from 'react'
import { SidebarMenuStyles } from '@/ui/common/sidebar-menu/sidebar-menu.styled'

export const SidebarMenu = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  const { Container, Menu } = SidebarMenuStyles

  return (
    <aside className={className}>
      <Container>
        <Menu>{children}</Menu>
      </Container>
    </aside>
  )
}
