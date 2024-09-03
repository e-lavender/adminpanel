import { HandlerType } from '@/features/users/ui/users-table'
import { Maybe, UserBan } from '@/shared/appolo-client/Schema.types'
import { CardDropdownMenuStyled } from '@/shared/card-dropdown-menu/card-dropdown-menu.styled'
import { MENU } from '@/shared/card-dropdown-menu/data'
import { Dropdown } from '@/ui/common/dropdown'
import { Typography } from '@flyingtornado06/ui-kit'

export const CardDropdownMenu = ({
  openModalHandler,
  userBan,
  userId,
  userName,
}: {
  openModalHandler: ({ action, userId }: HandlerType) => void
  userBan: Maybe<UserBan> | undefined
  userId: number
  userName: string
}) => {
  const { DropDownMenuItem } = CardDropdownMenuStyled

  return (
    <Dropdown>
      {MENU?.filter(item => {
        return item.action !== (userBan ? 'ban' : 'unban')
      }).map(({ action, icon, label }) => (
        <DropDownMenuItem
          key={action}
          onClick={() => openModalHandler({ action, userId, userName })}
        >
          {icon}
          <Typography variant={'regular-14'}>{label}</Typography>
        </DropDownMenuItem>
      ))}
    </Dropdown>
  )
}
