import { PropsWithChildren } from 'react'
import { HeaderLayout } from '@/ui/templates/layouts/header-layout'
import { SidebarMenuWithItems } from '@/ui/common/sidebar-menu-with-items/sidebar-menu-with-items'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({
  children,
  isAuthed = true,
}: PropsWithChildren<SidebarMenuLayoutProps>) => {
  return (
    <>
      <HeaderLayout />

      <div>
        {isAuthed && <SidebarMenuWithItems />}

        <div>{children}</div>
      </div>
    </>
  )
}
