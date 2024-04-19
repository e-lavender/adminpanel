import { PropsWithChildren } from 'react'

type SidebarMenuLayoutProps = {
  isAuthed?: boolean
}

export const SidebarMenuLayout = ({
  children,
  isAuthed = false,
}: PropsWithChildren<SidebarMenuLayoutProps>) => {
  return (
    <>
      <HeaderLayout />

      <div>
        {/*{isAuthed && <SidebarMenuWithItems />}*/}

        <div>{children}</div>
      </div>
    </>
  )
}
