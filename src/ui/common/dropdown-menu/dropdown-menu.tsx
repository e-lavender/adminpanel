import { PropsWithChildren } from 'react'

import { DropdownMenuContainer, MenuProps } from '@/ui/common/dropdown-menu/dropdown-menu-container'

export const DropdownMenu = ({ children, ...restProps }: PropsWithChildren<MenuProps>) => {
  return <DropdownMenuContainer {...restProps}>{children}</DropdownMenuContainer>
}
