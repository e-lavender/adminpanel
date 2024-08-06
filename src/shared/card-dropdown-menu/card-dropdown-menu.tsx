import { ConfirmationModal } from '@/shared/card-dropdown-menu/confirmation-modal'
import { DropdownMenuType, MENU } from '@/shared/card-dropdown-menu/data'
import { useDisclose } from '@/shared/hooks/useDisclose'
import { DropdownMenu } from '@/ui/common/dropdown-menu'
import { MenuItem } from '@/ui/common/menu-item'

import { Dropdown } from '../../ui/common/dropdown'

export const CardDropdownMenu = () => {
  return (
    <>
      {/* <DropdownMenu>
        {MENU?.map(({ action, icon, label }) => (
          <MenuItem as={'button'} icon={icon} key={action} label={label} onClick={() => {}} />
        ))}
      </DropdownMenu>*/}

      <Dropdown>
        {MENU?.map(({ action, icon, label }) => (
          <MenuItem as={'button'} icon={icon} key={action} label={label} onClick={() => {}} />
        ))}
      </Dropdown>
    </>
  )
}
