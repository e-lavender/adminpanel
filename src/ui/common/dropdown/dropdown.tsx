import { ReactNode } from 'react'

import { Dots } from '@/app/assets/svg/dots-icon'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { DropdownStyles } from '@/ui/common/dropdown/dropdown.styled'
import { useDisclose } from '@/shared/hooks/useDisclose'

export type ToolbarProps = {
  children: ReactNode
}

export const Dropdown = ({ children }: ToolbarProps) => {
  const { Navigation, List, DotsButton } = DropdownStyles
  const { isOpen: isMenuOpen, onClose: closeMenu, onOpen: openMenu } = useDisclose()
  const clickHandler = () => openMenu()
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>
          <DotsButton $isActive={isMenuOpen} onClick={clickHandler} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Navigation>
          <div className="list">{children}</div>
        </Navigation>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
