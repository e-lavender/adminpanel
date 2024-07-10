import { PropsWithChildren, useRef } from 'react'

import { useDisclose } from '@/shared/hooks/useDisclose'
import { useOnClickOutside } from '@/shared/hooks/useOutsideClick'
import { DropDownMenuStyled } from '@/ui/common/dropdown-menu/dropdown-menu-container/dropdown-menu-container.styled'

export type MenuProps = PropsWithChildren<{
  menuStyle?: string
}>

export const DropdownMenuContainer = ({ children, menuStyle }: MenuProps) => {
  const { isOpen: isMenuOpen, onClose: closeMenu, onOpen: openMenu } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)
  const { Dots, List, Navigation } = DropDownMenuStyled

  useOnClickOutside(menuRef, closeMenu)

  const clickHandler = () => openMenu()

  return (
    <Navigation>
      <Dots onClick={clickHandler}>
        <p>*</p>
        <p>*</p>
        <p>*</p>
      </Dots>

      <div ref={menuRef}>
        <List>{children}</List>
      </div>
    </Navigation>
  )
}
