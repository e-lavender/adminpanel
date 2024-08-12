import { ReactNode } from 'react'

import { Dots } from '@/app/assets/svg/dots-icon'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { DropdownStyles } from '@/ui/common/dropdown/dropdown.styled'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type ToolbarProps = {
  children: ReactNode
}

export const Dropdown = ({ children }: ToolbarProps) => {
  const { DotsButton, List, Navigation } = DropdownStyles
  const { isOpen, onToggle } = useDisclose()

  return (
    <DropdownMenu.Root onOpenChange={onToggle} open={isOpen}>
      <DropdownMenu.Trigger>
        <DotsButton $isActive={isOpen} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Navigation>
          <div className={'list'}>{children}</div>
        </Navigation>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
