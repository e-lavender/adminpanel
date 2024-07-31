import { PropsWithChildren, useRef } from 'react'

import { useDisclose } from '@/shared/hooks/useDisclose'
import { useOnClickOutside } from '@/shared/hooks/useOutsideClick'
import { DropDownMenuStyled } from '@/ui/common/dropdown-menu/dropdown-menu-container/dropdown-menu-container.styled'
import clsx from 'clsx'

import s from './dropdown-menu-container.module.scss'

export type MenuProps = PropsWithChildren<{
  menuStyle?: string
}>

export const DropdownMenuContainer = ({ children, menuStyle }: MenuProps) => {
  const { isOpen: isMenuOpen, onClose: closeMenu, onOpen: openMenu } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)
  const { Dots, List, Navigation } = DropDownMenuStyled

  useOnClickOutside(menuRef, closeMenu)

  const clickHandler = () => openMenu()
  const styles = {
    //dot: clsx(s.dot, isMenuOpen && s.active),
    list: clsx(isMenuOpen && s.active, menuStyle),
    menu: clsx(s.list, isMenuOpen && s.fade),
  }

  return (
    <Navigation>
      <Dots onClick={clickHandler} $isActive={isMenuOpen}>
        <p></p>
        <p></p>
        <p></p>
      </Dots>

      <div {/*className={styles.menu}*/} ref={menuRef}>
        <List>{children}</List>
      </div>
    </Navigation>
  )
}
//   return (
//     <Navigation>
//       <Dots onClick={clickHandler}>
//         <p></p>
//         <p></p>
//         <p></p>
//       </Dots>
//
//       <div ref={menuRef}>
//         <List>{children}</List>
//       </div>
//     </Navigation>
//   )
// }
