import { PropsWithChildren } from 'react'

export const WithHomePageLayout = ({ children }: PropsWithChildren) => {
  const { data: token } = useGetMeQuery()

  const isAuthed = Boolean(token)

  return <SidebarMenuLayout isAuthed={isAuthed}>{children}</SidebarMenuLayout>
}
