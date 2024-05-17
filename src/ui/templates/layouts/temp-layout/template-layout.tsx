import { PropsWithChildren } from 'react'

import { SidebarMenuLayout } from '@/ui/templates/layouts/sidebar-menu-layout/sidebar-menu-layout'

export const WithHomePageLayout = ({ children }: PropsWithChildren) => {
  // const { data: token } = useGetMeQuery()

  // const isAuthed = Boolean(token)

  return <SidebarMenuLayout /*isAuthed={isAuthed}*/>{children}</SidebarMenuLayout>
}
