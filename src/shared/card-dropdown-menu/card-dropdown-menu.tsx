import { HandlerType } from '@/features/users/ui/users-table'
import { CardDropdownMenuStyled } from '@/shared/card-dropdown-menu/card-dropdown-menu.styled'
import { MENU } from '@/shared/card-dropdown-menu/data'
import { Dropdown } from '@/ui/common/dropdown'
import { Typography } from '@flyingtornado06/ui-kit'

export const CardDropdownMenu = ({
  handler,
  userId,
}: {
  handler: ({ action, userId }: HandlerType) => void
  userId: number
}) => {
  const { DropDownMenuItem } = CardDropdownMenuStyled

  return (
    <Dropdown>
      {MENU?.map(({ action, icon, label }) => (
        <DropDownMenuItem key={action} onClick={() => handler({ action, userId })}>
          {icon}
          <Typography variant={'regular-14'}>{label}</Typography>
        </DropDownMenuItem>
      ))}
    </Dropdown>
  )
}
