import { DotsIcon } from '@/assets/icons/dots-icon'
import { HomeMenuIcon } from '@flyingtornado06/ui-kit/dist/assets'

export const MENU: DropdownMenuType = [
  {
    action: 'delete',
    icon: undefined,
    label: 'Delete User',
  },
  {
    action: 'ban',
    icon: undefined,
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
  copy: 'copy',
  delete: 'delete',
  edit: 'edit',
  follow: 'follow',
  report: 'report',
  unfollow: 'unfollow',
  ban: 'ban',
  info: 'info',
} as const

export type SVGIconType = typeof HomeMenuIcon
