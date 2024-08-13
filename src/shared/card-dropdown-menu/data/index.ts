import { BanUser } from '@/app/assets/svg/ban-user-icon'
import { DeleteUser } from '@/app/assets/svg/delete-user-icon'
import { DotsIcon } from '@/assets/icons/dots-icon'
import { HomeMenuIcon } from '@flyingtornado06/ui-kit/dist/assets'

export const MENU: DropdownMenuType = [
  {
    action: 'delete',
    icon: DeleteUser,
    label: 'Delete User',
  },
  {
    action: 'ban',
    icon: BanUser,
    label: 'Ban in the system',
  },
  {
    action: 'info',
    icon: DotsIcon,
    label: 'More Information',
  },
]

export type DropdownMenuItemType = {
  action: keyof typeof ActionTypes
  icon: SVGIconType | undefined
  label: string
}
export type DropdownMenuType = Array<DropdownMenuItemType>

export const ActionTypes = {
  ban: 'ban',
  copy: 'copy',
  delete: 'delete',
  edit: 'edit',
  follow: 'follow',
  info: 'info',
  report: 'report',
  unfollow: 'unfollow',
} as const

export type SVGIconType = typeof HomeMenuIcon
