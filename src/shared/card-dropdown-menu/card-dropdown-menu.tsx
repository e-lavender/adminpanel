import { MENU } from '@/shared/card-dropdown-menu/data'
import { Dropdown } from '@/ui/common/dropdown'
import { MenuItem } from '@/ui/common/menu-item'

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
