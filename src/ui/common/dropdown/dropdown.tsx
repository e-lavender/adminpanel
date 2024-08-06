import { ReactNode } from 'react'

import { Dots } from '@/app/assets/svg/dots-icon'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export type ToolbarProps = {
  children: ReactNode
}

export const Dropdown = ({ children }: ToolbarProps) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button>
        <Dots />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        <div>{children}</div>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
