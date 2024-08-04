import { Dots } from '@/app/assets/svg/dots-icon'
import { MENU } from '@/shared/card-dropdown-menu/data'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const DropdownMenuRadix = () => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button>
        <Dots />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content>
        {MENU?.map(({ action, icon, label }) => (
          <DropdownMenu.Item
            as={'button'}
            icon={icon}
            key={action}
            label={label}
            onClick={() => {}}
          />
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
)
