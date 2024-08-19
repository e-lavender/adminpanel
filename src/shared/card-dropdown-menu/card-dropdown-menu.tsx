import { ReactNode } from 'react'

import { MENU } from '@/shared/card-dropdown-menu/data'
import { Dropdown } from '@/ui/common/dropdown'
import { MenuItem } from '@/ui/common/menu-item'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const CardDropdownMenu = () => {
  return (
    <>
      <Dropdown>
        {MENU?.map(({ action, icon, label }) => (
          // <MenuItem as={'button'} icon={icon} key={action} label={label} onClick={() => {}} />
          <DropdownMenu.Item key={action}>
            <div>{label}</div>
          </DropdownMenu.Item>
        ))}
      </Dropdown>
    </>
  )
}
