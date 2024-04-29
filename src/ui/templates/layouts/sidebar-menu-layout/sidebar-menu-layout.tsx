import { PropsWithChildren } from 'react'
import { SidebarMenu } from '@/ui/common/sidebar-menu'
import { HeaderLayout } from '@/ui/templates/layouts/header-layout'

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
        {isAuthed && <SidebarMenu />}

        <div>{children}</div>
      </div>
    </>
  )
}
