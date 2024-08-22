import { ReactNode } from 'react'

import { useDisclose } from '@/shared/hooks/useDisclose'
import { DropdownStyles } from '@/ui/common/dropdown/dropdown.styled'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type ToolbarProps = {
  children: ReactNode
}

export const Dropdown = ({ children }: ToolbarProps) => {
  const { Content, DotsButton } = DropdownStyles
  const { isOpen, onToggle } = useDisclose()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <DotsButton $isActive={isOpen} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <Content>{children}</Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
